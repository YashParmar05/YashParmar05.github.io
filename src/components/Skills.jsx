import { Brain, Code2, Search } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">

      <div className="section-header">
        <span>01 — ABOUT</span>
        <h2>Turning ideas into intelligent solutions.</h2>
      </div>

      <div className="about-grid">

        <div className="about-image">
          <div className="image-frame">
            <img src="/profile.jpg" alt="Yash Parmar" />
          </div>

          <div className="image-caption">
            <span>AI / ML</span>
            <span>•</span>
            <span>RESEARCH</span>
          </div>
        </div>

        <div className="about-text">

          <p className="large-text">
            I'm an <strong>AI/ML Engineer</strong> and M.Tech
            Artificial Intelligence graduate passionate about
            building practical AI systems.
          </p>

          <p>
            My technical interests span Machine Learning,
            Deep Learning, Computer Vision, Natural Language
            Processing and modern AI systems.
          </p>

          <p>
            I enjoy working across the complete lifecycle —
            from data preprocessing and feature engineering
            to model development, evaluation and deployment.
          </p>

          <div className="about-cards">

            <div className="mini-card">
              <Brain size={24} />
              <h3>AI Engineering</h3>
              <p>ML, DL, NLP & intelligent systems</p>
            </div>

            <div className="mini-card">
              <Code2 size={24} />
              <h3>Development</h3>
              <p>Python, C++, SQL & software engineering</p>
            </div>

            <div className="mini-card">
              <Search size={24} />
              <h3>Research</h3>
              <p>Applied AI & experimentation</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}