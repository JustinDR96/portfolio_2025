import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>CONTACT</h2>
          <div className="header-line" />
          <p className="section-description">
            Prêt à donner vie à votre projet ? Contactez-moi dès
            aujourd&apos;hui pour en discuter !
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-header">
                <h4>Informations de contact</h4>
                <p>Choisissez votre moyen de communication préféré</p>
              </div>

              <div className="info-items">
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="item-content">
                    <h5>Téléphone</h5>
                    <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="item-content">
                    <h5>Email</h5>
                    <a href="mailto:contact@example.com">contact@example.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="item-content">
                    <h5>Localisation</h5>
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Suivez-moi</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-header">
                <h4>Envoyez-moi un message</h4>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Votre email" required />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Votre message" rows="6" required />
              </div>

              <button type="submit" className="submit-btn">
                <span>Envoyer</span>
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
