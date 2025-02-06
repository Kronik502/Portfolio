// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const resume = {
    personalInfo: {
      name: "Kgabo Kwenaite",
      phone: "(+27) 69 653 2031",
      email: "kronikwenaite@gmail.com",
      address: "9373 Zone 4, Winnie Mandela, Tembisa, 1632"
    },
    professionalSummary: `
      Creative and innovative web developer with a strong foundation in front-end technologies and
      a focus on enhancing user experience through efficient, visually appealing designs. Skilled in
      ReactJS, Redux, NodeJS, Firebase & MongoDB, with experience developing interactive web
      applications, including hotel and marketplace platforms. Known for creating professional and
      user-centric interfaces, designing unique CSS Bootsrap & Tailwind styles, and employing
      responsive, accessible layouts.
      Proven ability to manage complex projects, work collaboratively, and deliver high-quality code.
      Proficient in multi-functional application features such as user authentication, product
      management, and custom search functionalities. Passionate about technology and
      continuous learning in development and design.
    `,
    professionalExperience: [
      {
        role: "Web Developer Trainee",
        program: "MLab Codetribe",
        location: "Tembisa, Gauteng",
        dates: "July 2024 – March 2024",
        details: [
          "Participated in an intensive full-stack web application development program.",
          "Focused on hands-on projects to gain real-world experience in various technologies.",
          "Developed a variety of web applications using ReactJS, Redux, NodeJS, and other technologies."
        ]
      }
    ],
    education: {
      degree: "NCV L4 IT & Computer Science",
      institution: "Ekurhuleni West College",
      location: "Tembisa, South Africa",
      dates: "January 2021 - December 2025",
      note: "1 Math module has to be completed in 2025"
    },
    languages: [
      { language: "English", level: "C2" },
      { language: "Sepedi", level: "Mother Language" }
    ],
    skills: {
      office: ["Microsoft Office"],
      programming: ["JavaScript"],
      backEnd: ["NodeJS", "Express"],
      frontEnd: ["ReactJS", "HTML", "CSS", "Redux", "Visual Basic", "Delphi"],
      versionControl: ["Git", "GitHub", "Slack"],
      deployment: ["Vercel"],
      databases: ["MongoDB", "Firebase", "SQLite3", "JSON"],
      designTools: ["Figma"]
    },
    hobbiesAndInterests: [
      "Passionate about technology and innovation, especially exploring new tools and frameworks like React, Firebase, and Redux to enhance project quality and user experience.",
      "Enjoys experimenting with creative design, crafting visually engaging interfaces, and refining CSS styling for professional and modern applications.",
      "Deeply interested in gaming, including retro platforms, with a focus on technical aspects and game design.",
      "Enthusiastic about continuous learning, whether it’s exploring advanced JavaScript, backend architecture, or diving into new design software like Figma.",
      "Interested in rap and creative writing, enjoying the process of refining lyrics and developing unique flows and rhymes."
    ],
    profileLinks: {
      github: "https://github.com/Kronik502",
      linkedIn: "https://www.linkedin.com/in/kgabo-kwenaite-567244223/",
      profileApp: "https://kronikprofile.vercel.app/"
    }
  };

  return (
    <section id="experience" className="experience">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Personal Information</h3>
        <p>Name: {resume.personalInfo.name}</p>
        <p>Phone: {resume.personalInfo.phone}</p>
        <p>Email: {resume.personalInfo.email}</p>
        <p>Address: {resume.personalInfo.address}</p>
      </div>
      <div className="resume-section">
        <h3>Professional Summary</h3>
        <p>{resume.professionalSummary}</p>
      </div>
      <div className="resume-section">
        <h3>Professional Experience</h3>
        {resume.professionalExperience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.role} - {exp.program}</h4>
            <p>{exp.location}</p>
            <p>{exp.dates}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="resume-section">
        <h3>Education</h3>
        <p>{resume.education.degree}</p>
        <p>{resume.education.institution}</p>
        <p>{resume.education.location}</p>
        <p>{resume.education.dates}</p>
        <p>{resume.education.note}</p>
      </div>
      <div className="resume-section">
        <h3>Languages</h3>
        <ul>
          {resume.languages.map((lang, index) => (
            <li key={index}>{lang.language} (Level: {lang.level})</li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          {Object.keys(resume.skills).map((category, index) => (
            <li key={index}>
              <strong>{category}: </strong>
              {resume.skills[category].join(', ')}
            </li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h3>Hobbies and Interests</h3>
        <ul>
          {resume.hobbiesAndInterests.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div className="resume-section">
        <h3>Profile Links</h3>
        <p><a href={resume.profileLinks.github}>GitHub</a></p>
        <p><a href={resume.profileLinks.linkedIn}>LinkedIn</a></p>
        <p><a href={resume.profileLinks.profileApp}>Profile Application</a></p>
      </div>
      <div className="resume-download">
        <a 
          href="/resume.pdf" 
          download="Kgabo_Kwenaite_Resume.pdf" 
          className="download-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Experience;
