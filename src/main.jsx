import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import emailjs from "@emailjs/browser";

// Initialiser EmailJS - remplacer par votre clé publique
emailjs.init("e3NlMTWok6sMAlJnU");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log web vitals in development, send to analytics in production
reportWebVitals(
  process.env.NODE_ENV === "development"
    ? console.log
    : (metric) => {
        // Ici vous pourriez envoyer les métriques à un service d'analyse
        // Par exemple Google Analytics, ou un endpoint personnalisé
        console.log(metric);
      }
);
