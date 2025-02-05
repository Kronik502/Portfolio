// src/components/PostProgramGoals.js
import React from 'react';
import './goals.css';

function PostProgramGoals() {
  const goals = [
    {
      title: "Advance Technical Skills",
      description: `
        Continue to refine and expand technical skills by exploring advanced concepts in web development.
        Focus on mastering full-stack technologies, including ReactJS, Redux, NodeJS, and more.
        Participate in online courses, attend workshops, and collaborate on open-source projects to stay updated with the latest trends and best practices.
      `
    },
    {
      title: "Build a Professional Portfolio",
      description: `
        Develop a comprehensive portfolio showcasing a variety of web development projects.
        Include detailed case studies, project summaries, and code samples to highlight technical abilities and problem-solving skills.
        Maintain an updated online presence on platforms like GitHub, LinkedIn, and personal website to attract potential employers and collaborators.
      `
    },
    {
      title: "Contribute to Community",
      description: `
        Engage with the web development community through forums, social media, and local meetups.
        Share knowledge and experiences by writing technical articles, creating tutorials, and participating in Q&A sessions.
        Mentor aspiring developers and contribute to community-driven projects to give back and foster a collaborative spirit.
      `
    },
    {
      title: "Pursue Continuous Learning",
      description: `
        Stay committed to continuous learning by exploring new technologies, frameworks, and tools.
        Enroll in advanced courses, read industry publications, and experiment with innovative projects to broaden knowledge and expertise.
        Set aside dedicated time for self-study, practice, and professional development to stay ahead in the ever-evolving field of web development.
      `
    },
    {
      title: "Seek Professional Opportunities",
      description: `
        Actively pursue professional opportunities in the field of web development.
        Apply for roles that align with skills and interests, including positions in front-end, back-end, or full-stack development.
        Network with industry professionals, attend career fairs, and participate in interviews to secure a fulfilling and challenging career in technology.
      `
    }
  ];

  return (
    <section id="postprogramgoals" className="post-program-goals">
      <h2>Post-Program Goals</h2>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-card">
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostProgramGoals;
