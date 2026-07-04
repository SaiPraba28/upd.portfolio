import React from "react";
import "./styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h4>WORK HISTORY</h4>
      <h2>Experience</h2>

      <div className="experience-card">
        <h3>8 Queens Private Limited</h3>
        <p className="duration">📅 June 2025-July2025</p>

        <h4 className="role">Full Stack Developer Intern</h4>
        
        <p className="description">
         I have completed my Full Stack Web Development Internship,where I gained hands-on experience in 
         HTML,CSS and Javascript which helps me in responsive development and interactive web application. 
        </p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
