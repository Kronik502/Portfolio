// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileone from '../images/Profile.jpg';
import profiletwo from '../images/Profile4.jpeg';

function Hero() {
  const [step, setStep] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [profileone, profiletwo];

  // Step-based timed progression
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 2000); // Progress every 2 seconds
    return () => clearInterval(timer);
  }, []);

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Step 0 */}
        {step >= 1 && (
          <h1 className="fade-in">Hi ..</h1>
        )}

        {/* Step 1 */}
        {step >= 2 && (
          <h1 className="fade-in">I'm Kgabo Kwenaite</h1>
        )}

        {/* Step 2 */}
        {step >= 3 && (
          <p className="fade-in">Full-Stack Developer | MERN Stack Enthusiast</p>
        )}

        {/* Step 4 */}
        {step >= 5 && (
          <a href="#projects" className="btn fade-in">View My Work</a>
        )}
      </div>
      {/* Step 3 */}
      {step >= 4 && (
        <div className="hero-image-frame fade-in">
          <img
            src={images[currentImage]}
            alt={`Kgabo's Portfolio ${currentImage + 1}`}
            className="hero-image"
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
