// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    'JavaScript',
    'ReactJS',
    'Redux',
    'NodeJS',
    'Express',
    'HTML',
    'CSS',
    'MongoDB',
    'Firebase',
    'Git',
    'GitHub',
    'Vercel'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
