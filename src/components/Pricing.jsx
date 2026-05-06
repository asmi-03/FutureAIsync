import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    desc: 'Perfect for students starting their productivity journey.',
    features: ['Basic Smart Scheduling', 'Standard Task Manager', 'Daily Analytics', 'Community Support'],
    color: '#00f0ff'
  },
  {
    name: 'Pro AI Plan',
    price: '$12',
    desc: 'Advanced AI features for serious professionals.',
    features: ['Real-time Focus Analytics', 'Mood & Stress Detection', 'Voice Assistant Integration', 'Priority AI Processing', '24/7 Premium Support'],
    color: '#8a2be2',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$49',
    desc: 'Custom solutions for teams and organizations.',
    features: ['Team Productivity Dashboard', 'Custom AI Workflows', 'Dedicated Account Manager', 'API Access', 'Enterprise Security'],
    color: '#ff00ff'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          Choose Your <span className="text-gradient">Future</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Flexible pricing plans designed to scale with your ambition.
        </p>
      </motion.div>

      <div className="grid-cols-auto" style={{ alignItems: 'center' }}>
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -15 }}
            className={`glass-panel ${plan.popular ? 'glow-border' : ''}`}
            style={{ 
              padding: '40px', 
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              zIndex: plan.popular ? 10 : 1,
              background: plan.popular ? 'rgba(138, 43, 226, 0.1)' : 'var(--glass-bg)',
              border: plan.popular ? '1px solid rgba(138, 43, 226, 0.4)' : '1px solid var(--glass-border)'
            }}
          >
            {plan.popular && (
              <div style={{ position: 'absolute', top: '-15px', right: '30px', background: 'linear-gradient(45deg, #00f0ff, #8a2be2)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                MOST POPULAR
              </div>
            )}
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', color: plan.color }}>{plan.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', minHeight: '50px' }}>{plan.desc}</p>
            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '30px' }}>
              {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/month</span>
            </div>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {plan.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={20} color={plan.color} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={plan.popular ? "btn-primary" : "btn-secondary"} style={{ width: '100%' }}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
