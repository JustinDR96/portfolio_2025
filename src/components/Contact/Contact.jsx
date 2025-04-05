import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Remplacez ces valeurs par vos propres identifiants EmailJS
      const result = await emailjs.send(
        "service_4subxeh", // Le nouveau service ID généré
        "template_s84h42r",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "e3NlMTWok6sMAlJnU"
      );

      if (result.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="item-content">
                    <h5>Email</h5>
                    <a href="mailto:justinderoover@gmail.com">
                      justinderoover@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="item-content">
                    <h5>Localisation</h5>
                    <span>Bruxelles, Belgique</span>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Suivez-moi</h4>
                <div className="social-icons">
                  <a
                    href="https://github.com/JustinDR96"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/derooverjustin/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h4>Envoyez-moi un message</h4>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows="6"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fas fa-spinner fa-spin" /> Envoi...
                    </span>
                  ) : (
                    <span>
                      Envoyer <i className="fas fa-paper-plane" />
                    </span>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle" />
                </div>
                <h3>Message envoyé avec succès !</h3>
                <p>
                  Merci de m&apos;avoir contacté. Je vous répondrai dans les
                  plus brefs délais.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
