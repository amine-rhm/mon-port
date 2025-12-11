import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import cvPdf from '../assets/amin (1).pdf';
import ph from '../assets/photo.jpg';

// ============================================
// Bandeau technologies défilant - PLEINE LARGEUR
// ============================================
const technologies = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const TechBanner = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100vw',
      padding: '1.5rem 0',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
      background: '#0a0a0a'
    }}>
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{
          display: 'flex',
          gap: '2rem',
          width: 'fit-content',
          paddingLeft: '2rem'
        }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.7rem 1.4rem',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: '26px', height: '26px' }}
            />
            <span style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.95rem',
              fontWeight: 500,
              whiteSpace: 'nowrap'
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ============================================
// Bouton social carré
// ============================================
const SocialButton = ({ icon: Icon, href, onClick, label }) => {
  const Component = href ? 'a' : 'button';
  const props = href 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        {...props}
        aria-label={label}
        style={{
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
        }}
      >
        <Icon size={22} />
      </Component>
    </motion.div>
  );
};

// ============================================
// Particules en arrière-plan
// ============================================
const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = 80;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.3 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

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
        zIndex: 0
      }}
    />
  );
};

// ============================================
// COMPOSANT PRINCIPAL
// ============================================
const HomeSection = ({ scrollToSection }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPhoto(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'CV_Rahmouni_Mohamed_Amine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="accueil"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Particles />
      
      {/* Container principal */}
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '6rem 3rem 8rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* ========== COLONNE GAUCHE ========== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>&lt;/&gt;</span>
            Hi, I'm <span style={{ color: '#fff', fontWeight: 500 }}>Rahmouni Mohamed Amine</span>
          </motion.p>

          {/* Zone alternance Photo / Texte */}
          <div style={{
            position: 'relative',
            height: '220px',
            marginBottom: '2.5rem'
          }}>
            <AnimatePresence mode="wait">
              {showPhoto ? (
                <motion.div
                  key="photo"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '3px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                  }}>
                    <img 
                      src={ph} 
                      alt="Rahmouni Mohamed Amine"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.h1
                  key="title"
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1.05,
                    letterSpacing: '-2px',
                    margin: 0
                  }}
                >
                  Développeur<br />
                  Full Stack
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Boutons sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <SocialButton icon={Mail} href="mailto:rahmouni.mohamedamine1@gmail.com" label="Email" />
            <SocialButton icon={Github} href="https://github.com/amine-rhm" label="GitHub" />
            <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/mohamed-amine-rahmouni-5a08292a5/" label="LinkedIn" />
            <SocialButton icon={FileText} onClick={downloadCV} label="CV" />
          </motion.div>
        </motion.div>

        {/* ========== COLONNE DROITE ========== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
          }}>
            Je suis développeur web et j'aime transformer des idées en applications 
            web fonctionnelles et esthétiques. Ces dernières années, j'ai développé 
            des projets avec des technologies modernes comme <strong style={{ color: '#fff' }}>React</strong>, 
            <strong style={{ color: '#fff' }}> TypeScript</strong> et <strong style={{ color: '#fff' }}>Node.js</strong>, 
            en cherchant toujours à optimiser le code pour une expérience utilisateur fluide.
          </p>
          
          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.8
          }}>
            J'aime créer des choses utiles, intuitives et parfois juste pour le plaisir 
            (et pourquoi pas ?). Qu'il s'agisse d'une plateforme SaaS, d'une application 
            mobile ou d'un petit projet personnel qui a pris de l'ampleur, j'adore donner 
            vie à des concepts et apprendre de nouvelles choses en cours de route. 
            J'explore actuellement l'architecture backend, la conception de systèmes 
            et un peu le développement mobile.
          </p>
        </motion.div>
      </div>

      {/* Flèche scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
          onClick={() => scrollToSection && scrollToSection('apropos')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Bandeau technologies - PLEINE LARGEUR */}
      <TechBanner />

      {/* CSS Responsive */}
      <style>{`
        @media (max-width: 968px) {
          #accueil > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 8rem 2rem 6rem !important;
          }
          #accueil > div > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;