import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid"></div>

      <div className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-eyebrow">
          AI / ML ENGINEER · RESEARCHER
        </p>

        <h1>
          Yash <span>Parmar</span>
        </h1>

        <h2>
          Building intelligent systems
          <br />
          with <span>AI & Machine Learning.</span>
        </h2>

        <p className="hero-description">
          AI/ML Engineer and M.Tech Artificial Intelligence graduate
          experienced in Machine Learning, Deep Learning, Computer
          Vision, NLP and Software Engineering.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            Explore My Work
            <ArrowDown size={17} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Download size={17} />
            Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/YashParmar05"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a href="mailto:yashlogo10@gmail.com">
            <Mail size={20} />
            Email
          </a>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}