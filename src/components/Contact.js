// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <p>Phone: (+27) 69 653 2031</p>
        <p>Email: <a href="mailto:kronikwenaite@gmail.com">kronikwenaite@gmail.com</a></p>
        <div className="social-links">
          <a className="color-button" href="https://wa.me/27663275611" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="color-button" href="https://www.facebook.com/kgabo.kwenaite.35" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="color-button" href="https://www.instagram.com/kronik50two" target="_blank" rel="noopener noreferrer">
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
    </section>
  );
}

export default Contact;
