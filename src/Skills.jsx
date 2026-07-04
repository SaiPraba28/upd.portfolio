import React from "react";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h4>WHAT I KNOW</h4>
      <h2>Technical Arsenal</h2>

      <div className="skills-container">
        {/*Row1 */}
        <div className="skill-card">
          <h3>Front-end Development</h3>
          <p>Building responsive,interactive websites and applications</p>
          <p>Responsive layouts,DOM manipulation,Component design</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}>90%</div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="skill-card">
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly,visually appealing interfaces</p>
          <p>Wireframing,Prototyping,User Research,Usability Testing,Visual Design Principles,Responsive designs</p>
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Miro</li>
            <li>Design principles</li>
          </ul>
          <div className="progress-bar">
            <div className="progress" style={{ width: "88%" }}>88%</div>
          </div>
        </div>

        {/* Row2 */}
        <div className="skill-card">
          <h3>Java</h3>
          <p>Collections,problem solving</p>
          <ul>
            <li>OOP</li>
            <li>DSA</li>
            <li>Algorithms</li>
          </ul>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}>75%</div>
          </div>
        </div>

        {/* tools & ide */}
        <div className="skill-card">
          <h3>Tools and IDE</h3>
          <p>Development and collaboration</p>
          <ul>
            <li>VS Code</li>
            <li>GitHub</li>
            
          </ul>
          <div className="progress-bar">
            <div className="progress" style={{ width: "65%" }}>65%</div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Skills;
