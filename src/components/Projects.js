import React from 'react';
import './Projects.css';

// Import the images
import ProfileAppImage from '../images/Profile-App.jpg';
import RecipeAppImage from '../images/Recipe-App.jpg';
import MortgageCalculatorImage from '../images/Mortgage-App.jpg';
// import NodeQuizAppImage from '../images/NodeQuizApp.jpg';
import WeatherAppImage from '../images/Weather-App.jpg';
// import ToDoListImage from '../images/ToDoList.jpg';
// import EmployeesAppImage from '../images/EmployeesApp.jpg';
// import ShoppingListImage from '../images/ShoppingList.jpg';
import NodeCardGameImage from '../images/Card-Game.jpg';

function Projects() {
  const projectList = [
    {
      title: 'UI Portfolio',
      description: 'A beautifully designed portfolio showcasing my UI/UX skills.',
      thumbnail: ProfileAppImage, // Use the imported image
      demoLink: 'https://kronikprofile.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Kronikprofile',
    },
    {
      title: 'Recipe App',
      description: 'An app that allows users to Add, find, edit and update recipes.',
      thumbnail: RecipeAppImage, // Use the imported image
      demoLink: 'https://recipes-self-alpha.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Recipes',
    },
    {
      title: 'Mortgage Calculator',
      description: 'A tool to calculate mortgage payments based on loan amount, interest rate, and loan term.',
      thumbnail: MortgageCalculatorImage, // Use the imported image
      demoLink: 'https://mortgage-calculator-beta-one.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Mortgage-Calculator',
    },
    // {
    //   title: 'Node Quiz App',
    //   description: 'A quiz application built with Node.js and Express.',
    //   thumbnail: NodeQuizAppImage, // Use the imported image
    //   demoLink: 'link-to-live-demo',
    //   githubLink: 'link-to-github-repo',
    // },
    {
      title: 'Weather App',
      description: 'An app that provides weather forecasts for any location.',
      thumbnail: WeatherAppImage, // Use the imported image
      demoLink: 'https://weatherapplication-seven.vercel.app',
      githubLink: 'https://github.com/Kronik502/weatherapplication',
    },
    // {
    //   title: 'To-Do List',
    //   description: 'A simple to-do list application to keep track of tasks.',
    //   thumbnail: ToDoListImage, // Use the imported image
    //   demoLink: 'link-to-live-demo',
    //   githubLink: 'link-to-github-repo',
    // },
    // {
    //   title: 'Employees App',
    //   description: 'A management app for tracking employee information.',
    //   thumbnail: EmployeesAppImage, // Use the imported image
    //   demoLink: 'link-to-live-demo',
    //   githubLink: 'link-to-github-repo',
    // },
    // {
    //   title: 'Shopping List',
    //   description: 'An app to create and manage shopping lists.',
    //   thumbnail: ShoppingListImage, // Use the imported image
    //   demoLink: 'link-to-live-demo',
    //   githubLink: 'link-to-github-repo',
    // },
    {
      title: 'Node Card Game',
      description: 'A card game built with Node.js and Socket.IO for real-time multiplayer.',
      thumbnail: NodeCardGameImage, // Use the imported image
      demoLink: 'https://card-game-gilt.vercel.app/',
      githubLink: 'https://github.com/Kronik502/CardGame',
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
