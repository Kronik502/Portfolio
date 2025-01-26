// src/components/Feedback.js
import React from 'react';
import './Feedback.css';

function Feedback() {
  const feedbackContent = {
    reflection: `
      My experience at MLab as a web development trainee was transformative and deeply enriching.
      Participating in the Codetribe program allowed me to immerse myself in the world of full-stack web development,
      where I gained hands-on experience with various technologies like ReactJS, Redux, NodeJS, Firebase, and MongoDB.

      One of the highlights was the collaborative environment. Working alongside other passionate and driven individuals
      fostered a sense of camaraderie and teamwork that significantly enhanced my learning experience.
      The mentors and instructors were incredibly supportive and always ready to provide guidance and insights, which helped
      me to navigate the challenges of web development more effectively.

      The hands-on projects were particularly valuable, as they provided real-world scenarios that honed my skills in building
      interactive and user-centric web applications. From creating responsive layouts to implementing complex functionalities,
      each project was a stepping stone that contributed to my growth as a developer.

      Overall, my time at MLab Codetribe not only equipped me with technical skills but also instilled a sense of confidence
      and a passion for continuous learning. I'm excited to apply the knowledge and experience I've gained to future projects
      and to keep exploring the ever-evolving landscape of web development.
    `,
    feedback: [
      "The Codetribe program provided a comprehensive and immersive learning experience.",
      "The collaborative environment and teamwork were instrumental in enhancing my learning.",
      "The mentors and instructors were supportive and provided valuable guidance.",
      "Hands-on projects were crucial for applying theoretical knowledge to real-world scenarios.",
      "The program instilled a sense of confidence and a passion for continuous learning."
    ]
  };

  return (
    <section id="feedback" className="feedback">
      <h2>Feedback and Reflection</h2>
      <div className="feedback-reflection">
        <h3>Reflection</h3>
        <p>{feedbackContent.reflection}</p>
      </div>
      <div className="feedback-comments">
        <h3>Feedback</h3>
        <ul>
          {feedbackContent.feedback.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Feedback;
