<<<<<<< HEAD
// src/App.js
=======
>>>>>>> master
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
<<<<<<< HEAD
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
=======
import Resume from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Goals from './components/goals'

>>>>>>> master
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
=======
      <section className="section"><Hero /></section>
      <section className="section"><About /></section>
      <section className="section"><Resume /></section>
      <section className="section"><Skills /></section>
      <section className="section"><Projects /></section>
     <section className='section'><Feedback/></section>
     <section className='section'><Goals/></section>
      <section className="section"><Contact /></section>
>>>>>>> master
      <Footer />
    </div>
  );
}

export default App;
