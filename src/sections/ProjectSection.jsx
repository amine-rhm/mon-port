import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// ============================================
// COMPOSANT: Card de projet style flat avec effets
// ============================================
const ProjectCard = ({ project, isActive }) => {
  const accentColor = project.accentColor || '#22c55e';
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={function() { setIsHovered(true); }}
      onMouseLeave={function() { setIsHovered(false); }}
      style={{
        width: '300px',
        minWidth: '300px',
        height: '420px',
        background: '#0d0d12',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered && isActive ? 'scale(1.02) translateY(-5px)' : 'scale(1)',
        boxShadow: isActive 
          ? '0 0 40px ' + accentColor + '25, 0 20px 40px rgba(0,0,0,0.4)'
          : '0 10px 30px rgba(0,0,0,0.3)'
      }}
    >
      {/* Bordure dégradée animée */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '20px',
        padding: '1px',
        background: isActive 
          ? 'linear-gradient(135deg, ' + accentColor + '60, transparent 50%, ' + accentColor + '30)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent 50%, rgba(255,255,255,0.05))',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        transition: 'all 0.4s ease'
      }} />

      {/* Glow effect en haut */}
      {isActive && (
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '100px',
          background: 'radial-gradient(ellipse, ' + accentColor + '20 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />
      )}

      {/* Image */}
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
            background: 'linear-gradient(135deg, #16161d 0%, #0d0d12 100%)'
          }}>
            <span style={{ 
              fontSize: '3.5rem',
              filter: 'drop-shadow(0 0 20px ' + accentColor + '40)'
            }}>
              {project.emoji || '💻'}
            </span>
          </div>
        )}
        
        {/* Reflet en haut de l'image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />
        
        {/* Gradient overlay en bas */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(transparent, #0d0d12)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
        {/* Titre avec effet glow */}
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 700, 
          color: '#fff', 
          marginBottom: '0.6rem',
          textShadow: isActive ? '0 0 20px ' + accentColor + '40' : 'none',
          transition: 'all 0.3s ease'
        }}>
          {project.title}
        </h3>

        <p style={{ 
          fontSize: '0.8rem', 
          color: 'rgba(255,255,255,0.5)', 
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

        {/* Technologies avec effet hover */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
          {project.technologies && project.technologies.slice(0, 4).map(function(tech, idx) {
            return (
              <span
                key={idx}
                style={{
                  padding: '0.25rem 0.55rem',
                  borderRadius: '6px',
                  fontSize: '0.65rem',
                  background: isActive ? accentColor + '15' : 'rgba(255,255,255,0.05)',
                  color: isActive ? accentColor : 'rgba(255,255,255,0.6)',
                  border: '1px solid ' + (isActive ? accentColor + '30' : 'rgba(255,255,255,0.08)'),
                  transition: 'all 0.3s ease'
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Buttons avec effet glow */}
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
                border: isActive ? 'none' : '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
                boxShadow: isActive ? '0 5px 20px ' + accentColor + '40' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Site en direct
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
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
                transition: 'all 0.3s ease'
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

// ============================================
// COMPOSANT PRINCIPAL: Carrousel horizontal
// ============================================
const ProjectSection = React.forwardRef(function ProjectSection(props, ref) {
  const { projects = [] } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const colors = ['#22c55e', '#3b82f6', '#f472b6', '#eab308', '#06b6d4', '#a855f7'];

  const enhancedProjects = projects.map(function(project, index) {
    return {
      ...project,
      accentColor: project.accentColor || colors[index % 6],
      emoji: project.emoji || '💻'
    };
  });

  const handlePrev = function() {
    if (!canScroll) return;
    setCanScroll(false);
    setActiveIndex(function(prev) {
      return prev === 0 ? enhancedProjects.length - 1 : prev - 1;
    });
    setTimeout(function() { setCanScroll(true); }, 800);
  };

  const handleNext = function() {
    if (!canScroll) return;
    setCanScroll(false);
    setActiveIndex(function(prev) {
      return prev === enhancedProjects.length - 1 ? 0 : prev + 1;
    });
    setTimeout(function() { setCanScroll(true); }, 800);
  };

  // Wheel scroll handler avec debounce plus long
  const handleWheel = function(e) {
    if (!canScroll) return;
    
    // Scroll horizontal (trackpad) ou vertical (molette)
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    
    if (delta > 50) {
      handleNext();
    } else if (delta < -50) {
      handlePrev();
    }
  };

  // Keyboard navigation
  React.useEffect(function() {
    const handleKeyDown = function(e) {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return function() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canScroll, enhancedProjects.length]);

  if (enhancedProjects.length === 0) {
    return (
      <section ref={ref} id="projets" style={{ padding: '8rem 0', background: '#050507' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>Aucun projet</div>
      </section>
    );
  }

  // Calculer les positions des cartes
  const getCardStyle = function(index) {
    const total = enhancedProjects.length;
    let diff = index - activeIndex;
    
    // Wrap around
    if (diff > total / 2) diff = diff - total;
    if (diff < -total / 2) diff = diff + total;
    
    const baseOffset = diff * 340; // Espacement entre cartes
    
    // Décalage vertical - carte du milieu plus haute
    const verticalOffset = Math.abs(diff) === 0 ? -30 : Math.abs(diff) * 20;
    
    // Scale - carte du milieu plus grande
    const scale = diff === 0 ? 1.08 : (1 - Math.abs(diff) * 0.08);
    
    // Légère rotation
    const rotate = diff * 2;
    
    // Cacher les cartes trop éloignées (seulement 2 de chaque côté)
    if (Math.abs(diff) > 2) {
      return {
        display: 'none'
      };
    }
    
    return {
      transform: 'translateX(' + baseOffset + 'px) translateY(' + verticalOffset + 'px) scale(' + scale + ') rotate(' + rotate + 'deg)',
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
        background: '#050507',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4rem', marginBottom: '3rem' }}>
        <div ref={titleRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            Mon travail
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '0.75rem',
              letterSpacing: '-1px'
            }}
          >
            Projets
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '550px',
              lineHeight: 1.6
            }}
          >
            Voici une sélection de projets sur lesquels j'ai travaillé.
          </motion.p>
        </div>
      </div>

      {/* Carrousel */}
      <div 
        ref={scrollRef}
        onWheel={handleWheel}
        style={{
          position: 'relative',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Container des cartes */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {enhancedProjects.map(function(project, index) {
            const style = getCardStyle(index);
            
            return (
              <div
                key={project.id || index}
                onClick={function() { setActiveIndex(index); }}
                style={{
                  position: 'absolute',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  ...style
                }}
              >
                <ProjectCard 
                  project={project} 
                  isActive={index === activeIndex} 
                />
              </div>
            );
          })}
        </div>

        {/* Navigation gauche */}
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.3s'
          }}
          onMouseEnter={function(e) { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={function(e) { e.target.style.background = 'rgba(255,255,255,0.05)'; }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Navigation droite */}
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '3%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.3s'
          }}
          onMouseEnter={function(e) { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={function(e) { e.target.style.background = 'rgba(255,255,255,0.05)'; }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Fade edges - plus larges pour cacher les cartes */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '250px',
          height: '100%',
          background: 'linear-gradient(90deg, #050507 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 15
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '250px',
          height: '100%',
          background: 'linear-gradient(270deg, #050507 30%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 15
        }} />
      </div>

      {/* Dots indicator */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.4rem', 
        marginTop: '1.5rem' 
      }}>
        {enhancedProjects.map(function(project, index) {
          return (
            <button
              key={index}
              onClick={function() { setActiveIndex(index); }}
              style={{
                width: activeIndex === index ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: activeIndex === index 
                  ? '#fff'
                  : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          );
        })}
      </div>

      {/* Bouton Plus de projets sur GitHub */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '2rem',
        marginBottom: '0',
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
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={function(e) { 
            e.target.style.borderColor = 'rgba(255,255,255,0.3)';
            e.target.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={function(e) { 
            e.target.style.borderColor = 'rgba(255,255,255,0.15)';
            e.target.style.background = 'transparent';
          }}
        >
          Plus de projets sur <Github size={18} />
        </a>
      </div>
    </section>
  );
});

export default ProjectSection;