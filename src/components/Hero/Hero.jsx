import React from "react";
import "./Hero.css";
import Profil_picture from "/images/justin-dev.png";

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero section" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Je suis <span className="gradient-text">Justin.</span>
            <br />
            Développeur Web créatif.
          </h1>
          <p className="hero-description">
            Un site, ce n’est pas juste du code. C’est une ambiance, une
            sensation, une histoire à raconter. Moi, je m’occupe de la rendre
            inoubliable.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("portfolio")}
            >
              Voir mes projets
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="about-section" id="about">
          <div className="about-image">
            <img src={Profil_picture} alt="Profile" />
          </div>
          <div className="about-content">
            <div className="section-header">
              <h2>À PROPOS DE MOI</h2>
              <div className="header-line" />
            </div>
            <p>
              Développeur web passionné, je transforme les idées en expériences
              interactives, claires et efficaces. Formé chez BeCode, puis plongé
              dans le rythme intense d’une start-up, j’ai appris à coder vite,
              bien… et avec style. Curieux de nature, je teste, j’explore, je
              bricole avec les nouvelles technos, surtout quand il s’agit d’IA.
              Ce qui me motive ? Trouver des solutions simples, élégantes et
              bien pensées — pour des sites qui fonctionnent, vraiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
