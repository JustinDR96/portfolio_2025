import React, { useState, useEffect } from "react";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Ferme le menu après le clic
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="container header-content">
        <div className="logo">JD</div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMenuOpen ? "active" : ""}>
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
