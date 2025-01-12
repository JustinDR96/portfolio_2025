import React from "react";
import "./Services.css";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Sites Vitrines",
      icon: "🌐",
      description:
        "Création de sites vitrines pour mettre en valeur votre activité.",
    },
    {
      id: 2,
      title: "E-commerce",
      icon: "🛍️",
      description:
        "Développement de sites e-commerce pour booster vos ventes en ligne.",
    },
    {
      id: 3,
      title: "Landing Pages",
      icon: "🎯",
      description:
        "Conception de landing pages optimisées pour transformer vos visiteurs en clients.",
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
              <div className="service-icon">{service.icon}</div>
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
