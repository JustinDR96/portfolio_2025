import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProjectDetails.css";
import mockupIGDB from "/projects/macbook_igdb.png";
import mockupFlexflix from "/projects/macbook_flexflix.png";
import mockupLegourmet from "/projects/macbook_legourmet.png";
import mockupTcg from "/projects/macbook_tcg.png";
import mockupEshop from "/projects/macbook_eshop.png";
import mockupGsap from "/projects/macbook_gsap.png";
import iphoneIgdb from "/projects/iphone_igdb.png";
import ipadIgdb from "/projects/ipad_igdb.png";
import iphoneFlexflix from "/projects/iphone_flexflix.png";
import ipadFlexflix from "/projects/ipad_flexflix.png";
import iphoneLegourmet from "/projects/iphone_legourmet.png";
import ipadLegourmet from "/projects/ipad_legourmet.png";
import iphoneTcg from "/projects/iphone_tcg.png";
import ipadTcg from "/projects/ipad_tcg.png";
import iphoneEshop from "/projects/iphone_eshop.png";
import ipadEshop from "/projects/ipad_eshop.png";
import iphoneGsap from "/projects/iphone_gsap.png";
import ipadGsap from "/projects/ipad_gsap.png";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    // Fonction pour détecter le type d'appareil
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setDeviceType("mobile");
      } else if (width <= 992) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Vérifier au chargement
    checkDeviceType();

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", checkDeviceType);

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  // Fonction pour déterminer quelle image afficher
  const getProjectImage = (projectId) => {
    // Pour tous les projets, on définit une stratégie d'affichage responsive
    if (deviceType === "mobile") {
      // Pour IGDB, on a une image spécifique
      if (projectId === "gameCenter") return iphoneIgdb;
      if (projectId === "Flexflix") return iphoneFlexflix;
      if (projectId === "legourmet") return iphoneLegourmet;
      if (projectId === "tcg-pocket-clone") return iphoneTcg;
      if (projectId === "fake-store") return iphoneEshop;
      if (projectId === "gsap-react") return iphoneGsap;
      // Pour les autres projets, on pourrait ajouter d'autres images iPhone ici
      // Exemple:
    }

    if (deviceType === "tablet") {
      // Pour IGDB, on a une image spécifique
      if (projectId === "gameCenter") return ipadIgdb;
      if (projectId === "Flexflix") return ipadFlexflix;
      if (projectId === "legourmet") return ipadLegourmet;
      if (projectId === "tcg-pocket-clone") return ipadTcg;
      if (projectId === "fake-store") return ipadEshop;
      if (projectId === "gsap-react") return ipadGsap;
      // Pour les autres projets, on pourrait ajouter d'autres images iPad ici
      // Exemple: if (projectId === "Flexflix") return ipadFlexflix;
    }

    // Version desktop (ou fallback si pas d'image mobile/tablet spécifique)
    switch (projectId) {
      case "gameCenter":
        return mockupIGDB;
      case "Flexflix":
        return mockupFlexflix;
      case "legourmet":
        return mockupLegourmet;
      case "tcg-pocket-clone":
        return mockupTcg;
      case "fake-store":
        return mockupEshop;
      case "gsap-react":
        return mockupGsap;
      default:
        return mockupIGDB;
    }
  };

  const projectsData = {
    gameCenter: {
      title: "Game Center",
      category: "Site E-commerce / Gaming",
      image: getProjectImage("gameCenter"),
      description:
        "Plateforme de jeux vidéo avec moteur de recherche performant et navigation pensée pour les gamers.",
      longDescription: [
        "Intégration de l'API RAWG pour récupérer une base de données complète de jeux vidéo",
        "Filtrage dynamique par genre, plateforme et éditeur",
        "Recherche instantanée avec suggestions en temps réel",
        "Pages jeux détaillées avec visuels, description, notes et dates de sortie",
        "Panier d'achat interactif avec gestion des quantités",
        "Interface responsive et design fluide adapté à tous les écrans",
      ],
      technologies: [
        { name: "React", icon: "react.png" },
        { name: "Vite", icon: "vite.svg" },
        { name: "SCSS", icon: "sass.svg" },
        { name: "RAWG API", icon: "rawg.png" }, // crée une icône si besoin
      ],
      links: {
        demo: "https://gamecenter96.vercel.app/",
        github: "https://github.com/JustinDR96/IGDB", // renommer le repo si tu veux être cohérent avec RAWG
      },
    },
    Flexflix: {
      title: "FlexFlix Cinéma",
      category: "Plateforme de Streaming / Cinéma",
      image: getProjectImage("Flexflix"),
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
        { name: "React", icon: "react.png" },
        { name: "CSS", icon: "css.png" },
        { name: "Vite", icon: "vite.svg" },
        { name: "TMDB API", icon: "tmdb.svg" },
      ],
      links: {
        demo: "https://plex-clone-iota.vercel.app/",
        github: "https://github.com/JustinDR96/plex_clone",
      },
    },
    legourmet: {
      title: "Restaurant Le Gourmet",
      category: "Site Vitrine / Restauration",
      image: getProjectImage("legourmet"),
      description:
        "Site vitrine élégant pour un restaurant gastronomique, mettant en valeur les plats et l'ambiance unique de l'établissement.",
      longDescription: [
        "Une présentation interactive du menu pour séduire les clients.",
        "Une galerie photo mettant en avant la qualité des plats et l'atmosphère du restaurant.",
        "Un système de réservation intégré et facile d'utilisation.",
        "Un design moderne, épuré et entièrement responsive pour une expérience optimale sur tous les appareils.",
      ],
      technologies: [
        { name: "React", icon: "react.png" },
        { name: "Vite", icon: "vite.svg" },
        { name: "Tailwind", icon: "tailwind.png" },
      ],
      links: {
        demo: "https://le-gourmet.vercel.app/",
        github: "https://github.com/JustinDR96/le_gourmet",
      },
    },

    "tcg-pocket-clone": {
      title: "TCG Clone",
      category: "Application Web / Gaming",
      image: getProjectImage("tcg-pocket-clone"),
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
        { name: "React", icon: "react.png" },
        { name: "Node.js", icon: "nodejs.webp" },
        { name: "Vite", icon: "vite.svg" },
        { name: "TCG DEX", icon: "tcg.svg" },
      ],
      links: {
        demo: "https://tcg-clone.vercel.app/",
        github: "https://github.com/JustinDR96/TCG-Clone",
      },
    },
    "fake-store": {
      title: "Fake Store",
      category: "Site E-commerce / Vêtements",
      image: getProjectImage("fake-store"),
      description:
        "Une plateforme de vente en ligne moderne et réactive, offrant une expérience utilisateur fluide et intuitive.",
      longDescription: [
        "Intégration de l'API Fake Store pour un catalogue de produits varié",
        "Système de filtrage par catégories et prix",
        "Barre de recherche dynamique avec suggestions",
        "Panier d'achat interactif avec gestion des quantités",
        "Pages de détails des produits avec descriptions complètes",
        "Interface responsive adaptée à tous les écrans",
      ],
      technologies: [
        { name: "React", icon: "react.png" },
        { name: "Vite", icon: "vite.svg" },
        { name: "SCSS", icon: "sass.svg" },
        { name: "FakeStore API", icon: "fakestore.png" },
      ],
      links: {
        demo: "https://e-shop-one-kappa.vercel.app/",
        github: "https://github.com/JustinDR96/E-shop/",
      },
    },

    "gsap-react": {
      title: "GSAP Animations Showcase",
      category: "Animation / Démonstration",
      image: getProjectImage("gsap-react"),
      description:
        "Une collection d'animations fluides et interactives réalisées avec GSAP et React, démontrant les possibilités créatives de l'animation web moderne.",
      longDescription: [
        "Animations de défilement fluides avec ScrollTrigger",
        "Transitions d'entrée et de sortie personnalisées",
        "Animations de texte et d'images synchronisées",
        "Effets de parallaxe sur le défilement",
        "Animations de menu et de navigation interactives",
        "Effets visuels réactifs aux actions utilisateur",
        "Design minimaliste mettant en valeur les animations",
      ],
      technologies: [
        { name: "React", icon: "react.png" },
        { name: "GSAP", icon: "gsap_icon.png" },
        { name: "Vite", icon: "vite.svg" },
        { name: "CSS", icon: "css.png" },
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
            <div
              className={`project-image ${
                deviceType !== "desktop" ? `project-image-${deviceType}` : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={deviceType !== "desktop" ? `img-${deviceType}` : ""}
              />
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
                  <div
                    className="tech-item"
                    key={index}
                    data-tech={tech.name.toLowerCase()}
                  >
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
