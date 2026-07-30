export interface Certification {

  title: string;

  issuer: string;

  category: string;

}

export const certifications: Certification[] = [

  {
    title: "Software Analysis and Development",

    issuer: "SENA",

    category: "Software Engineering"
  },

  {
    title: "TensorFlow & Deep Learning",

    issuer: "Coursera",

    category: "Machine Learning"
  },

  {
    title: "Git & GitHub",

    issuer: "Coursera",

    category: "Development"
  },

  {
    title: "Python",

    issuer: "Coursera",

    category: "Programming"
  }

];