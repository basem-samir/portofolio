import React from 'react';
import './Footer.css';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-icon">B</span>
              <span className="logo-text">Basem Samir</span>
            </div>
            <p className="footer-description">
              React Front-End Engineer specializing in scalable, mobile-friendly interfaces built with React and JavaScript (ES6+). Passionate about delivering exceptional web applications and interactive digital experiences.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="footer-nav">
              <Link to="/#work" className="nav-link">Projects</Link>
              <Link to="/#tech-stack" className="nav-link">Tech Stack</Link>
              <Link to="/#about" className="nav-link">About Me</Link>
              <Link to="/#certificates" className="nav-link">Certificates</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
            </nav>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">What I Do</h4>
            <ul className="footer-list">
              <li>Web Development</li>
              <li>Frontend Architecture</li>
              <li>UI/UX Implementation</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} />
                <span>Tanta, Egypt</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+20 115 701 7409</span>
              </li>
              <li>
                <Mail size={18} />
                <span>Basemsamir.dev@gmail.com</span>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="https://github.com/basem-samir" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/basemsamir25/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://wa.me/201157017409" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsappIcon /></a>
              <a href="mailto:basemsamir.dev@gmail.com" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Basem Samir. All rights reserved.</p>
          <div className="footer-bottom-right">
            <span className="built-with">Built with React & Vanilla CSS <span className="heart">❤</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
