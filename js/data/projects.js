/**
 * Projects shown in the "My work" modal.
 * To add a project, append an object to this list. Every field except
 * `title` and `description` is optional.
 *
 * {
 *   title:       "Project name",
 *   meta:        "Personal project · Web",       // small line under the title
 *   status:      "in-development" | "coming-soon", // shows a badge
 *   image:       "assets/img/projects/name.webp",
 *   video:       "assets/video/name.mp4",         // short muted loop; replaces image
 *   description: "One or two sentences: what it is and what it solves.",
 *   highlights:  ["Notable technical point", "..."],
 *   tags:        ["React", "Python"],
 *   links:       { live: "https://...", code: "https://github.com/..." }
 * }
 */
const PROJECTS = [
  {
    title: "Medieval Warlords",
    meta: "Personal project · Android / PC",
    status: "in-development",
    video: "assets/video/medieval-warlords.mp4",
    description:
      "A 2D strategy game where you lead your king into battle, build an army and take the enemy castle. " +
      "Quick 3–5 minute matches, a campaign against increasingly smarter AI, and local multiplayer.",
    highlights: [
      "Serverless LAN multiplayer: ENet host/guest, UDP discovery and state replication",
      "Data-driven design: units, levels and balance live in Godot resources, not code",
      "Statically typed GDScript, unit-tested with GUT",
      "Localized in English and Spanish",
    ],
    tags: ["Godot 4", "GDScript", "ENet", "GUT", "Android", "PC"],
  },
  {
    title: "SeniorVA",
    meta: "Professional project · Lead developer · Web / Android / iOS",
    status: "coming-soon",
    description:
      "Social services app for the Valladolid City Council (Spain), helping senior citizens discover " +
      "and book activities. I developed it end to end as a single hybrid codebase for the web, Android and iOS.",
    highlights: [
      "Built activity browsing and booking, with online payments through Redsys",
      "Designed the gamification features: trivia, a Wordle-style game and a geolocated scavenger hunt",
      "Implemented push notifications and in-app surveys",
      "Set up dev, pre-production and production builds, with beta releases via Firebase App Distribution",
    ],
    tags: ["Angular", "Ionic", "Capacitor", "TypeScript", "Drupal", "Firebase"],
  },
  {
    title: "TRADIS",
    meta: "Professional project · Backend developer · Web / Mobile API",
    description:
      "Booking system for a city council in Spain that lets coach operators reserve time slots at bus stops, " +
      "either from a web back office or a mobile app. I worked mainly on the Spring Boot backend " +
      "and contributed to the existing Angular front end.",
    highlights: [
      "Availability engine that computes free time slots per stop from configurable schedules and day types",
      "Booking business rules: creation, changes, cancellation deadlines and blocked users",
      "REST API for the mobile app, secured with OAuth2 / OpenID Connect (Keycloak) and JWT",
      "PDF booking vouchers and automated confirmation and cancellation emails",
      "Integration tests against SQL Server with Testcontainers; schema migrations with Liquibase",
    ],
    tags: ["Java", "Spring Boot", "Angular", "SQL Server", "Keycloak", "Liquibase", "Docker"],
  },
];
