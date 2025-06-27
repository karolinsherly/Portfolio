import React from "react";
import "./About.css";
import profileImg1 from "../assets/Images/profile.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left: Photo */}
          <div className="about-image">
            <img src={profileImg1} alt="Karolin Sherly" />
          </div>

          {/* Right: Content */}
          <div className="about-info">
            <h1 className="about-title">About Me</h1>
            <p className="about-intro">
              I'm <strong>Karolin Sherly</strong>, a passionate full-stack developer dedicated to building efficient and impactful web applications using React, Node.js, and MySQL.
            </p>

            <div className="about-details">
              <p><strong>Name:</strong> Karolin Sherly</p>
              <p><strong>Date of Birth:</strong> 05 Feb 2004</p>
              <p><strong>Address:</strong> 12-8/12, Tharan vilai, Kattukadai, Palapallam(p.o), Kanyakumari District</p>
              <p><strong>ZIP Code:</strong> 629 159</p>
              <p><strong>Email:</strong> karolinbiyana@gmail.com</p>
              <p><strong>Phone:</strong> +91 8903394742</p>
              <p><strong>Hobbies:</strong> Reading books, Learning new skills, Playing chess</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
