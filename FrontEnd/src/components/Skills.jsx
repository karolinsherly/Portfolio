import React from "react";
import "./Skills.css";
import htmlLogo from "../assets/Images/html.png";
import cssLogo from "../assets/Images/css.png";
import jsLogo from "../assets/Images/javascript.png";
import reactLogo from "../assets/Images/react.png";
import nodeLogo from "../assets/Images/node.png";
import expressLogo from "../assets/Images/express.png";
import mysqlLogo from "../assets/Images/mysql.png";
import mongoLogo from "../assets/Images/mongodb.png";
import gitLogo from "../assets/Images/git.png";

// Skill data with percentage
const skills = [
  { name: "HTML", logo: htmlLogo, percentage: 95 },
  { name: "CSS", logo: cssLogo, percentage: 90 },
  { name: "JavaScript", logo: jsLogo, percentage: 88 },
  { name: "React.js", logo: reactLogo, percentage: 85 },
  { name: "Node.js", logo: nodeLogo, percentage: 80 },
  { name: "Express.js", logo: expressLogo, percentage: 78 },
  { name: "MySQL", logo: mysqlLogo, percentage: 85 },
  { name: "MongoDB", logo: mongoLogo, percentage: 75 },
  { name: "Git & GitHub", logo: gitLogo, percentage: 90 },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p className="skill-name">{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="percentage-label">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
