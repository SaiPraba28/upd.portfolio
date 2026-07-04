import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h4>WHO I AM</h4>
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Computer Science student</strong> and 
          <strong> Frontend Developer</strong> with a strong foundation in 
          <strong> HTML, CSS, JavaScript, Bootstrap, and React</strong>.
        </p>
        <p>
          As a <strong>UI/UX design enthusiast</strong>, I enjoy crafting 
          intuitive and visually appealing interfaces. My expertise includes 
          <strong> wireframing, prototyping, responsive design, and design principles</strong> 
          that ensure seamless user experiences across devices.
        </p>
        <p>
          I thrive at the intersection of design and development — building 
          functional, responsive web applications while maintaining a clean 
          and user‑friendly aesthetic.
        </p>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>3+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Tech Skills</p>
          </div>
          <div className="stat-box">
            <h3>1</h3>
            <p>Internship</p>
          </div>
        </div>
      </div>

      {/* Code snippet box below */}
      <div className="about-code">
        <pre>
{`const sai = {
    name: "Sai Praba R",
    role: "Frontend Developer & UI/UX Enthusiast",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    design: ["Wireframing", "Prototyping", "Responsive Design"],
    status: "Always learning & building"
};`}
        </pre>
      </div>
    </section>
  );
};

export default About;

