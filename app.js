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
  }
];

const laShows = [
  {
    id: "la-beetlejuice",
    title: "Beetlejuice",
    type: "Musicals",
    scene: "Broadway in Hollywood",
    venue: "Pantages Theatre",
    address: "6233 Hollywood Boulevard, Los Angeles",
    openingDate: "2026-03-10",
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
  }
];

const cityMeta = {
  nyc: {
    label: "New York",
    eyebrow: "Current New York Stage Guide • Updated March 17, 2026",
    sectionTitle: "Current New York productions",
    statNote: "current NYC productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Broadway", "Off-Broadway", "Musicals", "Plays", "Dance"]
  },
  la: {
    label: "Los Angeles",
    eyebrow: "Current Los Angeles Stage Guide • Updated March 17, 2026",
    sectionTitle: "Current Los Angeles productions",
    statNote: "current LA productions in this guide",
    categories: ["All", "Most Popular", "Newest", "Musicals", "Plays", "Dance"]
  }
};

const state = {
  search: "",
  activeCategory: "All",
  sortBy: "regular-asc",
  selectedId: null,
  selectedCity: null
};

function currentCityMeta() {
  return cityMeta[state.selectedCity] || cityMeta.nyc;
}

function currentCategories() {
  return currentCityMeta().categories;
}

function sceneClass(scene) {
  if (scene === "Broadway") return "scene-broadway";
  if (scene === "Off-Broadway") return "scene-off";
  if (scene === "Other NYC / immersive") return "scene-immersive";
  if (scene === "Other NYC / local venues") return "scene-local";
  return "scene-generic";
}

function posterSrc(show) {
  if (show.posterUrl) return show.posterUrl;
  const title = encodeURIComponent(show.title);
  const scene = encodeURIComponent(show.scene);
  const type = encodeURIComponent(show.type);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='420' height='630' viewBox='0 0 420 630'><rect width='420' height='630' fill='%23F1ECE0'/><rect x='18' y='18' width='384' height='594' rx='24' fill='%23FFFDF8' stroke='%23117C0D' stroke-opacity='0.18'/><rect x='18' y='18' width='384' height='96' rx='24' fill='%23FAC75E'/><text x='210' y='76' text-anchor='middle' font-family='Georgia, serif' font-size='42' fill='%23173423'>PLAYBILL</text><text x='210' y='156' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%2359715F'>${scene}</text><text x='210' y='296' text-anchor='middle' font-family='Georgia, serif' font-size='30' fill='%23173423'>${title}</text><text x='210' y='342' text-anchor='middle' font-family='Arial, sans-serif' font-size='22' fill='%23117C0D'>${type}</text><circle cx='210' cy='454' r='86' fill='%23FAC75E' fill-opacity='0.32'/><circle cx='210' cy='454' r='52' fill='%23117C0D' fill-opacity='0.14'/></svg>`;
}

const formatMoney = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 === 0 ? 0 : 2
  }).format(value);

function renderStats() {
  const shows = currentShows();
  document.getElementById("show-count").textContent = `${shows.length}`;
  document.getElementById("show-count-note").textContent = currentCityMeta().statNote;
  document.getElementById("lowest-standard").textContent = formatMoney(
    Math.min(...shows.map((show) => show.regularPrice))
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
  } else if (state.activeCategory === "Broadway") {
    filtered = filtered.filter((show) => show.scene === "Broadway");
  } else if (state.activeCategory === "Off-Broadway") {
    filtered = filtered.filter((show) => show.scene === "Off-Broadway");
  } else if (state.activeCategory !== "All") {
    filtered = filtered.filter((show) => show.type === state.activeCategory);
  }

  if (state.activeCategory !== "Newest") {
    filtered = [...filtered].sort((a, b) => {
      if (state.sortBy === "regular-asc") return a.regularPrice - b.regularPrice;
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
  return state.selectedCity === "la" ? laShows : nycShows;
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
                <span class="tag">${show.type}</span>
                <span class="tag ${sceneClass(show.scene)}">${show.scene}</span>
              </div>
              <h3>${show.title}</h3>
              <p class="muted">${show.venue} • ${show.address}</p>
            </div>
            <div class="price-box">
              <strong>${formatMoney(show.regularPrice)}</strong>
              <span>regular tickets from</span>
            </div>
          </div>
          <p>${show.description}</p>
          <p class="subprice">Opens: ${show.openingDate}</p>
          <div class="meta-list">
            <span class="meta-item">Popularity ${show.popularityScore.toFixed(1)}/10</span>
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
      <h3>${show.title}</h3>
      <p class="muted">${show.type} • ${show.scene}</p>
      <p class="muted">${show.venue} • ${show.address}</p>
    </div>

    <div class="detail-poster">
      <img class="detail-poster-image" src="${posterSrc(show)}" alt="${show.title} poster" loading="lazy" />
    </div>

    <div class="detail-section">
      <h4>Ticket Pricing</h4>
      <div class="detail-price-stack">
        <div class="deal-highlight">Regular tickets from ${formatMoney(show.regularPrice)}</div>
        <span class="meta-item">Observed from current official or primary ticket pages around March 17, 2026.</span>
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
    document.getElementById("hero-eyebrow").textContent = "Current Stage Guide • Updated March 17, 2026";
    return;
  }

  const meta = cityMeta[state.selectedCity];
  citySelector.hidden = true;
  cityBar.hidden = false;
  browseControls.hidden = false;
  cityLayout.hidden = false;
  document.getElementById("current-city-label").textContent = meta.label;
  document.getElementById("hero-eyebrow").textContent = meta.eyebrow;
  document.getElementById("city-section-title").textContent = meta.sectionTitle;
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
}

renderCityShell();
renderFilters();
bindControls();
window.addEventListener("resize", syncDesktopPaneHeight);
window.addEventListener("scroll", syncDesktopPaneHeight, { passive: true });
