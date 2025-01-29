// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', rating: 100, note: 'Expert', description: 'Highly skilled in JavaScript ES6 and beyond.' },
    { name: 'ReactJS', rating: 90, note: 'Advanced', description: 'Experienced in creating dynamic web apps with React.' },
    { name: 'Redux', rating: 80, note: 'Advanced', description: 'Skilled in managing state using Redux.' },
    { name: 'NodeJS', rating: 75, note: 'Advanced', description: 'Comfortable with building backends using NodeJS.' },
    { name: 'Express', rating: 70, note: 'Intermediate', description: 'Proficient in building REST APIs using Express.' },
    { name: 'HTML', rating: 95, note: 'Expert', description: 'Strong knowledge of semantic HTML and accessibility.' },
    { name: 'CSS', rating: 90, note: 'Advanced', description: 'Experienced in designing responsive layouts and animations.' },
    { name: 'MongoDB', rating: 85, note: 'Advanced', description: 'Skilled in working with NoSQL databases like MongoDB.' },
    { name: 'Firebase', rating: 70, note: 'Intermediate', description: 'Experienced in using Firebase for backend services.' },
    { name: 'Git', rating: 95, note: 'Expert', description: 'Proficient in version control with Git.' },
    { name: 'GitHub', rating: 90, note: 'Advanced', description: 'Experienced with GitHub for collaboration and version control.' },
    { name: 'Vercel', rating: 80, note: 'Advanced', description: 'Proficient in deploying applications with Vercel.' }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className='skils-title' >Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${skill.rating}%` }}
              ></div>
            </div>
            <div className="rating-note">{skill.note}</div>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
