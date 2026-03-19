#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Callable


ROOT = Path(__file__).resolve().parents[1]
APP_JS = ROOT / "app.js"
OUTPUT = ROOT / "data" / "official-sync.json"
SOURCE_URL = "https://www.broadway.org/shows"

MONTHS = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12",
}

NYC_HINTS = {
    "The Balusters": {"id": "the-balusters", "type": "Plays"},
    "Beaches, A New Musical": {"id": "beaches-a-new-musical", "type": "Musicals"},
    "Becky Shaw": {"id": "becky-shaw", "type": "Plays"},
    "CATS: The Jellicle Ball": {"id": "cats-jellicle-ball", "type": "Musicals", "rushPrice": "$45 rush", "lotteryPrice": "$49 digital lottery"},
    "Fallen Angels": {"id": "fallen-angels", "type": "Plays"},
    "The Fear of 13": {"id": "fear-of-13", "type": "Plays", "rushPrice": "$45 rush", "lotteryPrice": "$45 digital lottery"},
    "Joe Turner's Come and Gone": {"id": "joe-turners-come-and-gone", "type": "Plays"},
    "The Lost Boys": {"id": "the-lost-boys", "type": "Musicals"},
    "Proof": {"id": "proof", "type": "Plays"},
    "The Rocky Horror Show": {"id": "rocky-horror-show", "type": "Musicals"},
    "Schmigadoon!": {"id": "schmigadoon", "type": "Musicals"},
    "Titanique": {"id": "titanique", "type": "Musicals"},
}

LA_SEED_UPSERTS = [
    {
        "id": "la-kims-convenience",
        "title": "Kim's Convenience",
        "openingDate": "2026-03-21",
        "endDate": "2026-04-19",
    },
    {
        "id": "la-spamalot",
        "title": "Spamalot",
        "openingDate": "2026-03-24",
        "endDate": "2026-04-12",
    },
    {
        "id": "la-tina",
        "title": "TINA - The Tina Turner Musical",
        "openingDate": "2026-04-14",
        "endDate": "2026-04-19",
    },
    {
        "id": "la-mj",
        "title": "MJ",
        "openingDate": "2026-04-21",
        "endDate": "2026-05-03",
    },
    {
        "id": "la-sound-of-music",
        "title": "The Sound of Music",
        "openingDate": "2026-05-05",
        "endDate": "2026-05-24",
    },
    {
        "id": "la-hells-kitchen",
        "title": "Hell's Kitchen",
        "openingDate": "2026-05-26",
        "endDate": "2026-06-21",
    },
    {
        "id": "la-mamma-mia",
        "title": "Mamma Mia!",
        "openingDate": "2026-06-23",
        "endDate": "2026-07-19",
    },
    {
        "id": "la-phantom",
        "title": "The Phantom of the Opera",
        "openingDate": "2026-06-24",
        "endDate": "2026-08-09",
    },
]

LA_BIH_SHOWS = [
    {
        "id": "la-beetlejuice",
        "url": "https://www.broadwayinhollywood.com/events/detail/beetlejuice-1",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "Beetlejuice",
    },
    {
        "id": "la-spamalot",
        "url": "https://www.broadwayinhollywood.com/events/detail/spamalot",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "Spamalot",
    },
    {
        "id": "la-tina",
        "url": "https://www.broadwayinhollywood.com/events/detail/tina",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "TINA - The Tina Turner Musical",
    },
    {
        "id": "la-mj",
        "url": "https://www.broadwayinhollywood.com/events/detail/mj-1",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "MJ",
    },
    {
        "id": "la-sound-of-music",
        "url": "https://www.broadwayinhollywood.com/events/detail/sound-of-music",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "The Sound of Music",
    },
    {
        "id": "la-hells-kitchen",
        "url": "https://www.broadwayinhollywood.com/events/detail/hells-kitchen",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "Hell's Kitchen",
    },
    {
        "id": "la-phantom",
        "url": "https://www.broadwayinhollywood.com/events/detail/phantom",
        "type": "Musicals",
        "scene": "Broadway in Hollywood",
        "venue": "Pantages Theatre",
        "address": "6233 Hollywood Boulevard, Los Angeles",
        "fallback_title": "The Phantom of the Opera",
    },
]

LA_PASADENA_SHOWS = [
    {
        "id": "la-song-of-the-north",
        "url": "https://my.pasadenaplayhouse.org/3710/3744",
        "type": "Plays",
        "scene": "Pasadena / local venues",
        "venue": "Pasadena Playhouse",
        "address": "39 South El Molino Avenue, Pasadena",
        "fallback_title": "Song of the North",
    },
    {
        "id": "la-brigadoon",
        "url": "https://my.pasadenaplayhouse.org/3749/3751",
        "type": "Musicals",
        "scene": "Pasadena / local venues",
        "venue": "Pasadena Playhouse",
        "address": "39 South El Molino Avenue, Pasadena",
        "fallback_title": "Brigadoon",
    },
    {
        "id": "la-mexodus-pasadena",
        "url": "https://my.pasadenaplayhouse.org/3752/3754",
        "type": "Musicals",
        "scene": "Pasadena / local venues",
        "venue": "Pasadena Playhouse",
        "address": "39 South El Molino Avenue, Pasadena",
        "fallback_title": "Mexodus",
    },
]

GEFFEN_SOURCE_URL = "https://www.geffenplayhouse.org/press-releases/geffen-playhouse-announces-seven-productions-for-2025-2026-season-lineup-featuring-three-world-premieres/"
CTG_SOURCE_URL = "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf"


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        text = data.strip()
        if text:
            self.parts.append(text)


@dataclass
class ShowRecord:
    title: str
    venue: str | None = None
    opening_date: str | None = None
    end_date: str | None = None
    rush_price: str | None = None
    lottery_price: str | None = None
    regular_price: float | None = None
    runtime: str | None = None
    age_guidance: str | None = None


def normalize_key(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower().replace("&", "and")).strip("-")


def parse_date(token: str) -> str | None:
    match = re.search(r"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2}),\s+(\d{4})", token)
    if not match:
        return None
    month, day, year = match.groups()
    return f"{year}-{MONTHS[month]}-{int(day):02d}"


def fetch_text(url: str) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        html = response.read().decode("utf-8", errors="ignore")
    parser = TextExtractor()
    parser.feed(html)
    return "\n".join(parser.parts)


def extract_price(text: str) -> float | None:
    patterns = [
        r"Tickets start at \$([0-9]+(?:\.[0-9]{2})?)",
        r"starting at \$([0-9]+(?:\.[0-9]{2})?)",
        r"starts at \$([0-9]+(?:\.[0-9]{2})?)",
        r"from \$([0-9]+(?:\.[0-9]{2})?)",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.I)
        if match:
            return float(match.group(1))
    return None


def extract_runtime(text: str) -> str | None:
    match = re.search(r"([0-9]+\s+hours?(?:\s+[0-9]+\s+minutes?)?(?:,?\s+including.*?|,?\s+with.*?|))", text, re.I)
    if match:
        return match.group(1).strip().rstrip(".")
    return None


def extract_age_guidance(text: str) -> str | None:
    patterns = [
        r"(Recommended for ages [^\.\n]+)",
        r"(Ages [^\.\n]+)",
        r"(Children under [^\.\n]+)",
        r"(Must be [^\.\n]+ to enter)",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, re.I)
        if match:
            return match.group(1).strip().rstrip(".")
    return None


def extract_date_range(text: str) -> tuple[str | None, str | None]:
    begins = re.search(r"(Begins|Start(?:s)?|From|Previews begin):?\s*([A-Z][a-z]{2,8}\s+\d{1,2},\s+\d{4})", text, re.I)
    through = re.search(r"(Through|End(?:s)?|To):?\s*([A-Z][a-z]{2,8}\s+\d{1,2},\s+\d{4})", text, re.I)
    opening = parse_date(begins.group(2)) if begins else None
    ending = parse_date(through.group(2)) if through else None
    return opening, ending


def build_la_page_upsert(config: dict, text: str) -> dict:
    opening_date, end_date = extract_date_range(text)
    title_match = re.search(rf"{re.escape(config['fallback_title'])}", text, re.I)
    title = title_match.group(0) if title_match else config["fallback_title"]
    return {
        "id": config["id"],
        "title": title,
        "type": config["type"],
        "scene": config["scene"],
        "venue": config["venue"],
        "address": config["address"],
        "openingDate": opening_date,
        "endDate": end_date,
        "regularPrice": extract_price(text),
        "runtime": extract_runtime(text),
        "ageGuidance": extract_age_guidance(text),
        "officialSite": config["url"],
        "buyLink": config["url"],
        "officialSiteLabel": "Official event page",
        "sources": [config["scene"].split(" / ")[0]],
    }


def extract_existing_titles() -> set[str]:
    text = APP_JS.read_text()
    return {match.group(1) for match in re.finditer(r'title:\s*"([^"]+)"', text)}


def parse_all_nyc_titles(text: str) -> list[str]:
    match = re.search(r"All NYC Shows(.*?)All Touring Shows", text, re.S)
    if not match:
      return []
    block = match.group(1)
    titles = [line.strip() for line in block.splitlines() if line.strip()]
    return [title for title in titles if not title.startswith("All ")]


def find_detail_block(text: str, title: str) -> ShowRecord:
    positions = [m.start() for m in re.finditer(re.escape(title), text)]
    for start in reversed(positions):
        snippet = text[start:start + 900]
        if "Theatre" not in snippet and "Studio 54" not in snippet:
            continue

        venue_match = re.search(rf"{re.escape(title)}\s+([^\n]+(?:Theatre|Studio 54))", snippet)
        begins_match = re.search(r"Begins:\s*([A-Z][a-z]{2}\s+\d{1,2},\s+\d{4})", snippet)
        through_match = re.search(r"Through:\s*([A-Z][a-z]{2}\s+\d{1,2},\s+\d{4})", snippet)
        rush_match = re.search(r"\$[0-9][^\n]*rush", snippet, re.I)
        lottery_match = re.search(r"\$[0-9][^\n]*lottery", snippet, re.I)

        return ShowRecord(
            title=title,
            venue=venue_match.group(1).strip() if venue_match else None,
            opening_date=parse_date(begins_match.group(1)) if begins_match else None,
            end_date=parse_date(through_match.group(1)) if through_match else None,
            rush_price=rush_match.group(0).strip() if rush_match else None,
            lottery_price=lottery_match.group(0).strip() if lottery_match else None,
        )

    return ShowRecord(title=title)


def build_nyc_sync() -> dict:
    try:
        text = fetch_text(SOURCE_URL)
    except Exception:
        return {
            "upserts": [],
            "audit": {
                "source": "Broadway.org",
                "sourceTitles": [],
                "missingFromSite": [],
                "error": "Fetch failed in this environment",
            },
        }
    titles = parse_all_nyc_titles(text)
    existing = extract_existing_titles()
    records = [find_detail_block(text, title) for title in titles]

    upserts = []
    missing = []

    for record in records:
        hint = NYC_HINTS.get(record.title)
        normalized = normalize_key(record.title)
        in_site = record.title in existing or normalized in {normalize_key(title) for title in existing}

        if not in_site and not hint:
            missing.append(record.title)
            continue

        if hint:
            upsert = {
                "id": hint["id"],
                "title": record.title,
                "type": hint["type"],
                "scene": "Broadway",
                "venue": record.venue or "Broadway venue",
                "address": "Manhattan",
                "openingDate": record.opening_date or "2026-03-18",
                "endDate": record.end_date,
                "regularPrice": None,
                "rushPrice": hint.get("rushPrice") or record.rush_price,
                "lotteryPrice": hint.get("lotteryPrice") or record.lottery_price,
                "standingPrice": None,
                "runtime": "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
                "ageGuidance": "No stable official age guidance surfaced in the official Broadway.org listing used here.",
                "officialSiteLabel": "Broadway.org listing",
                "officialSite": SOURCE_URL,
                "buyLink": SOURCE_URL,
                "description": f"Auto-synced from Broadway.org for {record.venue or 'a Broadway venue'}.",
                "customerRating": None,
                "popularityScore": 7.8,
                "popularityReason": "Auto-synced from Broadway.org's official Broadway in NYC list.",
                "sources": ["Broadway.org"],
            }
            upserts.append(upsert)
        else:
            upserts.append(
                {
                    "title": record.title,
                    "venue": record.venue,
                    "openingDate": record.opening_date,
                    "endDate": record.end_date,
                    "rushPrice": record.rush_price,
                    "lotteryPrice": record.lottery_price,
                }
            )

    return {
        "upserts": upserts,
        "audit": {
            "source": "Broadway.org",
            "sourceTitles": titles,
            "missingFromSite": missing,
        },
    }


def build_la_sync() -> dict:
    upserts = []
    source_titles: list[str] = []

    for config in LA_BIH_SHOWS + LA_PASADENA_SHOWS:
        try:
            text = fetch_text(config["url"])
        except Exception:
            continue
        upsert = build_la_page_upsert(config, text)
        upserts.append(upsert)
        source_titles.append(upsert["title"])

    geffen_titles = [
        "Dragon Mama",
        "\"Master Harold\"...and the Boys",
    ]
    ctg_titles = [
        "Here Lies Love",
        "Kim's Convenience",
        "Primary Trust",
        "Mamma Mia!",
    ]

    source_titles.extend(geffen_titles)
    source_titles.extend(ctg_titles)

    upserts.extend(LA_SEED_UPSERTS)

    return {
        "upserts": upserts,
        "audit": {
            "source": "Broadway in Hollywood + Pasadena Playhouse + Geffen + CTG",
            "sourceTitles": source_titles,
            "missingFromSite": [],
            "sources": {
                "broadwayInHollywood": [item["url"] for item in LA_BIH_SHOWS],
                "pasadenaPlayhouse": [item["url"] for item in LA_PASADENA_SHOWS],
                "geffen": GEFFEN_SOURCE_URL,
                "ctg": CTG_SOURCE_URL,
            },
            "warning": "Some LA sources may be unavailable in the current execution environment.",
        },
    }


def build_payload() -> dict:
    return {
        "generatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "cities": {
            "nyc": build_nyc_sync(),
            "la": build_la_sync(),
        },
    }


def main() -> None:
    payload = build_payload()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n")


if __name__ == "__main__":
    main()
