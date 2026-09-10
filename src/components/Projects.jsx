import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Agentic AI & RAG",
    subtitle: "Knowledge Assistant",
    description:
      "An Agentic AI knowledge assistant combining CrewAI, Gemini and a reusable RAG pipeline for grounded document question answering.",
    tech: [
      "Python",
      "CrewAI",
      "Gemini",
      "RAG",
      "ChromaDB",
      "Sentence Transformers",
    ],
    github:
      "https://github.com/YashParmar05/agentic-rag-assistant",
    featured: true,
  },

  {
    number: "02",
    title: "ADAPT-CLONE",
    subtitle: "Hybrid Source Code Plagiarism Detection",
    description:
      "A hybrid plagiarism detection framework combining Token Similarity, AST, PDG, Structural Similarity and Semantic Embeddings.",
    tech: [
      "Python",
      "Machine Learning",
      "AST",
      "PDG",
      "Embeddings",
    ],
    github:
      "https://github.com/YashParmar05/ADAPT-CLONE",
    featured: true,
  },

  {
    number: "03",
    title: "LLIE",
    subtitle: "Low Light Image Enhancement",
    description:
      "A U-Net based deep learning model designed to improve illumination, colour consistency and texture details in low-light images.",
    tech: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
    github:
      "https://github.com/YashParmar05/LLIE",
    featured: false,
  },

  {
    number: "04",
    title: "Cafeteria Management",
    subtitle: "E-Commerce Website",
    description:
      "A responsive cafeteria management platform with authentication, shopping cart, online ordering and administrative modules.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    github: null,
    live:
      "https://aksharcafe.42web.io",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-header">
        <span>04 — SELECTED PROJECTS</span>
        <h2>Things I've built.</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article
            className={
              project.featured
                ? "project-card featured"
                : "project-card"
            }
            key={project.number}
          >

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-actions">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={19} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={19} />
                  </a>
                )}

              </div>

            </div>

            <div className="project-body">

              <p>{project.subtitle}</p>

              <h3>{project.title}</h3>

              <div className="project-line"></div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>

            <div className="project-footer">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repository
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Demo
                  <ArrowUpRight size={17} />
                </a>
              )}
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}