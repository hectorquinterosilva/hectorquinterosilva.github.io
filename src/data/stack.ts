export interface Technology {

  name: string;

  category:
    | "Programming"
    | "Backend"
    | "Frontend"
    | "Database"
    | "Cloud"
    | "DevOps"
    | "AI"
    | "Machine Learning"
    | "Data Engineering"
    | "MLOps"
    | "Tools";

  level: "Intermediate" | "Advanced";

  featured: boolean;

}

export const techStack: Technology[] = [

  // Programming

  {
    name: "Python",
    category: "Programming",
    level: "Advanced",
    featured: true
  },

  {
    name: "SQL",
    category: "Programming",
    level: "Advanced",
    featured: true
  },

  {
    name: "JavaScript",
    category: "Programming",
    level: "Intermediate",
    featured: false
  },

  {
    name: "TypeScript",
    category: "Programming",
    level: "Intermediate",
    featured: false
  },

  // Backend

  {
    name: "FastAPI",
    category: "Backend",
    level: "Advanced",
    featured: true
  },

  {
    name: "Flask",
    category: "Backend",
    level: "Advanced",
    featured: false
  },

  {
    name: "Django",
    category: "Backend",
    level: "Advanced",
    featured: false
  },

  {
    name: "REST APIs",
    category: "Backend",
    level: "Advanced",
    featured: true
  },

  {
    name: "JWT Authentication",
    category: "Backend",
    level: "Advanced",
    featured: false
  },

  // Database

  {
    name: "PostgreSQL",
    category: "Database",
    level: "Advanced",
    featured: true
  },

  {
    name: "Redis",
    category: "Database",
    level: "Advanced",
    featured: true
  },

  {
    name: "pgvector",
    category: "Database",
    level: "Advanced",
    featured: true
  },

  {
    name: "MySQL",
    category: "Database",
    level: "Intermediate",
    featured: false
  },

  // Cloud

  {
    name: "AWS",
    category: "Cloud",
    level: "Intermediate",
    featured: true
  },

  {
    name: "Docker",
    category: "Cloud",
    level: "Advanced",
    featured: true
  },

  {
    name: "Kubernetes",
    category: "Cloud",
    level: "Advanced",
    featured: true
  },

  // DevOps

  {
    name: "Git",
    category: "DevOps",
    level: "Advanced",
    featured: true
  },

  {
    name: "GitHub Actions",
    category: "DevOps",
    level: "Intermediate",
    featured: true
  },

  {
    name: "CI/CD",
    category: "DevOps",
    level: "Intermediate",
    featured: false
  },

  // AI

  {
    name: "LLMs",
    category: "AI",
    level: "Advanced",
    featured: true
  },

  {
    name: "RAG",
    category: "AI",
    level: "Advanced",
    featured: true
  },

  {
    name: "Embeddings",
    category: "AI",
    level: "Advanced",
    featured: true
  },

  {
    name: "Semantic Search",
    category: "AI",
    level: "Advanced",
    featured: false
  },

  {
    name: "Prompt Engineering",
    category: "AI",
    level: "Advanced",
    featured: false
  },

  {
    name: "LangChain",
    category: "AI",
    level: "Intermediate",
    featured: false
  },

  {
    name: "OpenAI API",
    category: "AI",
    level: "Advanced",
    featured: true
  },

  {
    name: "Anthropic API",
    category: "AI",
    level: "Intermediate",
    featured: false
  },

  {
    name: "Gemini API",
    category: "AI",
    level: "Intermediate",
    featured: false
  },

  // Machine Learning

  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    level: "Advanced",
    featured: true
  },

  {
    name: "TensorFlow",
    category: "Machine Learning",
    level: "Intermediate",
    featured: false
  },

  {
    name: "XGBoost",
    category: "Machine Learning",
    level: "Intermediate",
    featured: false
  },

  {
    name: "Pandas",
    category: "Machine Learning",
    level: "Advanced",
    featured: true
  },

  {
    name: "NumPy",
    category: "Machine Learning",
    level: "Advanced",
    featured: false
  },

  // Data Engineering

  {
    name: "ETL Pipelines",
    category: "Data Engineering",
    level: "Intermediate",
    featured: true
  },

  {
    name: "Feature Engineering",
    category: "Data Engineering",
    level: "Intermediate",
    featured: false
  },

  // MLOps

  {
    name: "MLflow",
    category: "MLOps",
    level: "Intermediate",
    featured: false
  },

  {
    name: "Model Deployment",
    category: "MLOps",
    level: "Intermediate",
    featured: false
  },

  // Tools

  {
    name: "Linux",
    category: "Tools",
    level: "Advanced",
    featured: true
  },

  {
    name: "VS Code",
    category: "Tools",
    level: "Advanced",
    featured: false
  }

];