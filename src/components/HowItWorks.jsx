import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Zap, ArrowRight } from 'lucide-react';

const steps = [
  { icon: <Target size={30} color="#fff" />, title: 'Add Your Goals', desc: 'Input your deadlines, habits, and desired outcomes.' },
  { icon: <Brain size={30} color="#fff" />, title: 'AI Analyzes Routine', desc: 'Our engine processes your data to understand your energy peaks.' },
  { icon: <Zap size={30} color="#fff" />, title: 'Smart Plan Created', desc: 'Get a personalized schedule optimized for deep work.' },
  { icon: <TrendingUp size={30} color="#fff" />, title: 'Improve Daily', desc: 'Follow the plan and watch your productivity skyrocket.' },
];

import { TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          How It <span className="text-gradient">Works</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Four simple steps to transform your chaotic routine into a structured symphony of productivity.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Timeline Line */}
        <div style={{ position: 'absolute', left: '40px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.1)', zIndex: -1 }}>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'linear' }}
            style={{ width: '100%', background: 'linear-gradient(to bottom, #00f0ff, #8a2be2, #ff00ff)', boxShadow: '0 0 10px #00f0ff' }}
          />
        </div>

        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
          >
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              background: 'linear-gradient(45deg, #0a0a1a, #1a1a3a)', border: '2px solid',
              borderColor: i === 0 ? '#00f0ff' : i === 1 ? '#0055ff' : i === 2 ? '#8a2be2' : '#ff00ff',
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0,
              boxShadow: `0 0 20px ${i === 0 ? '#00f0ff' : i === 1 ? '#0055ff' : i === 2 ? '#8a2be2' : '#ff00ff'}66`
            }}>
              {step.icon}
            </div>
            
            <div className="glass-panel" style={{ padding: '25px', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
