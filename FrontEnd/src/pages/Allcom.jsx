import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

function Allcom() {
  return (
    <>
      <Navbar />
      <section id="Home"><Home /></section>
      <section id="About"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"><Projects /></section>
      <section id="Certificates"><Certificates /></section>
      <section id="Contact"><Contact /></section>
    </>
  );
}

export default Allcom;
