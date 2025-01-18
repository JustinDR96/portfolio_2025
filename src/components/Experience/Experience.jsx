import React from "react";
import "./Experience.css";

export const Experience = () => {
  const skills = [
    {
      category: "Langages et Frameworks",
      items: [
        { name: "HTML", icon: "/icons/html.svg" },
        { name: "CSS/SCSS", icon: "/icons/css.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
      ],
    },
    {
      category: "Bases de données",
      items: [
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "Supabase", icon: "/icons/supabase.svg" },
      ],
    },
    {
      category: "Autres compétences",
      items: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
      ],
    },
  ];

  return (
    <section className="experience section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>MES COMPÉTENCES</h2>
          <div className="header-line" />
        </div>
        <div className="skills-container">
          {skills.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-icon">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          width: "24px",
                          height: "24px",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
