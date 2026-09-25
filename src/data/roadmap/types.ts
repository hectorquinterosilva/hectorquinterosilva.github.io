export type Status =
  | "Planned"
  | "In Progress"
  | "Completed";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Product {

  id: number;

  slug: string;

  title: string;

  module: string;

  category: string;

  level: number;

  order: number;

  featured: boolean;

  status: Status;

  difficulty: Difficulty;

  estimatedWeeks: number;

  github?: string;

  demo?: string;

  documentation?: string;

  thumbnail?: string;

  summary: string;

  businessProblem: string;

  solution: string;

  architecture: string;

  technologies: string[];

  skills: string[];

  dependsOn: number[];

}