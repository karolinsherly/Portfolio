import React from "react";
import "./Certificates.css";

// Updated certificate list
const certificates = [
  {
    title: "3-Month Internship",
    description: "Full Stack Web Development Internship",
    image: "/certificates/internship3month.jpg",
  },
  {
    title: "1-Month Internship",
    description: "Full Stack Web Development Internship",
    image: "/certificates/internship1month.jpg",
  },
  {
    title: "Python Programming",
    description: "GUVI Platform - Python Course",
    image: "/certificates/python.png",
  },
  {
    title: "Network Essentials",
    description: "Naan Mudhalvan - Career Skills Training",
    image: "/certificates/network.jpg",
  },
  {
    title: "Machine Learning Workshop",
    description: "2-day Workshop on Machine Learning with Python",
    image: "/certificates/mlworkshop.jpg",
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
