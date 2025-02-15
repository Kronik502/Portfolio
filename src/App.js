import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience'; // Fixed naming issue
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Goals from './components/goals'; // Fixed case-sensitive issue

import './App.css';

function App() {
  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "resume", component: <Experience /> }, // Fixed Resume import
    { id: "skills", component: <Skills /> },
    { id: "projects", component: <Projects /> },
    { id: "feedback", component: <Feedback /> },
    { id: "goals", component: <Goals /> },
    { id: "contact", component: <Contact /> }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section">
            {section.component}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
