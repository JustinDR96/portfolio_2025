import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

// Lazy load components
const Hero = lazy(() =>
  import("./components/Hero/Hero").then((module) => ({ default: module.Hero }))
);
const Portfolio = lazy(() =>
  import("./components/Portfolio/Portfolio").then((module) => ({
    default: module.Portfolio,
  }))
);
const Services = lazy(() =>
  import("./components/Services/Services").then((module) => ({
    default: module.Services,
  }))
);
const Experience = lazy(() =>
  import("./components/Experience/Experience").then((module) => ({
    default: module.Experience,
  }))
);
const Contact = lazy(() =>
  import("./components/Contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const ProjectDetails = lazy(() =>
  import("./components/ProjectDetails/ProjectDetails").then((module) => ({
    default: module.ProjectDetails,
  }))
);

// Loading fallback with progress
const LoadingFallback = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + Math.random() * 10, 100);
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loading-container" aria-live="polite" aria-busy="true">
      <div className="loading-spinner">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <p>Chargement... {Math.round(progress)}%</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <main id="main-content">
                  <Hero />
                  <Portfolio />
                  <Services />
                  <Experience />
                  <Contact />
                </main>
              }
            />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
