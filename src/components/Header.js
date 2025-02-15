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
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
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
        <div
          className="burger"
          onClick={toggleMenu}
          role="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <div className={`line line1 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line line2 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line line3 ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
