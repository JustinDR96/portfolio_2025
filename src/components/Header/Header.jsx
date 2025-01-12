import React from "react";
import "./Header.css";

export const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">JD</div>
        <nav>
          <ul>
            <li>
              <a href="#hero" onClick={() => scrollToSection("hero")}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                À propos
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
                Projets
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="contact-btn"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
