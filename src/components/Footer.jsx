import React from 'react';
import { Cpu, MessageCircle, Share2, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(10,10,26,0.9)',
      padding: '60px 10% 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="grid-cols-auto" style={{ marginBottom: '40px', gap: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Cpu size={32} color="#00f0ff" />
            <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }} className="text-gradient">FutureSync AI</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Organizing your future with advanced artificial intelligence. Because your time is your most valuable asset.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            {[<MessageCircle size={20} />, <Share2 size={20} />, <Globe size={20} />, <Mail size={20} />].map((icon, i) => (
              <a key={i} href="#" style={{ 
                width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
                transition: 'all 0.3s'
              }} className="social-icon">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Home', 'Features', 'How it Works', 'Pricing', 'Contact'].map((link, i) => (
              <li key={i}><a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="footer-link">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
              <li key={i}><a href="#" className="footer-link">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        paddingTop: '20px', 
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div className="copyright-text">
          &copy; {new Date().getFullYear()} FutureSync AI. All rights reserved.
        </div>
      </div>

      <style>{`
        .social-icon:hover { background: var(--accent-purple) !important; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(138,43,226,0.4); }
        .footer-link { color: var(--text-secondary); text-decoration: none; transition: 0.3s; }
        .footer-link:hover { color: var(--accent-cyan); padding-left: 5px; }
        .copyright-text { color: var(--text-secondary); font-size: 0.9rem; position: relative; display: inline-block; }
        .copyright-text::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 0%; height: 1px; background: linear-gradient(90deg, #00f0ff, #ff00ff); transition: 0.5s; }
        .copyright-text:hover::after { width: 100%; }
      `}</style>
    </footer>
  );
};

export default Footer;
