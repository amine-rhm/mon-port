import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ph from '../assets/photo.jpg';

// ============================================
// Technologies
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

// ============================================
// Bandeau technologies
// ============================================
const TechBanner = ({ isDark }) => {
  const bgColor = isDark ? '#0a0a0a' : '#fafafa';
  const itemBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';
  const itemBgHover = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const textColor = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';

  return (
    <>
      <style>{`
        @keyframes scrollTech {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .tech-banner-container {
          position: absolute;
          bottom: -3rem;
          left: 7rem;
          right: 7rem;
          width: auto;
          padding: 1.2rem 0;
          overflow: visible;
          background: ${bgColor};
          z-index: 50;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .tech-scroll-wrapper {
          display: flex;
          width: fit-content;
          animation: scrollTech 100s linear infinite;
        }

        .tech-banner-container:hover .tech-scroll-wrapper {
          animation-play-state: paused;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.7rem 1.4rem;
          margin-right: 1rem;
          background: ${itemBg};
          border-radius: 10px;
          border: 1px solid ${borderColor};
          flex-shrink: 0;
          transition: transform 0.4s ease, background 0.3s ease;
        }

        .tech-item:hover {
          transform: scale(1.1);
          background: ${itemBgHover};
        }
        
        .tech-item img {
          width: 26px;
          height: 26px;
        }
        
        .tech-item span {
          color: ${textColor};
          font-size: 0.95rem;
          font-weight: 500;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .tech-banner-container {
            left: 1rem;
            right: 1rem;
            bottom: -2rem;
          }
          .tech-item {
            padding: 0.5rem 1rem;
          }
          .tech-item img {
            width: 20px;
            height: 20px;
          }
          .tech-item span {
            font-size: 0.8rem;
          }
        }
      `}</style>
      
      <div className="tech-banner-container">
        <div className="tech-scroll-wrapper">
          {Array(12).fill(technologies).flat().map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ============================================
// Bouton social carré
// ============================================
const SocialButton = ({ icon: Icon, href, onClick, label, isDark }) => {
  const Component = href ? 'a' : 'button';
  const props = href 
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  const bgDefault = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';
  const bgHover = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const borderDefault = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const borderHover = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
  const colorDefault = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
  const colorHover = isDark ? '#fff' : '#000';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        {...props}
        aria-label={label}
        className="social-btn"
        style={{
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: bgDefault,
          border: `1px solid ${borderDefault}`,
          borderRadius: '12px',
          color: colorDefault,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = bgHover;
          e.currentTarget.style.borderColor = borderHover;
          e.currentTarget.style.color = colorHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = bgDefault;
          e.currentTarget.style.borderColor = borderDefault;
          e.currentTarget.style.color = colorDefault;
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
const Particles = ({ isDark }) => {
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
        const particleColor = isDark 
          ? `rgba(255, 255, 255, ${p.opacity})` 
          : `rgba(0, 0, 0, ${p.opacity * 0.5})`;
        ctx.fillStyle = particleColor;
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
  }, [isDark]);

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
const HomeSection = forwardRef(({ theme, textColor, primaryColor, displayText, scrollToSection }, ref) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const { t } = useTranslation();
  
  // Détecter le mode
  const isDark = theme === 'dark';
  
  // Couleurs dynamiques
  const bgColor = isDark ? '#0a0a0a' : '#fafafa';
  const headingColor = isDark ? '#fff' : '#1a1a1a';
  const subtextColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const paragraphColor = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)';
  const strongColor = isDark ? '#fff' : '#000';
  const photoBorderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

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
      ref={ref}
      id="accueil"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: bgColor,
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Particles isDark={isDark} />
      
      <div className="home-content" style={{
        width: '100%',
        maxWidth: '1500px',
        margin: '0 auto',
        padding: '6rem 4rem 8rem',
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.5fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        <motion.div
          className="home-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="home-greeting"
            style={{
              fontSize: '1rem',
              color: subtextColor,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>&lt;/&gt;</span>
            {t('home.greeting')} <span style={{ color: headingColor, fontWeight: 500 }}>{t('home.name')}</span>
          </motion.p>

          <div className="home-title-container" style={{
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
                  className="home-photo"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: `3px solid ${photoBorderColor}`,
                    boxShadow: isDark 
                      ? '0 20px 60px rgba(0,0,0,0.5)' 
                      : '0 20px 60px rgba(0,0,0,0.15)'
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
                  className="home-title"
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: '0rem',
                    fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                    fontWeight: 800,
                    color: headingColor,
                    lineHeight: 1.05,
                    letterSpacing: '-2px',
                    margin: 0
                  }}
                >
                  {t('home.title1')}<br />
                  {t('home.title2')}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="home-socials"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <SocialButton icon={Mail} href="mailto:rahmouni.mohamedamine1@gmail.com" label="Email" isDark={isDark} />
            <SocialButton icon={Github} href="https://github.com/amine-rhm" label="GitHub" isDark={isDark} />
            <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/mohamed-amine-rahmouni-5a08292a5/" label="LinkedIn" isDark={isDark} />
            <SocialButton icon={FileText} onClick={downloadCV} label="CV" isDark={isDark} />
          </motion.div>
        </motion.div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="home-desc" style={{
            fontSize: '1rem',
            color: paragraphColor,
            lineHeight: 1.8,
            marginBottom: '1.6rem'
          }}>
            {t('home.description1')} <strong style={{ color: strongColor }}>React</strong>, 
            <strong style={{ color: strongColor }}> TypeScript</strong> et <strong style={{ color: strongColor }}>Node.js</strong>, 
            {t('home.description2')}
          </p>
          
          <p className="home-desc" style={{
            fontSize: '1rem',
            color: paragraphColor,
            lineHeight: 1.7
          }}>
            {t('home.description3')}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ color: primaryColor || '#3b82f6', cursor: 'pointer' }}
          onClick={() => scrollToSection && scrollToSection('apropos')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>

      <TechBanner isDark={isDark} />

      <style>{`
        @media (max-width: 968px) {
          .home-content {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 6rem 1.5rem 5rem !important;
            gap: 2rem !important;
          }
          .home-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .home-greeting {
            justify-content: center;
            text-align: center;
          }
          .home-title-container {
            height: 150px !important;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
          }
          .home-title {
            position: relative !important;
            text-align: center;
            font-size: clamp(2rem, 8vw, 3rem) !important;
            left: auto !important;
          }
          .home-photo {
            position: relative !important;
            left: auto !important;
          }
          .home-socials {
            justify-content: center;
          }
          .home-right {
            text-align: center;
            padding: 0 0.5rem;
          }
          .home-desc {
            font-size: 0.95rem !important;
            line-height: 1.7 !important;
          }
          .scroll-indicator {
            bottom: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .home-content {
            padding: 5rem 1rem 4rem !important;
          }
          .home-title {
            font-size: clamp(1.8rem, 10vw, 2.5rem) !important;
            letter-spacing: -1px !important;
          }
          .home-title-container {
            height: 130px !important;
            margin-bottom: 1.5rem !important;
          }
          .home-greeting {
            font-size: 0.85rem !important;
          }
          .home-desc {
            font-size: 0.9rem !important;
          }
          .social-btn {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </section>
  );
});

export default HomeSection;