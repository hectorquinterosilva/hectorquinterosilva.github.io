export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "Self-employed",
    position: "AI Platform Engineer",
    period: "Nov 2025 – Present",
    location: "Remote · Colombia",
    description:
      "Design and build scalable AI platforms, production-ready backend systems and cloud-native infrastructure. Focused on AI backend architecture, LLM platforms, RAG, MLOps and enterprise AI services.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "LLMs",
      "RAG",
      "LangChain"
    ]
  },

  {
    company: "Mister Wings",
    position: "Systems & Database Administrator",
    period: "Feb 2024 – Sep 2025",
    location: "Cali, Colombia",
    description:
      "Managed IT infrastructure and databases, monitored production systems, solved technical incidents and ensured operational stability while working with real production environments.",
    technologies: [
      "Linux",
      "SQL",
      "PostgreSQL",
      "Networking",
      "System Administration"
    ]
  },

  {
    company: "Self-employed",
    position: "Python Developer",
    period: "Aug 2021 – Oct 2025",
    location: "Remote",
    description:
      "Developed personal backend projects using Python, REST APIs, automation, data processing and software engineering best practices while building the foundation for AI Platform Engineering.",
    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "Pandas",
      "NumPy",
      "Git"
    ]
  }
];