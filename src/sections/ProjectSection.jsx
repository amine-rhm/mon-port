import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, isActive, isDark, t }) => {
  const accentColor = project.accentColor || '#22c55e';
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    cardBg: isDark ? '#0d0d12' : '#ffffff',
    text: isDark ? '#fff' : '#1a1a1a',
    textMuted: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    textSubtle: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
    border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    borderSubtle: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    borderHover: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    buttonBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    buttonBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    buttonText: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
    shadowBase: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)',
    shadowHover: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.15)',
    imageOverlay: isDark ? '#0d0d12' : '#ffffff',
  };
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card"
      style={{
        width: '300px',
        minWidth: '300px',
        height: '420px',
        background: colors.cardBg,
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered && isActive ? 'scale(1.02) translateY(-5px)' : 'scale(1)',
        boxShadow: isActive 
          ? '0 0 40px ' + accentColor + '25, 0 20px 40px ' + colors.shadowHover
          : '0 10px 30px ' + colors.shadowBase
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '20px',
        padding: '1px',
        background: isActive 
          ? 'linear-gradient(135deg, ' + accentColor + '60, transparent 50%, ' + accentColor + '30)'
          : 'linear-gradient(135deg, ' + colors.border + ', transparent 50%, ' + colors.borderSubtle + ')',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      }} />

      {isActive && (
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '100px',
          background: 'radial-gradient(ellipse, ' + accentColor + (isDark ? '20' : '30') + ' 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
      )}

      <div style={{ 
        height: '45%', 
        overflow: 'hidden', 
        position: 'relative',
        borderRadius: '20px 20px 0 0'
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'top',
              transition: 'transform 0.5s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDark 
              ? 'linear-gradient(135deg, #16161d 0%, #0d0d12 100%)'
              : 'linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%)'
          }}>
            <span style={{ fontSize: '3.5rem' }}>{project.emoji || '💻'}</span>
          </div>
        )}
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, ' + colors.imageOverlay + ')',
          pointerEvents: 'none'
        }} />
      </div>

      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 700, 
          color: colors.text, 
          marginBottom: '0.6rem'
        }}>
          {project.title}
        </h3>

        <p style={{ 
          fontSize: '0.8rem', 
          color: colors.textMuted, 
          lineHeight: 1.5, 
          marginBottom: '0.8rem', 
          flex: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
          {project.technologies && project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.25rem 0.55rem',
                borderRadius: '6px',
                fontSize: '0.65rem',
                background: isActive ? accentColor + '15' : colors.buttonBg,
                color: isActive ? accentColor : colors.textSubtle,
                border: '1px solid ' + (isActive ? accentColor + '30' : colors.borderHover)
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '0.55rem 0.8rem',
                borderRadius: '10px',
                background: isActive ? accentColor : 'transparent',
                border: isActive ? 'none' : '1px solid ' + colors.border,
                color: isActive ? '#fff' : colors.text,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {t('projects.liveDemo')}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '0.55rem 0.8rem',
                borderRadius: '10px',
                background: colors.buttonBg,
                border: '1px solid ' + colors.buttonBorder,
                color: colors.buttonText,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem'
              }}
            >
              <Github size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = React.forwardRef(function ProjectSection(props, ref) {
  const { projects = [], theme = 'dark' } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const { t } = useTranslation();

  const isDark = theme === 'dark';

  const colors = {
    bg: isDark ? '#050507' : '#f8f9fa',
    text: isDark ? '#fff' : '#1a1a1a',
    textMuted: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    textSubtle: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    buttonBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    buttonBgHover: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    buttonBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    buttonBorderHover: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
    dotActive: isDark ? '#fff' : '#1a1a1a',
    dotInactive: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
    linkText: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
    linkBorder: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
  };

  const accentColors = ['#22c55e', '#3b82f6', '#f472b6', '#eab308', '#06b6d4', '#a855f7'];

  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    accentColor: project.accentColor || accentColors[index % 6],
    emoji: project.emoji || '💻'
  }));

  const handlePrev = () => {
    if (!canScroll) return;
    setCanScroll(false);
    setActiveIndex(prev => prev === 0 ? enhancedProjects.length - 1 : prev - 1);
    setTimeout(() => setCanScroll(true), 800);
  };

  const handleNext = () => {
    if (!canScroll) return;
    setCanScroll(false);
    setActiveIndex(prev => prev === enhancedProjects.length - 1 ? 0 : prev + 1);
    setTimeout(() => setCanScroll(true), 800);
  };

  const handleWheel = (e) => {
    if (!canScroll) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canScroll, enhancedProjects.length]);

  if (enhancedProjects.length === 0) {
    return (
      <section ref={ref} id="projets" style={{ padding: '8rem 0', background: colors.bg }}>
        <div style={{ textAlign: 'center', color: colors.text }}>{t('projects.noProjects')}</div>
      </section>
    );
  }

  const getCardStyle = (index) => {
    const total = enhancedProjects.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff = diff - total;
    if (diff < -total / 2) diff = diff + total;
    
    const baseOffset = diff * 340;
    const verticalOffset = Math.abs(diff) === 0 ? -30 : Math.abs(diff) * 20;
    const scale = diff === 0 ? 1.08 : (1 - Math.abs(diff) * 0.08);
    const rotate = diff * 2;
    
    if (Math.abs(diff) > 2) return { display: 'none' };
    
    return {
      transform: `translateX(${baseOffset}px) translateY(${verticalOffset}px) scale(${scale}) rotate(${rotate}deg)`,
      opacity: Math.abs(diff) === 0 ? 1 : Math.abs(diff) === 1 ? 0.7 : 0.4,
      zIndex: 10 - Math.abs(diff),
      display: 'block'
    };
  };

  return (
    <section
      ref={ref}
      id="projets"
      style={{
        padding: '6rem 0 4rem 0',
        background: colors.bg,
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4rem', marginBottom: '3rem' }}>
        <div ref={titleRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            style={{
              fontSize: '0.85rem',
              color: colors.textSubtle,
              marginBottom: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            {t('projects.subtitle')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: colors.text,
              marginBottom: '0.75rem',
              letterSpacing: '-1px'
            }}
          >
            {t('projects.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1rem',
              color: colors.textMuted,
              maxWidth: '550px',
              lineHeight: 1.6
            }}
          >
            {t('projects.description')}
          </motion.p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onWheel={handleWheel}
        className="carousel-container"
        style={{
          position: 'relative',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {enhancedProjects.map((project, index) => (
            <div
              key={project.id || index}
              onClick={() => setActiveIndex(index)}
              style={{
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                ...getCardStyle(index)
              }}
            >
              <ProjectCard 
                project={project} 
                isActive={index === activeIndex}
                isDark={isDark}
                t={t}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="nav-btn nav-prev"
          style={{
            position: 'absolute',
            left: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: colors.buttonBg,
            border: '1px solid ' + colors.buttonBorder,
            color: colors.text,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="nav-btn nav-next"
          style={{
            position: 'absolute',
            right: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: colors.buttonBg,
            border: '1px solid ' + colors.buttonBorder,
            color: colors.text,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}
        >
          <ChevronRight size={20} />
        </button>

        <div className="fade-left" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '250px',
          height: '100%',
          background: 'linear-gradient(90deg, ' + colors.bg + ' 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 15
        }} />
        <div className="fade-right" style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '250px',
          height: '100%',
          background: 'linear-gradient(270deg, ' + colors.bg + ' 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 15
        }} />
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.4rem', 
        marginTop: '1.5rem' 
      }}>
        {enhancedProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: activeIndex === index ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: activeIndex === index ? colors.dotActive : colors.dotInactive,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

      <div className="github-link" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '2rem',
        padding: '0 4rem'
      }}>
        <a
          href="https://github.com/amine-rhm"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem 3rem',
            width: '100%',
            maxWidth: '600px',
            borderRadius: '50px',
            background: 'transparent',
            border: '1px solid ' + colors.linkBorder,
            color: colors.linkText,
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500
          }}
        >
          {t('projects.moreOnGithub')} <Github size={18} />
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projets {
            padding: 4rem 0 3rem 0 !important;
          }
          #projets > div:first-child {
            padding: 0 1.5rem !important;
          }
          .carousel-container {
            height: 400px !important;
          }
          .project-card {
            width: 280px !important;
            min-width: 280px !important;
            height: 400px !important;
          }
          .nav-btn {
            width: 40px !important;
            height: 40px !important;
          }
          .nav-prev {
            left: 5px !important;
          }
          .nav-next {
            right: 5px !important;
          }
          .fade-left, .fade-right {
            width: 100px !important;
          }
          .github-link {
            padding: 0 1.5rem !important;
          }
          .github-link a {
            padding: 0.8rem 2rem !important;
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            height: 380px !important;
          }
          .project-card {
            width: 260px !important;
            min-width: 260px !important;
            height: 380px !important;
          }
          .fade-left, .fade-right {
            width: 50px !important;
          }
        }
      `}</style>
    </section>
  );
});

export default ProjectSection;