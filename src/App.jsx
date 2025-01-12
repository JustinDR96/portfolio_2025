import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
