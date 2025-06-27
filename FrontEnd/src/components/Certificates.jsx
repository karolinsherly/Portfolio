import React from "react";
import "./Certificates.css";

// Example certificate list with image path
const certificates = [
  {
    title: "Full Stack Web Development",
    description: "Udemy - MERN Stack Course",
    image: "/certificates/fullstack.jpg", // 🔁 Replace with your image path
  },
  {
    title: "React Basics",
    description: "Great Learning - React Introduction",
    image: "/certificates/react.jpg",
  },
  {
    title: "JavaScript Mastery",
    description: "Coursera - Advanced JS Course",
    image: "/certificates/javascript.jpg",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h1 className="certificates-title">My Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
