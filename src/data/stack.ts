export interface Technology {

  name: string;

  category:
    | "Programming"
    | "Backend"
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

  // ==========================================
  // PROGRAMMING
  // ==========================================
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
    name: "TypeScript",
    category: "Programming",
    level: "Intermediate",
    featured: false // Usado para dashboards (ej. AI Control Center)
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "Intermediate",
    featured: false
  },

  // ==========================================
  // BACKEND
  // ==========================================
  {
    name: "FastAPI",
    category: "Backend",
    level: "Advanced",
    featured: true
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
    featured: true
  },
  {
    name: "Flask",
    category: "Backend",
    level: "Intermediate",
    featured: false
  },
  {
    name: "Django",
    category: "Backend",
    level: "Intermediate",
    featured: false
  },

  // ==========================================
  // DATABASE & STORAGE
  // ==========================================
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Advanced",
    featured: true
  },
  {
    name: "pgvector",
    category: "Database",
    level: "Advanced",
    featured: true // Crucial para RAG y Semantic Search
  },
  {
    name: "Redis",
    category: "Database",
    level: "Advanced",
    featured: true // Caché y colas de tareas
  },
  {
    name: "MySQL",
    category: "Database",
    level: "Intermediate",
    featured: false
  },

  // ==========================================
  // CLOUD & INFRASTRUCTURE
  // ==========================================
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
  {
    name: "AWS",
    category: "Cloud",
    level: "Advanced",
    featured: true
  },
  {
    name: "Terraform",
    category: "Cloud",
    level: "Intermediate",
    featured: true // IaC para el producto #19
  },

  // ==========================================
  // DEVOPS & OBSERVABILITY
  // ==========================================
  {
    name: "Git",
    category: "DevOps",
    level: "Advanced",
    featured: true
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    level: "Advanced",
    featured: true
  },
  {
    name: "Prometheus",
    category: "DevOps",
    level: "Intermediate",
    featured: true
  },
  {
    name: "Grafana",
    category: "DevOps",
    level: "Intermediate",
    featured: true
  },
  {
    name: "CI/CD",
    category: "DevOps",
    level: "Advanced",
    featured: false
  },

  // ==========================================
  // AI & LLM ENGINEERING
  // ==========================================
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
    name: "Prompt Engineering",
    category: "AI",
    level: "Advanced",
    featured: true
  },
  {
    name: "LangChain",
    category: "AI",
    level: "Advanced",
    featured: true
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
  {
    name: "Semantic Search",
    category: "AI",
    level: "Advanced",
    featured: false
  },

  // ==========================================
  // MACHINE LEARNING & DATA
  // ==========================================
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    level: "Advanced",
    featured: true
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
  {
    name: "XGBoost",
    category: "Machine Learning",
    level: "Intermediate",
    featured: false
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    level: "Intermediate",
    featured: false
  },
  {
    name: "ETL Pipelines",
    category: "Data Engineering",
    level: "Advanced",
    featured: true
  },
  {
    name: "Feature Engineering",
    category: "Data Engineering",
    level: "Intermediate",
    featured: false
  },

  // ==========================================
  // MLOPS
  // ==========================================
  {
    name: "MLflow",
    category: "MLOps",
    level: "Intermediate",
    featured: true // Para el producto #13
  },
  {
    name: "Model Deployment",
    category: "MLOps",
    level: "Advanced",
    featured: true
  },

  // ==========================================
  // TOOLS
  // ==========================================
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