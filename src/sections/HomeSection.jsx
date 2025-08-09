import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const HomeSection = ({ 
  theme, 
  textColor, 
  primaryColor,
  scrollToSection
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Développeur Full Stack", 
    "UI/UX Designer", 
    "Étudiant en Master MIAGE"
  ];

  // Animation curseur personnalisé
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Machine à écrire améliorée
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      setTypingSpeed(isDeleting ? 50 : 150);
      
      if (!isDeleting) {
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <motion.section
      id="accueil"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem',
        paddingTop: '8rem',
        position: 'relative',
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(50, 50, 50, 0.9))' 
          : 'linear-gradient(135deg, #1e1e2f, #2e3a59, #1f2f45)'
      }}
    >
      {/* Curseur personnalisé */}
      <motion.div
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          transition: { type: 'spring', damping: 30, stiffness: 300 }
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: primaryColor,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'exclusion',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                fontWeight: '800',
                lineHeight: '1.2',
                color: '#fff'
              }}
            >
              Rahmouni Mohamed Amine
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.85)'
              }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ display: 'inline-block', width: '2px', height: '1.2rem', backgroundColor: '#fff', marginLeft: '4px' }}
              />
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '600px',
                lineHeight: '1.7'
              }}
            >
              Étudiant en Master MIAGE à l'Université de Picardie Jules Verne,
              passionné par la création d'expériences web modernes et intuitives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#fff',
                  color: primaryColor,
                  border: 'none',
                  padding: '1rem 2.2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
                }}
              >
                <Download size={18} />
                Télécharger CV
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('projets')}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '1rem 2.2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Voir mes projets
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{
                width: '90%',
                height: '90%',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.15)'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: '#2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#777',
                  fontSize: '1rem',
                  backgroundImage: 'url(photo.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <ChevronRight size={36} color="#fff" style={{ transform: 'rotate(90deg)' }} />
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;