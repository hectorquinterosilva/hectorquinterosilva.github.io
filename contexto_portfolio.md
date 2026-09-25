# Contexto Portafolio Astro

## git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   package-lock.json
	modified:   package.json
	modified:   src/components/Footer.astro
	modified:   src/data/certifications.ts
	modified:   src/data/experience.ts
	deleted:    src/data/projects.ts
	modified:   src/layouts/MainLayout.astro
	modified:   src/pages/about.astro
	modified:   src/pages/blog/index.astro
	modified:   src/pages/certifications.astro
	modified:   src/pages/contact.astro
	modified:   src/pages/index.astro
	deleted:    src/pages/projects.astro
	modified:   src/pages/resume.astro
	modified:   src/styles/global.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	contexto_portfolio.md
	src/components/Navbar.astro
	src/data/curriculum.ts
	src/data/roadmap/
	src/data/roadmap_old.ts
	src/pages/portfolio.astro
	src/pages/roadmap.astro

no changes added to commit (use "git add" and/or "git commit -a")

## git log (últimos 10)
115aca1 Portfolio refactor - data driven architecture
b4be082 Create portfolio layout and navigation
62e697f Create professional landing page
859b916 Create portfolio structure and main layout
0382f7a Resolve README merge conflict
f8aa048 "Initial commit from Astro"
6b3cd06 Initial commit

## package.json
```json
{
  "name": "portfolio",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.7.4",
    "astro": "^7.3.4"
  }
}
```

## astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hectorquinterosilva.github.io',
  integrations: [sitemap()]
});```

## Estructura src/
src/components/Footer.astro
src/components/Navbar.astro
src/data/certifications.ts
src/data/curriculum.ts
src/data/experience.ts
src/data/profile.ts
src/data/roadmap/backend.ts
src/data/roadmap/capstone.ts
src/data/roadmap/cloud.ts
src/data/roadmap/data-engineering.ts
src/data/roadmap/deep-learning.ts
src/data/roadmap/distributed.ts
src/data/roadmap/domains.ts
src/data/roadmap/enterprise.ts
src/data/roadmap/index.ts
src/data/roadmap/llm.ts
src/data/roadmap/machine-learning.ts
src/data/roadmap/platform.ts
src/data/roadmap/types.ts
src/data/roadmap_old.ts
src/data/social.ts
src/data/stack.ts
src/layouts/MainLayout.astro
src/pages/about.astro
src/pages/blog/index.astro
src/pages/certifications.astro
src/pages/contact.astro
src/pages/index.astro
src/pages/portfolio.astro
src/pages/resume.astro
src/pages/roadmap.astro
src/styles/global.css

## Estructura public/
public/favicon.ico
public/favicon.svg

## Contenido de archivos clave

### src/layouts/MainLayout.astro
```
---
import Navbar from "../components/Navbar.astro";
import Footer from "../components/Footer.astro";
import "../styles/global.css";

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>{title}</title>

    {description && (
      <meta
        name="description"
        content={description}
      />
    )}
  </head>

  <body>

    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />

  </body>
</html>```

### src/components/Footer.astro
```
---

---

<footer class="footer">

  <div class="footer-container">

    <div class="footer-column">

      <h4>
        HAQS
      </h4>

      <p>
        Héctor Andrés Quintero Silva
      </p>

      <p>
        AI Platform Engineer focused on
        backend systems, cloud infrastructure
        and enterprise AI platforms.
      </p>

    </div>


    <div class="footer-column">

      <h4>
        Navigation
      </h4>

      <a href="/">
        Home
      </a>

      <a href="/portfolio">
        Portfolio
      </a>

      <a href="/roadmap">
        Roadmap
      </a>

      <a href="/blog">
        Journal
      </a>

    </div>


    <div class="footer-column">

      <h4>
        Professional
      </h4>

      <a href="/about">
        About
      </a>

      <a href="/contact">
        Contact
      </a>

      <a
        href="https://github.com/hectorquinterosilva"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/hector-andres-quintero-silva-208430139/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

    </div>


    <div class="footer-column">

      <h4>
        Engineering
      </h4>

      <p>
        Python
      </p>

      <p>
        FastAPI
      </p>

      <p>
        Docker
      </p>

      <p>
        Kubernetes
      </p>

      <p>
        AI Platforms
      </p>

    </div>

  </div>


  <div class="footer-bottom">

    <p>
      © {new Date().getFullYear()}
      Héctor Andrés Quintero Silva.
      All rights reserved.
    </p>

  </div>

</footer>```

### src/components/Navbar.astro
```
---
---

<header class="navbar">

  <div class="nav-container">

    <a href="/" class="brand">
      HAQS
    </a>

    <nav class="nav-links">

      <a href="/portfolio">
        Portfolio
      </a>

      <a href="/roadmap">
        Roadmap
      </a>

      <a href="/blog">
        Journal
      </a>

      <a href="/about">
        About
      </a>

      <a href="/contact">
        Contact
      </a>

    </nav>

  </div>

</header>```

### src/pages/about.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";

import { profile } from "../data/profile";
import { techStack } from "../data/stack";
import { experience } from "../data/experience";
---

<MainLayout
  title={`About | ${profile.name}`}
  description={`About ${profile.name}`}
>

<section class="hero">

<p class="eyebrow">

About Me

</p>

<h1>

{profile.name}

</h1>

<h2>

{profile.title}

</h2>

<p class="description">

{profile.summary}

</p>

</section>

<section>

<h2>

Professional Experience

</h2>

<div class="projects-grid">

{

experience.map(job=>(

<div class="card">

<h3>

{job.position}

</h3>

<h4>

{job.company}

</h4>

<p>

<strong>{job.period}</strong>

<br>

{job.location}

</p>

<br>

<p>

{job.description}

</p>

<br>

<div class="tech-stack">

{

job.technologies.map(tech=>(

<span class="tech-pill">

{tech}

</span>

))

}

</div>

</div>

))

}

</div>

</section>

<section>

<h2>

Technology Stack

</h2>

<div class="tech-stack">

{

techStack.map(stack=>(

<span class="tech-pill">

{stack.name}

</span>

))

}

</div>

</section>

</MainLayout>```

### src/pages/certifications.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";
import { certifications } from "../data/certifications";

const grouped = certifications.reduce((acc, cert) => {
  if (!acc[cert.category]) acc[cert.category] = [];
  acc[cert.category].push(cert);
  return acc;
}, {} as Record<string, typeof certifications>);

const categories = Object.keys(grouped).sort();

const completed = certifications.filter(
  c => c.status === "Completed"
).length;

const planned = certifications.filter(
  c => c.status === "Planned"
).length;

const inProgress = certifications.filter(
  c => c.status === "In Progress"
).length;
---

<MainLayout
  title="Certifications | Héctor Andrés Quintero Silva"
  description="Professional certifications and learning roadmap."
>

<section class="hero">

  <p class="eyebrow">
    Professional Development
  </p>

  <h1>
    Certifications
  </h1>

  <p class="description">
    Continuous learning is a fundamental part of my engineering journey.
    These certifications validate the knowledge acquired while building
    real-world projects and enterprise AI platforms.
  </p>

</section>

<section>

  <div class="stats-grid">

    <div class="stat-card">

      <h3>{certifications.length}</h3>

      <p>Total Certifications</p>

    </div>

    <div class="stat-card">

      <h3>{completed}</h3>

      <p>Completed</p>

    </div>

    <div class="stat-card">

      <h3>{inProgress}</h3>

      <p>In Progress</p>

    </div>

    <div class="stat-card">

      <h3>{planned}</h3>

      <p>Planned</p>

    </div>

  </div>

</section>

{
categories.map((category) => (

<section>

<h2>{category}</h2>

<div class="projects-grid">

{

grouped[category].map((cert) => (

<div class="card">

<h3>

{cert.title}

</h3>

<p class="project-status">

{cert.status}

</p>

<p>

<strong>Issuer:</strong> {cert.issuer}

</p>

</div>

))

}

</div>

</section>

))
}

</MainLayout>```

### src/pages/contact.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";
import { profile } from "../data/profile";
---

<MainLayout
  title={`Contact | ${profile.name}`}
  description={`Contact ${profile.name}`}
>

  <section class="contact-page">

    <div class="section-header">

      <p class="eyebrow">
        Contact
      </p>

      <h1>
        Let's Build Something
        <br />
        Great
      </h1>

      <p class="description">
        I'm interested in opportunities related to Backend Engineering,
        AI Platform Engineering, Cloud Infrastructure, Machine Learning
        Infrastructure and distributed systems.
      </p>

    </div>

    <div class="contact-grid">

      <article class="card">

        <h3>
          📧 Email
        </h3>

        <p>
          Professional inquiries, collaborations and engineering
          opportunities.
        </p>

        <a
          href="mailto:hectorquinterosilva@gmail.com"
        >
          hectorquinterosilva@gmail.com
        </a>

      </article>

      <article class="card">

        <h3>
          💼 LinkedIn
        </h3>

        <p>
          Professional profile, experience and career updates.
        </p>

        <a
          href="https://www.linkedin.com/in/hector-andres-quintero-silva-208430139/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/hector-andres-quintero-silva-208430139
        </a>

      </article>

      <article class="card">

        <h3>
          💻 GitHub
        </h3>

        <p>
          Source code, portfolio projects and engineering roadmap.
        </p>

        <a
          href="https://github.com/hectorquinterosilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/hectorquinterosilva
        </a>

      </article>

    </div>

    <section class="interests-section">

      <h2>
        Current Interests
      </h2>

      <div class="tech-stack">

        <span class="tech-pill">
          AI Platform Engineering
        </span>

        <span class="tech-pill">
          Backend Engineering
        </span>

        <span class="tech-pill">
          Cloud Computing
        </span>

        <span class="tech-pill">
          Machine Learning
        </span>

        <span class="tech-pill">
          MLOps
        </span>

        <span class="tech-pill">
          LLMs
        </span>

        <span class="tech-pill">
          RAG
        </span>

        <span class="tech-pill">
          Distributed Systems
        </span>

      </div>

    </section>

  </section>

</MainLayout>```

### src/pages/index.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";

import { profile } from "../data/profile";
import { roadmapProducts } from "../data/roadmap";

const featuredProducts = roadmapProducts
  .filter((product) => product.featured)
  .slice(0, 3);
---

<MainLayout
  title={`${profile.name} | ${profile.title}`}
  description={profile.summary}
>

  <!-- =========================================================
       HERO
  ========================================================== -->

  <section class="hero">

    <span class="eyebrow">
      AI PLATFORM ENGINEERING
    </span>

    <h1>
      Héctor Andrés
      <br />
      Quintero Silva
    </h1>

    <h2>
      Building enterprise-grade AI infrastructure.
    </h2>

    <p class="description">
      AI Platform Engineer specialized in designing production-ready
      backend systems, cloud-native infrastructure and enterprise AI
      platforms.
    </p>

    <div class="hero-buttons">

      <a
        class="primary-button"
        href="/portfolio"
      >
        Explore Products
      </a>

      <a
        class="secondary-button"
        href="/roadmap"
      >
        Engineering Roadmap
      </a>

    </div>

  </section>


  <!-- =========================================================
       CURRENT FOCUS
  ========================================================== -->

  <section>

    <div class="section-header">

      <span class="eyebrow">
        CURRENT FOCUS
      </span>

      <h2>
        Engineering in Progress
      </h2>

      <p>
        The current stage of the engineering roadmap and the
        technologies being prioritized.
      </p>

    </div>


    <div class="stats-grid">

      <article class="stat-card">

        <h3>
          AI Platform Engineering
        </h3>

        <p>
          Primary specialization
        </p>

      </article>


      <article class="stat-card">

        <h3>
          Python
        </h3>

        <p>
          Primary language
        </p>

      </article>


      <article class="stat-card">

        <h3>
          AI API Gateway
        </h3>

        <p>
          Currently building
        </p>

      </article>


      <article class="stat-card">

        <h3>
          Enterprise Portfolio
        </h3>

        <p>
          Under active development
        </p>

      </article>

    </div>

  </section>


  <!-- =========================================================
       ENGINEERING STACK
  ========================================================== -->

  <section>

    <div class="section-header">

      <span class="eyebrow">
        ENGINEERING STACK
      </span>

      <h2>
        Technologies
      </h2>

      <p>
        Core technologies currently used across the AI Platform
        Engineering roadmap.
      </p>

    </div>


    <div class="specializations-grid">

      <article class="card">

        <h3>
          Backend Engineering
        </h3>

        <div class="tech-stack">

          <span class="tech-pill">Python</span>
          <span class="tech-pill">FastAPI</span>
          <span class="tech-pill">PostgreSQL</span>
          <span class="tech-pill">Redis</span>
          <span class="tech-pill">SQLAlchemy</span>
          <span class="tech-pill">Alembic</span>

        </div>

      </article>


      <article class="card">

        <h3>
          Cloud Infrastructure
        </h3>

        <div class="tech-stack">

          <span class="tech-pill">Docker</span>
          <span class="tech-pill">Docker Compose</span>
          <span class="tech-pill">Kubernetes</span>
          <span class="tech-pill">AWS</span>
          <span class="tech-pill">Linux</span>

        </div>

      </article>


      <article class="card">

        <h3>
          Artificial Intelligence
        </h3>

        <div class="tech-stack">

          <span class="tech-pill">LLMs</span>
          <span class="tech-pill">OpenAI</span>
          <span class="tech-pill">Anthropic</span>
          <span class="tech-pill">LangChain</span>
          <span class="tech-pill">RAG</span>
          <span class="tech-pill">Embeddings</span>

        </div>

      </article>


      <article class="card">

        <h3>
          Engineering Practices
        </h3>

        <div class="tech-stack">

          <span class="tech-pill">Git</span>
          <span class="tech-pill">GitHub</span>
          <span class="tech-pill">REST APIs</span>
          <span class="tech-pill">Clean Architecture</span>
          <span class="tech-pill">CI/CD</span>

        </div>

      </article>

    </div>

  </section>


  <!-- =========================================================
       FEATURED PRODUCTS
  ========================================================== -->

  <section>

    <div class="section-header">

      <span class="eyebrow">
        FEATURED PRODUCTS
      </span>

      <h2>
        Built Through the Roadmap
      </h2>

      <p>
        Production-oriented software products developed as part
        of the engineering roadmap.
      </p>

    </div>


    {
      featuredProducts.length === 0
        ? (
          <div class="card">

            <h3>
              No products published yet
            </h3>

            <p>
              Enterprise products will appear here as they
              progress through the engineering roadmap.
            </p>

          </div>
        )
        : (
          <div class="projects-grid">

            {
              featuredProducts.map((product) => (

                <article class="card">

                  <span class="project-status">
                    {product.status}
                  </span>

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    {product.summary}
                  </p>

                  <div class="tech-stack">

                    {
                      product.technologies.map((tech) => (
                        <span class="tech-pill">
                          {tech}
                        </span>
                      ))
                    }

                  </div>

                </article>

              ))
            }

          </div>
        )
    }

  </section>


  <!-- =========================================================
       ENGINEERING PHILOSOPHY
  ========================================================== -->

  <section>

    <div class="section-header">

      <span class="eyebrow">
        ENGINEERING PHILOSOPHY
      </span>

      <h2>
        Built, not just studied.
      </h2>

      <p>
        The roadmap is structured around the construction of
        increasingly complex systems.
      </p>

    </div>


    <div class="specializations-grid">

      <article class="card">

        <h3>
          Learn by Building
        </h3>

        <p>
          Engineering concepts are reinforced through real
          implementations rather than isolated exercises.
        </p>

      </article>


      <article class="card">

        <h3>
          Enterprise Mindset
        </h3>

        <p>
          Architecture, scalability, maintainability and
          production practices are considered from the beginning.
        </p>

      </article>


      <article class="card">

        <h3>
          Reusable Ecosystem
        </h3>

        <p>
          Each product contributes components, knowledge and
          infrastructure that can be reused by subsequent systems.
        </p>

      </article>

    </div>

  </section>


  <!-- =========================================================
       ENGINEERING VISION
  ========================================================== -->

  <section>

    <div class="card">

      <span class="eyebrow">
        ENGINEERING VISION
      </span>

      <h2>
        An interconnected engineering ecosystem.
      </h2>

      <p class="description">
        The long-term roadmap connects Backend Engineering,
        Data Engineering, Machine Learning, Deep Learning,
        AI Platform Engineering, Cloud Computing and
        Distributed Systems through a growing portfolio
        of interconnected products.
      </p>

      <div class="hero-buttons">

        <a
          class="primary-button"
          href="/roadmap"
        >
          Explore the Roadmap
        </a>

      </div>

    </div>

  </section>

</MainLayout>```

### src/pages/portfolio.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";
import { roadmapProducts } from "../data/roadmap";

const portfolioProducts = roadmapProducts.filter(
  (product) => product.status !== "Planned"
);

const completed = portfolioProducts.filter(
  (product) => product.status === "Completed"
).length;

const inProgress = portfolioProducts.filter(
  (product) => product.status === "In Progress"
).length;

const planned = roadmapProducts.filter(
  (product) => product.status === "Planned"
).length;
---

<MainLayout
  title="Portfolio | Héctor Andrés Quintero Silva"
  description="Explore the AI Platform Engineering portfolio of Héctor Andrés Quintero Silva, including production-oriented software products, backend systems, cloud infrastructure and enterprise AI engineering projects."
>

  <div class="page-content">

    <!-- ======================================================
         PORTFOLIO INTRODUCTION
    ======================================================= -->

    <section>

      <div class="section-header">

        <span class="eyebrow">
          ENTERPRISE ENGINEERING
        </span>

        <h1>
          Portfolio
        </h1>

        <p class="description">
          This portfolio contains production-oriented software
          products developed throughout my long-term AI Platform
          Engineering roadmap.
          Every published product represents a real engineering
          milestone.
        </p>

      </div>


      <!-- ====================================================
           PORTFOLIO METRICS
      ===================================================== -->

      <div class="stats-grid">

        <div class="stat-card">

          <h3>
            {completed}
          </h3>

          <p>
            Completed Products
          </p>

        </div>


        <div class="stat-card">

          <h3>
            {inProgress}
          </h3>

          <p>
            Currently Building
          </p>

        </div>


        <div class="stat-card">

          <h3>
            {planned}
          </h3>

          <p>
            Planned Products
          </p>

        </div>


        <div class="stat-card">

          <h3>
            ∞
          </h3>

          <p>
            Continuous Improvement
          </p>

        </div>

      </div>

    </section>


    <!-- ======================================================
         PUBLISHED PRODUCTS
    ======================================================= -->

    <section>

      <div class="section-header">

        <span class="eyebrow">
          PUBLISHED PRODUCTS
        </span>

        <h2>
          Built Through the Roadmap
        </h2>

        <p>
          Production-oriented software products developed as
          part of the engineering roadmap.
        </p>

      </div>


      {
        portfolioProducts.length === 0 ? (

          <div class="card">

            <h3>
              Portfolio Under Construction
            </h3>

            <p>
              Products automatically appear here as they reach
              the <strong>In Progress</strong> or
              <strong>Completed</strong> stage.
            </p>

          </div>

        ) : (

          <div class="projects-grid">

            {
              portfolioProducts.map((product) => (

                <article class="card">

                  <span class="project-status">
                    {product.status}
                  </span>


                  <h3>
                    {product.title}
                  </h3>


                  <p>
                    {product.summary}
                  </p>


                  <hr />


                  <h4>
                    Architecture
                  </h4>


                  <p>
                    {product.architecture}
                  </p>


                  <div class="tech-stack">

                    {
                      product.technologies.map((tech) => (

                        <span class="tech-pill">
                          {tech}
                        </span>

                      ))
                    }

                  </div>


                  {
                    product.github && (

                      <div class="hero-buttons">

                        <a
                          class="secondary-button"
                          href={product.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Repository
                        </a>

                      </div>

                    )
                  }

                </article>

              ))
            }

          </div>

        )
      }

    </section>


    <!-- ======================================================
         ENGINEERING APPROACH
    ======================================================= -->

    <section>

      <div class="section-header">

        <span class="eyebrow">
          ENGINEERING APPROACH
        </span>

        <h2>
          Why Products Instead of Tutorials?
        </h2>

        <p class="description">
          Rather than building isolated exercises, my roadmap
          focuses on developing reusable enterprise products
          that solve realistic engineering problems.
        </p>

      </div>


      <div class="about-grid">

        <article class="card">

          <h3>
            Real Engineering Problems
          </h3>

          <p>
            Each product is designed around a realistic
            engineering requirement rather than an isolated
            programming exercise.
          </p>

        </article>


        <article class="card">

          <h3>
            Reusable Infrastructure
          </h3>

          <p>
            Completed products are designed to provide
            components, services and infrastructure that can
            be reused by subsequent products.
          </p>

        </article>


        <article class="card">

          <h3>
            Progressive Complexity
          </h3>

          <p>
            Each stage of the roadmap introduces new
            architectural, infrastructure and AI engineering
            challenges.
          </p>

        </article>

      </div>

    </section>


    <!-- ======================================================
         ENGINEERING ECOSYSTEM
    ======================================================= -->

    <section>

      <div class="card">

        <span class="eyebrow">
          ENGINEERING ECOSYSTEM
        </span>

        <h2>
          More Than a Portfolio
        </h2>

        <p class="description">
          The objective is not simply to accumulate projects.
          The long-term goal is to build an interconnected
          ecosystem in which every product contributes reusable
          engineering knowledge, infrastructure and architectural
          patterns to the products that follow.
        </p>


        <div class="hero-buttons">

          <a
            class="primary-button"
            href="/roadmap"
          >
            Explore the Roadmap
          </a>

        </div>

      </div>

    </section>

  </div>

</MainLayout>```

### src/pages/resume.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";

import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { techStack } from "../data/stack";
---

<MainLayout
  title={`Resume | ${profile.name}`}
  description="Professional Resume"
>

<!-- ===================================================== -->
<!-- HERO -->
<!-- ===================================================== -->

<section class="hero">

  <p class="eyebrow">

    Professional Resume

  </p>

  <h1>

    {profile.name}

  </h1>

  <h2>

    {profile.title}

  </h2>

  <p class="description">

    Backend Engineer transitioning into AI Platform Engineering,
    specializing in production-ready AI infrastructure,
    cloud-native systems and scalable backend architectures.

  </p>

  <div class="hero-buttons">

    <a
      class="primary-button"
      href="/portfolio"
    >

      View Portfolio

    </a>

    <a
      class="secondary-button"
      href="mailto:neohaq@hotmail.com"
    >

      Contact Me

    </a>

  </div>

</section>

<!-- ===================================================== -->
<!-- EXPERIENCE -->
<!-- ===================================================== -->

<section>

<h2>

Professional Experience

</h2>

<div class="projects-grid">

{

experience.map(job=>(

<article class="card">

<h3>

{job.position}

</h3>

<h4>

{job.company}

</h4>

<p>

<strong>

{job.period}

</strong>

<br>

{job.location}

</p>

<br>

<p>

{job.description}

</p>

<div class="tech-stack">

{

job.technologies.map(tech=>(

<span class="tech-pill">

{tech}

</span>

))

}

</div>

</article>

))

}

</div>

</section>

<!-- ===================================================== -->
<!-- CORE COMPETENCIES -->
<!-- ===================================================== -->

<section>

<h2>

Core Competencies

</h2>

<div class="stats-grid">

<div class="stat-card">

<h3>

Backend

</h3>

<p>

REST APIs, FastAPI, PostgreSQL, Redis

</p>

</div>

<div class="stat-card">

<h3>

Cloud

</h3>

<p>

Docker, Kubernetes, AWS

</p>

</div>

<div class="stat-card">

<h3>

AI

</h3>

<p>

LLMs, RAG, Vector Databases

</p>

</div>

<div class="stat-card">

<h3>

Architecture

</h3>

<p>

Enterprise Systems & Platform Engineering

</p>

</div>

</div>

</section>

<!-- ===================================================== -->
<!-- TECHNOLOGY STACK -->
<!-- ===================================================== -->

<section>

<h2>

Technology Stack

</h2>

<div class="tech-stack">

{

techStack.map(stack=>(

<span class="tech-pill">

{stack.name}

</span>

))

}

</div>

</section>

<!-- ===================================================== -->
<!-- CURRENT OBJECTIVE -->
<!-- ===================================================== -->

<section>

<div class="card">

<h2>

Career Objective

</h2>

<p>

My goal is to specialize as an AI Platform Engineer capable of designing,
building and operating enterprise-grade AI platforms, backend systems and
cloud-native infrastructure that support production AI applications at scale.

</p>

</div>

</section>

</MainLayout>```

### src/pages/roadmap.astro
```
---
import MainLayout from "../layouts/MainLayout.astro";
import { roadmapProducts } from "../data/roadmap/index";

const modules = [
  ...new Set(
    roadmapProducts.map((product) => product.module)
  ),
];

const totalProducts = roadmapProducts.length;

const inProgress = roadmapProducts.filter(
  (product) => product.status === "In Progress"
).length;

const completed = roadmapProducts.filter(
  (product) => product.status === "Completed"
).length;

const planned = roadmapProducts.filter(
  (product) => product.status === "Planned"
).length;
---

<MainLayout
  title="Engineering Roadmap | Héctor Andrés Quintero Silva"
  description="Long-term AI Platform Engineering curriculum."
>

  <section>

    <div class="section-header">

      <span class="eyebrow">
        ENGINEERING ROADMAP
      </span>

      <h1>
        Engineering Roadmap
      </h1>

      <p class="description">
        A long-term engineering curriculum built around
        production-oriented software products, reusable
        infrastructure and progressively more complex
        AI Platform Engineering systems.
      </p>

    </div>


    <!-- ==================================================
         ROADMAP METRICS
    =================================================== -->

    <div class="stats-grid">

      <div class="stat-card">
        <h3>{totalProducts}</h3>
        <p>Products Registered</p>
      </div>

      <div class="stat-card">
        <h3>{modules.length}</h3>
        <p>Engineering Domains</p>
      </div>

      <div class="stat-card">
        <h3>{inProgress}</h3>
        <p>In Progress</p>
      </div>

      <div class="stat-card">
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>

    </div>

  </section>


  <!-- ====================================================
       ROADMAP
  ===================================================== -->

  <section>

    <div class="section-header">

      <span class="eyebrow">
        ENGINEERING CURRICULUM
      </span>

      <h2>
        From Foundations to AI Platforms
      </h2>

      <p>
        Each domain introduces progressively more advanced
        engineering challenges. Products are designed to
        build upon the infrastructure and knowledge developed
        in previous stages.
      </p>

    </div>


    {
      modules.map((module) => {

        const moduleProducts =
          roadmapProducts.filter(
            (product) => product.module === module
          );

        return (

          <div class="roadmap-module">

            <div class="section-header">

              <h2>
                {module}
              </h2>

              <p>
                {moduleProducts.length} product
                {moduleProducts.length !== 1 ? "s" : ""}
                in this engineering domain.
              </p>

            </div>


            <div class="projects-grid">

              {
                moduleProducts.map((product) => (

                  <article class="card">

                    <span class="project-status">
                      {product.status}
                    </span>

                    <h3>
                      {product.title}
                    </h3>

                    <p>
                      {product.summary}
                    </p>

                    <div class="tech-stack">

                      {
                        product.technologies.map(
                          (tech) => (

                            <span class="tech-pill">
                              {tech}
                            </span>

                          )
                        )
                      }

                    </div>

                  </article>

                ))
              }

            </div>

          </div>

        );

      })
    }

  </section>


  <!-- ====================================================
       ROADMAP VISION
  ===================================================== -->

  <section>

    <div class="card">

      <span class="eyebrow">
        ENGINEERING VISION
      </span>

      <h2>
        More Than a Curriculum
      </h2>

      <p class="description">

        The roadmap is designed as an interconnected
        engineering ecosystem rather than a collection of
        isolated tutorials.

        Every product contributes reusable knowledge,
        architectural patterns, infrastructure and
        engineering experience to the products that follow.

      </p>

      <div class="tech-stack">

        <span class="tech-pill">
          {planned} Planned
        </span>

        <span class="tech-pill">
          {inProgress} In Progress
        </span>

        <span class="tech-pill">
          {completed} Completed
        </span>

      </div>

    </div>

  </section>

</MainLayout>```

### src/styles/global.css
```
/* ==========================================================
   HAQS PORTFOLIO
   MINIMAL DARK DESIGN SYSTEM
========================================================== */

:root {
  /* --------------------------------------------------------
     COLORS
  -------------------------------------------------------- */

  --bg: #080a0f;
  --bg-soft: #0c0f15;
  --surface: #10141c;
  --surface-hover: #151a23;

  --border: #222936;
  --border-light: #303846;

  --text: #f5f7fa;
  --text-soft: #d1d5db;
  --muted: #8b95a5;

  --accent: #60a5fa;
  --accent-hover: #93c5fd;

  /* --------------------------------------------------------
     TYPOGRAPHY
  -------------------------------------------------------- */

  --font:
    Inter,
    ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif;

  /* --------------------------------------------------------
     SPACING
  -------------------------------------------------------- */

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 5rem;
  --space-3xl: 8rem;

  /* --------------------------------------------------------
     RADIUS
  -------------------------------------------------------- */

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;

  /* --------------------------------------------------------
     SHADOWS
  -------------------------------------------------------- */

  --shadow-sm:
    0 4px 16px rgba(0, 0, 0, 0.18);

  --shadow-md:
    0 12px 32px rgba(0, 0, 0, 0.25);

  /* --------------------------------------------------------
     TRANSITIONS
  -------------------------------------------------------- */

  --transition:
    all 0.2s ease;
}


/* ==========================================================
   RESET
========================================================== */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  background: var(--bg);
}

body {
  min-height: 100vh;

  background: var(--bg);

  color: var(--text);

  font-family: var(--font);

  font-size: 16px;

  line-height: 1.7;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}


/* ==========================================================
   MAIN
========================================================== */

main {
  width: min(1180px, 92%);
  margin: 0 auto;
}


/* ==========================================================
   TYPOGRAPHY
========================================================== */

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

h2 {
  font-size: clamp(2rem, 4vw, 2.7rem);
  line-height: 1.1;
  margin-bottom: var(--space-lg);
}

h3 {
  font-size: 1.2rem;
  line-height: 1.3;
}

h4 {
  font-size: 1rem;
}

p {
  color: var(--muted);
}

.description {
  max-width: 760px;
  font-size: 1.05rem;
  line-height: 1.8;
}

.eyebrow {
  display: block;

  margin-bottom: 1.2rem;

  color: var(--accent);

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 0.3em;

  text-transform: uppercase;
}


/* ==========================================================
   NAVBAR
========================================================== */

.navbar {
  position: sticky;

  top: 0;

  z-index: 1000;

  width: 100%;

  background:
    rgba(8, 10, 15, 0.94);

  border-bottom: 1px solid var(--border);

  backdrop-filter: blur(12px);
}

.nav-container {
  width: min(1280px, 92%);

  height: 74px;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: space-between;
}

.brand {
  color: var(--text);

  font-size: 1rem;

  font-weight: 800;

  letter-spacing: 0.16em;
}

.brand:hover {
  color: var(--accent);
}

.nav-links {
  display: flex;

  align-items: center;

  gap: 2rem;
}

.nav-links a {
  position: relative;

  color: var(--muted);

  font-size: 0.9rem;

  font-weight: 500;

  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a::after {
  content: "";

  position: absolute;

  left: 0;

  bottom: -7px;

  width: 0;

  height: 1px;

  background: var(--accent);

  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}


/* ==========================================================
   HERO
========================================================== */

.hero {
  position: relative;

  min-height: calc(100vh - 74px);

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 6rem 0;
}

.hero::after {
  content: "";

  position: absolute;

  top: 15%;

  right: 5%;

  width: 420px;

  height: 420px;

  background:
    radial-gradient(
      circle,
      rgba(96, 165, 250, 0.08),
      transparent 70%
    );

  pointer-events: none;

  z-index: -1;
}

.hero h1 {
  max-width: 900px;
}

.hero h2 {
  margin-top: 1.5rem;

  margin-bottom: 1.5rem;

  color: var(--muted);

  font-size: clamp(1.35rem, 2.5vw, 1.8rem);

  font-weight: 400;

  letter-spacing: -0.02em;
}

.hero .description {
  margin-top: 1rem;
}

.hero-buttons {
  display: flex;

  flex-wrap: wrap;

  gap: 0.8rem;

  margin-top: 2.5rem;
}


/* ==========================================================
   BUTTONS
========================================================== */

.primary-button,
.secondary-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding: 0.8rem 1.35rem;

  border-radius: var(--radius-sm);

  font-size: 0.9rem;

  font-weight: 600;

  transition: var(--transition);
}

.primary-button {
  background: var(--text);

  color: #080a0f;

  border: 1px solid var(--text);
}

.primary-button:hover {
  background: var(--accent);

  border-color: var(--accent);

  transform: translateY(-2px);
}

.secondary-button {
  background: transparent;

  color: var(--text);

  border: 1px solid var(--border-light);
}

.secondary-button:hover {
  border-color: var(--text);

  background: var(--surface);
}


/* ==========================================================
   SECTIONS
========================================================== */

section {
  margin: var(--space-3xl) 0;
}

.hero {
  margin-top: 0;
}

section > .description {
  margin-bottom: var(--space-lg);
}

.section-header {
  margin-bottom: 2.5rem;
}

.section-header h1 {
  margin-bottom: 1.5rem;
}

.section-header h2 {
  margin-bottom: 0.8rem;
}

.section-header p {
  max-width: 760px;
}


/* ==========================================================
   CARDS
========================================================== */

.card {
  position: relative;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius-md);

  padding: 1.8rem;

  transition: var(--transition);
}

.card:hover {
  background: var(--surface-hover);

  border-color: var(--border-light);

  transform: translateY(-3px);

  box-shadow: var(--shadow-sm);
}

.card h3 {
  margin-bottom: 1rem;
}

.card p {
  color: var(--muted);
}

.card a {
  display: inline-block;

  margin-top: 1.25rem;

  color: var(--accent);

  font-weight: 600;

  font-size: 0.9rem;

  overflow-wrap: anywhere;
}

.card a:hover {
  color: var(--accent-hover);
}


/* ==========================================================
   GRIDS
========================================================== */

.projects-grid,
.about-grid,
.contact-grid,
.cert-grid,
.stats-grid,
.specializations-grid {
  display: grid;

  gap: 1.2rem;
}

.projects-grid {
  grid-template-columns:
    repeat(auto-fit, minmax(320px, 1fr));
}

.about-grid,
.contact-grid,
.cert-grid {
  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));
}

.stats-grid {
  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));
}

.specializations-grid {
  grid-template-columns:
    repeat(auto-fit, minmax(280px, 1fr));
}


/* ==========================================================
   CONTACT PAGE
========================================================== */

.contact-page {
  padding-top: 5rem;
}

.contact-page .section-header {
  max-width: 900px;
}

.contact-page .section-header h1 {
  font-size: clamp(3.2rem, 7vw, 5.2rem);
}

.interests-section {
  margin-top: 6rem;
}


/* ==========================================================
   STAT CARDS
========================================================== */

.stat-card {
  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius-md);

  padding: 1.8rem;

  transition: var(--transition);
}

.stat-card:hover {
  border-color: var(--border-light);

  background: var(--surface-hover);

  transform: translateY(-3px);
}

.stat-card h3 {
  margin-bottom: 0.5rem;

  color: var(--text);

  font-size: 1.4rem;
}

.stat-card p {
  color: var(--muted);
}


/* ==========================================================
   TECH STACK
========================================================== */

.tech-stack {
  display: flex;

  flex-wrap: wrap;

  gap: 0.65rem;

  margin-top: 1.2rem;
}

.tech-pill {
  display: inline-flex;

  align-items: center;

  padding: 0.45rem 0.8rem;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: var(--surface);

  color: var(--text-soft);

  font-size: 0.78rem;

  line-height: 1.4;

  transition: var(--transition);
}

.tech-pill:hover {
  color: var(--text);

  border-color: var(--border-light);

  background: var(--surface-hover);
}


/* ==========================================================
   PRODUCT STATUS
========================================================== */

.project-status,
.product-status {
  display: inline-flex;

  align-items: center;

  gap: 0.45rem;

  margin: 0.5rem 0 1rem;

  padding: 0.35rem 0.7rem;

  border: 1px solid rgba(96, 165, 250, 0.2);

  border-radius: 999px;

  background: rgba(96, 165, 250, 0.06);

  color: var(--accent);

  font-size: 0.75rem;

  font-weight: 600;
}

.project-status::before,
.product-status::before {
  content: "";

  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: var(--accent);
}


/* ==========================================================
   PROJECT CARDS
========================================================== */

.projects-grid article {
  display: flex;

  flex-direction: column;
}

.projects-grid article > p {
  flex: 1;
}

.projects-grid article .tech-stack {
  margin-top: 1.5rem;
}


/* ==========================================================
   BADGES
========================================================== */

.badge {
  display: inline-flex;

  align-items: center;

  padding: 0.4rem 0.75rem;

  border: 1px solid var(--border);

  border-radius: 999px;

  background: var(--surface);

  color: var(--text-soft);

  font-size: 0.75rem;

  font-weight: 600;
}

.badge.success {
  color: #86efac;

  border-color: rgba(34, 197, 94, 0.2);
}

.badge.warning {
  color: #fde68a;

  border-color: rgba(250, 204, 21, 0.2);
}

.badge.danger {
  color: #fca5a5;

  border-color: rgba(239, 68, 68, 0.2);
}


/* ==========================================================
   PROGRESS BANNER
========================================================== */

.progress-banner {
  display: inline-flex;

  align-items: center;

  gap: 0.6rem;

  padding: 0.6rem 0.9rem;

  border: 1px solid var(--border);

  border-radius: var(--radius-sm);

  background: var(--surface);

  color: var(--text-soft);

  font-size: 0.8rem;

  font-weight: 600;
}

.progress-banner::before {
  content: "●";

  color: var(--accent);

  font-size: 0.6rem;
}


/* ==========================================================
   GLASS
========================================================== */

.glass {
  background:
    rgba(16, 20, 28, 0.75);

  border: 1px solid var(--border);

  border-radius: var(--radius-md);

  backdrop-filter: blur(12px);
}


/* ==========================================================
   DIVIDERS
========================================================== */

hr {
  margin: 4rem 0;

  border: 0;

  border-top: 1px solid var(--border);
}


/* ==========================================================
   FOOTER
========================================================== */

.footer {
  margin-top: 8rem;

  background: var(--bg-soft);

  border-top: 1px solid var(--border);
}

.footer-container {
  width: min(1280px, 92%);

  margin: 0 auto;

  padding: 4rem 0;

  display: grid;

  grid-template-columns:
    2fr 1fr 1fr 1fr;

  gap: 3rem;
}

.footer-column {
  display: flex;

  flex-direction: column;

  gap: 0.7rem;
}

.footer-column h4 {
  margin-bottom: 0.5rem;

  color: var(--text);

  font-size: 0.85rem;

  text-transform: uppercase;

  letter-spacing: 0.08em;
}

.footer-column p {
  max-width: 360px;

  color: var(--muted);

  font-size: 0.9rem;
}

.footer-column a {
  color: var(--muted);

  font-size: 0.9rem;
}

.footer-column a:hover {
  color: var(--text);
}

.footer-bottom {
  padding: 1.5rem;

  border-top: 1px solid var(--border);

  color: var(--muted);

  text-align: center;

  font-size: 0.8rem;
}


/* ==========================================================
   ANIMATIONS
========================================================== */

.fade-up {
  animation:
    fadeUp 0.6s ease both;
}

@keyframes fadeUp {
  from {
    opacity: 0;

    transform:
      translateY(12px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}


/* ==========================================================
   SELECTION
========================================================== */

::selection {
  background: rgba(96, 165, 250, 0.25);

  color: var(--text);
}


/* ==========================================================
   SCROLLBAR
========================================================== */

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: #252c38;

  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #394352;
}

/* ==========================================================
   ROADMAP MODULES
========================================================== */

.roadmap-module {
  margin-top: 5rem;
}

.roadmap-module:first-child {
  margin-top: 0;
}

.roadmap-module .section-header {
  margin-bottom: 2rem;
}

/* ==========================================================
   RESPONSIVE
========================================================== */

@media (max-width: 900px) {
  .nav-container {
    height: auto;

    min-height: 74px;

    padding: 1rem 0;

    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;

    justify-content: flex-end;

    gap: 1rem 1.4rem;
  }

  .hero {
    min-height: auto;

    padding: 6rem 0;
  }

  .hero::after {
    display: none;
  }

  .footer-container {
    grid-template-columns:
      1fr 1fr;
  }
}


@media (max-width: 600px) {
  main {
    width: min(92%, 100%);
  }

  .nav-container {
    align-items: flex-start;

    flex-direction: column;
  }

  .nav-links {
    width: 100%;

    justify-content: flex-start;
  }

  .hero {
    padding: 4rem 0;
  }

  h1 {
    font-size: 2.8rem;

    letter-spacing: -0.04em;
  }

  h2 {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;

    align-items: stretch;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .contact-page {
    padding-top: 3rem;
  }

  .contact-page .section-header h1 {
    font-size: 3rem;
  }

  .projects-grid,
  .about-grid,
  .contact-grid,
  .cert-grid,
  .stats-grid,
  .specializations-grid {
    grid-template-columns: 1fr;
  }

  .footer-container {
    grid-template-columns: 1fr;

    text-align: left;
  }
}```

### src/data/certifications.ts
```
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
];```

### src/data/curriculum.ts
```
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

];```

### src/data/experience.ts
```
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
];```

### src/data/profile.ts
```
export interface Profile {

  name: string;

  title: string;

  subtitle: string;

  summary: string;

  location: string;

  email: string;

  github: string;

  linkedin: string;

}

export const profile: Profile = {

  name: "Héctor Andrés Quintero Silva",

  title: "AI Platform Engineer",

  subtitle:
    "Backend Engineering • AI Infrastructure • MLOps • LLM Platforms",

  summary:
    "AI Platform Engineer focused on designing and building production-ready AI platforms, scalable backend systems and cloud-native infrastructure. I specialize in Python, FastAPI, PostgreSQL, Redis, Docker and Kubernetes, developing secure APIs, Retrieval-Augmented Generation (RAG) systems, LLM Gateway APIs, embedding services and enterprise AI platforms. My experience combines backend engineering, distributed systems, Machine Learning, MLOps and modern software engineering practices to transform complex AI capabilities into reliable, maintainable and developer-friendly products.",

  location: "Cali, Colombia",

  email: "hectorquinterosilva@gmail.com",

  github: "https://github.com/hectorquinterosilva",

  linkedin: "https://linkedin.com/in/hectorquinterosilva"

};```

### src/data/roadmap_old.ts
```
export type Status =
  | "Planned"
  | "In Progress"
  | "Completed";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface RoadmapProject {

  id:number;

  module:string;

  category:string;

  title:string;

  order:number;

  level:number;

  featured:boolean;

  status:Status;

  maturity:
  | "Planning"
  | "Design"
  | "Development"
  | "Testing"
  | "Production";

  difficulty:Difficulty;

  estimatedWeeks:number;

  businessValue:"Low"|"Medium"|"High";

  github?:string;

  demo?:string;

  thumbnail?:string;

  summary:string;

  businessProblem:string;

  solution:string;

  architecture:string;

  technologies:string[];

  skills:string[];

  dependsOn:number[];

}

export const roadmapProjects: RoadmapProject[] = [

{
id:1,

module:"Backend Engineering",

category:"Enterprise APIs",

title:"AI API Gateway",

order:1,

level:1,

featured:true,

status:"In Progress",

maturity:"Development",

difficulty:"Intermediate",

estimatedWeeks:4,

businessValue:"High",

summary:
"Unified gateway for OpenAI, Anthropic and Gemini APIs.",

businessProblem:
"Applications require a single secure endpoint capable of communicating with multiple LLM providers while hiding provider-specific implementations.",

solution:
"A modular API Gateway that centralizes authentication, provider routing, persistence, logging and rate limiting.",

architecture:
"FastAPI + PostgreSQL + Redis + Docker",

technologies:[
"Python",
"FastAPI",
"PostgreSQL",
"Redis",
"Docker",
"SQLAlchemy",
"Alembic"
],

skills:[
"Backend Architecture",
"REST APIs",
"Authentication",
"Docker",
"Database Design"
],

dependsOn:[]
},

{
id:2,

module:"Backend Engineering",

category:"Identity",

title:"Authentication Service",

order:2,

level:1,

featured:false,

status:"Planned",

maturity:"Planning",

difficulty:"Intermediate",

estimatedWeeks:3,

businessValue:"High",

summary:
"Central authentication service.",

businessProblem:
"Every enterprise application needs secure authentication.",

solution:
"Reusable JWT/OAuth2 authentication microservice.",

architecture:
"FastAPI + PostgreSQL",

technologies:[
"Python",
"FastAPI",
"JWT",
"PostgreSQL"
],

skills:[
"OAuth2",
"JWT",
"Security"
],

dependsOn:[1]
}

];```

### src/data/social.ts
```
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/hectorquinterosilva",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9s-quintero-silva-208430139/",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:hectorquinterosilva@gmail.com",
    icon: "mail"
  }
];```

### src/data/stack.ts
```
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

];```
