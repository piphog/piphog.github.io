import React from 'react';
import './App.css';
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
      <Navbar />
      <main>
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
