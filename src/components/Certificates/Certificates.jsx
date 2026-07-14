import React from 'react';
import './Certificates.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-title">CERTIFICATES</div>
            <h2 className="section-heading">Professional Certifications</h2>
          </div>

        </div>

        <div className="cert-cards">
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="cert-logo meta">Digilians</div>
            <h3 className="cert-title">Professional React Developer</h3>
            <div className="cert-issuer">Digilians Digital Pioneers Initiative</div>
            <div className="cert-bottom">
              <span className="cert-date">Issued: July 2026</span>
            </div>
          </motion.div>

          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="cert-logo meta">Meta</div>
            <h3 className="cert-title">Meta Front-End Developer<br />Professional Certificate</h3>
            <div className="cert-issuer">Coursera</div>
            <div className="cert-bottom">
              <span className="cert-date">Issued: 2024</span>
            </div>
          </motion.div>

          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="cert-logo microsoft">FCC</div>
            <h3 className="cert-title">Responsive Web Design</h3>
            <div className="cert-issuer">freeCodeCamp</div>
            <div className="cert-bottom">
              <span className="cert-date">Issued: 2023</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
