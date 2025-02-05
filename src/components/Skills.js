import React from 'react';
import './Skills.css';

// Import logos (ensure the paths are correct)
import JavaScriptLogo from '../images/Javascript-Logo.png'; // Example path
import ReactLogo from '../images/React-Logo.png'; // Example path
import ReduxLogo from '../images/Redux-Logo.png'; // Example path
import NodeLogo from '../images/Node-Logo.png'; // Example path
import ExpressLogo from '../images/Express-Logo.jpg'; // Example path
import MongoDBLogo from '../images/Mongo-Logo.png'; // Example path
import FirebaseLogo from '../images/Firebase-Logo.png'; // Example path
import GitLogo from '../images/Git-Logo.png'; // Example path
import GitHubLogo from '../images/Github-Logo.png'; // Example path
import VercelLogo from '../images/Vercel-Logo.png'; // Example path
import Html from '../images/Html-Logo.png'
import CssLogo from '../images/Css-Logo.png'

function Skills() {
  const skills = [
    { name: 'JavaScript', rating: 70, note: 'Intermediate', description: 'Skilled in JavaScript ES6 and beyond, creating functional Apps.', logo: JavaScriptLogo },
    { name: 'ReactJS', rating: 90, note: 'Advanced', description: 'Experienced in creating dynamic web apps with React.', logo: ReactLogo },
    { name: 'Redux', rating: 70, note: 'Intermediate', description: 'Skilled in managing state using Redux.', logo: ReduxLogo },
    { name: 'NodeJS', rating: 65, note: 'Intermediate', description: 'Comfortable with building backends using NodeJS.', logo: NodeLogo },
    { name: 'Express', rating: 60, note: 'Intermediate', description: 'Proficient in building REST APIs using Express.', logo: ExpressLogo },
    { name: 'HTML', rating: 95, note: 'Advanced', description: 'Strong knowledge of semantic HTML and accessibility.', logo: Html },
    { name: 'CSS', rating: 80, note: 'Advanced', description: 'Experienced in designing responsive layouts and animations.', logo: CssLogo },
    { name: 'MongoDB', rating: 70, note: 'Intermediate', description: 'Skilled in working with NoSQL databases like MongoDB.', logo: MongoDBLogo },
    { name: 'Firebase', rating: 85, note: 'Semi-Advanced', description: 'Experienced in using Firebase for backend services.', logo: FirebaseLogo },
    { name: 'Git', rating: 60, note: 'Intermediate', description: 'Proficient in version control with Git.', logo: GitLogo },
    { name: 'GitHub', rating: 60, note: 'Intermediate', description: 'Experienced with GitHub for collaboration and version control.', logo: GitHubLogo },
    { name: 'Vercel', rating: 60, note: 'Intermediate', description: 'Proficient in deploying applications with Vercel.', logo: VercelLogo }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skils-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">
              {skill.logo && <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />}
              {skill.name}
            </div>
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
