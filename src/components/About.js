// src/components/About.js
import React from 'react';
import './About.css';
import image from '../components/Profile.jpg'

function About() {
  return (
    <section id="about" className="about">
      <div className="profile-pic">
        <img src={image} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>Creative and innovative web developer with a strong foundation in front-end technologies and
a focus on enhancing user experience through efficient, visually appealing designs. Skilled in
ReactJS, Redux, NodeJS, Firebase & MongoDB, with experience developing interactive web
applications, including hotel and marketplace platforms. Known for creating professional and
user-centric interfaces, designing unique CSS Bootsrap & Tailwind styles, and employing
responsive, accessible layouts.
Proven ability to manage complex projects, work collaboratively, and deliver high-quality code.
Proficient in multi-functional application features such as user authentication, product
management, and custom search functionalities. Passionate about technology and
continuous learning in development and design.</p>
        <p>Fun Fact: Deeply interested in gaming, including retro platforms, with a focus on technical aspects and game design.</p>
      </div>
    </section>
  );
}

export default About;
