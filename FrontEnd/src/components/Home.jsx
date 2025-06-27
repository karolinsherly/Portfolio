import React from 'react';
import './Home.css';
import profileImage from '../assets/Images/profile.jpeg'; 
import cvFile from '../assets/Pdf/KAROLIN SHERLY.Pdf';    

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm Karolin Sherly</h1>
          <p>Full Stack Developer with a passion for crafting modern, scalable web applications.</p>
          <p className="tagline">Turning ideas into interactive web solutions.</p>

          <div className="home-buttons">
            <a href={cvFile} download className="btn">Download CV</a>
            <a href="#Contact" className="btn secondary">Hire Me</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/karolinsherly" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/karolin-sherly-189b2424b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="home-image">
          <img src={profileImage} alt="Karolin Sherly" />
        </div>
      </div>
    </section>
  );
}

export default Home;
