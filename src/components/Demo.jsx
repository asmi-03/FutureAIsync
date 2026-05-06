import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Activity, RefreshCw } from 'lucide-react';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20); // typing speed
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Demo = () => {
  const initialMessages = [
    { type: 'ai', text: 'Hello! I am FutureSync Assistant. What do you need help with today?' }
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim() || isTyping) return;
    
    const userText = inputText;
    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputText('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerInput = userText.toLowerCase();
      const isGreeting = lowerInput.match(/\b(hi|hii|hello|hey|greetings)\b/);
      const isQuestion = lowerInput.includes('how') || lowerInput.includes('what') || lowerInput.includes('why');
      
      let aiResponse = "I've analyzed your request. Here are some intelligent insights and an optimized plan for you.";
      let showSchedule = true;

      if (isGreeting && lowerInput.length < 20) {
        aiResponse = "Hello there! 👋 How can I help you organize your tasks, schedule, or life today?";
        showSchedule = false;
      } else if (isQuestion) {
        aiResponse = "That's a great question! Based on my AI analysis, here is how we can optimize your approach to this:";
        showSchedule = false;
      }

      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: aiResponse,
        schedule: showSchedule
      }]);
    }, 1500); // simulate network latency
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setInputText('');
    setIsTyping(false);
  };

  return (
    <section id="demo" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
          See AI in <span className="text-gradient">Action</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Interact with our intelligent assistant and watch it organize your chaotic life in seconds.
        </p>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '500px', maxHeight: '600px' }}>
          
          {/* Header with Reset */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bot size={24} color="#8a2be2" />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>FutureSync Assistant</h3>
             </div>
             <button onClick={handleReset} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
               <RefreshCw size={18} /> Reset
             </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', paddingRight: '10px' }}>
            {messages.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ 
                  alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  display: 'flex',
                  gap: '15px',
                  maxWidth: '85%',
                  flexDirection: msg.type === 'user' ? 'row-reverse' : 'row'
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: msg.type === 'user' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(138, 43, 226, 0.2)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  boxShadow: msg.type === 'ai' ? '0 0 10px rgba(138, 43, 226, 0.4)' : '0 0 10px rgba(0, 240, 255, 0.4)'
                }}>
                  {msg.type === 'user' ? <User size={20} color="#00f0ff" /> : <Bot size={20} color="#8a2be2" />}
                </div>
                
                <div style={{
                  background: msg.type === 'user' ? 'linear-gradient(45deg, #0055ff, #8a2be2)' : 'rgba(255,255,255,0.05)',
                  padding: '15px 20px', borderRadius: '15px', border: msg.type === 'ai' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  lineHeight: '1.6'
                }}>
                  <p style={{ margin: 0 }}>
                    {msg.type === 'ai' ? <TypewriterText text={msg.text} /> : msg.text}
                  </p>
                  
                  {msg.schedule && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ delay: 1.5 }} // waits for typing to mostly finish
                      style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}
                    >
                      {['Deep Work: Coding (2hrs)', 'Review Documentation (1hr)', 'Mindfulness Break (15m)'].map((task, idx) => (
                        <div key={idx} style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #00f0ff' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                            <span>{task}</span>
                            <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>{Math.floor(Math.random() * 20 + 80)}% Match</span>
                          </div>
                          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }}
                              transition={{ duration: 1, delay: 1.5 + (idx * 0.2) }}
                              style={{ height: '100%', background: 'linear-gradient(90deg, #00f0ff, #8a2be2)' }}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(138, 43, 226, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 10px rgba(138, 43, 226, 0.4)' }}>
                  <Bot size={20} color="#8a2be2" />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', display: 'flex', gap: '8px', alignItems: 'center', height: '54px' }}>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: '8px', height: '8px', background: '#8a2be2', borderRadius: '50%' }} />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: '8px', height: '8px', background: '#00f0ff', borderRadius: '50%' }} />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: '8px', height: '8px', background: '#ff00ff', borderRadius: '50%' }} />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '10px 20px', background: 'rgba(0,0,0,0.4)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Activity size={20} color="#00f0ff" />
            <input 
              type="text" 
              placeholder="Message FutureSync AI..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isTyping}
              style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: '1rem', padding: '5px' }} 
            />
            <button 
              onClick={handleSend} 
              disabled={isTyping || !inputText.trim()}
              className="btn-primary" 
              style={{ padding: '0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: (!inputText.trim() || isTyping) ? 0.5 : 1 }}
            >
              <Send size={18} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Demo;
