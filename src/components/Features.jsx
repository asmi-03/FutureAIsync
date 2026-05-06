import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, HeartPulse, BookOpen, TrendingUp, Mic, Activity } from 'lucide-react';

const features = [
  { icon: <Calendar size={32} color="#00f0ff" />, title: 'AI Smart Scheduler', desc: 'Automatically organizes your day based on your energy levels and deadlines.' },
  { icon: <HeartPulse size={32} color="#ff00ff" />, title: 'Mood & Stress Detection', desc: 'Monitors your typing and voice to suggest breaks and mindfulness exercises.' },
  { icon: <BookOpen size={32} color="#8a2be2" />, title: 'Smart Study Planner', desc: 'Creates optimized learning paths and flashcards from your notes.' },
  { icon: <TrendingUp size={32} color="#00f0ff" />, title: 'AI Productivity Tracker', desc: 'Visualizes your deep work sessions and provides actionable insights.' },
  { icon: <Mic size={32} color="#ff00ff" />, title: 'Voice Assistant', desc: 'Hands-free control for adding tasks, setting reminders, and checking schedules.' },
  { icon: <Activity size={32} color="#8a2be2" />, title: 'Real-time Focus Analytics', desc: 'Tracks your concentration and blocks distractions when you need to focus.' },
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          Intelligent <span className="text-gradient">Features</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Experience the next generation of productivity tools powered by advanced AI algorithms.
        </p>
      </motion.div>

      <div className="grid-cols-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)' }}
            className="glass-panel"
            style={{ padding: '30px', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{
              width: '60px', height: '60px', borderRadius: '15px',
              background: 'rgba(255,255,255,0.05)', display: 'flex',
              justifyContent: 'center', alignItems: 'center', marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              {feature.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            
            {/* Hover glow effect */}
            <div style={{
              position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              opacity: 0, transition: 'opacity 0.3s ease', zIndex: -1, pointerEvents: 'none'
            }} className="card-hover-glow" />
          </motion.div>
        ))}
      </div>
      
      <style>{`
        .glass-panel:hover .card-hover-glow { opacity: 1; }
      `}</style>
    </section>
  );
};

export default Features;
