import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const sectionDurations = {
  hero: 15000,
  about: 15000,
  projects: 15000,
  skills: 15000,
  experience: 1000,
  contact: 9000
};

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sectionsRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'projects',
      'skills',
      'experience',
      'contact'
    ];

    let timer;
    if (currentSection < sections.length) {
      sectionsRef[currentSection].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      timer = setTimeout(() => {
        setCurrentSection(currentSection + 1);
      }, sectionDurations[sections[currentSection]]);
    } else {
      timer = setTimeout(() => {
        setCurrentSection(0);
      }, sectionDurations[sections[sections.length - 1]]);
    }

    return () => clearTimeout(timer);
  }, [currentSection, sectionsRef]);

  return (
    <div className="App">
      <Header />
      <section ref={sectionsRef[0]} className={`section ${currentSection === 0 ? 'active' : ''}`}><Hero /></section>
      <section ref={sectionsRef[1]} className={`section ${currentSection === 1 ? 'active' : ''}`}><About /></section>
      <section ref={sectionsRef[2]} className={`section ${currentSection === 2 ? 'active' : ''}`}><Projects /></section>
      <section ref={sectionsRef[3]} className={`section ${currentSection === 3 ? 'active' : ''}`}><Skills /></section>
      <section ref={sectionsRef[4]} className={`section ${currentSection === 4 ? 'active' : ''}`}><Experience /></section>
      <section ref={sectionsRef[5]} className={`section ${currentSection === 5 ? 'active' : ''}`}><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
