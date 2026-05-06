import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 10%',
      position: 'relative'
    }}>
      <div style={{ flex: 1, zIndex: 10 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}
        >
          AI That Organizes <br />
          <span className="text-gradient">Your Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}
        >
          FutureSync AI helps students and professionals manage schedules, focus, stress, and productivity using intelligent AI technology.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
        >
          <a href="#get-started" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Get Started
          </a>
          <a href="#demo" className="btn-secondary flex-center" style={{ gap: '10px', padding: '15px 30px', fontSize: '1.1rem' }}>
            <Play size={20} /> Watch Demo
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 10 }}
        className="hero-image-container"
      >
        <div className="glass-panel glow-border" style={{ 
          width: '100%', 
          maxWidth: '500px', 
          height: '600px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          background: 'rgba(10,10,30,0.6)'
        }}>
          {/* Mock Dashboard UI */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #00f0ff, #8a2be2)' }}></div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff00ff' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00f0ff' }}></div>
            </div>
          </div>
          
          <div style={{ height: '120px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', padding: '15px' }}>
            <div style={{ width: '60%', height: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', marginBottom: '10px' }}></div>
            <div style={{ width: '80%', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', marginBottom: '10px' }}></div>
            <div style={{ width: '40%', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1, height: '100px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.2)' }}></div>
            <div style={{ flex: 1, height: '100px', borderRadius: '10px', background: 'rgba(138, 43, 226, 0.1)', border: '1px solid rgba(138, 43, 226, 0.2)' }}></div>
          </div>
          
          <div style={{ flex: 1, borderRadius: '10px', background: 'rgba(255,255,255,0.05)', marginTop: '10px', position: 'relative', overflow: 'hidden' }}>
             <motion.div 
               animate={{ width: ['0%', '100%', '0%'] }} 
               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
               style={{ position: 'absolute', top: 0, left: 0, height: '2px', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }} 
             />
             <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ width: '30%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}></div>
                <div style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px' }}></div>
                <div style={{ width: '70%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px' }}></div>
             </div>
          </div>
        </div>
      </motion.div>
      
      <style>{`
        @media (max-width: 900px) {
          section { flex-direction: column; text-align: center; padding-top: 150px !important; }
          .hero-image-container { margin-top: 50px; }
          h1 { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
