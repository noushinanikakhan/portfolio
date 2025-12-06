import React from "react";

const skills = [
  { label: "JavaScript", icon: "🟨" },
  { label: "React", icon: "⚛️" },
  { label: "Node.js", icon: "🟩" },
  { label: "Express.js", icon: "🚂" },
  { label: "MongoDB", icon: "🍃" },
  { label: "HTML", icon: "🌐" },
  { label: "CSS", icon: "🎨" },
  { label: "Git", icon: "🔧" },
  { label: "GitHub", icon: "🐙" },
  { label: "VS Code", icon: "💻" },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Hover over each icon to see the skill name.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.label} className="skill-card">
            {/* ONLY ICON VISIBLE */}
            <span className="skill-icon">{skill.icon}</span>

            {/* NAME ONLY IN TOOLTIP */}
            <span className="skill-tooltip">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
