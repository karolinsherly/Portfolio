import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "QR Code Attendance System",
    description: "Mark attendance using QR code scanning.",
    link: "https://github.com/yourusername/qr-attendance", // 🔁 Replace with your real link
  },
  {
    title: "E-Commerce Website",
    description: "Online store with cart, wishlist, and admin panel.",
    link: "https://your-ecom-demo.netlify.app", // 🔁 Replace with your real link
  },
];

const Projects = () => {
  return (
    <div className="project-section">
      <h1 className="project-title">My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
