import React from "react";
import "./styles/Projects.css";

const projects = [
  {
    title: "AI Powerd Restaurant Chatbot System ",
    description:
      "Developed AI Chatbot for customer support and engaging purposes.Integrated voice support,implementing dynamic conversation and personalization.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "KinetiQ – Mobile Recharge App Design",
    description:
      "Conducted user research and problem analysis.Designed user flows, wireframes, and high-fidelity prototype.Focused on improving trust through instant refund tracking and transparent payment flow.",
    tags: ["FIGMA"],
  },
  {
    title: "Portfolio Website ",
    description:
      "Designed and developed a responsive personal portfolio using React components and modern UI/UX principles.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h4>FEATURED WORK</h4>
      <h2>Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
