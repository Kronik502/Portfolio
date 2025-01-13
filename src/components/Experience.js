// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experienceList = [
    {
      title: 'General Worker',
      company: 'Vikela Logistics, Isando, Gauteng',
      duration: 'August 2022 – December 2022',
      responsibilities: [
        'General duties around the organization'
      ]
    },
    {
      title: 'Web Developer Trainee',
      company: 'MLab, Tembisa, Gauteng',
      duration: 'July 2024 – March 2024',
      responsibilities: [
        'Full-stack web application development'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceList.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <ul>{experience.duration}</ul>
            <ul>
              {experience.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
