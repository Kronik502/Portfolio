<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import './About.css';
import image from '../images/Profiler.jpg';

function About() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const fullText =
      'I am a passionate web developer with a knack for creating engaging, user-friendly digital experiences. My expertise lies in front-end technologies, with a particular focus on designing visually appealing, efficient, and intuitive user interfaces. I’m proficient in ReactJS, Redux, NodeJS, Firebase, and MongoDB, and have built a variety of dynamic web applications, including e-commerce platforms and hotel management systems. I pride myself on crafting clean, professional code, and on designing responsive, accessible layouts that enhance the overall user experience. Beyond technical skills, I am a proactive team player, capable of managing projects and collaborating with others to deliver high-quality results. I enjoy experimenting with CSS frameworks like Bootstrap and Tailwind to create unique, customizable styles that fit any design vision. I’m constantly driven by my curiosity and passion for technology, and I believe in continuously learning and staying up-to-date with new tools and frameworks. When I’m not coding, I love diving into retro gaming and exploring the intersection of game design and technology. My work is deeply influenced by a love for creativity, problem-solving, and a desire to push the limits of what’s possible.';

    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 40); // Slowing down the typing effect for better readability

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="about-container">
      <div className="about-card">
        <div className="profile-pic">
          <img src={image} alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="typing">{typedText}</p>
          <p className="fun-fact">
            Fun Fact: I'm a gamer at heart with a strong passion for retro games and their design. I also enjoy creating innovative applications like hotel booking platforms, marketplace apps, and more.
          </p>
        </div>
>>>>>>> master
      </div>
    </section>
  );
}

export default About;
