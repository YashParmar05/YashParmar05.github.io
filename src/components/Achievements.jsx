import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2024 — 2026",
    degree: "M.Tech in Artificial Intelligence",
    university: "University of Hyderabad",
    score: "CGPA 8.30",
  },
  {
    year: "2020 — 2024",
    degree: "B.Tech in Computer Engineering",
    university: "Gujarat Technological University",
    score: "CGPA 9.08",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-header">
        <span>05 — EDUCATION</span>
        <h2>Academic foundation.</h2>
      </div>

      <div className="education-grid">

        {education.map((item) => (
          <article className="education-card" key={item.degree}>

            <div className="education-icon">
              <GraduationCap size={25} />
            </div>

            <span className="education-year">
              {item.year}
            </span>

            <h3>{item.degree}</h3>

            <p>{item.university}</p>

            <strong>{item.score}</strong>

          </article>
        ))}

      </div>

    </section>
  );
}