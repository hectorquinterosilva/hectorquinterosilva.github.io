export interface CurriculumModule {

  id:number;

  title:string;

  description:string;

  color:string;

  projects:number;

}

export const curriculum:CurriculumModule[]=[

{
id:1,
title:"Backend Engineering",
description:"Production backend systems and enterprise APIs.",
color:"#2563eb",
projects:24
},

{
id:2,
title:"Data Engineering",
description:"Modern data platforms and pipelines.",
color:"#0ea5e9",
projects:18
},

{
id:3,
title:"Machine Learning",
description:"Business-oriented Machine Learning systems.",
color:"#10b981",
projects:20
},

{
id:4,
title:"Deep Learning",
description:"Computer Vision and Neural Networks.",
color:"#f59e0b",
projects:18
},

{
id:5,
title:"LLM Engineering",
description:"RAG, Embeddings and AI Agents.",
color:"#ef4444",
projects:22
},

{
id:6,
title:"AI Platform Engineering",
description:"Enterprise AI Infrastructure.",
color:"#7c3aed",
projects:26
},

{
id:7,
title:"Cloud Engineering",
description:"Cloud-native platforms.",
color:"#06b6d4",
projects:18
},

{
id:8,
title:"Distributed Systems",
description:"Scalable distributed architectures.",
color:"#84cc16",
projects:12
},

{
id:9,
title:"Enterprise Architecture",
description:"Enterprise software platforms.",
color:"#f97316",
projects:10
},

{
id:10,
title:"Capstone Projects",
description:"Complete enterprise AI systems.",
color:"#111827",
projects:8
}

];