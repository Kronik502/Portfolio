import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileone from '../images/Profile.jpg'; // Keep the image

function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 2500); // Progress every 2.5 seconds for better pacing
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Step 0 */}
        {step >= 1 && <h1 className="hi-text fade-in">Hi ..</h1>}

        {/* Step 1 */}
        {step >= 2 && <h1 className="name-text fade-in">{`I'm Kgabo Kwenaite`}</h1>}

        {/* Step 2 */}
        {step >= 3 && (
          <p className="profession-text fade-in">
            Full-Stack Web And Application Developer | MERN Stack Enthusiast
          </p>
        )}

        {/* Step 3 */}
        {step >= 4 && (
          <h2 className="location-text fade-in">MLAB CodeTribe - TEMBISA</h2>
        )}

        {/* Step 4 */}
        {step >= 5 && (
          <a href="#projects" className="btn fade-in">
            View My Work
          </a>
        )}
      </div>

      {/* Single Image */}
      {step >= 4 && (
        <div className="hero-image-frame fade-in">
          <img
            src={profileone} // Only one image used here
            alt="Kgabo's Portfolio"
            className="hero-image"
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
