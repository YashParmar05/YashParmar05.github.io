import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-inner">

        <span className="contact-label">
          07 — CONTACT
        </span>

        <h2>
          Let's build something
          <span> intelligent.</span>
        </h2>

        <p>
          I'm always interested in discussing AI, Machine
          Learning, research, projects and new opportunities.
        </p>

        <a
          href="mailto:yashlogo10@gmail.com"
          className="contact-email"
        >
          yashlogo10@gmail.com
          <ArrowUpRight />
        </a>

        <div className="contact-socials">

          <a
            href="https://github.com/YashParmar05"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
            LinkedIn
          </a>

          <a href="mailto:yashlogo10@gmail.com">
            <Mail />
            Email
          </a>

        </div>

      </div>

    </section>
  );
}