<<<<<<< HEAD
// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Kgabo Kwenaite</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
=======
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
      <div className="logo">Kgabo Kwenaite</div>
      <nav aria-label="Primary navigation">
        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#goals">Goals</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="burger" onClick={toggleMenu} role="button" aria-expanded={menuOpen} aria-controls="nav-links">
          <div className={`line line1 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line line2 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line line3 ${menuOpen ? 'open' : ''}`}></div>
        </div>
>>>>>>> master
      </nav>
    </header>
  );
}

export default Header;
