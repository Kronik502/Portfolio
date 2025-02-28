import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import profileone from '../images/Profile.jpg'; 
import { faWhatsapp, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import hacker from '../images/hacker.jpg';

function Hero() {
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null); // Ref to store interval ID

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 500);

    // Cleanup function to clear the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        {step >= 1 && <h1 className="hi-text fade-in">Hi</h1>}
        {step >= 2 && <h1 className="name-text fade-in">{`I'm Kgabo Kwenaite`}</h1>}
        {step >= 3 && (
          <p className="profession-text fade-in">
            Full-Stack Web And Application Developer Trainee | MERN Stack Enthusiast
          </p>
        )}
        {step >= 4 && (
          <h2 className="location-text fade-in">MLAB CodeTribe - TEMBISA</h2>
        )}
        {step >= 5 && (
          <h2 className="update">Last Update : 10 February 2025</h2>
        )}
      </div>

      {step >= 5 && (
        <div className="contact-info">
          <p>Phone: (+27) 69 653 2031</p>
          <p >Email: <a href="mailto:kronikwenaite@gmail.com">kronikwenaite@gmail.com</a></p>
          <div className="social-links">
            <a className="color-button" href="https://wa.me/27663275611" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a className="color-button" href="https://www.facebook.com/kgabo.kwenaite.35" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="color-button" href="https://www.instagram.com/kgabo_kwenaite" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="color-button" href="https://github.com/Kronik502" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="color-button" href="https://www.linkedin.com/in/kgabo-kwenaite-567244223/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      )}
      {step >= 4 && (
        <div className="hero-image-frame fade-in">
          <img
            src={profileone}
            alt="Kgabo's Portfolio"
            className="hero-image"
          />
        </div>
      )}

    </section>
  );
}

export default Hero;
