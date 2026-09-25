export interface Certification {
  title: string;
  issuer: string;
  category: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const certifications: Certification[] = [
  {
    title: "Software Analysis and Development",
    issuer: "SENA",
    category: "Software Engineering",
    status: "Completed"
  },

  {
    title: "Python Programming",
    issuer: "Coursera",
    category: "Programming",
    status: "Completed"
  },

  {
    title: "Git & GitHub",
    issuer: "Coursera",
    category: "Development",
    status: "Completed"
  },

  {
    title: "TensorFlow & Deep Learning",
    issuer: "Coursera",
    category: "Machine Learning",
    status: "Completed"
  },

  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Cloud",
    status: "Planned"
  },

  {
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    category: "Cloud",
    status: "Planned"
  },

  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    category: "Cloud",
    status: "Planned"
  },

  {
    title: "Docker Certified Associate",
    issuer: "Docker",
    category: "Cloud",
    status: "Planned"
  },

  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    category: "Cloud",
    status: "Planned"
  },

  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    category: "Infrastructure",
    status: "Planned"
  },

  {
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    category: "AI",
    status: "Planned"
  },

  {
    title: "LlamaIndex",
    issuer: "LlamaIndex",
    category: "AI",
    status: "Planned"
  },

  {
    title: "OpenAI API Developer",
    issuer: "OpenAI",
    category: "AI",
    status: "Planned"
  },

  {
    title: "Redis for AI Applications",
    issuer: "Redis",
    category: "AI",
    status: "Planned"
  },

  {
    title: "Prometheus Fundamentals",
    issuer: "Linux Foundation",
    category: "Observability",
    status: "Planned"
  },

  {
    title: "Grafana Fundamentals",
    issuer: "Grafana Labs",
    category: "Observability",
    status: "Planned"
  }
];