import React from 'react';
import './Projects.css';
import { ArrowRight, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Kemet – Tourism & Travel Platform',
    description: 'An innovative platform to explore Egypt using an interactive map that reveals landmarks, hotels, and weather per governorate. It offers seamless booking for tickets and flights all in one place. Users can build their own trip, choose ready-made packages, or use the AI-powered planner to generate a custom itinerary based on budget and preferences, supported by a smart AI chatbot.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Zustand', 'OpenAI'],
    liveLink: 'https://kemet-eosin.vercel.app/',
    image: '/projects/kemet.png'
  },
  {
    title: 'Exclusive – E-Commerce Platform',
    description: 'A comprehensive online store offering a seamless shopping experience. It features secure user accounts, dynamic shopping carts, and wishlists. It also includes a powerful administrative dashboard for store owners to manage products, track orders, and monitor sales analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://ecommerce-ruddy-five-55.vercel.app/',
    githubLink: 'https://github.com/basem-samir/ecommerce',
    image: '/projects/ecommerce.png'
  },
  {
    title: 'Inventory Management Dashboard',
    description: 'A smart administrative tool built for business owners to easily track and manage their products. It allows users to quickly add or update items, automatically calculate inventory value, and seamlessly import or export data using PDF and Excel formats.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    liveLink: 'https://product-manager-two-smoky.vercel.app/',
    githubLink: 'https://github.com/basem-samir/Product-Manager',
    image: '/projects/invetory.png'
  }
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-title">FEATURED PROJECTS</div>
            <h2 className="section-heading">Selected Work</h2>
          </div>
          <Link to="/projects" className="view-all-link">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.liveLink && (
                    <a href={project.liveLink} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
                      <Code size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
