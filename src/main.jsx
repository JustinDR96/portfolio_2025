import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App";
import "./index.css";

emailjs.init("e3NlMTWok6sMAlJnU");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
