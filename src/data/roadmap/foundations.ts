import type { Product } from "./types";

export const foundationsProducts: Product[] = [
  {
    id: 1,

    slug: "python-task-manager",

    title: "Python Task Manager CLI",

    module: "Python Foundations",

    category: "CLI Tools",

    level: 1,

    order: 1,

    featured: false,

    status: "Completed",

    difficulty: "Beginner",

    estimatedWeeks: 1,

    github: "https://github.com/hectorquinterosilva/python-task-manager",

    summary:
      "A minimal command-line task manager with SQLite persistence, built with the Python standard library only.",

    businessProblem:
      "Developers and knowledge workers need a lightweight way to track tasks directly from the terminal, without depending on external services, cloud accounts or heavyweight desktop applications.",

    solution:
      "A standalone CLI exposing add, list, show, done, todo, edit and delete commands, with SQLite persistence, priority levels, status filtering, cross-platform storage paths and semantic exit codes.",

    architecture:
      "Python · SQLite · argparse",

    technologies: [
      "Python",
      "SQLite",
      "argparse",
      "pytest"
    ],

    skills: [
      "Python",
      "CLI Design",
      "SQL",
      "Testing"
    ],

    dependsOn: []
  }
];
