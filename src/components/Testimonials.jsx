import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Alex Johnson', role: 'Computer Science Student', content: 'FutureSync AI completely transformed how I study. The Smart Study Planner helped me ace my finals by organizing my chaotic notes into a perfect schedule.', img: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Sarah Williams', role: 'Product Manager', content: 'As a PM, my calendar is always full. The AI Smart Scheduler automatically finds deep work blocks for me. It is like having a real executive assistant.', img: 'https://i.pravatar.cc/150?u=2' },
  { name: 'David Chen', role: 'Freelance Designer', content: 'The Mood & Stress detection feature actually told me to take a break when I was burning out. I feel much more balanced and productive now.', img: 'https://i.pravatar.cc/150?u=3' }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          User <span className="text-gradient">Stories</span>
        </h2>
      </motion.div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', height: '300px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass-panel glow-border"
            style={{ padding: '40px', position: 'absolute', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <Quote size={40} color="rgba(0, 240, 255, 0.3)" style={{ marginBottom: '20px' }} />
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-secondary)' }}>"{testimonials[current].content}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={testimonials[current].img} alt={testimonials[current].name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid #00f0ff' }} />
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'white' }}>{testimonials[current].name}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-purple)' }}>{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prev} style={{ position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 10 }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><ChevronLeft color="white" /></div>
        </button>
        <button onClick={next} style={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 10 }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><ChevronRight color="white" /></div>
        </button>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          button { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
