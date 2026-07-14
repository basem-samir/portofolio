import React from 'react';
import './About.css';
import { Download, CheckCircle2, Briefcase, Code, MapPin, Award } from 'lucide-react';
import aboutImg from '../../assets/about.png';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <section id="about" className="about-section">
         <div className="container">
            <div className="about-grid">

               <motion.div 
                  className="about-content"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <div className="section-title">ABOUT ME</div>
                  <h2 className="section-heading">React Front-End Engineer</h2>

                  <p className="about-description">
                     I'm Basem Samir, a React Front-End Engineer with hands-on experience delivering 3+ full-stack web applications, specializing in scalable, mobile-friendly interfaces built with React and JavaScript (ES6+).
                  </p>
                  <p className="about-description">
                     I am skilled in REST API integration, authentication, and component-based architecture. I have successfully led client-side development across multiple real-world projects, continuously exploring new tools and AI-assisted workflows to sharpen delivery speed and code quality.
                  </p>

                  <ul className="about-features">
                     <li><CheckCircle2 size={20} className="feature-icon" /> Clean Code & Best Practices</li>
                     <li><CheckCircle2 size={20} className="feature-icon" /> User Experience Focused</li>
                     <li><CheckCircle2 size={20} className="feature-icon" /> Performance Optimized</li>
                     <li><CheckCircle2 size={20} className="feature-icon" /> Continuous Learning</li>
                  </ul>

                  <a
                     href="/Basem_Samir_Resume.pdf"
                     download
                     className="btn btn-primary btn-download"
                  >
                     Download Resume <Download size={18} />
                  </a>
               </motion.div>

               <motion.div 
                  className="about-image-column"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <img src={aboutImg} alt="Basem Samir Portrait" className="about-image" />
               </motion.div>

               <motion.div 
                  className="about-stats-column"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <div className="about-stat-card">
                     <div className="about-stat-icon"><Briefcase size={24} /></div>
                     <div>
                        <div className="about-stat-title">Experience</div>
                        <div className="about-stat-value">Delivered 3+ Apps</div>
                     </div>
                  </div>

                  <div className="about-stat-card">
                     <div className="about-stat-icon"><Code size={24} /></div>
                     <div>
                        <div className="about-stat-title">Focus</div>
                        <div className="about-stat-value">Frontend Development</div>
                     </div>
                  </div>

                  <div className="about-stat-card">
                     <div className="about-stat-icon"><Award size={24} /></div>
                     <div>
                        <div className="about-stat-title">Specialization</div>
                        <div className="about-stat-value">React.js & Modern Web</div>
                     </div>
                  </div>

                  <div className="about-stat-card">
                     <div className="about-stat-icon"><MapPin size={24} /></div>
                     <div>
                        <div className="about-stat-title">Location</div>
                        <div className="about-stat-value">Tanta, Egypt</div>
                     </div>
                  </div>

                  <div className="about-numbers">
                     <div className="number-card">
                        <div className="number-val">19+</div>
                        <div className="number-lbl">Apps & Pages Built</div>
                     </div>
                     <div className="number-card">
                        <div className="number-val">3+</div>
                        <div className="number-lbl">Certificates Earned</div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default About;
