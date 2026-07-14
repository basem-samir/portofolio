import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Mail, User, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these placeholders with your actual EmailJS credentials
    // You can sign up and get them for free at: https://www.emailjs.com/
    const serviceID = 'service_es9pxw6';
    const templateID = 'template_r91ffrb';
    const publicKey = 'QaoTExHmsrT-ItigA';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
      }, (error) => {
        console.error(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-title">CONTACT</div>
            <h2 className="section-heading">Let's Work Together</h2>
          </div>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="contact-description">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            <div className="contact-methods">
              <a href="mailto:Basemsamir.dev@gmail.com" className="contact-method">
                <div className="contact-icon-wrapper"><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <span>Basemsamir.dev@gmail.com</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/basemsamir25/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon-wrapper"><User size={24} /></div>
                <div>
                  <h3>LinkedIn</h3>
                  <span>Basem Samir</span>
                </div>
              </a>
              <a href="https://wa.me/201157017409" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon-wrapper"><MessageCircle size={24} /></div>
                <div>
                  <h3>WhatsApp</h3>
                  <span>+20 115 701 7409</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form 
            ref={form} 
            className="contact-form" 
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <input type="hidden" name="title" value="New message from Portfolio" />
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === 'success' && <div className="form-status success">Message sent successfully!</div>}
            {status === 'error' && <div className="form-status error">Failed to send. Check your keys or try again.</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
