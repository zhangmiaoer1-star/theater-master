const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) return;

    const key = trimmed.slice(0, separatorIndex).trim();
    if (!key || process.env[key]) return;

    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
}

loadEnvFile(path.join(__dirname, ".env"));

const host = "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const root = __dirname;
const openAiApiKey = process.env.OPENAI_API_KEY || "";
const openAiModel = process.env.OPENAI_MODEL || "gpt-5.2";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function safePathname(urlPathname) {
  const pathname = urlPathname === "/" ? "/index.html" : urlPathname;
  const resolved = path.normalize(path.join(root, pathname));
  if (!resolved.startsWith(root)) {
    return null;
  }
  return resolved;
}

function extractOutputText(data) {
  if (typeof data.output_text === "string" && data.output_text) {
    return data.output_text;
  }

  return (
    data.output
      ?.flatMap((item) => item.content || [])
      .map((item) => item.text || "")
      .join("\n") || ""
  );
}

async function handleAssistant(request, response) {
  if (!openAiApiKey) {
    sendJson(response, 503, {
      error: "OPENAI_API_KEY is not configured on the server."
    });
    return;
  }

  let payload;

  try {
    payload = JSON.parse(await readBody(request));
  } catch (error) {
    sendJson(response, 400, { error: "Invalid JSON body." });
    return;
  }

  if (!payload || typeof payload.prompt !== "string" || !payload.prompt.trim()) {
    sendJson(response, 400, { error: "Missing prompt." });
    return;
  }

  try {
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({
        model: openAiModel,
        input: payload.prompt
      })
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      sendJson(response, upstream.status, {
        error: data.error?.message || "OpenAI request failed."
      });
      return;
    }

    sendJson(response, 200, {
      output_text: extractOutputText(data)
    });
  } catch (error) {
    sendJson(response, 502, {
      error: "Failed to reach OpenAI from the server."
    });
  }
}

function handleStatic(request, response, parsedUrl) {
  const filePath = safePathname(parsedUrl.pathname);

  if (!filePath) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  fs.readFile(filePath, (error, file) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendJson(response, 404, { error: "Not found" });
        return;
      }

      sendJson(response, 500, { error: "Failed to read file" });
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(file);
  });
}

const server = http.createServer(async (request, response) => {
  const parsedUrl = new URL(request.url, `http://${request.headers.host || `${host}:${port}`}`);

  if (request.method === "GET" && parsedUrl.pathname === "/api/assistant/status") {
    sendJson(response, 200, {
      ready: Boolean(openAiApiKey),
      model: openAiModel
    });
    return;
  }

  if (request.method === "POST" && parsedUrl.pathname === "/api/assistant") {
    await handleAssistant(request, response);
    return;
  }

  if (request.method === "GET" || request.method === "HEAD") {
    handleStatic(request, response, parsedUrl);
    return;
  }

  sendJson(response, 405, { error: "Method not allowed" });
});

server.listen(port, host, () => {
  console.log(`Theater Master running at http://${host}:${port}`);
  console.log(openAiApiKey ? `OpenAI server mode enabled with ${openAiModel}` : "OpenAI server mode is not configured.");
});
