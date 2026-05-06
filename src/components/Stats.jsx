import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.4)', position: 'relative', zIndex: 1 }}>
      <div className="grid-cols-auto" style={{ textAlign: 'center' }}>
        {[
          { num: 10, suffix: 'K+', label: 'Active Users', color: '#00f0ff' },
          { num: 95, suffix: '%', label: 'Productivity Boost', color: '#ff00ff' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ padding: '20px' }}
          >
            <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: stat.color, marginBottom: '10px', textShadow: `0 0 20px ${stat.color}66` }}>
              <Counter target={stat.num} duration={2} suffix={stat.suffix} />
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: 500 }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
