import React from "react";
import "./Skills.css";

export const Skills = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="neon-text">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
