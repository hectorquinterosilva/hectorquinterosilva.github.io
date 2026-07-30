export interface Project {

  id: number;

  title: string;

  category: string;

  level: number;

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  status: "Planned" | "In Progress" | "Completed";

  featured: boolean;

  github?: string;

  demo?: string;

  technologies: string[];

  description: string;

}

export const projects: Project[] = [

  {

    id: 1,

    title: "AI API Gateway",

    category: "Backend",

    level: 1,

    difficulty: "Intermediate",

    status: "In Progress",

    featured: true,

    technologies: [

      "Python",

      "FastAPI",

      "PostgreSQL",

      "SQLAlchemy",

      "Docker",

      "Alembic",

      "Redis"

    ],

    description:
      "Production-ready AI Gateway supporting authentication, database persistence, scalable architecture and multiple AI providers."

  },

  {

    id: 2,

    title: "Task Manager API",

    category: "Backend",

    level: 1,

    difficulty: "Beginner",

    status: "Planned",

    featured: false,

    technologies: [

      "Python",

      "FastAPI",

      "PostgreSQL"

    ],

    description:
      "REST API implementing CRUD operations, authentication, pagination and production-ready architecture."

  },

  {

    id: 3,

    title: "Authentication Service",

    category: "Backend",

    level: 1,

    difficulty: "Beginner",

    status: "Planned",

    featured: false,

    technologies: [

      "Python",

      "JWT",

      "FastAPI"

    ],

    description:
      "Reusable authentication microservice with JWT, refresh tokens and role-based authorization."

  }

];