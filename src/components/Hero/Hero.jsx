import React from 'react';
import './Hero.css';
import { ArrowRight, MessageCircle, Mail, MapPin, Code2, Monitor, Briefcase, MapPinned, TerminalSquare, User, Code } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="availability-badge">
            <span className="dot"></span>
            Available for Full-Time Work
          </div>

          <h1 className="hero-title">
            Building Modern Digital Experiences with <span className="highlight">React.</span>
          </h1>

          <p className="hero-description">
            React Front-End Engineer crafting fast, scalable, and mobile-friendly web applications. Specializing in component-based architecture and delivering exceptional user experiences.
          </p>

          <div className="hero-actions">
            <Link to="/#work" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/#contact" className="btn btn-outline btn-contact">
              Contact Me <MessageCircle size={18} />
            </Link>
          </div>

          <div className="hero-social">
            <a href="https://github.com/basem-samir" target="_blank" rel="noopener noreferrer" className="social-link"><Code size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/basemsamir25/" target="_blank" rel="noopener noreferrer" className="social-link"><User size={18} /> LinkedIn</a>
            <a href="mailto:basemsamir.dev@gmail.com" className="social-link"><Mail size={18} /> Email</a>
            <span className="location"><MapPin size={18} /> Tanta, Egypt</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Placeholder for the headshot */}
          <div className="hero-image-placeholder">
            <div className="image-glow"></div>
            <img src={heroImg} alt="Basem Samir" className="hero-image" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="container hero-stats-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <span className="dot"></span>
          </div>
          <div className="stat-info">
            <span className="stat-title">Available</span>
            <span className="stat-value">for Full-Time</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Code2 size={24} color="var(--text-secondary)" />
          </div>
          <div className="stat-info">
            <span className="stat-title">Frontend</span>
            <span className="stat-value">React Developer</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Monitor size={24} color="var(--accent)" />
          </div>
          <div className="stat-info">
            <span className="stat-title">Digilians</span>
            <span className="stat-value">Graduate</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Briefcase size={24} color="var(--text-secondary)" />
          </div>
          <div className="stat-info">
            <span className="stat-title">Open to</span>
            <span className="stat-value">Remote Work</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <MapPinned size={24} color="var(--text-secondary)" />
          </div>
          <div className="stat-info">
            <span className="stat-title">Based in</span>
            <span className="stat-value">Tanta, Egypt</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
