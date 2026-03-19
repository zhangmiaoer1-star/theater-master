const nycShows = [
  {
    id: "hamilton",
    title: "Hamilton",
    type: "Musicals",
    scene: "Broadway",
    venue: "Richard Rodgers Theatre",
    address: "226 West 46th Street, Manhattan",
    openingDate: "2015-08-06",
    description: "A defining Broadway blockbuster with sustained audience demand and cultural reach.",
    regularPrice: 126.72,
    rushPrice: null,
    lotteryPrice: "$10 digital lottery",
    standingPrice: null,
    runtime: "2 hours 45 minutes, including one intermission",
    ageGuidance: "Recommended for ages 10 and up; children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://hamiltonmusical.com/new-york/",
    buyLink: "https://www.broadway.com/shows/hamilton-broadway/",
    posterUrl: "https://assets.playbill.com/playbill-covers/Hamilton-Playbill-2025-07-01_Web.jpg",
    customerRating: 4.8,
    popularityScore: 9.8,
    popularityReason:
      "High score driven by a 4.8/5 Broadway.com customer rating, long-run commercial demand, and enduring mainstream visibility.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "wicked",
    title: "Wicked",
    type: "Musicals",
    scene: "Broadway",
    venue: "Gershwin Theatre",
    address: "222 West 51st Street, Manhattan",
    openingDate: "2003-10-30",
    description: "A polished and highly reliable first-Broadway pick with broad family appeal.",
    regularPrice: 111.68,
    rushPrice: null,
    lotteryPrice: "$30 in-person lottery / $64 digital lottery",
    standingPrice: null,
    runtime: "2 hours 45 minutes, including one intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://wickedthemusical.com/",
    buyLink: "https://www.broadway.com/shows/wicked/",
    posterUrl: "https://assets.playbill.com/playbill-covers/Wicked-Playbill-2023-10-30_Web.jpg",
    customerRating: 4.8,
    popularityScore: 9.7,
    popularityReason:
      "Based on a 4.8/5 Broadway.com customer score, multi-decade longevity, and strong family/tourist demand.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "lion-king",
    title: "The Lion King",
    type: "Musicals",
    scene: "Broadway",
    venue: "Minskoff Theatre",
    address: "200 West 45th Street, Manhattan",
    openingDate: "1997-11-13",
    description: "One of the most durable and visually famous Broadway family shows.",
    regularPrice: 111.36,
    rushPrice: null,
    lotteryPrice: "$35 digital lottery",
    standingPrice: null,
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Intended for ages 6 and up; all guests must have a ticket.",
    officialSiteLabel: "Official production site",
    officialSite: "https://lionking.com/",
    buyLink: "https://www.broadway.com/shows/the-lion-king/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/135756-5.jpg",
    customerRating: 4.8,
    popularityScore: 9.7,
    popularityReason:
      "High score supported by a 4.8/5 Broadway.com rating and exceptional long-term family demand.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "hadestown",
    title: "Hadestown",
    type: "Musicals",
    scene: "Broadway",
    venue: "Walter Kerr Theatre",
    address: "219 West 48th Street, Manhattan",
    openingDate: "2019-04-17",
    description: "A critically loved Broadway favorite with a more intimate, atmospheric scale.",
    regularPrice: 67.99,
    rushPrice: null,
    lotteryPrice: "$47.50 digital lottery",
    standingPrice: "$39 standing room",
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://hadestown.com/",
    buyLink: "https://www.broadway.com/shows/hadestown/",
    posterUrl: "https://assets.playbill.com/playbill-covers/Hadestown-Playbill-2024-06-01_Web.jpg",
    customerRating: 4.8,
    popularityScore: 9.3,
    popularityReason:
      "Based on a 4.8/5 Broadway.com customer score and sustained acclaim several years into its run.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "maybe-happy-ending",
    title: "Maybe Happy Ending",
    type: "Musicals",
    scene: "Broadway",
    venue: "Belasco Theatre",
    address: "111 West 44th Street, Manhattan",
    openingDate: "2024-11-12",
    description: "A newer Broadway musical with unusually strong audience warmth and critical momentum.",
    regularPrice: 61.03,
    rushPrice: null,
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "100 minutes, no intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://www.maybehappyending.com/",
    buyLink: "https://www.broadway.com/shows/maybe-happy-ending/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/139195-3.jpg",
    customerRating: 4.8,
    popularityScore: 9.1,
    popularityReason:
      "Strong newer-title score based on a 4.8/5 Broadway.com customer rating and strong word of mouth.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "death-becomes-her",
    title: "Death Becomes Her",
    type: "Musicals",
    scene: "Broadway",
    venue: "Lunt-Fontanne Theatre",
    address: "205 West 46th Street, Manhattan",
    openingDate: "2024-11-21",
    description: "A newer comedy spectacle with strong audience response and easy mainstream appeal.",
    regularPrice: 63.74,
    rushPrice: "$40 rush",
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "2 hours 30 minutes, with one intermission",
    ageGuidance: "Recommended for ages 12 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://deathbecomesher.com/",
    buyLink: "https://www.broadway.com/shows/death-becomes-her/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/138691-3.jpg",
    customerRating: 4.7,
    popularityScore: 8.7,
    popularityReason:
      "Audience score and new-show attention keep it above average, though it has less longevity than the big legacy hits.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "just-in-time",
    title: "Just In Time",
    type: "Musicals",
    scene: "Broadway",
    venue: "Circle in the Square Theatre",
    address: "235 West 50th Street, Manhattan",
    openingDate: "2025-04-26",
    description: "A newer Broadway musical with star-driven attention and a strong audience reaction.",
    regularPrice: 107.69,
    rushPrice: "$40 rush",
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 15 minutes, with one intermission",
    ageGuidance: "Recommended for ages 10 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://www.justintimebroadway.com/",
    buyLink: "https://www.broadway.com/shows/just-in-time/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/132458-3.jpg",
    customerRating: 4.9,
    popularityScore: 9.2,
    popularityReason:
      "High score driven by a 4.9/5 Broadway.com customer rating and unusually strong star-and-buzz momentum.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "operation-mincemeat",
    title: "Operation Mincemeat: A New Musical",
    type: "Musicals",
    scene: "Broadway",
    venue: "John Golden Theatre",
    address: "252 West 45th Street, Manhattan",
    openingDate: "2025-03-20",
    description: "A newer British import with a clear comic identity and excellent audience enthusiasm.",
    regularPrice: 65.37,
    rushPrice: "$49 rush",
    lotteryPrice: "$39 digital lottery",
    standingPrice: null,
    runtime: "2 hours 35 minutes, including one 20-minute intermission",
    ageGuidance: "Recommended for ages 5 and up; children under 4 are not admitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://operationbroadway.com/",
    buyLink: "https://www.broadway.com/shows/operation-mincemeat/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/132657-3.jpg",
    customerRating: 4.6,
    popularityScore: 8.5,
    popularityReason:
      "Good score from strong recent buzz and positive audience response, though it has less mainstream reach than the top Broadway giants.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "aladdin",
    title: "Aladdin",
    type: "Musicals",
    scene: "Broadway",
    venue: "New Amsterdam Theatre",
    address: "214 West 42nd Street, Manhattan",
    openingDate: "2014-03-20",
    description: "A stable Disney family option that remains easy to recommend for visitors with kids.",
    regularPrice: 76.49,
    rushPrice: null,
    lotteryPrice: "$35 digital lottery",
    standingPrice: null,
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 6 and up; all guests must have a ticket.",
    officialSiteLabel: "Official production site",
    officialSite: "https://aladdinthemusical.com/",
    buyLink: "https://www.broadway.com/shows/aladdin-broadway/",
    posterUrl: "https://assets.playbill.com/playbill-covers/Aladdin-Playbill-2025-06-01_Web.jpg",
    customerRating: 4.8,
    popularityScore: 8.8,
    popularityReason:
      "High family-friendliness and a 4.8/5 Broadway.com rating keep it consistently popular with general audiences.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "juliet",
    title: "& Juliet",
    type: "Musicals",
    scene: "Broadway",
    venue: "Stephen Sondheim Theatre",
    address: "124 West 43rd Street, Manhattan",
    openingDate: "2022-11-17",
    description: "A bright pop musical with strong tourist appeal and an easy, high-energy entry point.",
    regularPrice: 79,
    rushPrice: "$47 digital rush",
    lotteryPrice: null,
    standingPrice: "$45 standing room",
    runtime: "2 hours 40 minutes, with one intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 4 are not admitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://andjulietbroadway.com/",
    buyLink: "https://www.broadway.com/shows/juliet/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/138049-13.jpg",
    customerRating: 4.7,
    popularityScore: 8.7,
    popularityReason:
      "Good score driven by durable audience appeal, familiar pop music, and stable Broadway demand.",
    sources: ["Broadway.com", "NYC.com", "official production site"]
  },
  {
    id: "book-of-mormon",
    title: "The Book of Mormon",
    type: "Musicals",
    scene: "Broadway",
    venue: "Eugene O'Neill Theatre",
    address: "230 West 49th Street, Manhattan",
    openingDate: "2011-03-24",
    description: "A long-running comedy blockbuster that remains one of Broadway's easiest tourist recommendations.",
    regularPrice: 81.86,
    rushPrice: null,
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Children under 4 are not permitted; content is adult-leaning.",
    officialSiteLabel: "Official production site",
    officialSite: "https://bookofmormonbroadway.com/",
    buyLink: "https://www.broadway.com/shows/book-mormon/",
    posterUrl: "https://assets.playbill.com/playbill-covers/The-Book-Of-Mormon-Playbill-2026-01-01_Web.jpg",
    customerRating: 4.5,
    popularityScore: 8.9,
    popularityReason:
      "Long-run brand recognition and strong comedy demand keep it firmly in the upper popularity tier.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "buena-vista-social-club",
    title: "Buena Vista Social Club",
    type: "Musicals",
    scene: "Broadway",
    venue: "Gerald Schoenfeld Theatre",
    address: "236 West 45th Street, Manhattan",
    openingDate: "2025-03-19",
    description: "A music-led Broadway hit with strong critic and audience enthusiasm.",
    regularPrice: 64.29,
    rushPrice: "$45 rush",
    lotteryPrice: "$49 digital lottery",
    standingPrice: null,
    runtime: "2 hours 10 minutes, including one intermission",
    ageGuidance: "Children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://buenavistamusical.com/",
    buyLink: "https://www.broadway.com/shows/buena-vista-social-club/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136504-3.jpg",
    customerRating: 4.8,
    popularityScore: 8.8,
    popularityReason:
      "A 4.8/5 audience rating and strong music-driven word of mouth give it strong current pull.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "chicago",
    title: "Chicago",
    type: "Musicals",
    scene: "Broadway",
    venue: "Ambassador Theatre",
    address: "219 West 49th Street, Manhattan",
    openingDate: "1996-11-14",
    description: "A jazz-age Broadway classic that continues to pull steady long-run demand.",
    regularPrice: 102.8,
    rushPrice: "$49 general rush",
    lotteryPrice: null,
    standingPrice: "$27 standing room",
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "May be inappropriate for children 12 and under; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://chicagothemusical.com/",
    buyLink: "https://www.broadway.com/shows/chicago/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/138719-3.jpg",
    customerRating: 4.5,
    popularityScore: 8.6,
    popularityReason:
      "Its longevity and constant tourist recognition keep it popular even without the newer-hit buzz of top-tier titles.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "chess",
    title: "Chess",
    type: "Musicals",
    scene: "Broadway",
    venue: "Imperial Theatre",
    address: "249 West 45th Street, Manhattan",
    openingDate: "2025-11-05",
    description: "A current Broadway revival with clear official rush and lottery offers on Broadway.org.",
    regularPrice: 64.02,
    rushPrice: "$49 rush",
    lotteryPrice: "$49 digital lottery",
    standingPrice: null,
    runtime: "Approximately 2 hours 30 minutes, including one intermission",
    ageGuidance: "No stable official age guidance surfaced in the primary sources used here.",
    officialSiteLabel: "Broadway listing",
    officialSite: "https://www.broadway.org/shows/chess",
    buyLink: "https://www.broadway.com/shows/chess/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/135981-3.jpg",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "It is clearly current on Broadway.org, with active rush and lottery inventory, but has less broad audience traction than the biggest commercial hits.",
    sources: ["Broadway.org", "Broadway.com"]
  },
  {
    id: "great-gatsby",
    title: "The Great Gatsby",
    type: "Musicals",
    scene: "Broadway",
    venue: "Broadway Theatre",
    address: "1681 Broadway, Manhattan",
    openingDate: "2024-04-25",
    description: "A glossy literary adaptation with broad appeal for audiences who want scale and romance.",
    regularPrice: 64.29,
    rushPrice: "$40 rush / $25 student",
    lotteryPrice: "$45 lottery",
    standingPrice: null,
    runtime: "Approximately 2 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 10 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://broadwaygatsby.com/",
    buyLink: "https://www.broadway.com/shows/the-great-gatsby/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/138760-3.jpg",
    customerRating: 4.7,
    popularityScore: 8.5,
    popularityReason:
      "The recognizable title and steady audience scores make it a dependable mid-tier popular pick.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "mj",
    title: "MJ",
    type: "Musicals",
    scene: "Broadway",
    venue: "Neil Simon Theatre",
    address: "250 West 52nd Street, Manhattan",
    openingDate: "2022-02-01",
    description: "A performance-first musical with major mainstream appeal thanks to the Michael Jackson catalog.",
    regularPrice: 74.59,
    rushPrice: null,
    lotteryPrice: "$40 digital lottery",
    standingPrice: "Standing room when sold out",
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://mjthemusical.com/",
    buyLink: "https://www.broadway.com/shows/mj/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136006-3.jpg",
    customerRating: 4.8,
    popularityScore: 9.0,
    popularityReason:
      "Strong mass-market recognition and a 4.8/5 customer rating keep it near the top of the popularity stack.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "moulin-rouge",
    title: "Moulin Rouge! The Musical",
    type: "Musicals",
    scene: "Broadway",
    venue: "Al Hirschfeld Theatre",
    address: "302 West 45th Street, Manhattan",
    openingDate: "2019-07-25",
    description: "A spectacle-heavy jukebox hit built for audiences who want a flashy Broadway night.",
    regularPrice: 67.99,
    rushPrice: null,
    lotteryPrice: "$47.50 digital lottery",
    standingPrice: null,
    runtime: "2 hours 35 minutes, including one intermission",
    ageGuidance: "Recommended for ages 12 and up; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://moulinrougemusical.com/new-york/",
    buyLink: "https://www.broadway.com/shows/moulin-rouge-musical/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/126327-9.jpg",
    customerRating: 4.8,
    popularityScore: 9.0,
    popularityReason:
      "A strong audience score plus highly visible spectacle-driven branding keeps it among Broadway's top crowd-pleasers.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "ragtime",
    title: "Ragtime",
    type: "Musicals",
    scene: "Broadway",
    venue: "Vivian Beaumont Theater",
    address: "150 West 65th Street, Manhattan",
    openingDate: "2025-11-06",
    description: "A major revival with a broad dramatic canvas and strong critical pull.",
    regularPrice: 107.69,
    rushPrice: null,
    lotteryPrice: "$49 lottery",
    standingPrice: null,
    runtime: "2 hours 55 minutes, with one intermission",
    ageGuidance: "Children under 5 are not permitted.",
    officialSiteLabel: "Official production page",
    officialSite: "https://www.lct.org/shows/ragtime/",
    buyLink: "https://www.broadway.com/shows/ragtime/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136295-3.png",
    customerRating: 4.8,
    popularityScore: 8.8,
    popularityReason:
      "A very strong audience score and prestige-revival profile keep it highly relevant in the current season.",
    sources: ["Broadway.com", "Lincoln Center Theater", "Broadway.org"]
  },
  {
    id: "six",
    title: "SIX: The Musical",
    type: "Musicals",
    scene: "Broadway",
    venue: "Lena Horne Theatre",
    address: "256 West 47th Street, Manhattan",
    openingDate: "2021-10-03",
    description: "A short, loud pop-concert Broadway musical that remains easy to fit into packed trips.",
    regularPrice: 74.87,
    rushPrice: "$40 rush",
    lotteryPrice: "$35 digital lottery",
    standingPrice: null,
    runtime: "80 minutes, no intermission",
    ageGuidance: "Recommended for ages 10 and up; children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://sixthemusical.com/",
    buyLink: "https://www.broadway.com/shows/six/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/134931-3.jpg",
    customerRating: 4.5,
    popularityScore: 8.4,
    popularityReason:
      "Good steady demand and a compact runtime keep it attractive, though its audience score is a bit below the very top tier.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "outsiders",
    title: "The Outsiders",
    type: "Musicals",
    scene: "Broadway",
    venue: "Bernard B. Jacobs Theatre",
    address: "242 West 45th Street, Manhattan",
    openingDate: "2024-04-11",
    description: "A Best Musical winner with strong audience momentum and a younger-skewing fan base.",
    regularPrice: 107.69,
    rushPrice: "$45 rush",
    lotteryPrice: "$49 digital lottery",
    standingPrice: null,
    runtime: "2 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 10 and up; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://outsidersmusical.com/",
    buyLink: "https://www.broadway.com/shows/the-outsiders/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/127494-7.jpg",
    customerRating: 4.7,
    popularityScore: 9.1,
    popularityReason:
      "Its score reflects a 4.7/5 customer rating plus Best Musical visibility and strong current audience demand.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "death-of-a-salesman",
    title: "Death of a Salesman",
    type: "Plays",
    scene: "Broadway",
    venue: "Winter Garden Theatre",
    address: "1634 Broadway, Manhattan",
    openingDate: "2026-03-06",
    description: "A major Broadway revival now in previews, led by Nathan Lane and Laurie Metcalf.",
    regularPrice: 79,
    rushPrice: null,
    lotteryPrice: "$49 digital lottery",
    standingPrice: null,
    runtime: "3 hours with one intermission",
    ageGuidance: "Children under 4 are not permitted; mature dramatic themes.",
    officialSiteLabel: "Official production site",
    officialSite: "https://salesmanbroadway.com/",
    buyLink: "https://salesmanbroadway.com/",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "Current Broadway visibility is high thanks to star casting and major revival prestige, though public audience scoring is not yet stable.",
    sources: ["Broadway.org", "official production site"]
  },
  {
    id: "dog-day-afternoon",
    title: "Dog Day Afternoon",
    type: "Plays",
    scene: "Broadway",
    venue: "August Wilson Theatre",
    address: "245 West 52nd Street, Manhattan",
    openingDate: "2026-03-10",
    description: "A star-led Broadway play now in previews with clearly listed official rush and lottery offers.",
    regularPrice: 75.95,
    rushPrice: "$45 in-person rush / $45 digital rush",
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "Not yet clearly surfaced on primary sources used here",
    ageGuidance: "No stable age guidance surfaced yet on primary sources used here.",
    officialSiteLabel: "Official production site",
    officialSite: "https://dogdayafternoon.com/tickets/",
    buyLink: "https://www.broadway.com/shows/dog-day-afternoon",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "High-profile casting and active preview sales give it strong current visibility despite limited public review history.",
    sources: ["Broadway.com", "Broadway.org", "official production site"]
  },
  {
    id: "every-brilliant-thing",
    title: "Every Brilliant Thing",
    type: "Plays",
    scene: "Broadway",
    venue: "Hudson Theatre",
    address: "141 West 44th Street, Manhattan",
    openingDate: "2026-02-21",
    description: "A limited Broadway engagement with Daniel Radcliffe that is currently running and easy to verify via Broadway.org.",
    regularPrice: 79,
    rushPrice: "$45 rush",
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "85 minutes with no intermission",
    ageGuidance: "Addresses sensitive themes with discretion advised for younger audiences.",
    officialSiteLabel: "Broadway listing",
    officialSite: "https://www.broadway.org/shows/every-brilliant-thing",
    buyLink: "https://www.broadway.org/shows/every-brilliant-thing",
    customerRating: null,
    popularityScore: 8.7,
    popularityReason:
      "A Daniel Radcliffe-led limited run on Broadway creates strong demand even before a stable customer score has surfaced.",
    sources: ["Broadway.org"]
  },
  {
    id: "giant",
    title: "Giant",
    type: "Plays",
    scene: "Broadway",
    venue: "Music Box Theatre",
    address: "239 West 45th Street, Manhattan",
    openingDate: "2026-03-11",
    description: "A prestige Broadway play now in previews with John Lithgow and strong early visibility.",
    regularPrice: 85.99,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 20 minutes with one intermission",
    ageGuidance: "Recommended for ages 12 and up.",
    officialSiteLabel: "Broadway listing",
    officialSite: "https://www.broadway.org/shows/giant",
    buyLink: "https://www.broadway.com/shows/giant/",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "Strong prestige and star-driven attention, though current audience-scoring signals are still limited during previews.",
    sources: ["Broadway.com", "Broadway.org"]
  },
  {
    id: "harry-potter",
    title: "Harry Potter and the Cursed Child",
    type: "Plays",
    scene: "Broadway",
    venue: "Lyric Theatre",
    address: "214 West 43rd Street, Manhattan",
    openingDate: "2018-04-22",
    description: "A large-scale franchise play that remains one of Broadway's biggest spectacle-driven non-musical draws.",
    regularPrice: 89,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 3 hours 30 minutes, including one intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://broadway.harrypottertheplay.com/",
    buyLink: "https://broadway.harrypottertheplay.com/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/126906-3.jpg",
    customerRating: null,
    popularityScore: 8.9,
    popularityReason:
      "Franchise awareness, long-running Broadway visibility, and effects-driven appeal make it one of the strongest current Broadway plays for tourists.",
    sources: ["official production site", "AP", "Broadway.org"]
  },
  {
    id: "two-strangers",
    title: "Two Strangers (Carry a Cake Across New York)",
    type: "Musicals",
    scene: "Broadway",
    venue: "Longacre Theatre",
    address: "220 West 48th Street, Manhattan",
    openingDate: "2025-11-20",
    description: "A current Broadway musical comedy that Broadway.org lists with active rush and lottery offers.",
    regularPrice: 63.2,
    rushPrice: "$42 rush",
    lotteryPrice: "$48 digital lottery",
    standingPrice: null,
    runtime: "2 hours 15 minutes, including one intermission",
    ageGuidance: "Recommended for ages 12 and up.",
    officialSiteLabel: "Broadway listing",
    officialSite: "https://www.broadway.org/shows/two-strangers-carry-a-cake-across-new-york",
    buyLink: "https://www.broadway.com/shows/two-strangers-carry-a-cake-across-new-york/",
    customerRating: 4.8,
    popularityScore: 8.6,
    popularityReason:
      "A very strong audience score and current Broadway.org listing make it a high-quality current Broadway option, though with less mainstream visibility than the largest hits.",
    sources: ["Broadway.org", "Broadway.com"]
  },
  {
    id: "oh-mary",
    title: "Oh, Mary!",
    type: "Plays",
    scene: "Broadway",
    venue: "Lyceum Theatre",
    address: "149 West 45th Street, Manhattan",
    openingDate: "2024-07-11",
    description: "A critically acclaimed Broadway comedy that has become one of the highest-profile plays in New York.",
    regularPrice: 65.37,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "80 minutes, with no intermission",
    ageGuidance: "Recommended for ages 14 and up; children under 4 are not admitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://www.ohmaryplay.com/",
    buyLink: "https://www.broadway.com/shows/oh-mary/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/138696-3.jpg",
    customerRating: 4.3,
    popularityScore: 8.9,
    popularityReason:
      "Despite a more polarized audience rating, awards attention and exceptional cultural visibility keep it among the most talked-about Broadway plays.",
    sources: ["Broadway.com", "official production site", "Broadway.org"]
  },
  {
    id: "stranger-things",
    title: "Stranger Things: The First Shadow",
    type: "Plays",
    scene: "Broadway",
    venue: "Marquis Theatre",
    address: "210 West 46th Street, Manhattan",
    openingDate: "2025-04-22",
    description: "A large-scale effects-driven Broadway stage event tied to a globally known franchise.",
    regularPrice: 94,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 45 minutes, with one intermission",
    ageGuidance: "Recommended for ages 12 and up; children under 16 must be accompanied by an adult, and children under 5 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://broadway.strangerthingsonstage.com/",
    buyLink: "https://www.broadway.com/shows/stranger-things-the-first-shadow/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136978-0.jpg",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "Franchise recognition and the scale of the production make it a major current Broadway draw even without a surfaced customer score here.",
    sources: ["Broadway.com", "official production site"]
  },
  {
    id: "little-shop",
    title: "Little Shop of Horrors",
    type: "Musicals",
    scene: "Off-Broadway",
    venue: "Westside Theatre Upstairs",
    address: "407 West 43rd Street, Manhattan",
    openingDate: "2019-10-17",
    description: "One of New York's strongest Off-Broadway musical picks, compact and easy to slot into a trip.",
    regularPrice: 59,
    rushPrice: null,
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "2 hours including one 15-minute intermission",
    ageGuidance: "Recommended for ages 5 and up; children under 4 are not permitted.",
    officialSiteLabel: "Official production site",
    officialSite: "https://littleshopnyc.com/",
    buyLink: "https://littleshopnyc.com/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/130287-3.jpg",
    customerRating: 4.8,
    popularityScore: 8.9,
    popularityReason:
      "High score comes from long-running Off-Broadway momentum, strong audience loyalty, and a clear entry price.",
    sources: ["official production site", "NYC.com"]
  },
  {
    id: "heathers",
    title: "Heathers: The Musical",
    type: "Musicals",
    scene: "Off-Broadway",
    venue: "New World Stages / Stage 1",
    address: "340 West 50th Street, Manhattan",
    openingDate: "2025-07-10",
    description: "A cult-favorite Off-Broadway musical for audiences who want higher-energy, darker comedy.",
    regularPrice: 38,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 2 hours 30 minutes, with one intermission",
    ageGuidance: "Recommended for ages 14 and up due to mature themes and strong language.",
    officialSiteLabel: "Official production site",
    officialSite: "https://newyork.heathersthemusical.com/",
    buyLink: "https://newyork.heathersthemusical.com/tickets/",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136087-3.jpg",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "Good demand and strong fan culture, but with less broad audience reach than the biggest Broadway titles.",
    sources: ["official production site", "TDF", "NYC.com"]
  },
  {
    id: "spelling-bee",
    title: "The 25th Annual Putnam County Spelling Bee",
    type: "Musicals",
    scene: "Off-Broadway",
    venue: "New World Stages / Stage Three",
    address: "340 West 50th Street, Manhattan",
    openingDate: "2025-11-17",
    description: "A smart, funny Off-Broadway revival with accessible pricing and a broad comedy audience.",
    regularPrice: 62.12,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "1 hour 45 minutes, with no intermission",
    ageGuidance: "Recommended for ages 13 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://spellingbeenyc.com/",
    buyLink: "https://spellingbeenyc.com/tickets/",
    customerRating: 4.5,
    popularityScore: 8.3,
    popularityReason:
      "Its score reflects a 4.5/5 Broadway.com audience rating and strong word of mouth for a revived favorite.",
    sources: ["official production site", "Broadway.com", "NYC.com"]
  },
  {
    id: "play-that-goes-wrong",
    title: "The Play That Goes Wrong",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "New World Stages / Stage 4",
    address: "340 West 50th Street, Manhattan",
    openingDate: "2019-02-20",
    description: "A long-running physical comedy favorite and one of the easiest Off-Broadway play recommendations for general audiences.",
    regularPrice: 79,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours with one intermission",
    ageGuidance: "Generally family-friendly; best for older children and adults who enjoy farce.",
    officialSiteLabel: "Official production site",
    officialSite: "https://playgoeswrong.com/new-york/",
    buyLink: "https://playgoeswrong.com/new-york/",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "Strong off-Broadway staying power and tourist familiarity make it one of the most dependable local comedy picks.",
    sources: ["official production site", "NYC.com"]
  },
  {
    id: "friends-musical-parody",
    title: "Friends! The Musical Parody",
    type: "Musicals",
    scene: "Off-Broadway",
    venue: "Orbach Theater at The Theater Center",
    address: "210 West 50th Street, Manhattan",
    openingDate: "2023-01-15",
    description: "A tourist-friendly parody musical built around a very recognizable TV property.",
    regularPrice: 59,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 90 minutes",
    ageGuidance: "Recommended for ages 13 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://friendsthemusicalparody.com/new-york/",
    buyLink: "https://friendsthemusicalparody.com/new-york/",
    customerRating: null,
    popularityScore: 7.7,
    popularityReason:
      "It has clear tourist visibility and recognizable source material, though not the prestige or demand level of the city's major theatrical hits.",
    sources: ["official production site", "NYC.com"]
  },
  {
    id: "mexodus",
    title: "Mexodus",
    type: "Musicals",
    scene: "Off-Broadway",
    venue: "Daryl Roth Theatre",
    address: "101 East 15th Street, Manhattan",
    openingDate: "2025-09-18",
    description: "A current off-Broadway musical with a distinctive live-looping style and a clearly verified current venue listing.",
    regularPrice: 49,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 90 minutes",
    ageGuidance: "No stable official age guidance surfaced in the primary sources used here.",
    officialSiteLabel: "Current venue listing",
    officialSite: "https://playbill.com/venue/daryl-roth-theatre-coms-0000034906",
    buyLink: "https://playbill.com/venue/daryl-roth-theatre-coms-0000034906",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Included because it is verifiably current at the Daryl Roth Theatre and expands the off-Broadway section beyond long-running tourist staples.",
    sources: ["Playbill venue listing", "Daryl Roth Theatre listing"]
  },
  {
    id: "gazillion-bubble-show",
    title: "Gazillion Bubble Show",
    type: "Dance",
    scene: "Off-Broadway",
    venue: "New World Stages / Stage 2",
    address: "340 West 50th Street, Manhattan",
    openingDate: "2007-02-15",
    description: "A long-running New York visual spectacle with strong family appeal and a clearly current New World Stages presence.",
    regularPrice: 59,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 1 hour 15 minutes",
    ageGuidance: "Best for ages 2 and up.",
    officialSiteLabel: "Official production site",
    officialSite: "https://gazillionbubbleshow.com/new-york/",
    buyLink: "https://gazillionbubbleshow.com/new-york/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "Its long-running status and very strong family/tourist visibility make it one of the more recognizable nontraditional Off-Broadway offerings.",
    sources: ["official production site", "New World Stages"]
  },
  {
    id: "drunk-shakespeare",
    title: "Drunk Shakespeare",
    type: "Plays",
    scene: "Other NYC / immersive",
    venue: "The Ruby Theatre",
    address: "35 West 39th Street, Manhattan",
    openingDate: "2017-01-01",
    description: "An NYC-specific long-running immersive comedy option rather than a conventional seated play.",
    regularPrice: 45,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 90 minutes",
    ageGuidance: "Strictly 21+.",
    officialSiteLabel: "Official production site",
    officialSite: "https://www.drunkshakespeare.com/nyc",
    buyLink: "https://www.drunkshakespeare.com/nyc",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Included because it is a durable New York-specific theater outing with very high tourist visibility.",
    sources: ["official production site", "NYC.com"]
  },
  {
    id: "perfect-crime",
    title: "Perfect Crime",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Anne L. Bernstein Theater at The Theater Center",
    address: "210 West 50th Street, Manhattan",
    openingDate: "1987-04-18",
    description: "A famously long-running New York thriller that gives the site another stable non-musical option.",
    regularPrice: 52,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours with one intermission",
    ageGuidance: "Rated for ages 13 and above; content warning includes suicide and gunshots.",
    officialSiteLabel: "Official production site",
    officialSite: "https://www.perfect-crime.com/",
    buyLink: "https://www.perfect-crime.com/",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "Its historic longevity and clear tourist visibility justify inclusion even without a standardized live customer score.",
    sources: ["official production site", "NYC.com"]
  },
  {
    id: "antigone",
    title: "Antigone (This Play I Read in High School)",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Barbaralee Theater / The Public Theater",
    address: "425 Lafayette Street, Manhattan",
    openingDate: "2026-03-11",
    description: "A current Off-Broadway play with a clear prestige profile and a verified official production page.",
    regularPrice: 109,
    rushPrice: null,
    lotteryPrice: "Joseph Papp free preview / low-priced offers noted by The Public",
    standingPrice: null,
    runtime: "2 hours 15 minutes, including one intermission",
    ageGuidance: "Contains nudity, blood, sexual situations, and death.",
    officialSiteLabel: "Official production page",
    officialSite: "https://publictheater.org/productions/season/2526/antigone-this-play-i-read-in-high-school/",
    buyLink: "https://publictheater.org/productions/season/2526/antigone-this-play-i-read-in-high-school/",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "Strong current visibility comes from being a major new Public Theater production with a clear official ticketing page and press attention.",
    sources: ["The Public Theater", "TheaterMania"]
  },
  {
    id: "jesa",
    title: "Jesa",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Shiva Theater / The Public Theater",
    address: "425 Lafayette Street, Manhattan",
    openingDate: "2026-03-20",
    description: "A current new play at The Public with clear official pricing and runtime information.",
    regularPrice: 80,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "100 minutes, no intermission",
    ageGuidance: "Contains haze, fog, and strobe lights.",
    officialSiteLabel: "Official production page",
    officialSite: "https://publictheater.org/productions/season/2526/jesa/",
    buyLink: "https://publictheater.org/productions/season/2526/jesa/",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "Scores well as a newly opening Public Theater production with strong institutional visibility, though less mainstream recognition than the top hits.",
    sources: ["The Public Theater", "TheaterMania"]
  },
  {
    id: "touch",
    title: "Touch",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "East Village Basement",
    address: "321 East 9th Street, Manhattan",
    openingDate: "2026-03-12",
    description: "A smaller-scale current play that stands out for its intimate setting and Anthony Rapp lead performance.",
    regularPrice: 69,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "1 hour 30 minutes, no intermission",
    ageGuidance: "Ages 16+.",
    officialSiteLabel: "Official ticket listing",
    officialSite: "https://www.todaytix.com/nyc/shows/46217-touch",
    buyLink: "https://www.todaytix.com/nyc/shows/46217-touch",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "More niche than the largest current productions, but notable for cast visibility and a clearly current ticketing listing.",
    sources: ["TodayTix", "TheaterMania", "East Village Basement listing"]
  },
  {
    id: "trash",
    title: "Trash",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Perelman Performing Arts Center (PAC NYC)",
    address: "251 Fulton Street, Manhattan",
    openingDate: "2026-03-07",
    description: "A current lower-Manhattan local production with a verified ticket page, runtime, and age guidance.",
    regularPrice: 45,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "1 hour 30 minutes",
    ageGuidance: "Ages 16+; may include mature language, haze, and fog.",
    officialSiteLabel: "Current ticket page",
    officialSite: "https://www.todaytix.com/nyc/shows/45162-trash",
    buyLink: "https://www.todaytix.com/nyc/shows/45162-trash",
    customerRating: null,
    popularityScore: 7.6,
    popularityReason:
      "Not a major tourist title, but it is a clearly current NYC production with concrete schedule and venue data.",
    sources: ["TodayTix", "PAC NYC", "TheaterMania"]
  },
  {
    id: "public-charge",
    title: "Public Charge",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Newman Theater / The Public Theater",
    address: "425 Lafayette Street, Manhattan",
    openingDate: "2026-03-12",
    description: "A current Public Theater world premiere that strengthens the Off-Broadway play lineup beyond commercial tourist fare.",
    regularPrice: 80,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Not clearly surfaced in the primary source snippet used here",
    ageGuidance: "No stable age guidance surfaced in the primary source snippet used here.",
    officialSiteLabel: "Official production page",
    officialSite: "https://publictheater.org/productions/season/2526/public-charge/",
    buyLink: "https://publictheater.org/productions/season/2526/public-charge/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "Strong institutional visibility from The Public gives it a meaningful place in the current Off-Broadway play lineup.",
    sources: ["The Public Theater"]
  },
  {
    id: "ulster-american",
    title: "Ulster American",
    type: "Plays",
    scene: "Off-Broadway",
    venue: "Irish Repertory Theatre",
    address: "132 West 22nd Street, Manhattan",
    openingDate: "2026-03-06",
    description: "A current Off-Broadway comedy play with a recognizable cast and a clearly surfaced runtime in Playbill listings.",
    regularPrice: 79,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "1 hour 30 minutes, no intermission",
    ageGuidance: "Adult themes and language likely; no stable official age advisory surfaced in current results.",
    officialSiteLabel: "Production listing",
    officialSite: "https://playbill.com/production/ulster-american-off-broadway-irish-repertory-theatre-2026",
    buyLink: "https://playbill.com/production/ulster-american-off-broadway-irish-repertory-theatre-2026",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "A recognizable cast and clear current Off-Broadway listing make it a strong theater-first addition to this section.",
    sources: ["Playbill", "Irish Repertory Theatre"]
  },
  {
    id: "ice-queen",
    title: "Ice Queen",
    type: "Musicals",
    scene: "Other NYC / local venues",
    venue: "92NY Buttenwieser Hall",
    address: "1395 Lexington Avenue, Manhattan",
    openingDate: "2026-03-07",
    description: "A family-focused local musical option that broadens the site beyond the Times Square theater district.",
    regularPrice: 40,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "45 minutes",
    ageGuidance: "Ages 2+.",
    officialSiteLabel: "Current ticket page",
    officialSite: "https://www.todaytix.com/nyc/shows/43768-ice-queen-the-musical",
    buyLink: "https://www.todaytix.com/nyc/shows/43768-ice-queen-the-musical",
    customerRating: null,
    popularityScore: 7.2,
    popularityReason:
      "Included as a clearly current local family-theater listing with complete public schedule and audience-fit information.",
    sources: ["TodayTix", "92NY"]
  },
  {
    id: "ailey-ii",
    title: "Ailey II",
    type: "Dance",
    scene: "The Joyce / NYC dance circuit",
    venue: "The Joyce Theater",
    address: "175 Eighth Avenue, Manhattan",
    openingDate: "2026-03-17",
    description: "A current New York dance engagement that broadens the site beyond spoken theater and musicals.",
    regularPrice: 15,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 2 hours",
    ageGuidance: "Children under age 4 are not admitted to regular performances.",
    officialSiteLabel: "Official performance page",
    officialSite: "https://www.joyce.org/performances/ailey-ii-576n",
    buyLink: "https://www.joyce.org/performances/ailey-ii-576n",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Included as a strong current NYC dance option, supported by The Joyce's official performance calendar and ticketing pages.",
    sources: ["The Joyce Theater", "Ailey press room"]
  },
  {
    id: "becky-shaw",
    title: "Becky Shaw",
    type: "Plays",
    scene: "Broadway",
    venue: "Hayes Theater",
    address: "Manhattan",
    openingDate: "2026-03-18",
    endDate: "2026-06-14",
    description: "Broadway.org lists this Broadway play as now playing at the Hayes Theater through mid-June.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Included because Broadway.org lists it as currently running at the Hayes Theater through June 14, 2026.",
    sources: ["Broadway.org"]
  },
  {
    id: "cats-jellicle-ball",
    title: "CATS: The Jellicle Ball",
    type: "Musicals",
    scene: "Broadway",
    venue: "Broadhurst Theatre",
    address: "Manhattan",
    openingDate: "2026-03-18",
    description: "Broadway.org lists this production as now playing at the Broadhurst Theatre with active lottery and rush info.",
    regularPrice: null,
    rushPrice: "$45 rush",
    lotteryPrice: "$49 digital lottery",
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "Broadway.org lists it as active now playing inventory with both rush and lottery information surfaced.",
    sources: ["Broadway.org"]
  },
  {
    id: "the-balusters",
    title: "The Balusters",
    type: "Plays",
    scene: "Broadway",
    venue: "Samuel J. Friedman Theatre",
    address: "Manhattan",
    openingDate: "2026-03-31",
    endDate: "2026-05-24",
    description: "A Broadway play officially listed by Broadway.org as beginning March 31, 2026.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.6,
    popularityReason:
      "Included because Broadway.org lists it as an official upcoming Broadway engagement at the Samuel J. Friedman Theatre.",
    sources: ["Broadway.org"]
  },
  {
    id: "beaches-a-new-musical",
    title: "Beaches, A New Musical",
    type: "Musicals",
    scene: "Broadway",
    venue: "Majestic Theatre",
    address: "Manhattan",
    openingDate: "2026-03-27",
    endDate: "2026-09-06",
    description: "A Broadway.org-listed upcoming musical beginning March 27, 2026 at the Majestic Theatre.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "Its Broadway.org listing shows a long announced run window at a major Broadway house, making it an important upcoming addition.",
    sources: ["Broadway.org"]
  },
  {
    id: "fallen-angels",
    title: "Fallen Angels",
    type: "Plays",
    scene: "Broadway",
    venue: "Todd Haimes Theatre",
    address: "Manhattan",
    openingDate: "2026-03-27",
    endDate: "2026-06-07",
    description: "A Broadway.org-listed upcoming Broadway play with a clearly surfaced run window at the Todd Haimes Theatre.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.7,
    popularityReason:
      "Included because Broadway.org clearly lists its Broadway run dates and venue.",
    sources: ["Broadway.org"]
  },
  {
    id: "fear-of-13",
    title: "The Fear of 13",
    type: "Plays",
    scene: "Broadway",
    venue: "James Earl Jones Theatre",
    address: "Manhattan",
    openingDate: "2026-03-19",
    endDate: "2026-07-12",
    description: "An official upcoming Broadway play listing with active rush and lottery information already surfaced on Broadway.org.",
    regularPrice: null,
    rushPrice: "$45 rush",
    lotteryPrice: "$45 digital lottery",
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "It is an imminent Broadway opening with both rush and lottery details already posted by Broadway.org.",
    sources: ["Broadway.org"]
  },
  {
    id: "joe-turners-come-and-gone",
    title: "Joe Turner's Come and Gone",
    type: "Plays",
    scene: "Broadway",
    venue: "Ethel Barrymore Theatre",
    address: "Manhattan",
    openingDate: "2026-03-30",
    endDate: "2026-07-12",
    description: "A Broadway.org-listed upcoming Broadway play at the Ethel Barrymore Theatre.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Included because Broadway.org lists a full run window and venue for this upcoming production.",
    sources: ["Broadway.org"]
  },
  {
    id: "the-lost-boys",
    title: "The Lost Boys",
    type: "Musicals",
    scene: "Broadway",
    venue: "Palace Theatre",
    address: "Manhattan",
    openingDate: "2026-03-27",
    description: "A newly listed Broadway title at the Palace Theatre beginning March 27, 2026.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "Its official Broadway.org listing makes it a relevant upcoming Broadway addition even before fuller ticket data surfaces.",
    sources: ["Broadway.org"]
  },
  {
    id: "proof",
    title: "Proof",
    type: "Plays",
    scene: "Broadway",
    venue: "Booth Theatre",
    address: "Manhattan",
    openingDate: "2026-03-31",
    endDate: "2026-07-19",
    description: "A Broadway.org-listed upcoming Broadway revival at the Booth Theatre.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Broadway.org lists a clearly defined run window for this revival, making it a meaningful upcoming NYC addition.",
    sources: ["Broadway.org"]
  },
  {
    id: "rocky-horror-show",
    title: "The Rocky Horror Show",
    type: "Musicals",
    scene: "Broadway",
    venue: "Studio 54",
    address: "Manhattan",
    openingDate: "2026-03-26",
    endDate: "2026-06-21",
    description: "A Broadway.org-listed upcoming musical engagement at Studio 54.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "Its Broadway.org listing and recognizable title make it one of the stronger upcoming NYC musical additions.",
    sources: ["Broadway.org"]
  },
  {
    id: "schmigadoon",
    title: "Schmigadoon!",
    type: "Musicals",
    scene: "Broadway",
    venue: "Nederlander Theatre",
    address: "Manhattan",
    openingDate: "2026-04-04",
    endDate: "2026-09-06",
    description: "A Broadway.org-listed upcoming musical opening in early April at the Nederlander Theatre.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Broadway.org listing used here.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "Its long Broadway.org-announced run window and high-recognition title make it a useful NYC upcoming addition.",
    sources: ["Broadway.org"]
  },
  {
    id: "titanique",
    title: "Titanique",
    type: "Musicals",
    scene: "Broadway",
    venue: "St. James Theatre",
    address: "Manhattan",
    openingDate: "2026-03-26",
    endDate: "2026-07-12",
    description: "A Broadway.org-listed upcoming engagement at the St. James Theatre beginning March 26, 2026.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official Broadway.org listing used here.",
    ageGuidance: "Recommended ages 12+; children under 5 are not permitted and under-16s must be accompanied by an adult.",
    officialSiteLabel: "Broadway.org listing",
    officialSite: "https://www.broadway.org/shows",
    buyLink: "https://www.broadway.org/shows",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "Broadway.org lists a clear spring run window for this title, making it an important NYC upcoming addition.",
    sources: ["Broadway.org"]
  }
];

const laShows = [
  {
    id: "la-six",
    title: "SIX",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-02-18",
    endDate: "2026-03-08",
    description: "A current LA engagement at the Pantages that was previously missing from the city page despite an active official listing.",
    regularPrice: 58,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the specific LA source used here.",
    ageGuidance: "Age guidance was not clearly surfaced in the specific LA source used here.",
    officialSiteLabel: "Official Broadway in Hollywood listing",
    officialSite: "https://www.broadwayinhollywood.com/hollywoodlocals",
    buyLink: "https://www.broadwayinhollywood.com/hollywoodlocals",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/134931-3.jpg",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "Its official Pantages listing and active partner-discount inventory make it a clearly relevant current LA musical.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-beetlejuice",
    title: "Beetlejuice",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-03-10",
    endDate: "2026-03-22",
    description: "A current Los Angeles touring musical at the Pantages with full official runtime, price and age info.",
    regularPrice: 45,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 30 minutes",
    ageGuidance: "Recommended for ages 13+; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/beetlejuice-1",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/beetlejuice-1",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/135457-9.jpg",
    customerRating: null,
    popularityScore: 8.7,
    popularityReason:
      "A nationally recognizable title with strong current visibility in LA and a well-documented official event page.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-amadeus",
    title: "Amadeus",
    type: "Plays",
    scene: "Pasadena / local venues",
    venue: "Pasadena Playhouse",
    address: "39 South El Molino Avenue, Pasadena",
    openingDate: "2026-02-11",
    endDate: "2026-03-15",
    description: "A current major LA-area play at Pasadena Playhouse with live ticket pages for March performances.",
    regularPrice: 40,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Not clearly surfaced in the current ticket detail pages used here",
    ageGuidance: "No stable age guidance surfaced in the primary source snippet used here.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.pasadenaplayhouse.org/event/amadeus/",
    buyLink: "https://www.pasadenaplayhouse.org/event/amadeus/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "A clear current run at a major LA theater institution gives it strong local relevance.",
    sources: ["Pasadena Playhouse"]
  },
  {
    id: "la-dragon-mama",
    title: "Dragon Mama",
    type: "Plays",
    scene: "LA local venues",
    venue: "Geffen Playhouse / Audrey Skirball Kenis Theater",
    address: "10886 Le Conte Avenue, Los Angeles",
    openingDate: "2026-03-04",
    endDate: "2026-04-12",
    description: "A current Geffen Playhouse production that gives the LA page a stronger local-theater core.",
    regularPrice: 40,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Not clearly surfaced in the official page snippet used here",
    ageGuidance: "No stable age guidance surfaced in the official page snippet used here.",
    officialSiteLabel: "Official production page",
    officialSite: "https://www.geffenplayhouse.org/shows/dragon-mama/",
    buyLink: "https://www.geffenplayhouse.org/shows/dragon-mama/",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "A current Geffen engagement with strong institutional visibility makes it a strong local-theater inclusion.",
    sources: ["Geffen Playhouse"]
  },
  {
    id: "la-kims-convenience",
    title: "Kim's Convenience",
    type: "Plays",
    scene: "Center Theatre Group",
    venue: "Ahmanson Theatre",
    address: "135 North Grand Avenue, Los Angeles",
    openingDate: "2026-03-21",
    endDate: "2026-04-19",
    description: "A major upcoming LA engagement from a flagship regional presenter, included as a near-term city highlight.",
    regularPrice: 39,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Approximately 90 minutes",
    ageGuidance: "Generally family-friendly; no stable official age notice surfaced in the source used here.",
    officialSiteLabel: "Current event listing",
    officialSite: "https://www.ahmansontheatre.net/events/kims-convenience-preview-performance-21-march-2026/",
    buyLink: "https://www.ahmansontheatre.net/events/kims-convenience-preview-performance-21-march-2026/",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "Included because it is the next major Ahmanson engagement and helps the LA page feel like a fuller city snapshot.",
    sources: ["Ahmanson event listing"]
  },
  {
    id: "la-here-lies-love",
    title: "Here Lies Love",
    type: "Musicals",
    scene: "Center Theatre Group",
    venue: "Mark Taper Forum",
    address: "135 North Grand Avenue, Los Angeles",
    openingDate: "2026-02-11",
    endDate: "2026-03-22",
    description: "A current Mark Taper Forum musical engagement and one of the strongest official now-playing additions for the LA page.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime not clearly surfaced in the official season brochure used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season brochure used here.",
    officialSiteLabel: "Official season brochure",
    officialSite: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    buyLink: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "It is a current CTG musical at the Taper with strong institutional visibility and a clear official March 2026 run window.",
    sources: ["Center Theatre Group season brochure"]
  },
  {
    id: "la-spamalot",
    title: "Spamalot",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-03-24",
    endDate: "2026-04-12",
    description: "A major touring musical coming next to the Pantages, useful as an immediately upcoming LA pick after Beetlejuice.",
    regularPrice: 45,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 20 minutes",
    ageGuidance: "Recommended for ages 8+; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/spamalot",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/spamalot",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/134064-5.jpg",
    customerRating: null,
    popularityScore: 8.3,
    popularityReason:
      "Recognizable title, a marquee Pantages booking, and clear official ticketing make it one of the best near-term LA additions.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-tina",
    title: "TINA - The Tina Turner Musical",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-04-14",
    endDate: "2026-04-19",
    description: "A strong upcoming touring musical at the Pantages that broadens the LA lineup beyond fantasy-comedy titles.",
    regularPrice: 59,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 45 minutes",
    ageGuidance: "Recommended for ages 14+; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/tina",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/tina",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "A mainstream music-biography title with clear official ticketing and a prominent Pantages booking window.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-mj",
    title: "MJ",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-04-21",
    endDate: "2026-05-03",
    description: "A commercially strong touring musical that helps the LA page reflect the next wave of major Pantages bookings.",
    regularPrice: 56,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 30 minutes",
    ageGuidance: "Recommended for ages 8+; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/mj-1",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/mj-1",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/136006-3.jpg",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "A very recognizable musical title with broad mainstream appeal and a clearly published official Pantages run.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-master-harold",
    title: "\"Master Harold\"...and the Boys",
    type: "Plays",
    scene: "Geffen Playhouse",
    venue: "Geffen Playhouse / Gil Cates Theater",
    address: "10886 Le Conte Avenue, Los Angeles",
    openingDate: "2026-04-08",
    endDate: "2026-05-10",
    description: "A major upcoming Geffen revival that strengthens the LA page's play coverage beyond only one or two local titles.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime not clearly surfaced in the official season listing used here.",
    ageGuidance: "No stable official age guidance surfaced in the official Geffen listing used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.geffenplayhouse.org/",
    buyLink: "https://www.geffenplayhouse.org/",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "Geffen is one of the city's most important theater institutions, so this officially listed spring production materially improves the LA play lineup.",
    sources: ["Geffen Playhouse"]
  },
  {
    id: "la-sound-of-music",
    title: "The Sound of Music",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-05-05",
    endDate: "2026-05-24",
    description: "A major family-friendly Pantages booking with a full official runtime and age listing on Broadway in Hollywood.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 30 minutes, including a 15-minute intermission",
    ageGuidance: "Recommended for ages 8 and up; children under 5 will not be admitted.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/sound-of-music",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/sound-of-music",
    customerRating: null,
    popularityScore: 8.3,
    popularityReason:
      "A high-recognition classic with a clearly published Pantages run and strong family appeal makes it one of the best upcoming LA additions.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-mamma-mia",
    title: "Mamma Mia!",
    type: "Musicals",
    scene: "Center Theatre Group",
    venue: "Ahmanson Theatre",
    address: "135 North Grand Avenue, Los Angeles",
    openingDate: "2026-06-23",
    endDate: "2026-07-19",
    description: "A major officially announced Ahmanson summer musical that gives the LA page a stronger upcoming pipeline.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime not clearly surfaced in the official season brochure used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season brochure used here.",
    officialSiteLabel: "Official season brochure",
    officialSite: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    buyLink: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "An officially announced Ahmanson booking for a highly recognizable hit makes it one of the most valuable future LA additions.",
    sources: ["Center Theatre Group season brochure"]
  },
  {
    id: "la-hells-kitchen",
    title: "Hell's Kitchen",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-05-26",
    endDate: "2026-06-21",
    description: "A major Pantages engagement with a detailed official listing, including runtime, age guidance, and a surfaced local starting offer.",
    regularPrice: 53,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 35 minutes, including one intermission",
    ageGuidance: "Recommended for ages 8 and up; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/hells-kitchen",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/hells-kitchen",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "A major Broadway transfer with strong current brand recognition and a detailed official LA event page makes it a top-tier upcoming addition.",
    sources: ["Broadway in Hollywood", "Hollywood Locals"]
  },
  {
    id: "la-phantom",
    title: "The Phantom of the Opera",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-06-24",
    endDate: "2026-08-09",
    description: "A major summer Pantages booking and one of the strongest future-tour additions available from an official LA source.",
    regularPrice: 47,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "2 hours 35 minutes",
    ageGuidance: "Recommended for ages 8+; must be 5+ to enter.",
    officialSiteLabel: "Official event page",
    officialSite: "https://www.broadwayinhollywood.com/events/detail/phantom",
    buyLink: "https://www.broadwayinhollywood.com/events/detail/phantom",
    posterUrl: "https://imaging.broadway.com/images/poster-178275/w230/222222/102991-4.jpg",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "A huge legacy title with a clearly published official LA run, price point, and age guidance makes it one of the strongest future-musical additions.",
    sources: ["Broadway in Hollywood"]
  },
  {
    id: "la-primary-trust",
    title: "Primary Trust",
    type: "Plays",
    scene: "Center Theatre Group",
    venue: "Mark Taper Forum",
    address: "135 North Grand Avenue, Los Angeles",
    openingDate: "2026-05-20",
    endDate: "2026-06-28",
    description: "A Pulitzer-winning play officially announced for the Taper, adding a stronger literary-theater presence to the LA page.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime not clearly surfaced in the official season brochure used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season brochure used here.",
    officialSiteLabel: "Official season brochure",
    officialSite: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    buyLink: "https://www.centertheatregroup.org/media/4xvpzofh/2025-26-season-brochure.pdf",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "A Pulitzer Prize-winning title and an official Taper booking make it a meaningful upcoming LA play inclusion.",
    sources: ["Center Theatre Group season brochure"]
  },
  {
    id: "la-song-of-the-north",
    title: "Song of the North",
    type: "Plays",
    scene: "Pasadena / local venues",
    venue: "Pasadena Playhouse",
    address: "39 South El Molino Avenue, Pasadena",
    openingDate: "2026-03-21",
    endDate: "2026-03-29",
    description: "A near-term Pasadena Playhouse booking that helps the LA page capture the next local production after Amadeus closes.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the source used here.",
    ageGuidance: "No stable official age guidance surfaced in the source used here.",
    officialSiteLabel: "Official ticket page",
    officialSite: "https://my.pasadenaplayhouse.org/3710/3744",
    buyLink: "https://my.pasadenaplayhouse.org/3710/3744",
    customerRating: null,
    popularityScore: 7.7,
    popularityReason:
      "It is the next clearly ticketed Pasadena Playhouse production and helps keep the LA local-theater calendar current.",
    sources: ["Pasadena Playhouse"]
  },
  {
    id: "la-brigadoon",
    title: "Brigadoon",
    type: "Musicals",
    scene: "Pasadena / local venues",
    venue: "Pasadena Playhouse",
    address: "39 South El Molino Avenue, Pasadena",
    openingDate: "2026-05-13",
    endDate: "2026-06-14",
    description: "A major upcoming Pasadena Playhouse musical revival that broadens the LA page beyond touring-house bookings.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the source used here.",
    ageGuidance: "No stable official age guidance surfaced in the source used here.",
    officialSiteLabel: "Official ticket page",
    officialSite: "https://my.pasadenaplayhouse.org/3749/3751",
    buyLink: "https://my.pasadenaplayhouse.org/3749/3751",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "A recognizable classic at Pasadena Playhouse materially improves the depth of the LA upcoming-musicals lineup.",
    sources: ["Pasadena Playhouse"]
  },
  {
    id: "la-mexodus-pasadena",
    title: "Mexodus",
    type: "Musicals",
    scene: "Pasadena / local venues",
    venue: "Pasadena Playhouse",
    address: "39 South El Molino Avenue, Pasadena",
    openingDate: "2026-07-08",
    endDate: "2026-08-02",
    description: "An upcoming Pasadena Playhouse production that extends the LA page further into the summer schedule.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the source used here.",
    ageGuidance: "No stable official age guidance surfaced in the source used here.",
    officialSiteLabel: "Official ticket page",
    officialSite: "https://my.pasadenaplayhouse.org/3752/3754",
    buyLink: "https://my.pasadenaplayhouse.org/3752/3754",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "Including it makes the LA guide feel more like a living city calendar rather than only a short-term snapshot.",
    sources: ["Pasadena Playhouse"]
  }
];

const houstonShows = [
  {
    id: "hou-earnest",
    title: "The Importance of Being Earnest",
    type: "Plays",
    scene: "Alley Theatre",
    venue: "Alley Theatre, Hubbard Stage",
    address: "615 Texas Avenue, Houston",
    openingDate: "2026-03-06",
    endDate: "2026-03-29",
    description: "A current Alley Theatre comedy revival that gives the Houston page a strong classic-play anchor.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official page used here.",
    officialSiteLabel: "Official show page",
    officialSite: "https://www.alleytheatre.org/plays/the-importance-of-being-earnest/",
    buyLink: "https://www.alleytheatre.org/plays/the-importance-of-being-earnest/",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "A major current Alley Theatre production with a familiar title and clear official run window makes it a strong Houston current-play entry.",
    sources: ["Alley Theatre"]
  },
  {
    id: "hou-broken-wings",
    title: "Broken Wings",
    type: "Dance",
    scene: "Houston Ballet",
    venue: "Wortham Theater Center",
    address: "501 Texas Avenue, Houston",
    openingDate: "2026-03-12",
    endDate: "2026-03-22",
    description: "A current Houston Ballet program that gives the city page a live dance option in the present-tense lineup.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official season page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season page used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    buyLink: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "It is one of the clearest current Houston Ballet offerings around the guide date and broadens Houston beyond straight plays and touring musicals.",
    sources: ["Houston Ballet"]
  },
  {
    id: "hou-back-to-the-future",
    title: "Back to the Future: The Musical",
    type: "Musicals",
    scene: "Theatre Under The Stars",
    venue: "Hobby Center for the Performing Arts",
    address: "800 Bagby Street, Houston",
    openingDate: "2026-03-31",
    endDate: "2026-04-05",
    description: "A major spring musical booking in Houston with broad family appeal and clear commercial visibility.",
    regularPrice: 46,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official season page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season page used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.tuts.com/2025-2026-season-packages/",
    buyLink: "https://www.tuts.com/2025-2026-season-packages/",
    customerRating: null,
    popularityScore: 8.9,
    popularityReason:
      "A large-format title with wide audience recognition and a clearly published Houston run makes it one of the strongest upcoming musical additions.",
    sources: ["Theatre Under The Stars"]
  },
  {
    id: "hou-six",
    title: "SIX",
    type: "Musicals",
    scene: "Broadway at the Hobby Center",
    venue: "Hobby Center for the Performing Arts",
    address: "800 Bagby Street, Houston",
    openingDate: "2026-04-07",
    endDate: "2026-04-12",
    description: "A high-energy pop musical on the Houston Broadway calendar that helps the city page feel more current and commercial.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the source used here.",
    ageGuidance: "No stable official age guidance surfaced in the source used here.",
    officialSiteLabel: "Official season announcement",
    officialSite: "https://houston.culturemap.com/news/arts/broadway-houston-hobby-center-season/",
    buyLink: "https://houston.culturemap.com/news/arts/broadway-houston-hobby-center-season/",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "It is one of the most broadly recognizable titles in the Houston touring lineup and a clear mainstream draw for the city page.",
    sources: ["CultureMap Houston"]
  },
  {
    id: "hou-fences",
    title: "Fences",
    type: "Plays",
    scene: "Alley Theatre",
    venue: "Alley Theatre, Hubbard Stage",
    address: "615 Texas Avenue, Houston",
    openingDate: "2026-04-17",
    endDate: "2026-05-10",
    description: "An upcoming Alley Theatre production that adds a major American classic to Houston's near-term lineup.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official page used here.",
    officialSiteLabel: "Official show page",
    officialSite: "https://www.alleytheatre.org/plays/fences/",
    buyLink: "https://www.alleytheatre.org/plays/fences/",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "A canon title at Houston's flagship regional theater gives the city page stronger serious-play depth.",
    sources: ["Alley Theatre"]
  },
  {
    id: "hou-beautiful",
    title: "Beautiful: The Carole King Musical",
    type: "Musicals",
    scene: "Theatre Under The Stars",
    venue: "Hobby Center for the Performing Arts",
    address: "800 Bagby Street, Houston",
    openingDate: "2026-05-12",
    endDate: "2026-05-17",
    description: "A familiar jukebox musical in Houston's spring lineup that broadens the page's crowd-pleasing options.",
    regularPrice: 46,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official season page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season page used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.tuts.com/2025-2026-season-packages/",
    buyLink: "https://www.tuts.com/2025-2026-season-packages/",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "Recognizable music, broad appeal, and a clearly published Houston booking make it an easy upcoming-musical inclusion.",
    sources: ["Theatre Under The Stars"]
  },
  {
    id: "hou-evening-with-the-stars",
    title: "An Evening with the Stars",
    type: "Dance",
    scene: "Houston Ballet",
    venue: "Wortham Theater Center",
    address: "501 Texas Avenue, Houston",
    openingDate: "2026-05-28",
    endDate: "2026-06-07",
    description: "Houston Ballet's annual mixed program gives the guide a clear late-spring dance option with local prestige.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official season page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season page used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    buyLink: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "It is one of Houston Ballet's clearest late-season offerings and helps the city page feel like a full performing-arts guide rather than a musicals-only list.",
    sources: ["Houston Ballet"]
  },
  {
    id: "hou-giselle",
    title: "Giselle",
    type: "Dance",
    scene: "Houston Ballet",
    venue: "Wortham Theater Center",
    address: "501 Texas Avenue, Houston",
    openingDate: "2026-06-11",
    endDate: "2026-06-21",
    description: "A major classical ballet title in Houston's season that strengthens the page's summer-upcoming dance coverage.",
    regularPrice: null,
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "Runtime was not clearly surfaced in the official season page used here.",
    ageGuidance: "No stable official age guidance surfaced in the official season page used here.",
    officialSiteLabel: "Official season page",
    officialSite: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    buyLink: "https://www.houstonballet.org/seasontickets/2025-2026-season/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "A familiar classical title helps Houston's dance lineup feel fuller and easier to browse for mainstream audiences.",
    sources: ["Houston Ballet"]
  }
];

const shanghaiShows = [
  {
    id: "sh-lion-boy",
    title: "音乐剧《雄狮少年》",
    type: "Musicals",
    scene: "上海文化广场",
    venue: "上海文化广场 主剧场",
    address: "上海市黄浦区永嘉路36号",
    openingDate: "2026-04-02",
    endDate: "2026-04-05",
    description: "上海文化广场官方近期演出列表中的重点音乐剧项目，适合作为上海页面的音乐剧核心条目。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开列表未清晰展示演出时长。",
    ageGuidance: "官方公开列表未清晰展示年龄建议。",
    officialSiteLabel: "上海文化广场官方演出页",
    officialSite: "https://www.shcstheatre.com/",
    buyLink: "https://www.shcstheatre.com/",
    customerRating: null,
    popularityScore: 8.3,
    popularityReason:
      "作为上海文化广场当前公开排期中的主打音乐剧，它是最适合放进上海首版城市页的官方音乐剧项目之一。",
    sources: ["上海文化广场"]
  },
  {
    id: "sh-don-juan",
    title: "法语原版音乐剧《唐璜》",
    type: "Musicals",
    scene: "上海文化广场",
    venue: "上海文化广场 主剧场",
    address: "上海市黄浦区永嘉路36号",
    openingDate: "2026-04-10",
    endDate: "2026-04-19",
    description: "上海文化广场官方当前公开排期中的法语原版音乐剧项目，能体现上海页面的国际音乐剧特征。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开列表未清晰展示演出时长。",
    ageGuidance: "官方公开列表未清晰展示年龄建议。",
    officialSiteLabel: "上海文化广场官方演出页",
    officialSite: "https://www.shcstheatre.com/",
    buyLink: "https://www.shcstheatre.com/",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "国际原版音乐剧在上海文化广场具备较强关注度，是上海页面里非常有代表性的 upcoming 项目。",
    sources: ["上海文化广场"]
  },
  {
    id: "sh-musical-stars-gala",
    title: "《影·曜》德语音乐剧明星音乐会",
    type: "Musicals",
    scene: "上海文化广场",
    venue: "上海文化广场 主剧场",
    address: "上海市黄浦区永嘉路36号",
    openingDate: "2026-04-29",
    endDate: "2026-05-01",
    description: "上海文化广场官方近期排期中的音乐剧主题明星音乐会，适合作为上海页里偏音乐剧演唱会形态的补充项目。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开列表未清晰展示演出时长。",
    ageGuidance: "官方公开列表未清晰展示年龄建议。",
    officialSiteLabel: "上海文化广场官方演出页",
    officialSite: "https://www.shcstheatre.com/",
    buyLink: "https://www.shcstheatre.com/",
    customerRating: null,
    popularityScore: 7.9,
    popularityReason:
      "它不是完整 book musical，但对于上海本地音乐剧观众来说，德语音乐剧明星音乐会具有很强的圈层吸引力。",
    sources: ["上海文化广场"]
  },
  {
    id: "sh-maya-hakvoort-concert",
    title: "音乐剧明星玛雅·哈克福特音乐会",
    type: "Musicals",
    scene: "上海文化广场",
    venue: "上海文化广场 主剧场",
    address: "上海市黄浦区永嘉路36号",
    openingDate: "2026-05-08",
    endDate: "2026-05-09",
    description: "上海文化广场官方公开排期里的音乐剧明星专场音乐会，能补足上海页里国际音乐剧演员个人专场这一类内容。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开列表未清晰展示演出时长。",
    ageGuidance: "官方公开列表未清晰展示年龄建议。",
    officialSiteLabel: "上海文化广场官方演出页",
    officialSite: "https://www.shcstheatre.com/",
    buyLink: "https://www.shcstheatre.com/",
    customerRating: null,
    popularityScore: 7.8,
    popularityReason:
      "这类音乐剧演员个人专场在上海演出市场有明确受众，适合纳入上海页的 upcoming 音乐剧类条目。",
    sources: ["上海文化广场"]
  },
  {
    id: "sh-we-become-her",
    title: "话剧《我们成为的她》",
    type: "Plays",
    scene: "上海话剧艺术中心",
    venue: "上海话剧艺术中心 · 艺术剧院",
    address: "上海市静安区安福路288号",
    openingDate: "2026-07-14",
    endDate: "2026-07-26",
    description: "上海话剧艺术中心 2026 年度最明确、也最受关注的新作之一，由梁咏琪主演，属于上话今年的重要 upcoming 项目。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开报道暂未明确披露单场时长。",
    ageGuidance: "官方公开报道暂未明确披露年龄建议。",
    officialSiteLabel: "上话相关新闻报道",
    officialSite: "https://www.jpchinapress.com/static/content/WH/2026-03-06/1479447376254084316.html",
    buyLink: "https://www.jpchinapress.com/static/content/WH/2026-03-06/1479447376254084316.html",
    customerRating: null,
    popularityScore: 8.7,
    popularityReason:
      "它是上话 2026 年最具传播度的新作之一，既有明星演员加持，也有明确首轮演出时间，非常适合补进上海页。",
    sources: ["上观新闻转引", "上海话剧艺术中心演出季信息"]
  },
  {
    id: "sh-suti-chunxiao",
    title: "话剧《苏堤春晓》",
    type: "Plays",
    scene: "黄浦文化中心",
    venue: "黄浦文化中心 · 大上海剧场",
    address: "上海市黄浦区中华路980号",
    openingDate: "2026-04-10",
    endDate: "2026-04-12",
    description: "2026 国话·上海演出季率先官宣并已开票的重磅话剧项目之一，是上海春季戏剧档期里非常显眼的文本型大戏。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开报道暂未明确披露单场时长。",
    ageGuidance: "官方公开报道暂未明确披露年龄建议。",
    officialSiteLabel: "上海演出季报道",
    officialSite: "https://m.thepaper.cn/newsDetail_forward_32704442",
    buyLink: "https://whlyj.sh.gov.cn/gqfc/20260305/6da1cce71b514b0297a1a67ca3c6f535.html",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "作为国话上海演出季的开场重点项目，它兼具名家主演与上海市场口碑，是上海话剧板块非常值得放进首页的项目。",
    sources: ["澎湃新闻", "上海市文化和旅游局"]
  },
  {
    id: "sh-kangzhan",
    title: "文献话剧《抗战中的文艺》",
    type: "Plays",
    scene: "黄浦文化中心",
    venue: "黄浦文化中心 · 大上海剧场",
    address: "上海市黄浦区中华路980号",
    openingDate: "2026-04-17",
    endDate: "2026-04-18",
    description: "2026 国话·上海演出季已率先开票的另一部重点话剧，以抗战年代中国文艺工作者的现实处境为核心。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开报道暂未明确披露单场时长。",
    ageGuidance: "官方公开报道暂未明确披露年龄建议。",
    officialSiteLabel: "国话上海演出季报道",
    officialSite: "https://m.thepaper.cn/newsDetail_forward_32704442",
    buyLink: "https://www.sh.chinanews.com.cn/yule/2026-03-04/144939.shtml",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "它与《苏堤春晓》一起构成了国话上海演出季最明确、最适合城市页展示的话剧入口。",
    sources: ["澎湃新闻", "中新社上海"]
  },
  {
    id: "sh-kuangbiao",
    title: "音乐剧《狂飙》",
    type: "Musicals",
    scene: "上海大剧院",
    venue: "上海大剧院 大剧场",
    address: "上海市黄浦区人民大道300号",
    openingDate: "2026-04-08",
    endDate: "2026-04-12",
    description: "2026 年 4 月上海大剧院档期中最醒目的中文音乐剧项目之一，属于上海春季大型音乐剧排期的代表作。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "排期参考页未稳定展示演出时长。",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "演出排期参考页",
    officialSite: "https://y.saoju.net/yyj/schedule/2146/",
    buyLink: "https://y.saoju.net/yyj/schedule/2146/",
    customerRating: null,
    popularityScore: 8.7,
    popularityReason:
      "它兼具热门 IP 和大剧院排期热度，是上海这一阶段最值得补进音乐剧主列表的项目之一。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-dangerous-game",
    title: "音乐剧《危险游戏》",
    type: "Musicals",
    scene: "上海共舞台",
    venue: "上海共舞台",
    address: "上海市黄浦区延安东路433号",
    openingDate: "2026-03-03",
    endDate: "2026-03-29",
    description: "2026 十周年演出季中上海当前正在上演的成熟悬疑双人音乐剧，是眼下上海页里最明确的一部 current 项目之一。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "公开排期页未稳定展示时长。",
    ageGuidance: "悬疑向作品，低龄观众建议谨慎选择。",
    officialSiteLabel: "单剧排期页",
    officialSite: "https://y.saoju.net/yyj/tour/706/",
    buyLink: "https://y.saoju.net/yyj/tour/706/",
    customerRating: null,
    popularityScore: 8.7,
    popularityReason:
      "它有完整的 2026 年 3 月上海排期，是目前比单纯驻演汇总更明确、更适合城市页展示的一部 current 悬疑音乐剧。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-pianist",
    title: "音乐剧《海上钢琴师》",
    type: "Musicals",
    scene: "上海西岸大剧院",
    venue: "上海西岸大剧院 大剧场",
    address: "上海市徐汇区龙腾大道2121号",
    openingDate: "2026-04-10",
    endDate: "2026-04-12",
    description: "上海西岸大剧院 4 月当前可核实到的重点音乐剧项目之一，属于经典改编型大剧场作品。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "排期参考页未稳定展示演出时长。",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "演出排期参考页",
    officialSite: "https://y.saoju.net/yyj/theatre/397/",
    buyLink: "https://y.saoju.net/yyj/theatre/397/",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "经典题材、成熟市场口碑和明确的上海档期，让它成为上海大馆音乐剧里很稳的一项补充。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-baima",
    title: "音乐剧《倏忽白马》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间88号·FIREHOUSE",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2026-03-21",
    description: "中文音乐剧演出信息首页新增演出里最明确的上海新作之一，适合作为上海页里的 upcoming 原创音乐剧补充。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "新增演出公开摘要暂未稳定展示时长。",
    ageGuidance: "新增演出公开摘要暂未稳定展示年龄建议。",
    officialSiteLabel: "新增演出汇总页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "它是 2026 年 3 月中文音乐剧新增演出里直接落在上海的一部原创新作，很适合放到 upcoming 列表中。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-last-man",
    title: "音乐剧《The Last Man 幸存者》",
    type: "Musicals",
    scene: "十二楼音乐剧之城",
    venue: "十二楼音乐剧之城 -6号剧场[B-103防空洞]",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2026-04-03",
    endDate: "2026-04-26",
    description: "中文音乐剧演出信息首页新增演出中明确列出的上海项目之一，代表了环人广沉浸式/空间型音乐剧的新供给。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "新增演出公开摘要暂未稳定展示时长。",
    ageGuidance: "新增演出公开摘要暂未稳定展示年龄建议。",
    officialSiteLabel: "新增演出汇总页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 8.0,
    popularityReason:
      "它明确出现在 2026 年上海新增演出列表里，也很能体现上海近年“空间型小剧场音乐剧”的发展方向。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-apollonia",
    title: "音乐剧《阿波罗尼亚》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间1号·一台好戏小剧场",
    address: "上海市黄浦区汉口路650号亚洲大厦",
    openingDate: "2020-08-28",
    endDate: "2026-04-19",
    description: "亚洲大厦小剧场生态里最有代表性的驻演音乐剧之一，也是很多观众进入上海小剧场音乐剧世界的第一站。",
    regularPrice: 200,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "110分钟（以现场为准）",
    ageGuidance: "票务与排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "驻演排期参考页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 9.1,
    popularityReason:
      "人民网对亚洲大厦小剧场群的报道和驻演排期都表明，《阿波罗尼亚》仍然是上海小剧场音乐剧最具代表性的长跑项目之一。",
    sources: ["上海本地宝（转引大麦）", "人民网", "中文音乐剧演出信息"]
  },
  {
    id: "sh-santa-lucia",
    title: "音乐剧《桑塔露琪亚》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间6号·一台好戏小剧场",
    address: "上海市黄浦区汉口路650号亚洲大厦",
    openingDate: "2021-04-30",
    endDate: "2026-04-19",
    description: "《阿波罗尼亚》前传式的小剧场驻演项目，是亚洲大厦目前仍然非常活跃的一部环境式音乐剧。",
    regularPrice: 299,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "票务平台公开页未稳定展示时长，常见票档从 299 元起。",
    ageGuidance: "票务与排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "驻演排期参考页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 8.8,
    popularityReason:
      "它长期和《阿波罗尼亚》一起构成亚洲大厦最有辨识度的小剧场音乐剧入口，适合放在上海页核心列表中。",
    sources: ["票务优惠信息", "人民网", "中文音乐剧演出信息"]
  },
  {
    id: "sh-time-agent",
    title: "音乐剧《时光代理人》",
    type: "Musicals",
    scene: "环人广小剧场",
    venue: "时光剧场",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2023-11-11",
    endDate: "2026-04-06",
    description: "上海当前小剧场驻演列表中场次非常稳定的一部热门音乐剧，兼具二次元受众和驻演体量优势。",
    regularPrice: 280,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "约120分钟，含15分钟中场休息。",
    ageGuidance: "公开票务摘要未给出明确年龄线，低龄观众建议谨慎选择。",
    officialSiteLabel: "驻演排期参考页",
    officialSite: "https://y.saoju.net/yyj/year/2026/city",
    buyLink: "https://y.saoju.net/yyj/year/2026/city",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "它在 2026 年上海驻演音乐剧统计里仍然保持较高场次，是环人广小剧场当下很典型的持续热卖项目。",
    sources: ["活动网（转引票务平台）", "中文音乐剧演出信息"]
  },
  {
    id: "sh-xinji-road",
    title: "音乐剧《辛吉路的画材店》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间2号·好好有戏剧场",
    address: "上海市黄浦区汉口路650号亚洲大厦",
    openingDate: "2023-02-25",
    endDate: "2026-04-06",
    description: "亚洲大厦当前驻演列表中依然活跃的一部原创小剧场音乐剧，适合代表上海的“小而密”的音乐剧供给。",
    regularPrice: 199,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "约90分钟（以现场为准）",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "驻演排期参考页",
    officialSite: "https://y.saoju.net/yyj/year/2026/city",
    buyLink: "https://yanchu.juyoufuli.com/app/performances/29903",
    customerRating: null,
    popularityScore: 8.3,
    popularityReason:
      "长期驻演和稳定排期让它成为上海小剧场音乐剧生态里非常典型的一部作品。",
    sources: ["上海本地宝（转引大麦）", "聚有福利演出页", "中文音乐剧演出信息"]
  },
  {
    id: "sh-0528",
    title: "音乐剧《#0528》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间28号·好好有戏小剧场",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2023-11-18",
    endDate: "2026-04-06",
    description: "上海驻演小剧场音乐剧里场次和认知度都很高的一部作品，在 2026 年驻演统计里仍然保持活跃。",
    regularPrice: 299,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "约120分钟（以现场为准）",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "驻演排期参考页",
    officialSite: "https://y.saoju.net/yyj/year/2026/city",
    buyLink: "https://yanchu.juyoufuli.com/app/performances/29969",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "它在 2026 年上海驻演音乐剧统计里仍然场次靠前，适合用于呈现上海小剧场音乐剧的持续活力。",
    sources: ["上海本地宝（转引大麦）", "聚有福利演出页", "中文音乐剧演出信息"]
  },
  {
    id: "sh-monster",
    title: "音乐剧《怪物》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间18号·谜剧场",
    address: "上海市黄浦区汉口路650号亚洲大厦及环人广剧场群",
    openingDate: "2024-07-05",
    endDate: "2026-05-05",
    description: "上海驻演小剧场音乐剧中体量很大的长跑项目之一，兼具悬疑气质和持续驻演场次。",
    regularPrice: 199,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "90分钟（以现场为准）",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "票务演出页",
    officialSite: "https://yanchu.juyoufuli.com/performances/30015",
    buyLink: "https://yanchu.juyoufuli.com/performances/30015",
    customerRating: null,
    popularityScore: 8.5,
    popularityReason:
      "它在上海驻演音乐剧统计里的场次非常高，是上海小剧场常驻项目中不能忽略的一部。",
    sources: ["上海本地宝（转引大麦）", "中文音乐剧演出信息"]
  },
  {
    id: "sh-blood-doctor",
    title: "音乐剧《嗜血博士》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间1023号·涵金小剧场",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2023-06-08",
    endDate: "2026-05-05",
    description: "2026 年上海驻场演出总表中仍然高频出现的一部小剧场悬疑音乐剧，适合补进上海 current 列表。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "驻演汇总页未稳定展示时长。",
    ageGuidance: "悬疑题材作品，低龄观众建议谨慎选择。",
    officialSiteLabel: "驻场演出汇总页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "它在 2026 年上海驻演汇总里仍保持较高场次，是上海小剧场悬疑音乐剧供给里很难忽略的一部。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-hedwig",
    title: "音乐剧《HEDWIG海德薇》",
    type: "Musicals",
    scene: "北外滩友邦大剧院",
    venue: "北外滩友邦大剧院",
    address: "上海市虹口区东大名路889号",
    openingDate: "2026-05-01",
    endDate: "2026-05-08",
    description: "y.saoju 上已明确列出 2026 年 5 月上海返场档期，是上海 upcoming 音乐剧里辨识度很高的一部。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "单剧排期页未稳定展示时长。",
    ageGuidance: "成人向摇滚音乐剧，低龄观众不建议观看。",
    officialSiteLabel: "单剧排期页",
    officialSite: "https://y.saoju.net/yyj/schedule/1844/",
    buyLink: "https://y.saoju.net/yyj/schedule/1844/",
    customerRating: null,
    popularityScore: 8.6,
    popularityReason:
      "《海德薇》在上海音乐剧观众中辨识度很高，5 月返场档期也让它成为 very strong upcoming choice。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-lizzie",
    title: "音乐剧《LIZZIE丽兹》",
    type: "Musicals",
    scene: "亚洲大厦 · 星空间",
    venue: "星空间11号·MOriginal Box",
    address: "上海市黄浦区人民广场演艺大世界片区",
    openingDate: "2026-03-19",
    endDate: "2026-05-05",
    description: "2026 年上海驻场演出总表里仍在持续上演的小剧场摇滚音乐剧项目，也是上海驻演音乐剧的代表作之一。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "单剧页与汇总页未稳定展示时长。",
    ageGuidance: "摇滚向、成人题材，低龄观众建议谨慎选择。",
    officialSiteLabel: "单剧排期页",
    officialSite: "https://y.saoju.net/yyj/tour/74/",
    buyLink: "https://y.saoju.net/yyj/tour/74/",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "《LIZZIE》是上海小剧场摇滚音乐剧的重要代表作，在 2026 年上海驻演清单里依然保持活跃。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-benjamin-button",
    title: "音乐剧《本杰明·巴顿奇事》",
    type: "Musicals",
    scene: "上海共舞台",
    venue: "上海共舞台",
    address: "上海市黄浦区延安东路433号",
    openingDate: "2026-05-01",
    endDate: "2026-05-10",
    description: "上海 5 月已明确排期的一部重点音乐剧项目，属于今年春季后段比较值得关注的中大型作品。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "排期参考页未稳定展示演出时长。",
    ageGuidance: "排期参考页未稳定展示年龄建议。",
    officialSiteLabel: "演出排期参考页",
    officialSite: "https://y.saoju.net/yyj/",
    buyLink: "https://y.saoju.net/yyj/",
    customerRating: null,
    popularityScore: 8.4,
    popularityReason:
      "它已经在 5 月上海档期中形成较明确存在感，适合补进上海页的 upcoming 音乐剧列表。",
    sources: ["中文音乐剧演出信息"]
  },
  {
    id: "sh-li-qingzhao",
    title: "舞剧《李清照》",
    type: "Dance",
    scene: "上海国际舞蹈中心",
    venue: "上海国际舞蹈中心",
    address: "上海市长宁区虹桥路1650号",
    openingDate: "2026-03-20",
    endDate: "2026-03-22",
    description: "上海国际舞蹈中心十周年系列演出季中最先亮相的重点舞剧项目之一。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开报道未清晰展示演出时长。",
    ageGuidance: "官方公开报道未清晰展示年龄建议。",
    officialSiteLabel: "官方演出季报道",
    officialSite: "https://www.shcn.gov.cn/col6991/20260209/1305335.html",
    buyLink: "https://www.shcn.gov.cn/col6991/20260209/1305335.html",
    customerRating: null,
    popularityScore: 8.2,
    popularityReason:
      "它是上海国际舞蹈中心十周年演出季公开报道中最明确的近期舞剧项目之一。",
    sources: ["上海国际舞蹈中心演出季报道"]
  },
  {
    id: "sh-baihehua",
    title: "芭蕾舞剧《百合花》",
    type: "Dance",
    scene: "上海国际舞蹈中心",
    venue: "上海国际舞蹈中心",
    address: "上海市长宁区虹桥路1650号",
    openingDate: "2026-03-27",
    endDate: "2026-03-29",
    description: "上海国际舞蹈中心十周年系列演出季中的另一部重点舞剧项目，适合作为上海页面的舞蹈代表。",
    regularPrice: null,
    currency: "CNY",
    rushPrice: null,
    lotteryPrice: null,
    standingPrice: null,
    runtime: "官方公开报道未清晰展示演出时长。",
    ageGuidance: "官方公开报道未清晰展示年龄建议。",
    officialSiteLabel: "官方演出季报道",
    officialSite: "https://www.shcn.gov.cn/col6991/20260209/1305335.html",
    buyLink: "https://www.shcn.gov.cn/col6991/20260209/1305335.html",
    customerRating: null,
    popularityScore: 8.1,
    popularityReason:
      "它与《李清照》一起构成了上海国际舞蹈中心近期最清晰、最适合城市页展示的舞剧排期。",
    sources: ["上海国际舞蹈中心演出季报道"]
  }
];

const cityMeta = {
  nyc: {
    label: "New York",
    eyebrowPrefix: "Current New York Stage Guide",
    sectionTitle: "Current New York productions",
    statNote: "current NYC productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Upcoming", "Broadway", "Off-Broadway", "Musicals", "Plays", "Dance"]
  },
  la: {
    label: "Los Angeles",
    eyebrowPrefix: "Current Los Angeles Stage Guide",
    sectionTitle: "Current Los Angeles productions",
    statNote: "current LA productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Upcoming", "Musicals", "Plays", "Dance"]
  },
  houston: {
    label: "Houston",
    eyebrowPrefix: "Current Houston Stage Guide",
    sectionTitle: "Current and upcoming Houston productions",
    statNote: "current and upcoming Houston productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Upcoming", "Musicals", "Plays", "Dance"]
  },
  shanghai: {
    label: "Shanghai",
    eyebrowPrefix: "Current Shanghai Stage Guide",
    sectionTitle: "Current and upcoming Shanghai productions",
    statNote: "current and upcoming Shanghai productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Upcoming", "Musicals", "Plays", "Dance"]
  }
};

const state = {
  search: "",
  activeCategory: "All",
  sortBy: "regular-asc",
  selectedId: null,
  selectedCity: null,
  assistantOpen: false,
  assistantPending: false,
  assistantMessages: [],
  assistantUserProfile: null,
  assistantServerReady: false,
  assistantPosition: null,
  assistantDragging: false,
  assistantPlacement: "up"
};

const assistantPositionStorageKey = "theater-master-assistant-position";

function currentCityMeta() {
  return cityMeta[state.selectedCity] || cityMeta.nyc;
}

function currentCategories() {
  return currentCityMeta().categories;
}

const showCatalog = {
  nyc: nycShows.map((show) => ({ ...show })),
  la: laShows.map((show) => ({ ...show })),
  houston: houstonShows.map((show) => ({ ...show })),
  shanghai: shanghaiShows.map((show) => ({ ...show }))
};

function normalizeShowKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mergeShowRecords(existing, incoming) {
  const merged = { ...existing };

  Object.entries(incoming).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") return;
    merged[key] = value;
  });

  return merged;
}

function applyOfficialSync(payload) {
  if (!payload || !payload.cities) return;

  ["nyc", "la", "houston", "shanghai"].forEach((city) => {
    const cityPayload = payload.cities[city];
    if (!cityPayload || !Array.isArray(cityPayload.upserts)) return;

    const existing = showCatalog[city];
    const indexById = new Map(existing.map((show, index) => [show.id, index]));
    const indexByTitle = new Map(existing.map((show, index) => [normalizeShowKey(show.title), index]));

    cityPayload.upserts.forEach((incoming) => {
      const matchIndex =
        (incoming.id && indexById.get(incoming.id)) ??
        indexByTitle.get(normalizeShowKey(incoming.title));

      if (typeof matchIndex === "number") {
        existing[matchIndex] = mergeShowRecords(existing[matchIndex], incoming);
      } else {
        existing.push(incoming);
      }
    });
  });
}

async function loadOfficialSync() {
  try {
    const response = await fetch(`./data/official-sync.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    const payload = await response.json();
    applyOfficialSync(payload);

    if (state.selectedCity) {
      renderCityShell();
      renderStats();
      applyFilters();
    }
  } catch (error) {
    console.warn("Official sync not loaded", error);
  }
}

function cityTimeZone() {
  if (state.selectedCity === "la") return "America/Los_Angeles";
  if (state.selectedCity === "houston") return "America/Chicago";
  if (state.selectedCity === "shanghai") return "Asia/Shanghai";
  return "America/New_York";
}

function currentGuideDate() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: cityTimeZone(),
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  return formatter.format(new Date());
}

function formattedGuideDate() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: cityTimeZone(),
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date());
}

const assistantProfiles = {
  hamilton: { moods: ["epic"], styles: ["classic", "spectacle"], audiences: ["tourist"], energy: "high" },
  wicked: { moods: ["uplifting", "feel-good"], styles: ["spectacle", "fantasy"], audiences: ["family", "tourist"], energy: "medium" },
  "lion-king": { moods: ["uplifting", "visual"], styles: ["spectacle"], audiences: ["family", "tourist"], energy: "medium" },
  hadestown: { moods: ["romantic", "atmospheric"], styles: ["intimate", "artful"], audiences: ["date", "solo"], energy: "medium" },
  "maybe-happy-ending": { moods: ["healing", "warm", "romantic"], styles: ["intimate"], audiences: ["solo", "date"], energy: "low" },
  "death-becomes-her": { moods: ["funny", "camp"], styles: ["spectacle"], audiences: ["friends", "tourist"], energy: "high" },
  "just-in-time": { moods: ["warm", "nostalgic"], styles: ["music-forward", "new"], audiences: ["date", "tourist"], energy: "medium" },
  "operation-mincemeat": { moods: ["funny", "clever"], styles: ["new"], audiences: ["friends", "solo"], energy: "high" },
  aladdin: { moods: ["light", "visual"], styles: ["spectacle"], audiences: ["family"], energy: "medium" },
  juliet: { moods: ["uplifting", "romantic"], styles: ["pop"], audiences: ["date", "friends"], energy: "high" },
  "book-of-mormon": { moods: ["funny"], styles: ["irreverent"], audiences: ["friends"], contentFlags: ["adult"], energy: "high" },
  "buena-vista-social-club": { moods: ["warm", "uplifting"], styles: ["music-forward"], audiences: ["date", "solo"], energy: "medium" },
  chicago: { moods: ["sharp"], styles: ["classic"], audiences: ["date"], contentFlags: ["adult"], energy: "medium" },
  chess: { moods: ["intense", "romantic"], styles: ["classic", "dramatic"], audiences: ["date", "theater-lover"], energy: "medium" },
  "great-gatsby": { moods: ["romantic"], styles: ["classic", "spectacle"], audiences: ["date", "tourist"], energy: "medium" },
  mj: { moods: ["energetic"], styles: ["dance-forward", "spectacle"], audiences: ["friends", "tourist"], energy: "high" },
  "moulin-rouge": { moods: ["romantic"], styles: ["spectacle"], audiences: ["date", "tourist"], energy: "high" },
  ragtime: { moods: ["thoughtful", "intense"], styles: ["classic", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "medium" },
  six: { moods: ["fun", "uplifting"], styles: ["pop"], audiences: ["friends"], energy: "high" },
  outsiders: { moods: ["intense"], styles: ["dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "high" },
  "death-of-a-salesman": { moods: ["intense"], styles: ["classic", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "dog-day-afternoon": { moods: ["intense"], styles: ["new", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "high" },
  "every-brilliant-thing": { moods: ["healing", "thoughtful"], styles: ["intimate"], audiences: ["solo"], energy: "low" },
  giant: { moods: ["intense", "thoughtful"], styles: ["dramatic", "new"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "harry-potter": { moods: ["visual", "fun"], styles: ["spectacle", "fantasy"], audiences: ["family", "tourist"], energy: "medium" },
  "two-strangers": { moods: ["romantic", "warm"], styles: ["music-forward", "new"], audiences: ["date", "solo"], energy: "medium" },
  "oh-mary": { moods: ["funny", "camp"], audiences: ["friends"], contentFlags: ["adult"], energy: "high" },
  "little-shop": { moods: ["funny", "dark"], styles: ["cult"], audiences: ["friends"], contentFlags: ["dark"], energy: "medium" },
  heathers: { moods: ["funny", "dark"], styles: ["cult", "pop"], audiences: ["friends"], contentFlags: ["dark", "adult"], energy: "high" },
  "spelling-bee": { moods: ["funny", "warm"], styles: ["light"], audiences: ["friends", "solo"], energy: "medium" },
  "play-that-goes-wrong": { moods: ["funny", "light"], styles: ["easy-entry"], audiences: ["friends", "family"], energy: "medium" },
  "friends-musical-parody": { moods: ["funny", "light"], styles: ["nostalgic"], audiences: ["friends", "tourist"], energy: "medium" },
  mexodus: { moods: ["thoughtful", "warm"], styles: ["new", "music-forward"], audiences: ["solo", "theater-lover"], energy: "medium" },
  "gazillion-bubble-show": { moods: ["light", "visual"], styles: ["spectacle"], audiences: ["family"], energy: "low" },
  "drunk-shakespeare": { moods: ["funny"], styles: ["immersive"], audiences: ["friends"], contentFlags: ["adult"], energy: "high" },
  "perfect-crime": { moods: ["dark"], styles: ["thriller"], audiences: ["solo"], contentFlags: ["dark"], energy: "medium" },
  antigone: { moods: ["intense"], styles: ["dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  jesa: { moods: ["thoughtful"], styles: ["intimate", "new"], audiences: ["solo"], energy: "low" },
  touch: { moods: ["thoughtful"], styles: ["intimate"], audiences: ["solo"], energy: "low" },
  trash: { moods: ["experimental"], styles: ["local"], audiences: ["theater-lover"], energy: "medium" },
  "public-charge": { moods: ["thoughtful", "intense"], styles: ["new", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "medium" },
  "ulster-american": { moods: ["funny", "sharp"], audiences: ["friends"], contentFlags: ["adult"], energy: "medium" },
  "ice-queen": { moods: ["light"], styles: ["fantasy"], audiences: ["family"], energy: "medium" },
  "ailey-ii": { moods: ["expressive"], styles: ["dance-forward", "artful"], audiences: ["solo", "date"], energy: "medium" },
  "becky-shaw": { moods: ["sharp", "funny"], styles: ["intimate", "play"], audiences: ["friends", "date"], contentFlags: ["adult"], energy: "medium" },
  "cats-jellicle-ball": { moods: ["energetic", "fun"], styles: ["dance-forward", "immersive"], audiences: ["friends", "tourist"], energy: "high" },
  "the-balusters": { moods: ["funny", "sharp"], styles: ["new", "play"], audiences: ["friends"], energy: "medium" },
  "beaches-a-new-musical": { moods: ["warm", "romantic"], styles: ["new", "music-forward"], audiences: ["date", "solo"], energy: "medium" },
  "fallen-angels": { moods: ["funny", "classic"], styles: ["play", "classic"], audiences: ["date", "friends"], energy: "medium" },
  "fear-of-13": { moods: ["intense", "thoughtful"], styles: ["intimate", "dramatic"], audiences: ["solo", "theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "joe-turners-come-and-gone": { moods: ["thoughtful", "intense"], styles: ["classic", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "the-lost-boys": { moods: ["dark", "energetic"], styles: ["cult", "new"], audiences: ["friends"], contentFlags: ["dark"], energy: "high" },
  proof: { moods: ["thoughtful"], styles: ["intimate", "classic"], audiences: ["solo", "date"], energy: "low" },
  "rocky-horror-show": { moods: ["funny", "camp"], styles: ["cult", "immersive"], audiences: ["friends"], contentFlags: ["adult"], energy: "high" },
  schmigadoon: { moods: ["funny", "light"], styles: ["music-forward", "nostalgic"], audiences: ["friends", "tourist"], energy: "high" },
  titanique: { moods: ["funny", "camp"], styles: ["pop", "cult"], audiences: ["friends"], energy: "high" },
  "la-six": { moods: ["fun", "uplifting"], styles: ["pop"], audiences: ["friends"], energy: "high" },
  "la-beetlejuice": { moods: ["funny", "dark"], styles: ["spectacle"], audiences: ["friends"], contentFlags: ["dark"], energy: "high" },
  "la-amadeus": { moods: ["intense"], styles: ["classic", "dramatic"], audiences: ["theater-lover"], energy: "low" },
  "la-dragon-mama": { moods: ["warm", "thoughtful"], styles: ["intimate"], audiences: ["solo"], energy: "low" },
  "la-kims-convenience": { moods: ["warm", "funny", "healing"], styles: ["easy-entry"], audiences: ["family", "solo"], energy: "low" },
  "la-here-lies-love": { moods: ["energetic"], styles: ["immersive", "dance-forward"], audiences: ["friends"], energy: "high" },
  "la-spamalot": { moods: ["funny", "light"], styles: ["classic"], audiences: ["friends", "family"], energy: "high" },
  "la-tina": { moods: ["uplifting"], styles: ["music-forward"], audiences: ["friends"], energy: "high" },
  "la-mj": { moods: ["energetic"], styles: ["dance-forward", "spectacle"], audiences: ["friends"], energy: "high" },
  "la-master-harold": { moods: ["intense"], styles: ["dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "la-sound-of-music": { moods: ["uplifting"], styles: ["classic"], audiences: ["family"], energy: "medium" },
  "la-mamma-mia": { moods: ["fun", "uplifting"], styles: ["easy-entry"], audiences: ["date", "friends"], energy: "high" },
  "la-hells-kitchen": { moods: ["energetic"], styles: ["new", "music-forward"], audiences: ["friends"], energy: "high" },
  "la-phantom": { moods: ["romantic"], styles: ["classic", "spectacle"], audiences: ["date", "tourist"], energy: "medium" },
  "la-primary-trust": { moods: ["healing", "thoughtful"], styles: ["intimate"], audiences: ["solo"], energy: "low" },
  "la-song-of-the-north": { moods: ["poetic", "visual"], styles: ["spectacle", "artful"], audiences: ["family", "solo"], energy: "low" },
  "la-brigadoon": { moods: ["romantic", "classic"], styles: ["classic", "music-forward"], audiences: ["date", "theater-lover"], energy: "medium" },
  "la-mexodus-pasadena": { moods: ["thoughtful", "warm"], styles: ["new", "music-forward"], audiences: ["solo", "theater-lover"], energy: "medium" },
  "hou-earnest": { moods: ["funny", "light"], styles: ["classic", "play"], audiences: ["date", "friends"], energy: "medium" },
  "hou-broken-wings": { moods: ["thoughtful"], styles: ["dance-forward", "artful"], audiences: ["solo", "date"], energy: "medium" },
  "hou-back-to-the-future": { moods: ["fun", "uplifting"], styles: ["spectacle"], audiences: ["family", "tourist"], energy: "high" },
  "hou-six": { moods: ["fun", "uplifting"], styles: ["pop"], audiences: ["friends", "tourist"], energy: "high" },
  "hou-fences": { moods: ["intense", "thoughtful"], styles: ["classic", "dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "hou-beautiful": { moods: ["warm", "uplifting"], styles: ["music-forward"], audiences: ["date", "friends"], energy: "medium" },
  "hou-evening-with-the-stars": { moods: ["visual"], styles: ["dance-forward", "artful"], audiences: ["solo", "date"], energy: "medium" },
  "hou-giselle": { moods: ["romantic"], styles: ["dance-forward", "classic"], audiences: ["date", "solo"], energy: "low" },
  "sh-lion-boy": { moods: ["visual", "uplifting"], styles: ["spectacle", "fantasy"], audiences: ["family"], energy: "medium" },
  "sh-don-juan": { moods: ["romantic", "dramatic"], styles: ["immersive", "classic"], audiences: ["date"], energy: "medium" },
  "sh-musical-stars-gala": { moods: ["uplifting", "energetic"], styles: ["music-forward", "spectacle"], audiences: ["friends", "tourist"], energy: "high" },
  "sh-maya-hakvoort-concert": { moods: ["warm", "uplifting"], styles: ["music-forward"], audiences: ["solo", "date"], energy: "medium" },
  "sh-we-become-her": { moods: ["thoughtful", "new"], styles: ["intimate", "dramatic"], audiences: ["solo"], energy: "low" },
  "sh-suti-chunxiao": { moods: ["poetic"], styles: ["artful", "dance-forward"], audiences: ["solo", "date"], energy: "low" },
  "sh-kangzhan": { moods: ["intense"], styles: ["dramatic"], audiences: ["theater-lover"], contentFlags: ["heavy"], energy: "medium" },
  "sh-kuangbiao": { moods: ["energetic"], styles: ["new", "dramatic"], audiences: ["friends"], energy: "high" },
  "sh-dangerous-game": { moods: ["dark"], styles: ["thriller"], audiences: ["friends"], contentFlags: ["dark"], energy: "medium" },
  "sh-pianist": { moods: ["thoughtful", "intense"], styles: ["music-forward", "dramatic"], audiences: ["solo", "theater-lover"], contentFlags: ["heavy"], energy: "low" },
  "sh-baima": { moods: ["romantic"], styles: ["classic", "music-forward"], audiences: ["date"], energy: "medium" },
  "sh-last-man": { moods: ["dark"], styles: ["new", "dramatic"], audiences: ["solo"], contentFlags: ["dark"], energy: "medium" },
  "sh-apollonia": { moods: ["romantic", "immersive"], styles: ["intimate", "music-forward"], audiences: ["date", "friends"], energy: "medium" },
  "sh-santa-lucia": { moods: ["romantic", "atmospheric"], styles: ["immersive"], audiences: ["date"], energy: "medium" },
  "sh-time-agent": { moods: ["energetic"], styles: ["pop", "new"], audiences: ["friends"], energy: "high" },
  "sh-xinji-road": { moods: ["warm"], styles: ["new", "intimate"], audiences: ["solo"], energy: "low" },
  "sh-0528": { moods: ["experimental"], styles: ["new", "artful"], audiences: ["theater-lover"], energy: "medium" },
  "sh-monster": { moods: ["dark"], styles: ["suspense"], audiences: ["friends"], contentFlags: ["dark"], energy: "medium" },
  "sh-blood-doctor": { moods: ["dark", "intense"], styles: ["thriller"], audiences: ["friends"], contentFlags: ["dark"], energy: "high" },
  "sh-hedwig": { moods: ["funny", "energetic"], styles: ["cult", "music-forward"], audiences: ["friends"], contentFlags: ["adult"], energy: "high" },
  "sh-lizzie": { moods: ["dark", "energetic"], styles: ["cult", "rock"], audiences: ["friends"], contentFlags: ["dark"], energy: "high" },
  "sh-benjamin-button": { moods: ["warm", "romantic"], styles: ["intimate", "music-forward"], audiences: ["date", "solo"], energy: "low" },
  "sh-li-qingzhao": { moods: ["poetic"], styles: ["dance-forward", "artful"], audiences: ["solo", "date"], energy: "low" },
  "sh-baihehua": { moods: ["poetic"], styles: ["dance-forward", "artful"], audiences: ["solo", "date"], energy: "low" }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return replacements[character];
  });
}

function containsAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function detectAssistantLanguage(text = "") {
  return /[\u3400-\u9fff]/.test(String(text)) ? "zh" : "en";
}

function createAssistantProfile(base = {}) {
  return {
    raw: base.raw || "",
    city: base.city || null,
    companions: base.companions || null,
    budget: base.budget || null,
    budgetCap: typeof base.budgetCap === "number" ? base.budgetCap : null,
    mood: base.mood || null,
    genre: base.genre || null,
    wants: [...new Set(base.wants || [])],
    avoids: [...new Set(base.avoids || [])]
  };
}

function parseBudgetCap(normalized) {
  const match = normalized.match(/(?:under|below|within|budget|不超过|以内|预算)\s*\$?\s*(\d{2,4})/);
  return match ? Number(match[1]) : null;
}

function parseAssistantQuery(input, previousProfile = null) {
  const text = input.trim();
  const normalized = text.toLowerCase();
  const profile = createAssistantProfile(previousProfile || {});
  profile.raw = text;

  if (
    containsAny(normalized, ["new york", "nyc", "manhattan", "broadway", "纽约", "曼哈顿"])
  ) {
    profile.city = "nyc";
  } else if (
    containsAny(normalized, ["los angeles", "la ", " la", "hollywood", "洛杉矶"])
  ) {
    profile.city = "la";
  } else if (
    containsAny(normalized, ["houston", "休斯顿"])
  ) {
    profile.city = "houston";
  } else if (
    containsAny(normalized, ["shanghai", "上海"])
  ) {
    profile.city = "shanghai";
  }

  if (containsAny(normalized, ["solo", "alone", "by myself", "one person", "一个人", "独自"])) {
    profile.companions = "solo";
  } else if (
    containsAny(normalized, ["date", "dating", "couple", "约会", "两个人", "romantic"])
  ) {
    profile.companions = "date";
  } else if (
    containsAny(normalized, ["kids", "child", "children", "family", "孩子", "小孩", "家人"])
  ) {
    profile.companions = "family";
  } else if (containsAny(normalized, ["friends", "group", "朋友", "一群"])) {
    profile.companions = "group";
  }

  if (
    containsAny(normalized, [
      "cheap",
      "budget",
      "under $",
      "under 100",
      "affordable",
      "便宜",
      "预算",
      "省钱",
      "低预算"
    ])
  ) {
    profile.budget = "low";
  } else if (containsAny(normalized, ["premium", "luxury", "best seats", "高预算"])) {
    profile.budget = "high";
  }
  profile.budgetCap = parseBudgetCap(normalized) || profile.budgetCap;

  if (
    containsAny(normalized, [
      "sad",
      "down",
      "bad mood",
      "stressed",
      "tired",
      "心情不太好",
      "心情不好",
      "低落",
      "难过",
      "压力大",
      "疲惫"
    ])
  ) {
    profile.mood = "low";
    profile.wants.push("relaxing");
  } else if (containsAny(normalized, ["celebrate", "party", "excited", "庆祝", "热闹"])) {
    profile.mood = "up";
  }

  if (containsAny(normalized, ["relax", "relaxing", "chill", "light", "放松", "轻松", "治愈", "疗愈"])) {
    profile.wants.push("relaxing");
  }
  if (containsAny(normalized, ["funny", "laugh", "comedy", "搞笑", "喜剧", "好笑"])) {
    profile.wants.push("funny");
  }
  if (containsAny(normalized, ["spectacle", "visual", "big", "epic", "华丽", "震撼", "大制作"])) {
    profile.wants.push("spectacle");
  }
  if (containsAny(normalized, ["classic", "iconic", "经典"])) {
    profile.wants.push("classic");
  }
  if (containsAny(normalized, ["new", "newest", "latest", "upcoming", "新作", "新剧", "刚开演"])) {
    profile.wants.push("new");
  }
  if (containsAny(normalized, ["romantic", "date night", "约会", "浪漫", "氛围好"])) {
    profile.wants.push("romantic");
  }
  if (containsAny(normalized, ["healing", "治愈", "疗愈"])) {
    profile.wants.push("healing");
  }
  if (containsAny(normalized, ["intimate", "small", "小而精", "亲密"])) {
    profile.wants.push("intimate");
  }
  if (containsAny(normalized, ["avoid dark", "不要太沉重", "不要太黑暗", "不要悲伤", "不要太压抑"])) {
    profile.avoids.push("dark");
    profile.avoids.push("heavy");
  }

  if (containsAny(normalized, ["musical", "音乐剧"])) {
    profile.genre = "Musicals";
  } else if (containsAny(normalized, ["dance", "ballet", "舞蹈", "舞剧"])) {
    profile.genre = "Dance";
  } else if (containsAny(normalized, ["play", "drama", "话剧"])) {
    profile.genre = "Plays";
  }

  if (containsAny(normalized, ["family friendly", "kid friendly", "适合孩子", "合家欢"])) {
    profile.wants.push("family");
  }
  if (containsAny(normalized, ["tourist", "第一次来", "第一次看百老汇", "必看"])) {
    profile.wants.push("tourist-friendly");
  }
  if (containsAny(normalized, ["immersive", "沉浸式"])) {
    profile.wants.push("immersive");
  }
  if (containsAny(normalized, ["thoughtful", "深一点", "有思考", "有深度"])) {
    profile.wants.push("thoughtful");
  }

  profile.wants = [...new Set(profile.wants)];
  profile.avoids = [...new Set(profile.avoids)];
  return profile;
}

function showSignals(show) {
  const seeded = assistantProfiles[show.id] || {};
  const signals = {
    moods: new Set(seeded.moods || []),
    styles: new Set(seeded.styles || []),
    audiences: new Set(seeded.audiences || []),
    contentFlags: new Set(seeded.contentFlags || []),
    energy: seeded.energy || "medium"
  };

  const searchable = [show.title, show.description, show.scene, show.venue].join(" ").toLowerCase();
  if (show.type === "Musicals") signals.styles.add("musical");
  if (show.type === "Plays") signals.styles.add("play");
  if (show.type === "Dance") signals.styles.add("dance");
  if (show.scene === "Broadway") signals.styles.add("mainstream");
  if (show.scene === "Off-Broadway") signals.styles.add("intimate");
  if (searchable.includes("immersive")) signals.styles.add("immersive");
  if (searchable.includes("comedy") || searchable.includes("funny")) signals.moods.add("funny");
  if (searchable.includes("family")) signals.audiences.add("family");
  if (searchable.includes("touring") || searchable.includes("broadway")) signals.audiences.add("tourist");
  if (searchable.includes("romantic")) signals.moods.add("romantic");
  if (searchable.includes("spectacle") || searchable.includes("visual")) signals.styles.add("spectacle");
  if (searchable.includes("warm")) signals.moods.add("warm");
  if (searchable.includes("healing")) signals.moods.add("healing");
  if (searchable.includes("thoughtful") || searchable.includes("poetic")) signals.moods.add("thoughtful");
  if (searchable.includes("intimate")) signals.styles.add("intimate");
  if (searchable.includes("thriller") || searchable.includes("dark")) signals.contentFlags.add("dark");
  if (productionStatus(show) === "Upcoming") signals.styles.add("upcoming");
  if (new Date(show.openingDate).getTime() >= new Date("2025-01-01").getTime()) {
    signals.styles.add("new");
  }

  return signals;
}

function recommendShows(profile) {
  const city = profile.city || state.selectedCity || "nyc";
  const shows = showCatalog[city].filter(isVisibleOnGuide);

  const ranked = shows.map((show) => {
    const signals = showSignals(show);
    const reasons = [];
    let score = show.popularityScore * 0.42;
    const matchedTags = [];

    const addReason = (points, reason) => {
      score += points;
      if (points > 0 && !reasons.includes(reason)) {
        reasons.push(reason);
      }
    };
    const addTag = (tag) => {
      if (!matchedTags.includes(tag)) matchedTags.push(tag);
    };

    if (profile.genre === "Musicals" && signals.styles.has("musical")) {
      addReason(2.2, "Matches your preference for a musical.");
      addTag("musical");
    }
    if (profile.genre === "Plays" && signals.styles.has("play")) {
      addReason(2.2, "Matches your preference for a play.");
      addTag("play");
    }
    if (profile.genre === "Dance" && signals.styles.has("dance")) {
      addReason(2.2, "Matches your preference for dance.");
      addTag("dance");
    }

    if (typeof show.regularPrice === "number" && typeof profile.budgetCap === "number") {
      if (show.regularPrice <= profile.budgetCap) {
        addReason(1.8, `Fits within your budget target at ${formatMoney(show.regularPrice, show.currency)}.`);
        addTag("within-budget");
      } else {
        score -= 2.2;
      }
    } else if (profile.budget === "low" && typeof show.regularPrice === "number") {
      if (show.regularPrice <= 70 || (show.currency === "CNY" && show.regularPrice <= 200)) {
        addReason(2.1, `Lower starting price at ${formatMoney(show.regularPrice, show.currency)}.`);
        addTag("budget");
      } else if (show.regularPrice <= 100 || (show.currency === "CNY" && show.regularPrice <= 300)) {
        addReason(1, `Fairly accessible starting price at ${formatMoney(show.regularPrice, show.currency)}.`);
      } else {
        score -= 1.2;
      }
    }

    if (profile.companions === "solo") {
      if (signals.styles.has("intimate") || signals.moods.has("thoughtful") || signals.audiences.has("solo")) {
        addReason(1.6, "Feels like a strong solo-night pick with a more intimate scale.");
        addTag("solo");
      }
      if (signals.moods.has("healing") || signals.moods.has("warm")) {
        addReason(1.6, "Its warmer tone fits a solo night when you want something gentler.");
      }
    }

    if (profile.companions === "date") {
      if (signals.moods.has("romantic") || signals.audiences.has("date") || signals.moods.has("atmospheric")) {
        addReason(2.2, "Strong date-night atmosphere.");
        addTag("date");
      }
    }

    if (profile.companions === "family") {
      if (signals.audiences.has("family") || signals.styles.has("spectacle") || signals.moods.has("visual")) {
        addReason(2.4, "Good family fit with broad appeal or strong visuals.");
        addTag("family");
      }
      if (signals.contentFlags.has("adult") || signals.contentFlags.has("dark")) {
        score -= 3.6;
      }
    }

    if (profile.companions === "group") {
      if (signals.moods.has("funny") || signals.energy === "high" || signals.styles.has("spectacle") || signals.audiences.has("friends")) {
        addReason(1.4, "Works well for a more social group outing.");
        addTag("group");
      }
    }

    if (profile.mood === "low") {
      if (
        signals.moods.has("healing") ||
        signals.moods.has("warm") ||
        signals.moods.has("uplifting") ||
        signals.moods.has("light")
      ) {
        addReason(2.4, "Better fit for lifting the mood without feeling heavy.");
        addTag("mood-lift");
      }
      if (signals.moods.has("funny")) {
        addReason(2, "Comedy energy makes it a good pick when you want to feel better.");
      }
      if (signals.contentFlags.has("dark") || signals.contentFlags.has("heavy") || signals.moods.has("intense")) {
        score -= 2.4;
      }
    }

    if (profile.wants.includes("relaxing")) {
      if (signals.moods.has("healing") || signals.moods.has("light") || signals.moods.has("warm") || signals.moods.has("visual")) {
        addReason(2, "Leans relaxing, easy, or visually soothing.");
        addTag("relaxing");
      }
    }

    if (profile.wants.includes("funny") && signals.moods.has("funny")) {
      addReason(2, "Direct comedy match.");
      addTag("funny");
    }

    if (profile.wants.includes("spectacle") && (signals.styles.has("spectacle") || signals.moods.has("visual"))) {
      addReason(2, "Brings the bigger-scale theatrical wow factor.");
      addTag("spectacle");
    }

    if (profile.wants.includes("classic") && signals.styles.has("classic")) {
      addReason(2, "Strong classic-title match.");
      addTag("classic");
    }

    if (profile.wants.includes("new") && (signals.styles.has("new") || signals.styles.has("upcoming"))) {
      addReason(1.8, "Fits your interest in newer or near-term productions.");
      addTag("new");
    }

    if (profile.wants.includes("romantic") && (signals.moods.has("romantic") || signals.audiences.has("date"))) {
      addReason(2, "Has a more romantic atmosphere.");
      addTag("romantic");
    }

    if (profile.wants.includes("healing") && signals.moods.has("healing")) {
      addReason(1.8, "Its tone is especially aligned with a healing or gentle night.");
      addTag("healing");
    }

    if (profile.wants.includes("intimate") && signals.styles.has("intimate")) {
      addReason(1.8, "Smaller-scale and more intimate in feel.");
      addTag("intimate");
    }

    if (profile.wants.includes("family") && signals.audiences.has("family")) {
      addReason(1.8, "Feels family-friendly and easy to enjoy across ages.");
      addTag("family");
    }

    if (profile.wants.includes("tourist-friendly") && (signals.audiences.has("tourist") || signals.styles.has("spectacle") || signals.styles.has("classic"))) {
      addReason(1.7, "Feels like a strong first-visit or classic city pick.");
      addTag("tourist");
    }

    if (profile.wants.includes("immersive") && signals.styles.has("immersive")) {
      addReason(1.8, "Matches your interest in a more immersive format.");
      addTag("immersive");
    }

    if (profile.wants.includes("thoughtful") && (signals.moods.has("thoughtful") || signals.styles.has("artful"))) {
      addReason(1.7, "Has a more thoughtful, reflective tone.");
      addTag("thoughtful");
    }

    if (profile.avoids.includes("dark") && signals.contentFlags.has("dark")) {
      score -= 2;
    }
    if (profile.avoids.includes("heavy") && signals.contentFlags.has("heavy")) {
      score -= 2;
    }
    if (profile.companions !== "family" && signals.contentFlags.has("adult")) {
      score -= 0.3;
    }

    if (!reasons.length && show.popularityScore >= 9.2) {
      addReason(0.8, "A strong fallback because it is one of the guide's most reliable audience favorites.");
    }

    return { show, score, reasons: reasons.slice(0, 3), matchedTags: matchedTags.slice(0, 5) };
  });

  ranked.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const aPrice = typeof a.show.regularPrice === "number" ? a.show.regularPrice : Number.POSITIVE_INFINITY;
    const bPrice = typeof b.show.regularPrice === "number" ? b.show.regularPrice : Number.POSITIVE_INFINITY;
    return aPrice - bPrice;
  });

  return {
    city,
    parsed: profile,
    recommendations: ranked.slice(0, 5)
  };
}

function profilePills(profile, city) {
  const pills = [];
  if (city === "la") {
    pills.push("Los Angeles");
  } else if (city === "houston") {
    pills.push("Houston");
  } else if (city === "shanghai") {
    pills.push("Shanghai");
  } else {
    pills.push("New York");
  }
  if (profile.companions === "solo") pills.push("Solo outing");
  if (profile.companions === "date") pills.push("Date night");
  if (profile.companions === "family") pills.push("Family / kids");
  if (profile.companions === "group") pills.push("Group");
  if (profile.budget === "low") pills.push("Budget-aware");
  if (typeof profile.budgetCap === "number") pills.push(`Budget <= ${profile.budgetCap}`);
  if (profile.mood === "low") pills.push("Needs a mood lift");
  if (profile.genre === "Musicals") pills.push("Musicals");
  if (profile.genre === "Plays") pills.push("Plays");
  if (profile.genre === "Dance") pills.push("Dance");
  if (profile.wants.includes("relaxing")) pills.push("Relaxing");
  if (profile.wants.includes("funny")) pills.push("Funny");
  if (profile.wants.includes("spectacle")) pills.push("Big spectacle");
  if (profile.wants.includes("classic")) pills.push("Classic");
  if (profile.wants.includes("new")) pills.push("New work");
  if (profile.wants.includes("romantic")) pills.push("Romantic vibe");
  if (profile.wants.includes("family")) pills.push("Family-friendly");
  if (profile.wants.includes("tourist-friendly")) pills.push("Visitor favorite");
  if (profile.wants.includes("immersive")) pills.push("Immersive");
  if (profile.wants.includes("thoughtful")) pills.push("Thoughtful");
  return pills;
}

function assistantGreetingMessage() {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    text:
      "Tell me your city, mood, who you're going with, and what kind of show you want. I can recommend from New York, Los Angeles, Houston, or Shanghai.",
    recommendations: []
  };
}

function assistantTypingMessage() {
  return {
    id: "assistant-typing",
    role: "assistant",
    typing: true
  };
}

function openRecommendedShow(city, showId) {
  state.selectedCity = city;
  state.selectedId = showId;
  state.activeCategory = "All";
  state.search = "";
  document.getElementById("search-input").value = "";
  renderCityShell();
  renderStats();
  applyFilters();
  const show = showCatalog[city].find((item) => item.id === showId);
  renderDetail(show || null);
  window.scrollTo({ top: document.getElementById("city-bar").offsetTop - 12, behavior: "smooth" });
}

function currentAssistantMessages() {
  return state.assistantPending
    ? [...state.assistantMessages, assistantTypingMessage()]
    : state.assistantMessages;
}

function recommendationHighlights(show, reason) {
  const highlights = [];

  if (typeof show.regularPrice === "number") {
    highlights.push(`Starting around ${formatMoney(show.regularPrice, show.currency)}.`);
  }

  if (show.runtime) {
    highlights.push(`Runtime: ${show.runtime}.`);
  }

  if (show.ageGuidance) {
    highlights.push(show.ageGuidance);
  }

  return highlights.slice(0, 3);
}

function recommendationStats(show) {
  return [
    typeof show.regularPrice === "number" ? `From ${formatMoney(show.regularPrice, show.currency)}` : "Price TBA",
    show.customerRating ? `${show.customerRating}/5 audience` : "Editorially curated",
    `Popularity ${show.popularityScore.toFixed(1)}/10`,
    show.runtime
  ].filter(Boolean);
}

function recommendationCardMarkup(show, reason, index, city, language = "en") {
  const highlights = recommendationHighlights(show, reason);
  const priceLabel =
    typeof show.regularPrice === "number" ? formatMoney(show.regularPrice, show.currency) : "Price TBA";
  const labels =
    language === "zh"
      ? {
          summary: "简介",
          why: "推荐理由",
          price: "价格",
          open: "在指南中查看",
          ticket: "购票页面"
        }
      : {
          summary: "Summary",
          why: "Why this fits you",
          price: "Price",
          open: "Open in guide",
          ticket: "Ticket page"
        };

  return `
    <article class="assistant-rec-card">
      <div class="assistant-rec-headline">
        <span class="assistant-rank">#${index + 1}</span>
        <div>
          <h3>${escapeHtml(show.title)}</h3>
          <p class="muted">${escapeHtml(show.scene)} • ${escapeHtml(show.venue)}</p>
        </div>
      </div>
      <p class="assistant-rec-summary"><strong>${labels.summary}:</strong> ${escapeHtml(show.description)}</p>
      <p class="assistant-rec-why"><strong>${labels.why}:</strong> ${escapeHtml(reason || show.description)}</p>
      ${
        highlights.length
          ? `<ul class="assistant-rec-highlights">
              ${highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>`
          : ""
      }
      <p class="assistant-rec-price"><strong>${labels.price}:</strong> ${escapeHtml(priceLabel)}</p>
      <div class="assistant-message-actions">
        <button class="link-btn secondary assistant-open-btn" type="button" data-city="${city}" data-show-id="${show.id}">
          ${labels.open}
        </button>
        <a class="link-btn primary" href="${show.buyLink}" target="_blank" rel="noreferrer">${labels.ticket}</a>
      </div>
    </article>
  `;
}

function formatAssistantParagraphs(text, role) {
  const raw = String(text || "").trim();
  if (!raw) return [""]; 

  if (role === "user") {
    return raw.split(/\n+/).filter(Boolean);
  }

  const normalized = raw.replace(/\n{3,}/g, "\n\n");
  const explicitParagraphs = normalized
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (explicitParagraphs.length > 1) {
    return explicitParagraphs;
  }

  const sentences = normalized
    .replace(/\n+/g, " ")
    .match(/[^.!?。！？]+[.!?。！？]?/g)
    ?.map((part) => part.trim())
    .filter(Boolean);

  if (!sentences || sentences.length <= 2) {
    return [normalized];
  }

  const paragraphs = [];
  for (let index = 0; index < sentences.length; index += 2) {
    paragraphs.push(sentences.slice(index, index + 2).join(" "));
  }
  return paragraphs;
}

function scrollAssistantThreadToLatestReply() {
  const thread = document.getElementById("assistant-thread");
  if (!thread) return;

  const messages = [...thread.querySelectorAll(".assistant-message.assistant-bot")];
  const latestReply = messages.at(-1);

  if (latestReply) {
    latestReply.scrollIntoView({ block: "start" });
    return;
  }

  const anchor = document.getElementById("assistant-thread-end");
  if (anchor) {
    anchor.scrollIntoView({ block: "end" });
  }
}

function renderAssistantThread(forceScroll = false, scrollMode = "reply-start") {
  const thread = document.getElementById("assistant-thread");
  const city = state.selectedCity || "nyc";
  const messages = currentAssistantMessages();

  thread.dataset.empty = String(messages.length === 0);

  thread.innerHTML = messages
    .map((message) => {
      if (message.typing) {
        return `
          <div class="assistant-message assistant-bot">
            <div class="assistant-message-bubble">
              <div class="assistant-message-head">
                <span class="assistant-author">Assistant</span>
              </div>
              <div class="assistant-typing" aria-label="Assistant is typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="assistant-message assistant-${message.role === "user" ? "user" : "bot"}">
          <div class="assistant-message-bubble">
            <div class="assistant-message-head">
              <span class="assistant-author">${message.role === "user" ? "You" : "Assistant"}</span>
            </div>
            <div class="assistant-message-text">${formatAssistantParagraphs(message.text, message.role)
              .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
              .join("")}</div>
            ${
              message.recommendations && message.recommendations.length
                ? message.recommendations
                    .map((item, index) =>
                      recommendationCardMarkup(item.show, item.reason, index, item.city || city, message.language || "en")
                    )
                    .join("")
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("") + '<div id="assistant-thread-end"></div>';

  thread.querySelectorAll(".assistant-open-btn").forEach((button) => {
    button.addEventListener("click", () => {
      openRecommendedShow(button.dataset.city, button.dataset.showId);
    });
  });

  if (forceScroll) {
    requestAnimationFrame(() => {
      if (scrollMode === "reply-start") {
        scrollAssistantThreadToLatestReply();
        return;
      }

      const anchor = document.getElementById("assistant-thread-end");
      anchor?.scrollIntoView({ block: "end" });
    });
  }
}

function pushAssistantMessage(message, scrollMode = "reply-start") {
  state.assistantMessages.push({
    id: crypto.randomUUID(),
    recommendations: [],
    ...message
  });
  renderAssistantThread(true, scrollMode);
}

function syncAssistantStatus() {
  const status = document.getElementById("assistant-ai-status");
  if (!status) return;

  if (state.assistantServerReady) {
    status.textContent = "AI concierge is connected on the server and will answer with the smarter version by default.";
    return;
  }

  status.textContent =
    "Server-side OpenAI is not configured yet. The assistant will temporarily fall back to the local recommendation engine.";
}

function clampAssistantPosition(position) {
  const drawer = document.getElementById("assistant-drawer");
  const launcher = document.getElementById("assistant-launcher");
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widgetWidth = Math.max(drawer.offsetWidth || 420, launcher.offsetWidth || 280);
  const launcherHeight = launcher.offsetHeight || 76;
  const minVisible = 72;

  return {
    left: Math.min(
      Math.max(position.left, -widgetWidth + minVisible),
      viewportWidth - minVisible
    ),
    top: Math.min(
      Math.max(position.top, 0),
      viewportHeight - Math.min(launcherHeight, minVisible)
    )
  };
}

function applyAssistantPosition() {
  const widget = document.getElementById("assistant-widget");

  if (!state.assistantPosition) {
    widget.style.removeProperty("left");
    widget.style.removeProperty("top");
    widget.style.removeProperty("right");
    widget.style.removeProperty("bottom");
    return;
  }

  state.assistantPosition = clampAssistantPosition(state.assistantPosition);
  widget.style.left = `${state.assistantPosition.left}px`;
  widget.style.top = `${state.assistantPosition.top}px`;
  widget.style.right = "auto";
  widget.style.bottom = "auto";
}

function sizeAssistantDrawer() {
  const widget = document.getElementById("assistant-widget");
  const launcher = document.getElementById("assistant-launcher");
  const drawer = document.getElementById("assistant-drawer");

  if (!widget || !launcher || !drawer) return;

  const widgetRect = widget.getBoundingClientRect();
  const launcherHeight = launcher.offsetHeight || 76;
  const gap = 14;
  const viewportPadding = 16;
  const spaceAbove = Math.max(220, widgetRect.top - gap - viewportPadding);
  const spaceBelow = Math.max(
    220,
    window.innerHeight - (widgetRect.top + launcherHeight + gap + viewportPadding)
  );

  state.assistantPlacement = spaceBelow >= spaceAbove ? "down" : "up";
  widget.dataset.placement = state.assistantPlacement;
  drawer.style.maxHeight = `${Math.max(spaceAbove, spaceBelow)}px`;
}

function positionAssistantCloseButton() {
  const drawer = document.getElementById("assistant-drawer");
  const close = document.getElementById("assistant-close");

  if (!drawer || !close || !state.assistantOpen) {
    if (close) {
      close.style.removeProperty("left");
      close.style.removeProperty("top");
    }
    return;
  }

  const closeSize = 40;
  const overlap = 18;
  const left = drawer.offsetLeft + drawer.offsetWidth - closeSize / 2;
  const top = drawer.offsetTop - overlap;

  close.style.left = `${left}px`;
  close.style.top = `${top}px`;
}

function persistAssistantPosition() {
  try {
    if (!state.assistantPosition) return;
    localStorage.setItem(assistantPositionStorageKey, JSON.stringify(state.assistantPosition));
  } catch (error) {
    // Ignore storage write failures.
  }
}

function syncAssistantWidget() {
  const widget = document.getElementById("assistant-widget");
  const launcher = document.getElementById("assistant-launcher");
  const drawer = document.getElementById("assistant-drawer");

  launcher.setAttribute("aria-expanded", String(state.assistantOpen));
  drawer.dataset.open = String(state.assistantOpen);
  widget.dataset.open = String(state.assistantOpen);
  widget.dataset.dragging = String(state.assistantDragging);
  requestAnimationFrame(() => {
    applyAssistantPosition();
    sizeAssistantDrawer();
    positionAssistantCloseButton();
  });
}

function setAssistantOpen(isOpen) {
  state.assistantOpen = isOpen;
  syncAssistantWidget();
}

function loadAssistantPosition() {
  try {
    const saved = localStorage.getItem(assistantPositionStorageKey);
    state.assistantPosition = saved ? JSON.parse(saved) : null;
  } catch (error) {
    state.assistantPosition = null;
  }
}

function resetAssistantConversation() {
  state.assistantMessages = [];
  state.assistantUserProfile = null;
  state.assistantPending = false;
  renderAssistantThread(true, "end");
}

async function fetchAssistantStatus() {
  try {
    const response = await fetch("/api/assistant/status");
    if (!response.ok) {
      throw new Error(`Status failed with ${response.status}`);
    }

    const data = await response.json();
    state.assistantServerReady = Boolean(data.ready);
  } catch (error) {
    state.assistantServerReady = false;
  }

  syncAssistantStatus();
}

function bindAssistantDragging() {
  const widget = document.getElementById("assistant-widget");
  const launcher = document.getElementById("assistant-launcher");
  const drawerHead = document.querySelector(".assistant-drawer-head");
  const dragHandles = [launcher, drawerHead].filter(Boolean);
  let pointerIsDown = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;
  let suppressLauncherClick = false;

  const onPointerMove = (event) => {
    if (!pointerIsDown) return;

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (!state.assistantDragging && Math.hypot(deltaX, deltaY) > 8) {
      state.assistantDragging = true;
      syncAssistantWidget();
    }

    if (!state.assistantDragging) return;

    state.assistantPosition = clampAssistantPosition({
      left: startLeft + deltaX,
      top: startTop + deltaY
    });
    applyAssistantPosition();
    sizeAssistantDrawer();
    positionAssistantCloseButton();
  };

  const onPointerUp = () => {
    pointerIsDown = false;

    if (state.assistantDragging) {
      suppressLauncherClick = true;
      state.assistantDragging = false;
      syncAssistantWidget();
      persistAssistantPosition();
    }

    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  dragHandles.forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      if (handle !== launcher && event.target.closest("button")) return;

      const rect = widget.getBoundingClientRect();
      pointerIsDown = true;
      state.assistantPosition = {
        left: rect.left,
        top: rect.top
      };
      startX = event.clientX;
      startY = event.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      handle.setPointerCapture?.(event.pointerId);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    });
  });

  launcher.addEventListener("click", (event) => {
    if (suppressLauncherClick) {
      suppressLauncherClick = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setAssistantOpen(!state.assistantOpen);
  });
}

function buildLocalAssistantReply(result) {
  const language = detectAssistantLanguage(result.parsed?.raw || "");
  const picks = result.recommendations.slice(0, 3).map(({ show, reasons }) => ({
    show,
    city: result.city,
    reason: reasons[0] || show.description
  }));
  const summary =
    language === "zh"
      ? "我帮你挑了 3 个更贴合这次需求的剧目，你可以直接看看下面的简介、推荐理由和价格。"
      : "I picked 3 shows that best fit this plan, so you can compare the description, reason, and price below.";

  return {
    text: summary,
    recommendations: picks,
    language
  };
}

function buildAiPrompt(query, result) {
  const cityLabel = result.city === "la" ? "Los Angeles" : result.city === "shanghai" ? "Shanghai" : "New York";
  const conversation = state.assistantMessages
    .slice(-6)
    .map((message) => `${message.role === "user" ? "User" : "Assistant"}: ${message.text}`)
    .join("\n");
  const shouldReplyInChinese = detectAssistantLanguage(query) === "zh";

  const candidateBlock = result.recommendations
    .slice(0, 5)
    .map(
      ({ show, reasons, matchedTags, score }, index) =>
        `${index + 1}. ${show.id} | ${show.title} | ${show.type} | ${show.scene} | from ${formatRegularPrice(
          show.regularPrice
        )} | ${show.description} | local score: ${score.toFixed(1)} | matched tags: ${matchedTags.join(", ")} | local reasons: ${reasons.join(" ; ")}`
    )
    .join("\n");

  return `
You are a warm, concise theater recommendation concierge for a site called Theater Master.
Use only the show candidates provided below. Do not invent shows.
The local ranker has already filtered the catalog into the top 5 candidates. Your job is to pick and explain the best 3.
Reply in ${shouldReplyInChinese ? "natural Simplified Chinese" : "natural English"}.
Keep the tone helpful, specific, and easy to skim.
Do not mention internal reasoning, extracted signals, ranking steps, filtering steps, local scores, tags, or how the system works.
Speak directly to the user and move straight into the recommendation.
Then output a JSON object only, with this exact shape:
{
  "reply": "2-4 short paragraphs",
  "recommendations": [
    {"id": "show-id", "reason": "one short reason"},
    {"id": "show-id", "reason": "one short reason"},
    {"id": "show-id", "reason": "one short reason"}
  ]
}

Conversation so far:
${conversation || "No prior conversation."}

Latest user message:
${query}

Structured user profile:
${JSON.stringify(result.parsed, null, 2)}

City context:
${cityLabel}

Top 5 candidate shows:
${candidateBlock}
  `.trim();
}

function parseAiJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("No JSON object returned");
  }

  return JSON.parse(text.slice(start, end + 1));
}

async function fetchAiAssistantReply(query, result) {
  const response = await fetch("/api/assistant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      prompt: buildAiPrompt(query, result),
      city: result.city,
      recommendations: result.recommendations.map(({ show, reasons }) => ({
        id: show.id,
        title: show.title,
        reason: reasons[0] || show.description
      }))
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed with ${response.status}`);
  }

  const data = await response.json();
  const parsed = typeof data.reply === "string" ? data : parseAiJson(data.output_text || "");
  const showMap = new Map(result.recommendations.map((entry) => [entry.show.id, entry.show]));
  const recommendations = (parsed.recommendations || [])
    .map((entry) => {
      const show = showMap.get(entry.id);
      if (!show) return null;
      return {
        show,
        city: result.city,
        reason: entry.reason || show.description
      };
    })
    .filter(Boolean)
    .slice(0, 3);

  return {
    text: parsed.reply || buildLocalAssistantReply(result).text,
    recommendations: recommendations.length ? recommendations : buildLocalAssistantReply(result).recommendations,
    language: detectAssistantLanguage(parsed.reply || result.parsed?.raw || "")
  };
}

async function runAssistantQuery(rawQuery) {
  const query = rawQuery.trim();
  const input = document.getElementById("assistant-input");
  const language = detectAssistantLanguage(query);

  setAssistantOpen(true);

  if (!query) {
    pushAssistantMessage({
      role: "assistant",
      text:
        language === "zh"
          ? "先写一句你的需求吧，比如：我在纽约，一个人，想看一部轻松一点的剧。"
          : 'Add a short sentence first, for example: "I\'m in New York, going solo, and want something relaxing."',
      language
    }, "reply-start");
    return;
  }

  pushAssistantMessage({ role: "user", text: query }, "end");
  input.value = "";
  state.assistantPending = true;
  renderAssistantThread(true, "end");

  const parsed = parseAssistantQuery(query, state.assistantUserProfile);
  state.assistantUserProfile = parsed;
  const result = recommendShows(parsed);
  const fallbackReply = buildLocalAssistantReply(result);

  try {
    const reply = state.assistantServerReady
      ? await fetchAiAssistantReply(query, result)
      : fallbackReply;

    pushAssistantMessage({
      role: "assistant",
      text: reply.text,
      recommendations: reply.recommendations,
      language: reply.language || language
    }, "reply-start");
  } catch (error) {
    pushAssistantMessage({
      role: "assistant",
      text:
        language === "zh"
          ? "刚刚没连上 OpenAI，我先用本地推荐结果继续帮你挑了这 3 部。"
          : "I couldn't reach OpenAI just now, so I used the local recommendation engine for this reply.",
      recommendations: fallbackReply.recommendations,
      language
    }, "reply-start");
  } finally {
    state.assistantPending = false;
    renderAssistantThread(true, "reply-start");
  }

  const topPick = (result.recommendations[0] && result.recommendations[0].show) || null;
  if (topPick) {
    openRecommendedShow(result.city, topPick.id);
  }
}

function productionStatus(show) {
  const guideDate = currentGuideDate();
  if (show.endDate && show.endDate < guideDate) return "Ended";
  return show.openingDate > guideDate ? "Upcoming" : "Current";
}

function sceneClass(scene) {
  if (scene === "Broadway") return "scene-broadway";
  if (scene === "Off-Broadway") return "scene-off";
  if (scene === "Other NYC / immersive") return "scene-immersive";
  if (scene === "Other NYC / local venues") return "scene-local";
  return "scene-generic";
}

function statusClass(show) {
  return productionStatus(show) === "Upcoming" ? "status-upcoming" : "status-current";
}

function isVisibleOnGuide(show) {
  const guideDate = currentGuideDate();
  return !show.endDate || show.endDate >= guideDate;
}

function posterSrc(show) {
  if (show.posterUrl) return show.posterUrl;
  const title = encodeURIComponent(show.title);
  const scene = encodeURIComponent(show.scene);
  const type = encodeURIComponent(show.type);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='420' height='630' viewBox='0 0 420 630'><rect width='420' height='630' fill='%23F1ECE0'/><rect x='18' y='18' width='384' height='594' rx='24' fill='%23FFFDF8' stroke='%23117C0D' stroke-opacity='0.18'/><rect x='18' y='18' width='384' height='96' rx='24' fill='%23FAC75E'/><text x='210' y='76' text-anchor='middle' font-family='Georgia, serif' font-size='42' fill='%23173423'>PLAYBILL</text><text x='210' y='156' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%2359715F'>${scene}</text><text x='210' y='296' text-anchor='middle' font-family='Georgia, serif' font-size='30' fill='%23173423'>${title}</text><text x='210' y='342' text-anchor='middle' font-family='Arial, sans-serif' font-size='22' fill='%23117C0D'>${type}</text><circle cx='210' cy='454' r='86' fill='%23FAC75E' fill-opacity='0.32'/><circle cx='210' cy='454' r='52' fill='%23117C0D' fill-opacity='0.14'/></svg>`;
}

const formatMoney = (value, currency = "USD") =>
  new Intl.NumberFormat(currency === "CNY" ? "zh-CN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2
  }).format(value);

const formatRegularPrice = (value, currency = "USD") =>
  typeof value === "number" ? formatMoney(value, currency) : "Price TBA";

function renderStats() {
  const shows = currentShows();
  const pricedShows = shows.filter((show) => typeof show.regularPrice === "number");
  document.getElementById("show-count").textContent = `${shows.length}`;
  document.getElementById("show-count-note").textContent = currentCityMeta().statNote;
  if (!pricedShows.length) {
    document.getElementById("lowest-standard").textContent = "TBA";
    return;
  }

  const lowestShow = pricedShows.reduce((lowest, show) =>
    show.regularPrice < lowest.regularPrice ? show : lowest
  );

  document.getElementById("lowest-standard").textContent = formatMoney(
    lowestShow.regularPrice,
    lowestShow.currency
  );
}

function renderFilters() {
  const container = document.getElementById("tag-filters");
  container.innerHTML = "";

  currentCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${state.activeCategory === category ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.activeCategory = category;
      applyFilters();
    });
    container.appendChild(button);
  });
}

function filteredShows() {
  const shows = currentShows();
  const query = state.search.trim().toLowerCase();

  let filtered = shows.filter((show) => {
    if (!query) return true;
    const haystack = [
      show.title,
      show.type,
      show.scene,
      show.venue,
      show.description
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  if (state.activeCategory === "Most Popular") {
    filtered = filtered.filter((show) => show.popularityScore >= 9);
  } else if (state.activeCategory === "Newest") {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.openingDate).getTime() - new Date(a.openingDate).getTime()
    );
  } else if (state.activeCategory === "Upcoming") {
    filtered = filtered.filter((show) => productionStatus(show) === "Upcoming");
  } else if (state.activeCategory === "Broadway") {
    filtered = filtered.filter((show) => show.scene === "Broadway");
  } else if (state.activeCategory === "Off-Broadway") {
    filtered = filtered.filter((show) => show.scene === "Off-Broadway");
  } else if (state.activeCategory !== "All") {
    filtered = filtered.filter((show) => show.type === state.activeCategory);
  }

  if (state.activeCategory !== "Newest") {
    filtered = [...filtered].sort((a, b) => {
      if (state.sortBy === "regular-asc") {
        if (typeof a.regularPrice !== "number" && typeof b.regularPrice !== "number") return 0;
        if (typeof a.regularPrice !== "number") return 1;
        if (typeof b.regularPrice !== "number") return -1;
        return a.regularPrice - b.regularPrice;
      }
      if (state.sortBy === "popular-first") return b.popularityScore - a.popularityScore;
      return a.title.localeCompare(b.title);
    });
  }

  return filtered;
}

function renderSummary(filtered) {
  const summary = document.getElementById("result-summary");
  if (!filtered.length) {
    summary.textContent = "No matching production found.";
    return;
  }

  if (state.activeCategory === "Newest") {
    summary.textContent = `${filtered.length} productions, sorted by opening date`;
    return;
  }

  summary.textContent = `${filtered.length} productions`;
}

function currentShows() {
  const shows = showCatalog[state.selectedCity] || showCatalog.nyc;
  return shows.filter(isVisibleOnGuide);
}

function renderList(filtered) {
  const list = document.getElementById("show-list");
  list.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Try a different keyword or section.";
    list.appendChild(empty);
    return;
  }

  filtered.forEach((show) => {
    const card = document.createElement("article");
    card.className = `show-card${state.selectedId === show.id ? " active" : ""}`;
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="card-shell">
        <div class="poster-wrap">
          <img class="poster-image" src="${posterSrc(show)}" alt="${show.title} poster" loading="lazy" />
        </div>
        <div class="card-main">
          <div class="card-top">
            <div>
              <div class="tag-row">
                <span class="tag ${statusClass(show)}">${productionStatus(show)}</span>
                <span class="tag">${show.type}</span>
                <span class="tag ${sceneClass(show.scene)}">${show.scene}</span>
              </div>
              <h3>${show.title}</h3>
              <p class="muted">${show.venue} • ${show.address}</p>
            </div>
            <div class="price-box">
              <strong>${formatRegularPrice(show.regularPrice, show.currency)}</strong>
              <span>${typeof show.regularPrice === "number" ? "regular tickets from" : "official pricing pending"}</span>
            </div>
          </div>
          <p>${show.description}</p>
          <p class="subprice">Opens: ${show.openingDate}</p>
          <div class="meta-list">
            <span class="meta-item">Popularity ${show.popularityScore.toFixed(1)}/10</span>
            <span class="meta-item">${productionStatus(show)}</span>
            <span class="meta-item">${show.customerRating ? `${show.customerRating}/5 customer rating` : "editorial basis only"}</span>
          </div>
        </div>
      </div>
    `;

    const activate = () => {
      state.selectedId = show.id;
      renderList(filtered);
      renderDetail(show);
    };

    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });

    list.appendChild(card);
  });
}

function pricePill(label, value) {
  return `<span class="meta-item"><strong>${label}:</strong> ${value || "Not listed"}</span>`;
}

function renderDetail(show) {
  const detail = document.getElementById("detail-card");
  const detailPanel = document.querySelector(".detail-panel");

  if (!show) {
    detail.innerHTML = `<div class="empty-state">Select a production to see details.</div>`;
    if (detailPanel) {
      detailPanel.scrollTo({ top: 0, behavior: "auto" });
    }
    return;
  }

  detail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Show Detail</p>
      <div class="tag-row">
        <span class="tag ${statusClass(show)}">${productionStatus(show)}</span>
        <span class="tag">${show.type}</span>
        <span class="tag ${sceneClass(show.scene)}">${show.scene}</span>
      </div>
      <h3>${show.title}</h3>
      <p class="muted">${show.venue} • ${show.address}</p>
    </div>

    <div class="detail-poster">
      <img class="detail-poster-image" src="${posterSrc(show)}" alt="${show.title} poster" loading="lazy" />
    </div>

    <div class="detail-section">
      <h4>Ticket Pricing</h4>
      <div class="detail-price-stack">
        <div class="deal-highlight">${typeof show.regularPrice === "number" ? `Regular tickets from ${formatMoney(show.regularPrice, show.currency)}` : "Regular ticket pricing still to be announced"}</div>
        <span class="meta-item">${typeof show.regularPrice === "number" ? `Observed from current official or primary ticket pages around ${formattedGuideDate()}.` : "This production is announced, but a stable public starting price was not surfaced in the official source used here."}</span>
      </div>
      <div class="price-grid">
        ${pricePill("Rush", show.rushPrice)}
        ${pricePill("Lottery", show.lotteryPrice)}
        ${pricePill("Standing room", show.standingPrice)}
      </div>
    </div>

    <div class="detail-section">
      <h4>Show Info</h4>
      <p><strong>Opening date:</strong> ${show.openingDate}</p>
      <p><strong>Runtime:</strong> ${show.runtime}</p>
      <p><strong>Age guidance:</strong> ${show.ageGuidance}</p>
      <p><strong>Official site:</strong> <a href="${show.officialSite}" target="_blank" rel="noreferrer">${show.officialSiteLabel}</a></p>
    </div>

    <div class="detail-section">
      <h4>Popularity Basis</h4>
      <p><strong>Editorial popularity score:</strong> ${show.popularityScore.toFixed(1)}/10</p>
      <p><strong>Customer rating:</strong> ${show.customerRating ? `${show.customerRating}/5` : "No stable public rating surfaced"}</p>
      <p>${show.popularityReason}</p>
    </div>

    <div class="detail-section">
      <h4>What To Expect</h4>
      <p>${show.description}</p>
    </div>

    <div class="detail-section">
      <h4>Links</h4>
      <div class="detail-links">
        <a class="link-btn primary" href="${show.buyLink}" target="_blank" rel="noreferrer">Open ticket page</a>
        <a class="link-btn secondary" href="${show.officialSite}" target="_blank" rel="noreferrer">Open official site</a>
      </div>
    </div>

    <div class="detail-section">
      <h4>Source Basis</h4>
      <div class="source-links">
        ${show.sources.map((label) => `<span class="source-link">${label}</span>`).join("")}
      </div>
    </div>
  `;

  if (detailPanel) {
    detailPanel.scrollTo({ top: 0, behavior: "auto" });
  }
}

function syncDesktopPaneHeight() {
  const layout = document.getElementById("city-layout");

  if (!layout || layout.hidden || window.innerWidth < 981) {
    if (layout) {
      layout.style.removeProperty("--pane-height");
    }
    return;
  }

  const rect = layout.getBoundingClientRect();
  const topInset = Math.max(rect.top, 16);
  const bottomInset = 24;
  const paneHeight = Math.max(420, window.innerHeight - topInset - bottomInset);

  layout.style.setProperty("--pane-height", `${paneHeight}px`);
}

function applyFilters() {
  if (!state.selectedCity) return;
  const filtered = filteredShows();
  const availableCategories = currentCategories();

  if (!availableCategories.includes(state.activeCategory)) {
    state.activeCategory = "All";
  }

  const nextFiltered = filteredShows();

  if (!nextFiltered.some((show) => show.id === state.selectedId) && nextFiltered.length) {
    state.selectedId = null;
  }

  renderFilters();
  renderSummary(nextFiltered);
  renderList(nextFiltered);
  renderDetail(nextFiltered.find((show) => show.id === state.selectedId) || null);
  syncDesktopPaneHeight();
}

function renderCityShell() {
  const citySelector = document.getElementById("city-selector");
  const cityBar = document.getElementById("city-bar");
  const browseControls = document.getElementById("browse-controls");
  const cityLayout = document.getElementById("city-layout");

  if (!state.selectedCity) {
    citySelector.hidden = false;
    cityBar.hidden = true;
    browseControls.hidden = true;
    cityLayout.hidden = true;
    document.getElementById("hero-eyebrow").textContent = `Current Stage Guide • Updated ${formattedGuideDate()}`;
    document.getElementById("source-note-date").textContent = formattedGuideDate();
    return;
  }

  const meta = cityMeta[state.selectedCity];
  citySelector.hidden = true;
  cityBar.hidden = false;
  browseControls.hidden = false;
  cityLayout.hidden = false;
  document.getElementById("current-city-label").textContent = meta.label;
  document.getElementById("hero-eyebrow").textContent = `${meta.eyebrowPrefix} • Updated ${formattedGuideDate()}`;
  document.getElementById("city-section-title").textContent = meta.sectionTitle;
  document.getElementById("source-note-date").textContent = formattedGuideDate();
  syncDesktopPaneHeight();
}

function bindControls() {
  document.getElementById("choose-nyc").addEventListener("click", () => {
    state.selectedCity = "nyc";
    state.selectedId = null;
    state.activeCategory = "All";
    state.search = "";
    document.getElementById("search-input").value = "";
    renderCityShell();
    renderStats();
    applyFilters();
  });

  document.getElementById("choose-la").addEventListener("click", () => {
    state.selectedCity = "la";
    state.selectedId = null;
    state.activeCategory = "All";
    state.search = "";
    document.getElementById("search-input").value = "";
    renderCityShell();
    renderStats();
    applyFilters();
  });

  document.getElementById("choose-houston").addEventListener("click", () => {
    state.selectedCity = "houston";
    state.selectedId = null;
    state.activeCategory = "All";
    state.search = "";
    document.getElementById("search-input").value = "";
    renderCityShell();
    renderStats();
    applyFilters();
  });

  document.getElementById("choose-shanghai").addEventListener("click", () => {
    state.selectedCity = "shanghai";
    state.selectedId = null;
    state.activeCategory = "All";
    state.search = "";
    document.getElementById("search-input").value = "";
    renderCityShell();
    renderStats();
    applyFilters();
  });

  document.getElementById("back-to-cities").addEventListener("click", () => {
    state.selectedCity = null;
    renderCityShell();
  });

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value;
    applyFilters();
  });

  document.getElementById("sort-select").addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    applyFilters();
  });

  document.getElementById("assistant-submit").addEventListener("click", () => {
    runAssistantQuery(document.getElementById("assistant-input").value);
  });

  document.getElementById("assistant-clear-chat").addEventListener("click", () => {
    resetAssistantConversation();
  });

  document.getElementById("assistant-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    if (event.ctrlKey) {
      return;
    }

    if (event.metaKey) {
      event.preventDefault();
      runAssistantQuery(event.target.value);
      return;
    }

    event.preventDefault();
    runAssistantQuery(event.target.value);
  });

  document.getElementById("assistant-close").addEventListener("click", () => {
    setAssistantOpen(false);
  });
}

function initializeAssistant() {
  loadAssistantPosition();
  resetAssistantConversation();
  syncAssistantWidget();
  fetchAssistantStatus();
  bindAssistantDragging();
}

renderCityShell();
renderFilters();
bindControls();
syncAssistantWidget();
initializeAssistant();
loadOfficialSync();
window.addEventListener("resize", syncDesktopPaneHeight);
window.addEventListener("resize", syncAssistantWidget);
window.addEventListener("scroll", syncDesktopPaneHeight, { passive: true });
