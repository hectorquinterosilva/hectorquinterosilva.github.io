export interface Experience {

  company: string;

  role: string;

  period: string;

  location: string;

  description: string[];

  technologies: string[];

}

export const experience: Experience[] = [

  {

    company: "Self-employed",

    role: "AI Platform Engineer",

    period: "Aug 2021 – Present",

    location: "Remote · Colombia",

    description: [

      "Design and build production-ready AI platforms, scalable backend systems, and cloud-native infrastructure.",

      "Develop secure backend architectures using Python, FastAPI, PostgreSQL, Redis, Docker, Kubernetes and cloud technologies.",

      "Build LLM Gateway APIs, Prompt Management systems, Retrieval-Augmented Generation (RAG) pipelines, embedding services and enterprise AI platforms.",

      "Develop Machine Learning, Data Engineering and MLOps projects including forecasting, recommendation systems, anomaly detection and AI infrastructure.",

      "Transform complex AI capabilities into scalable, reliable and developer-friendly production platforms."

    ],

    technologies: [

      "Python",

      "FastAPI",

      "PostgreSQL",

      "Redis",

      "Docker",

      "Kubernetes",

      "AWS",

      "Git",

      "GitHub Actions",

      "LangChain",

      "OpenAI",

      "Anthropic",

      "Gemini",

      "RAG",

      "Machine Learning"

    ]

  },

  {

    company: "Mister Wings",

    role: "Systems & Database Administrator",

    period: "Feb 2024 – Sep 2025",

    location: "Cali, Colombia",

    description: [

      "Managed production IT systems ensuring availability, reliability and operational stability.",

      "Administered databases while maintaining data integrity, consistency and secure information management.",

      "Investigated technical incidents using structured troubleshooting methodologies.",

      "Worked with production infrastructure, networking, Linux environments and monitoring systems.",

      "Improved operational efficiency through analytical problem solving and continuous process optimization."

    ],

    technologies: [

      "Linux",

      "Networking",

      "SQL",

      "PostgreSQL",

      "System Administration"

    ]

  }

];