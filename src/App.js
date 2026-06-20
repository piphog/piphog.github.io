import React from 'react';
import './App.css';
import NetworkBackground from './components/NetworkBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import EngineeringPatterns from './components/EngineeringPatterns';
import ProjectsSection from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Services />
        <FeaturedWork />
        <EngineeringPatterns />
        <ProjectsSection />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
