import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          Get in <span className="text-gradient">Touch</span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel"
        style={{ maxWidth: '600px', margin: '0 auto', padding: '40px' }}
      >
        <form 
          action="https://formsubmit.co/vanshuthakur937@gmail.com" 
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
        >
          {/* Prevent redirecting to captcha if you want, but for now just use standard */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="input-group">
            <input 
              type="text" 
              name="name"
              required 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="custom-input"
            />
            <label className={`floating-label ${formData.name ? 'active' : ''}`}>Your Name</label>
            <div className="input-highlight"></div>
          </div>

          <div className="input-group">
            <input 
              type="email" 
              name="email"
              required 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="custom-input"
            />
            <label className={`floating-label ${formData.email ? 'active' : ''}`}>Email Address</label>
            <div className="input-highlight"></div>
          </div>

          <div className="input-group">
            <textarea 
              name="message"
              required 
              rows="4"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="custom-input"
              style={{ resize: 'none' }}
            />
            <label className={`floating-label ${formData.message ? 'active' : ''}`}>Your Message</label>
            <div className="input-highlight"></div>
          </div>

          <button className="btn-primary flex-center" style={{ gap: '10px', marginTop: '10px' }}>
            Send Message <Send size={18} />
          </button>
        </form>
      </motion.div>
      
      <style>{`
        .input-group { position: relative; }
        .custom-input { width: 100%; padding: 15px 0 10px; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.2); color: white; font-size: 1rem; outline: none; transition: border-bottom 0.3s; font-family: 'Poppins', sans-serif; }
        .custom-input:focus { border-bottom: 1px solid transparent; }
        .floating-label { position: absolute; left: 0; top: 15px; color: var(--text-secondary); pointer-events: none; transition: 0.3s ease all; font-size: 1rem; }
        .custom-input:focus ~ .floating-label, .floating-label.active { top: -10px; font-size: 0.8rem; color: var(--accent-cyan); }
        .input-highlight { position: absolute; bottom: 0; left: 0; height: 2px; width: 0; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple)); transition: 0.3s ease all; }
        .custom-input:focus ~ .input-highlight { width: 100%; }
      `}</style>
    </section>
  );
};

export default Contact;
