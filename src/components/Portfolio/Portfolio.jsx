import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Fake_preview from "/projects/fake.jpg";
import Game_preview from "/projects/mobile.png";
import Flexflix from "/projects/flexflix.png";
import GSAP from "/projects/gsap.png";
import sushi_masta from "/projects/sushi_masta.png";

export const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "game-store",
      title: "Site de vente de jeux vidéo",
      category: "E-commerce",
      image: Game_preview,
      description:
        "Plateforme e-commerce avec navigation fluide et design épuré.",
    },
    {
      id: "cinema",
      title: "Site pour un cinéma",
      category: "Site Vitrine",
      image: Flexflix,
      description:
        "Présentation d'événements et films avec système de réservation simple.",
    },
    {
      id: 3,
      title: "Site pour un restaurant",
      category: "Site Vitrine",
      image: sushi_masta,
      description: "Design moderne pour mettre en valeur menus et services.",
    },
    {
      id: 4,
      title: "Projet TCG Pocket",
      category: "Application Web",
      image: Fake_preview,
      description: "Interactivité et logique captivante d'ouverture de cartes.",
    },
    {
      id: "gsap-react",
      title: "Site vitrine d'animation",
      category: "Animation",
      image: GSAP,
      description: "Portfolio interactif avec animations GSAP sophistiquées.",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-subtitle">Mon travail récent</span>
          <h2>MES PROJETS</h2>
          <div className="header-line" />
          <p className="section-description">
            Découvrez une sélection de mes projets les plus récents, mettant en
            valeur mes compétences en développement web.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
