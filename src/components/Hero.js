// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Kgabo Kwenaite</h1>
        <p>Full-Stack Developer | MERN Stack Enthusiast</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
