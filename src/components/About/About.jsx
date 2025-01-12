import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="neon-text">Who Am I?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionné par le développement web, je crée des expériences
              numériques uniques et innovantes. Spécialisé dans les technologies
              modernes du web, je combine créativité et expertise technique pour
              donner vie à vos projets.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Toujours à l'affût des dernières technologies</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💡</div>
              <h3>Créativité</h3>
              <p>Des solutions uniques pour chaque projet</p>
            </div>
          </div>
          <button className="btn btn-primary">Show My Projects</button>
        </div>
      </div>
    </section>
  );
};
