import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px 5%',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10, 10, 26, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Cpu size={32} color="#00f0ff" />
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }} className="text-gradient">FutureSync AI</h1>
      </div>
      
      <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#features" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Features</a>
        <a href="#how-it-works" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>How It Works</a>
        <a href="#pricing" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
        <a href="#demo" className="btn-primary" style={{ padding: '8px 20px' }}>Try Demo</a>
      </div>
      
      <div className="mobile-menu-btn" style={{ display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X color="white" /> : <Menu color="white" />}
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: ${isOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: var(--primary-dark); padding: 20px 0; border-bottom: 1px solid var(--glass-border); }
          .mobile-menu-btn { display: block !important; cursor: pointer; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
