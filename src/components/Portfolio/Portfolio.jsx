import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

export const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "game-store",
      title: "Site de vente de jeux vidéo",
      category: "E-commerce",
      image: "/path-to-game-store-image.jpg",
      description:
        "Plateforme e-commerce avec navigation fluide et design épuré.",
    },
    {
      id: "cinema",
      title: "Site pour un cinéma",
      category: "Site Vitrine",
      image: "/path-to-cinema-image.jpg",
      description:
        "Présentation d'événements et films avec système de réservation simple.",
    },
    {
      id: 3,
      title: "Site pour un restaurant",
      category: "Site Vitrine",
      image: "/path-to-restaurant-image.jpg",
      description: "Design moderne pour mettre en valeur menus et services.",
    },
    {
      id: 4,
      title: "Projet TCG Pocket",
      category: "Application Web",
      image: "/path-to-tcg-image.jpg",
      description: "Interactivité et logique captivante d'ouverture de cartes.",
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
