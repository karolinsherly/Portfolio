import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Certificates", href: "#Certificates" },
    { name: "Contact", href: "#Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false); // close menu
  };

  return (
    <nav className="navbar">
      <div className="developer">Developer</div>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <ul className={`items ${isMenuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => handleClick(item.name)}
              className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
