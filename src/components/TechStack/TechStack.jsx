import React from 'react';
import './TechStack.css';
import { 
  SiJavascript, SiHtml5, SiCss, SiReact, SiRedux, SiVite, 
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, 
  SiFirebase, SiGit, SiGithub, SiFigma, SiGooglegemini
} from 'react-icons/si';
import { TbApi, TbLockSquareRounded, TbBrandVscode } from 'react-icons/tb';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', icon: <SiJavascript size={32} color="#f7df1e" />, color: '#f7df1e' },
  { name: 'HTML5', icon: <SiHtml5 size={32} color="#e34f26" />, color: '#e34f26' },
  { name: 'CSS3', icon: <SiCss size={32} color="#1572b6" />, color: '#1572b6' },
  { name: 'React.js', icon: <SiReact size={32} color="#61dafb" />, color: '#61dafb' },
  { name: 'Redux Toolkit', icon: <SiRedux size={32} color="#764abc" />, color: '#764abc' },
  { name: 'Vite', icon: <SiVite size={32} color="#646cff" />, color: '#646cff' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} color="#38bdf8" />, color: '#38bdf8' },
  { name: 'Framer Motion', icon: <SiFramer size={32} color="#f51ed9" />, color: '#f51ed9' },
  { name: 'Node.js', icon: <SiNodedotjs size={32} color="#68a063" />, color: '#68a063' },
  { name: 'Express.js', icon: <SiExpress size={32} color="#ffffff" />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb size={32} color="#47a248" />, color: '#47a248' },
  { name: 'Firebase', icon: <SiFirebase size={32} color="#ffca28" />, color: '#ffca28' },
  { name: 'REST APIs', icon: <TbApi size={32} color="#009688" />, color: '#009688' },
  { name: 'JWT Auth', icon: <TbLockSquareRounded size={32} color="#ffffff" />, color: '#ffffff' },
  { name: 'Git', icon: <SiGit size={32} color="#f05032" />, color: '#f05032' },
  { name: 'GitHub', icon: <SiGithub size={32} color="#ffffff" />, color: '#ffffff' },
  { name: 'Figma', icon: <SiFigma size={32} color="#f24e1e" />, color: '#f24e1e' },
  { name: 'VS Code', icon: <TbBrandVscode size={32} color="#007acc" />, color: '#007acc' },
  { name: 'AI Tools', icon: <SiGooglegemini size={32} color="#10a37f" />, color: '#10a37f' },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="techstack-section">
      <div className="container">
        <div className="section-title">TECH STACK</div>
        <h2 className="section-heading">Technologies I Work With</h2>
        
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              className="tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon-wrapper" style={{ boxShadow: `0 4px 20px -10px ${tech.color}` }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
