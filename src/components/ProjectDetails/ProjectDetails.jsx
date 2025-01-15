import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import Fake_preview from "/projects/fake.jpg";
import Game_preview from "/projects/mobile.png";
import Flexflix from "/projects/flexflix.png";
import GSAP from "/projects/gsap.png";
import gsap_icon from "/icons/gsap_icon.png";
import legourmet from "/projects/legourmet.png";
import sass_icon from "/icons/sass.svg";
import vite_icon from "/icons/vite.svg";
import tmdb_icon from "/icons/tmdb.svg";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    gameCenter: {
      title: "Game Center",
      category: "Site E-commerce / Gaming",
      image: Game_preview,
      description:
        "Site e-commerce dédié aux jeux vidéo, offrant une expérience utilisateur fluide et moderne pour découvrir et acheter les derniers jeux.",
      longDescription: [
        "Catalogue interactif de jeux vidéo avec des filtres avancés.",
        "Pages produit détaillées présentant les caractéristiques des jeux.",
        "Panier d’achat et système de commande intégrés.",
        "Design immersif et responsive, optimisé pour les gamers.",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Tailwind", icon: "tailwind.svg" },
        { name: "Firebase", icon: "firebase.svg" },
      ],
      links: {
        demo: "https://gamecenter96.vercel.app/",
        github: "https://github.com/JustinDR96/game_center",
      },
    },
    Flexflix: {
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
    legourmet: {
      title: "Restaurant Le Gourmet",
      category: "Site Vitrine / Restauration",
      image: legourmet,
      description:
        "Site vitrine élégant pour un restaurant gastronomique, mettant en valeur les plats et l'ambiance unique de l'établissement.",
      longDescription: [
        "Une présentation interactive du menu pour séduire les clients.",
        "Une galerie photo mettant en avant la qualité des plats et l’atmosphère du restaurant.",
        "Un système de réservation intégré et facile d'utilisation.",
        "Un design moderne, épuré et entièrement responsive pour une expérience optimale sur tous les appareils.",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Tailwind", icon: "tailwind.svg" },
      ],
      links: {
        demo: "https://le-gourmet.vercel.app/",
        github: "https://github.com/JustinDR96/le_gourmet",
      },
    },

    "tcg-pocket-clone": {
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
      title: "GSAP Animations Showcase",
      category: "Site de Démonstration / Animations",
      image: GSAP,
      description:
        "Site de démonstration interactif mettant en valeur les animations fluides et dynamiques réalisées avec GSAP et React.",
      longDescription: [
        "Présentation d'animations créatives et immersives.",
        "Transitions fluides entre les sections pour une expérience utilisateur engageante.",
        "Exemples interactifs pour explorer les capacités de GSAP.",
        "Design responsive adapté aux écrans mobiles et desktops.",
      ],
      technologies: [
        { name: "React", icon: "react.svg" },
        { name: "GSAP", icon: "gsap.svg" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Tailwind", icon: "tailwind.svg" },
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
