import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import Fake_preview from "/projects/fake.jpg";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "game-store": {
      title: "Site de vente de jeux vidéo",
      category: "E-commerce",
      image: Fake_preview,
      description:
        "Plateforme e-commerce avec navigation fluide et design épuré. Cette plateforme permet aux utilisateurs de parcourir, rechercher et acheter des jeux vidéo en ligne. Le site dispose d'un système de filtrage avancé, d'un panier d'achat dynamique et d'une interface utilisateur intuitive.",
      longDescription: [
        "Interface utilisateur moderne et responsive",
        "Système de recherche et filtrage avancé",
        "Panier d'achat en temps réel",
        "Système de paiement sécurisé",
        "Gestion des stocks en temps réel",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "Stripe", icon: "stripe.svg" },
      ],
      links: {
        demo: "https://game-store-demo.com",
        github: "https://github.com/username/game-store",
      },
    },
    cinema: {
      title: "Site pour un cinéma",
      category: "Site Vitrine",
      image: "/path-to-cinema-image.jpg",
      description:
        "Présentation d'événements et films avec système de réservation simple. Le site permet aux visiteurs de consulter les horaires des séances, réserver leurs places et s'informer sur les événements à venir.",
      longDescription: [
        "Système de réservation en ligne",
        "Calendrier des séances interactif",
        "Section actualités et événements",
        "Interface d'administration pour la gestion des films",
        "Système de newsletter",
      ],
      technologies: [
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "Supabase", icon: "supabase.svg" },
        { name: "Tailwind CSS", icon: "tailwind.svg" },
      ],
      links: {
        demo: "https://cinema-demo.com",
        github: "https://github.com/username/cinema",
      },
    },
    // Ajoutez les autres projets de la même manière
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Projet non trouvé</h2>
        <button onClick={() => navigate("/")}>Retour à l&apos;accueil</button>
      </div>
    );
  }

  return (
    <section className="project-details section">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/")}>
          <i className="fas fa-arrow-left" />
          Retour aux projets
        </button>

        <div className="project-details-wrapper">
          <div className="project-preview">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-links">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                <i className="fas fa-external-link-alt" />
                Voir le site
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <i className="fab fa-github" />
                Voir le code
              </a>
            </div>
          </div>

          <div className="project-info">
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <h1>{project.title}</h1>
            </div>

            <div className="project-description">
              <p>{project.description}</p>
              <ul className="features-list">
                {project.longDescription.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h3>Technologies utilisées</h3>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => (
                  <div className="tech-item" key={index}>
                    <img src={`/icons/${tech.icon}`} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
