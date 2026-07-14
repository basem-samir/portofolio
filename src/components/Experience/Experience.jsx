import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-title">EXPERIENCE</div>
            <h2 className="section-heading">My Work Experience</h2>
          </div>
        </div>

        <div className="experience-timeline">
          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="experience-content">
              <h3 className="experience-role">Digilians MERN Stack Nano Degree</h3>
              <div className="experience-company">Digilians Digital Pioneers Initiative</div>
              <div className="experience-duration">02/2026 - 07/2026</div>
              <div className="experience-description">
                <p>
                  Intensive Professional React Web Developer track (250+ hours) covering end-to-end software development and professional skills. Key learnings and technologies include:
                </p>
                <ul className="experience-list">
                  <li><strong>Front-End Development:</strong> Mastered React.js (Context API, Redux), Next.js, and TypeScript, building responsive interfaces with HTML5, CSS3, Tailwind, and UX/UI principles.</li>
                  <li><strong>Back-End & Databases:</strong> Developed RESTful APIs using Node.js, Express.js, and NestJS, with experience in database management across MongoDB, SQL, and NoSQL.</li>
                  <li><strong>Software Engineering Practices:</strong> Applied SOLID principles, design patterns, unit testing, Git/GitHub version control, and containerization using Docker.</li>
                  <li><strong>Professional & Soft Skills:</strong> Developed career-ready skills including Business English, Leadership, Freelancing, and Entrepreneurship alongside technical training.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
