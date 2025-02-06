import React from 'react';
import './Projects.css';

// Import the images
import ProfileAppImage from '../images/Profile-App.jpg';
import RecipeAppImage from '../images/Recipe-App.jpg';
import MortgageCalculatorImage from '../images/Mortgage-App.jpg';
import WeatherAppImage from '../images/Weather-App.jpg';
import NodeCardGameImage from '../images/Card-Game.jpg';
import HotelImage from '../images/Hotel.png';
import Default from '../images/Default.png';
import Math from '../images/Math.png'
import ToDo from '../images/To-Do.png'
import Employee from '../images/Employees.png'

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
    },
    {
      title: 'To Do List',
      description: 'A to-do list with priority levels of the tasks and login.',
      thumbnail: ToDo,
      demoLink: 'https://to-do-app-fawn-three.vercel.app/home',
      githubLink: 'https://github.com/Kronik502/ToDoApp',
    },
    {
      title: 'Mortgage Calculator',
      description: 'A tool to calculate mortgage payments based on loan amount, interest rate, and loan term.',
      thumbnail: MortgageCalculatorImage,
      demoLink: 'https://mortgage-calculator-beta-one.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Mortgage-Calculator',
    },
    {
      title: 'Weather App',
      description: 'An app that provides weather forecasts for any location.',
      thumbnail: WeatherAppImage,
      demoLink: 'https://weatherapplication-seven.vercel.app',
      githubLink: 'https://github.com/Kronik502/weatherapplication',
    },
    {
      title: 'Employees App',
      description: 'An employees app that Adds, Updates and Deletes employees with Super Admin.',
      thumbnail: Employee,
      demoLink: 'https://employee-myjltw6jk-kgabo-kwenaites-projects.vercel.app/login',
      githubLink: 'https://github.com/Kronik502/Employee',
    },

    {
      title: 'A basic Node server',
      description: 'A basic running server.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/NodeServer',
    },
    {
      title: 'Node Card Game',
      description: 'A card game built with Node.js and Socket.IO for real-time multiplayer.',
      thumbnail: NodeCardGameImage,
      demoLink: 'https://card-game-gilt.vercel.app/',
      githubLink: 'https://github.com/Kronik502/CardGame',
    },

    {
      title: 'Node Quiz server game',
      description: 'A quiz game on a server that records time and answers.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
    {
      title: 'Node Quiz server',
      description: 'A quiz game on a server that records time and answers.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
    {
      title: 'React Native Shopping List',
      description: 'A shopping list creator in React Native.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/RNShoppingList',
    },
    {
      title: 'React Native Shopping List',
      description: 'A shopping list creator in React Native.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/RNShoppingList',
    },

   
  ];

  const groupProjects = [
    {
      title: 'Hotel App',
      description: 'Hotel Booking Application.',
      thumbnail: HotelImage,
      demoLink: 'https://hotel-app-sigma.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Quiz-App',
    },
    {
      title: 'Restaurant App',
      description: 'React Native Restaurant Reservation App.',
      thumbnail: Default,
      githubLink: 'https://github.com/Cornel-MIT/Reservation-App',
    },
    {
      title: 'Math Market',
      description: 'A Market Place App.',
      thumbnail: Math,
      demoLink: 'https://math-market-ixiv.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Math-Market',

    },

  ];

  return (
    <section id="projects" className="projects">
      <h2>Individual Projects</h2>
      <div className="project-grid">
        {individualProjects.map((project, index) => (
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
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
