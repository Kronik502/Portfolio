// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'UI Portfolio',
      description: 'A beautifully designed portfolio showcasing my UI/UX skills.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Recipe App',
      description: 'An app that allows users to find and share recipes.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Mortgage Calculator',
      description: 'A tool to calculate mortgage payments based on loan amount, interest rate, and loan term.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Node Quiz App',
      description: 'A quiz application built with Node.js and Express.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Weather App',
      description: 'An app that provides weather forecasts for any location.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'To-Do List',
      description: 'A simple to-do list application to keep track of tasks.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Employees App',
      description: 'A management app for tracking employee information.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Shopping List',
      description: 'An app to create and manage shopping lists.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    },
    {
      title: 'Node Card Game',
      description: 'A card game built with Node.js and Socket.IO for real-time multiplayer.',
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
