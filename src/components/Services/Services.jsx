import React from "react";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Sites Vitrines",
      icon: "/icons/services/showcase.svg",
      description:
        "Création de sites vitrines élégants et performants pour mettre en valeur votre activité avec impact.",
    },
    {
      id: 2,
      title: "E-commerce",
      icon: "/icons/services/ecommerce.svg",
      description:
        "Développement de boutiques en ligne sur mesure pour booster vos ventes et offrir une expérience client optimale.",
    },
    {
      id: 3,
      title: "Landing Pages",
      icon: "/icons/services/landing.svg",
      description:
        "Conception de landing pages stratégiques et optimisées pour convertir vos visiteurs en clients et maximiser vos conversions.",
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>MES SERVICES</h2>
          <div className="header-line" />
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        {/* Section Mes Valeurs (commentée)
        <div className="values-section">
          <h3>Mes Valeurs</h3>
          <p>
            Ma créativité, ma rigueur et mon respect des délais sont au cœur de mes projets. 
            Je travaille efficacement, en me concentrant sur ce qui compte vraiment, pour garantir 
            des résultats de qualité.
          </p>
        </div>
        */}
      </div>
    </section>
  );
};
