import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">B</span>
          <span className="logo-text">Basem Samir</span>
        </Link>
        
        <nav className="nav">
          <Link to="/#work" className="nav-link">Work</Link>
          <Link to="/#experience" className="nav-link">Experience</Link>
          <Link to="/#tech-stack" className="nav-link">Tech Stack</Link>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#certificates" className="nav-link">Certificates</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
        </nav>
        
        <a 
          href="/Basem_Samir_Resume.pdf" 
          download 
          className="btn btn-outline btn-resume"
        >
          Download Resume
          <Download size={18} />
        </a>
      </div>
    </header>
  );
};

export default Header;
