import React from "react";
import "./Experience.css";

export const Experience = () => {
  const skills = [
    {
      category: "Langages & Frameworks",
      items: [
        { name: "HTML5", icon: "/icons/html.png" },
        { name: "CSS3 / SCSS", icon: "/icons/css3.png" },
        { name: "Sass", icon: "/icons/sass.png" },
        { name: "JavaScript (ES6+)", icon: "/icons/js.png" },
        { name: "React", icon: "/icons/react_1.png" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },

        { name: "GSAP", icon: "/icons/gsap_icon.png" },
      ],
    },
    {
      category: "Outils & Environnement",
      items: [
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github_1.png" },
        { name: "Figma", icon: "/icons/figma.webp" },
        { name: "Visual Studio Code", icon: "/icons/vscode.png" },
        { name: "Vite", icon: "/icons/vite.svg" },
      ],
    },
    {
      category: "APIs & BDD",
      items: [
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Supabase", icon: "/icons/supabase.png" },
        { name: "IGDB API", icon: "/icons/igdb.svg" },
        { name: "TMDB API", icon: "/icons/tmdb.svg" },
        { name: "Fake Store API", icon: "/icons/fakestore.png" },
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
                          // filter: "brightness(0) invert(1)",
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
