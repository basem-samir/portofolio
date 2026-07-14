import React from 'react';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import TechStack from '../../components/TechStack/TechStack';
import About from '../../components/About/About';
import Certificates from '../../components/Certificates/Certificates';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <About />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Home;
