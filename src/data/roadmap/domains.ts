export interface Domain {

  id: number;

  title: string;

  description: string;

  order: number;

}

export const roadmapDomains: Domain[] = [

  {
    id: 1,
    title: "Backend Engineering",
    description:
      "REST APIs, authentication, distributed services, enterprise architectures and scalable backend systems.",
    order: 1
  },

  {
    id: 2,
    title: "Data Engineering",
    description:
      "ETL pipelines, orchestration, data lakes, streaming platforms and analytics infrastructure.",
    order: 2
  },

  {
    id: 3,
    title: "Machine Learning",
    description:
      "Classical Machine Learning, feature engineering, model training and deployment.",
    order: 3
  },

  {
    id: 4,
    title: "Deep Learning",
    description:
      "Neural networks, computer vision, NLP and advanced deep learning systems.",
    order: 4
  },

  {
    id: 5,
    title: "LLM Engineering",
    description:
      "Prompt engineering, embeddings, vector databases, RAG and AI agents.",
    order: 5
  },

  {
    id: 6,
    title: "AI Platform Engineering",
    description:
      "Enterprise AI platforms, orchestration, gateways, model serving and production AI.",
    order: 6
  },

  {
    id: 7,
    title: "Cloud Engineering",
    description:
      "AWS, Kubernetes, Docker, Infrastructure as Code and cloud-native systems.",
    order: 7
  },

  {
    id: 8,
    title: "DevOps & MLOps",
    description:
      "CI/CD, observability, monitoring, deployment automation and ML pipelines.",
    order: 8
  },

  {
    id: 9,
    title: "Distributed Systems",
    description:
      "Messaging, event-driven architectures, scalability and fault tolerance.",
    order: 9
  },

  {
    id: 10,
    title: "Enterprise Architecture",
    description:
      "Large-scale software architecture, governance and platform strategy.",
    order: 10
  },

  {
    id: 11,
    title: "Capstone Products",
    description:
      "Complete enterprise-grade AI products integrating all previous domains.",
    order: 11
  }

];