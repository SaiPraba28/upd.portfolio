import React from "react";
import "./styles/Education.css";

const educationData = [
  {
    percentage: "85.4%",
    degree: "Bachelor’s in Computer Science and Engineering",
    institution: "Velammal Institute of Technology",
    duration: "2022 – 2026",
    location: "Chennai, India",
    extra: "CGPA: 8.54",
  },
  {
    percentage: "89%",
    degree: "Higher Secondary Certificate",
    institution: "Velammal Matriculation Higher Secondary School",
    duration: "2021 – 2022",
    location: "Chennai, India",
    extra: "Score: 89%",
  },
  {
    percentage: "83.6%",
    degree: "Secondary School Leaving Certificate",
    institution: "Velammal Matriculation Higher Secondary School",
    duration: "2019 – 2020",
    location: "Chennai, India",
    extra: "Score: 83.6%",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h4>ACADEMIC JOURNEY</h4>
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="percentage">{edu.percentage}</div>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.duration}</p>
            <p className="location">{edu.location}</p>
            <p className="extra">{edu.extra}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
