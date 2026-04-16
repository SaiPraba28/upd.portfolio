import React from "react";
import "./styles/Hero.css";
import profileImg from "./assets/profile.png";
import resumeFile from "./assets/resume.pdf"; // import your resume

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        
        <h1> <span className="highlight">Hi, I am SAI PRABA R</span></h1>
        <p>Front-end Developer | UI/UX Design Enthusiast</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
          <a href={resumeFile} download="resume.pdf" className="btn">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;




