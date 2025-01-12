import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">JD</div>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Justin De Roover. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
