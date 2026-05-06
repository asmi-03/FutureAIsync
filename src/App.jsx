import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Cpu } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Loading timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Mouse move tracking for cursor glow
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'var(--primary-dark)', zIndex: 9999,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Cpu size={80} color="#00f0ff" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 2 }}
              style={{ height: '4px', background: 'linear-gradient(90deg, #00f0ff, #8a2be2)', marginTop: '30px', borderRadius: '2px' }}
            />
            <h2 style={{ marginTop: '20px', color: 'white', letterSpacing: '3px' }}>INITIALIZING AI...</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="animated-bg" />
      
      {/* Mouse Glow Effect */}
      <motion.div 
        animate={{ x: mousePos.x - 150, y: mousePos.y - 150 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998
        }}
      />

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Particles />
          <Navbar />
          <main>
            <Hero />
            <Features />
            <Demo />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
