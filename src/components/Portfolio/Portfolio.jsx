import React, { useMemo, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import Flexflix from "/projects/plex.png";
import TCG from "/projects/tcg.png";
import GSAP from "/projects/gsap_1.png";
import legourmet from "/projects/legourmet_1.png";
import FakeStore from "/projects/eshop.png";
import Igdb from "/projects/igdb.png";

export const Portfolio = memo(() => {
  const navigate = useNavigate();

  const projects = useMemo(
    () => [
      {
        id: "gameCenter",
        title: "Site de vente de jeux vidéo",
        category: "E-commerce",
        image: Igdb,
        description:
          "Plateforme e-commerce avec navigation fluide et design épuré.",
        size: "large",
      },
      {
        id: "Flexflix",
        title: "Site de streaming",
        category: "Plateforme de Streaming",
        image: Flexflix,
        description:
          "Présentation d'événements et films avec système de réservation simple.",
        size: "wide",
      },
      {
        id: "legourmet",
        title: "Site pour un restaurant",
        category: "Site Vitrine / Restauration",
        image: legourmet,
        description:
          "Design moderne mettant en avant menus et ambiance, avec système de réservation intuitif.",
        size: "tall",
      },
      {
        id: "tcg-pocket-clone",
        title: "Projet TCG Pocket",
        category: "Application Web",
        image: TCG,
        description:
          "Expérience immersive basée sur l'ouverture interactive de cartes.",
        size: "large",
      },
      {
        id: "fake-store",
        title: "Site e-commerce",
        category: "E-commerce",
        image: FakeStore,
        description:
          "Plateforme de vente en ligne avec un design moderne et une navigation intuitive.",
        size: "wide",
      },
      {
        id: "gsap-react",
        title: "Site vitrine d'animation",
        category: "Site de Démonstration / Animations",
        image: GSAP,
        description:
          "Portfolio interactif mettant en valeur des animations dynamiques GSAP.",
        size: "wide",
      },
    ],
    []
  );

  const handleNavigate = useCallback(
    (projectId) => {
      navigate(`/project/${projectId}`);
    },
    [navigate]
  );

  return (
    <section
      className="portfolio section"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="portfolio-header">
          <span className="section-subtitle">Mon travail récent</span>
          <h2 id="portfolio-heading">MES PROJETS</h2>
          <div className="header-line" aria-hidden="true" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.size}`}
              key={project.id}
              onClick={() => handleNavigate(project.id)}
              tabIndex="0"
              aria-labelledby={`project-title-${project.id}`}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigate(project.id);
                }
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 id={`project-title-${project.id}`}>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

// Pour éviter les warnings React en mode développement
Portfolio.displayName = "Portfolio";

export default Portfolio;
