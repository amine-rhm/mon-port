import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import ph from '../assets/photo.jpg';

// Composant SVG personnalisé pour l'icône de code
const CodeIcon = (props) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 8L3 12L7 16"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8L21 12L17 16"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 4L9.8589 19.4548"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Composant pour l'arrière-plan animé avec des étoiles
const StarField = ({ cursorPosition }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les étoiles
    const createStars = () => {
      const stars = [];
      const numStars = 150;
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.008 + 0.003 // Réduit encore la vitesse de scintillement
        });
      }
      
      starsRef.current = stars;
    };

    createStars();

    // Animation des étoiles
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star, index) => {
        // Effet de parallaxe avec le curseur (encore plus ralenti)
        const distanceX = cursorPosition.x - star.originalX;
        const distanceY = cursorPosition.y - star.originalY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = 120; // Réduit encore de 150 à 120
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          star.x = star.originalX + distanceX * force * 0.02; // Réduit encore de 0.05 à 0.02
          star.y = star.originalY + distanceY * force * 0.02; // Réduit encore de 0.05 à 0.02
        } else {
          // Retour progressif à la position originale (encore plus ralenti)
          star.x += (star.originalX - star.x) * 0.005; // Réduit encore de 0.01 à 0.005
          star.y += (star.originalY - star.y) * 0.005; // Réduit encore de 0.01 à 0.005
        }
        
        // Effet de scintillement (encore plus ralenti)
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.003; // Réduit encore de 0.005 à 0.003
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // Dessiner l'étoile
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Ajouter un halo très subtil autour des étoiles proches du curseur
        if (distance < maxDistance) {
          const glowSize = star.size + (maxDistance - distance) / 100; // Réduit encore l'effet de halo
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          const glowOpacity = (maxDistance - distance) / maxDistance * 0.03; // Réduit encore l'opacité
          ctx.fillStyle = `rgba(255, 255, 255, ${glowOpacity})`; // Changé en blanc
          ctx.fill();
        }
      });
      
      animationRef.current = requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cursorPosition]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

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
          : 'linear-gradient(135deg, #1e1e2f, #2e3a59, #1f2f45)',
        overflow: 'hidden'
      }}
    >
      {/* Arrière-plan animé avec des étoiles */}
      <StarField cursorPosition={cursorPosition} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
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
                color: '#fff',
                textShadow: '0 0 20px rgba(255,255,255,0.1)'
              }}
            >
              Rahmouni Mohamed Amine{' '}
              <CodeIcon 
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginLeft: '0.2rem'
                }}
              />
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.85)',
                textShadow: '0 0 10px rgba(255,255,255,0.1)'
              }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ 
                  display: 'inline-block', 
                  width: '2px', 
                  height: '1.2rem', 
                  backgroundColor: '#fff', 
                  marginLeft: '4px',
                  boxShadow: '0 0 10px #fff'
                }}
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
                lineHeight: '1.7',
                textShadow: '0 0 10px rgba(255,255,255,0.1)'
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
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#1a1a2e',
                  border: 'none',
                  padding: '1rem 2.2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Download size={18} />
                Télécharger CV
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('projets')}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '1rem 2.2rem',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.1)'
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
                y: [0, -10, 0], // Réduit le mouvement de -15 à -10
                transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } // Augmenté de 6 à 8 secondes
              }}
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), 0 0 40px rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                  backgroundImage: `url(${ph})`,
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
          y: [0, 15, 0], // Réduit le mouvement de 20 à 15
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } // Augmenté de 2 à 3 secondes
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
      >
        <ChevronRight 
          size={36} 
          color="#fff" 
          style={{ 
            transform: 'rotate(90deg)',
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
          }} 
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;