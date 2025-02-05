<<<<<<< HEAD
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
=======
import React from 'react';
import './Projects.css';

// Import the images
import ProfileAppImage from '../images/Profile-App.jpg';
import RecipeAppImage from '../images/Recipe-App.jpg';
import MortgageCalculatorImage from '../images/Mortgage-App.jpg';
import WeatherAppImage from '../images/Weather-App.jpg';
import NodeCardGameImage from '../images/Card-Game.jpg';
import HotelImage from '../images/Hotel.png';

function Projects() {
  const individualProjects = [
    {
      title: 'UI Portfolio',
      description: 'A beautifully designed portfolio showcasing my UI/UX skills.',
      thumbnail: ProfileAppImage,
      demoLink: 'https://kronikprofile.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Kronikprofile',
    },
    {
      title: 'Recipe App',
      description: 'An app that allows users to add, find, edit, and update recipes.',
      thumbnail: RecipeAppImage,
      demoLink: 'https://recipes-self-alpha.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Recipes',
>>>>>>> master
    },
    {
      title: 'Mortgage Calculator',
      description: 'A tool to calculate mortgage payments based on loan amount, interest rate, and loan term.',
<<<<<<< HEAD
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
=======
      thumbnail: MortgageCalculatorImage,
      demoLink: 'https://mortgage-calculator-beta-one.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Mortgage-Calculator',
>>>>>>> master
    },
    {
      title: 'Weather App',
      description: 'An app that provides weather forecasts for any location.',
<<<<<<< HEAD
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
=======
      thumbnail: WeatherAppImage,
      demoLink: 'https://weatherapplication-seven.vercel.app',
      githubLink: 'https://github.com/Kronik502/weatherapplication',
>>>>>>> master
    },
    {
      title: 'Node Card Game',
      description: 'A card game built with Node.js and Socket.IO for real-time multiplayer.',
<<<<<<< HEAD
      thumbnail: 'path-to-thumbnail-image.jpg',
      demoLink: 'link-to-live-demo',
      githubLink: 'link-to-github-repo'
    }
=======
      thumbnail: NodeCardGameImage,
      demoLink: 'https://card-game-gilt.vercel.app/',
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
  ];

  const groupProjects = [
    {
      title: 'Hotel App',
      description: 'Hotel Booking Application.',
      thumbnail: HotelImage,
      demoLink: 'https://hotel-app-sigma.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Hotel-App',
    },
    // Add more group projects here if needed
>>>>>>> master
  ];

  return (
    <section id="projects" className="projects">
<<<<<<< HEAD
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
=======
      <h2>Individual Projects</h2>
      <div className="project-grid">
        {individualProjects.map((project, index) => (
>>>>>>> master
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
<<<<<<< HEAD
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
=======
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2>Assesment Projects</h2>
      <div className="project-grid">
        {groupProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub Repo
              </a>
              <p>Notes : It was quite challenging but managed to meet requirements </p>
>>>>>>> master
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
