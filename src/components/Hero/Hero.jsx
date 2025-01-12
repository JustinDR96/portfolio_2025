import React from "react";
import "./Hero.css";
import Profil_picture from "/images/photo_profil.png";

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
            Je suis <span className="gradient-text">Justin</span>,
            <br />
            Développeur Web.
          </h1>
          <p className="hero-description">
            Passionné par le codage et l&apos;innovation, je crée des sites
            modernes et performants pour répondre à vos besoins.
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
              Développeur web passionné, j&apos;aime relever des défis
              techniques et explorer de nouvelles technologies. Mon parcours
              chez BeCode, suivi d&apos;une expérience en start-up, m&apos;a
              permis de travailler sur des projets variés, où créativité et
              rigueur sont essentielles. Toujours curieux, j&apos;expérimente
              également dans le domaine de l&apos;intelligence artificielle pour
              offrir des solutions innovantes et adaptées à chaque besoin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
