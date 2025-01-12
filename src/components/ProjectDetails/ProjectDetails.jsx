import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import Fake_preview from "/projects/fake.jpg";
import Game_preview from "/projects/mobile.png";
import Flexflix from "/projects/flexflix.png";
import GSAP from "/projects/gsap.png";
import gsap_icon from "/icons/gsap_icon.png";
import sushi_masta from "/projects/sushi_masta.png";
import sass_icon from "/icons/sass.svg";
import vite_icon from "/icons/vite.svg";
import tmdb_icon from "/icons/tmdb.svg";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "game-store": {
      title: "GameCenter",
      category: "E-commerce / Gaming",
      image: Game_preview,
      description:
        "Une plateforme moderne de vente de jeux vidéo inspirée des plus grandes références du marché. Interface intuitive permettant aux utilisateurs de découvrir, rechercher et acheter leurs jeux préférés.",
      longDescription: [
        "Catalogue complet avec système de filtrage par genre, plateforme et prix",
        "Interface utilisateur moderne avec thème sombre et animations fluides",
        "Système de recherche instantanée des jeux",
        "Panier d'achat dynamique avec gestion des quantités",
        "Authentification utilisateur sécurisée",
        "Responsive design pour une expérience optimale sur tous les appareils",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Sass", icon: "sass.svg" },
        { name: "IGDB API", icon: "igdb.svg" },
      ],
      links: {
        demo: "https://gamecenter96.vercel.app/",
        github: "https://github.com/JustinDR96/IGDB",
      },
    },
    cinema: {
      title: "FlexFlix Cinéma",
      category: "Site Vitrine / Divertissement",
      image: Flexflix,
      description:
        "Une plateforme moderne dédiée au cinéma, permettant aux utilisateurs de découvrir les dernières sorties, réserver leurs places et suivre l'actualité cinématographique.",
      longDescription: [
        "Catalogue des films à l'affiche et à venir",
        "Système de réservation de billets en ligne",
        "Interface utilisateur intuitive et responsive",
        "Actualités et critiques de films",
        "Programme des séances en temps réel",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "CSS", icon: "css.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "TMDB API", icon: "tmdb.svg" },
      ],
      links: {
        demo: "https://flexflix-demo.vercel.app",
        github: "https://github.com/username/flexflix",
      },
    },
    3: {
      title: "Restaurant Gourmet",
      category: "Site Vitrine / Restauration",
      image: sushi_masta,
      description:
        "Site vitrine élégant pour un restaurant gastronomique, mettant en valeur les plats et l'ambiance unique de l'établissement.",
      longDescription: [
        "Présentation interactive du menu",
        "Galerie photo des plats et de l'établissement",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Tailwind", icon: "tailwind.svg" },
      ],
      links: {
        demo: "https://sushi-master-phi.vercel.app/",
        github: "https://github.com/username/restaurant",
      },
    },
    4: {
      title: "TCG Pocket",
      category: "Application Web / Gaming",
      image: Fake_preview,
      description:
        "Application web interactive permettant aux collectionneurs de cartes à jouer de gérer leur collection et de simuler l'ouverture de boosters.",
      longDescription: [
        "Système d'authentification utilisateur",
        "Simulation réaliste d'ouverture de boosters",
        "Gestion de collection personnelle",
        "Système d'échange entre utilisateurs",
        "Statistiques détaillées de collection",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Supabase", icon: "supabase.svg" },
      ],
      links: {
        demo: "https://tcg-pocket.vercel.app",
        github: "https://github.com/JustinDR96/tcg-pocket",
      },
    },
    "gsap-react": {
      title: "Site vitrine d'animation",
      category: "Animation",
      image: GSAP,
      description:
        "Portfolio interactif utilisant GSAP pour créer des animations fluides et modernes, offrant une expérience utilisateur unique et engageante.",
      longDescription: [
        "Animations sophistiquées avec GSAP et ScrollTrigger",
        "Transitions fluides entre les sections",
        "Interface utilisateur moderne et interactive",
        "Effets de parallaxe et animations au scroll",
        "Design responsive avec animations adaptatives",
        "Optimisation des performances pour une expérience fluide",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "GSAP", icon: gsap_icon },
        { name: "Vite", icon: "vite.svg" },
        { name: "CSS", icon: "css.svg" },
      ],
      links: {
        demo: "https://gsap-react-eta.vercel.app/",
        github: "https://github.com/JustinDR96/gsap-react",
      },
    },
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
