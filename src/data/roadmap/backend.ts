import type { Product } from "./types";

export const backendProducts: Product[] = [
  {
    id: 1,

    slug: "ai-api-gateway",

    title: "AI API Gateway",

    module: "Backend Engineering",

    category: "Enterprise APIs",

    level: 1,

    order: 1,

    featured: true,

    status: "Completed",

    difficulty: "Intermediate",

    estimatedWeeks: 4,

    github: "https://github.com/hectorquinterosilva/ai-api-gateway",

    summary:
      "Production-ready gateway providing a unified interface for multiple Large Language Model providers.",

    businessProblem:
      "Modern AI applications often integrate several LLM providers. Each provider exposes different APIs, authentication methods, pricing models and request formats, increasing complexity and maintenance costs.",

    solution:
      "Build a modular AI Gateway capable of authenticating users, routing requests, abstracting provider implementations, persisting conversations and exposing a unified REST API.",

    architecture:
      "FastAPI · PostgreSQL · Redis · Docker",

    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy",
      "Alembic",
      "Docker"
    ],

    skills: [
      "Backend Architecture",
      "REST APIs",
      "Authentication",
      "Database Design",
      "Containerization"
    ],

    dependsOn: []
  }
];