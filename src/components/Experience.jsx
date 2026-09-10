const skillGroups = [
  {
    number: "01",
    title: "Programming",
    skills: [
      "Python",
      "C++",
      "Java",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Machine Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Pandas",
      "NumPy",
      "OpenCV",
    ],
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Transformers",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
    ],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Power BI",
      "Tableau",
      "Excel",
      "MySQL",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-header">
        <span>02 — SKILLS</span>
        <h2>My technical toolkit.</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>

            <div className="skill-number">
              {group.number}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}