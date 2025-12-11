import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Github, ExternalLink, Figma } from 'lucide-react';

// ============================================
// COMPOSANT: Card de projet animée
// ============================================
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Image Container */}
      <motion.div
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          aspectRatio: '16/10',
          cursor: 'pointer'
        }}
        whileHover={{ 
          borderColor: project.accentColor || 'rgba(102,126,234,0.5)',
          boxShadow: `0 20px 40px ${project.accentColor || 'rgba(102,126,234,0.15)'}40`
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Browser dots */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '16px',
          display: 'flex',
          gap: '6px',
          zIndex: 3
        }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
        </div>

        {/* Project name badge */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '16px',
          background: project.accentColor || 'rgba(102,126,234,0.8)',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#fff',
          zIndex: 3,
          backdropFilter: 'blur(10px)'
        }}>
          {project.category === 'design' ? '🎨 Design' : project.category === 'mobile' ? '📱 Mobile' : '🌐 Web'}
        </div>

        {/* Image */}
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${project.accentColor || '#667eea'}20 0%, #0a0a0a 100%)`
          }}>
            <span style={{ fontSize: '4rem' }}>{project.emoji || '💻'}</span>
          </div>
        )}

        {/* Hover overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            zIndex: 4
          }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <Github size={22} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: project.accentColor || '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={22} />
            </motion.a>
          )}
          {project.figma && (
            <motion.a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              <Figma size={22} />
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div style={{ padding: '1.5rem 0.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title */}
        <h3 style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.75rem',
          letterSpacing: '-0.5px'
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
          flex: 1
        }}>
          {project.description.length > 150 
            ? project.description.substring(0, 150) + '...' 
            : project.description
          }
        </p>

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {project.technologies.slice(0, 5).map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 5 && (
            <span style={{
              padding: '0.35rem 0.85rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 500,
              background: 'rgba(102,126,234,0.2)',
              color: '#667eea',
              border: '1px solid rgba(102,126,234,0.3)'
            }}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// COMPOSANT: Filtre animé
// ============================================
const FilterButton = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: '0.6rem 1.5rem',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 500,
      background: isActive 
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : 'rgba(255,255,255,0.05)',
      color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
      transition: 'all 0.3s ease'
    }}
  >
    {label}
  </motion.button>
);

// ============================================
// COMPOSANT PRINCIPAL: ProjectSection
// ============================================
const ProjectSection = React.forwardRef(({ 
  projects = [],
  theme = 'dark'
}, ref) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  // Ajouter des couleurs d'accent et emojis aux projets
  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    accentColor: project.accentColor || ['#4ade80', '#667eea', '#f472b6', '#fbbf24', '#22d3ee', '#a78bfa'][index % 6],
    emoji: project.emoji || ['💻', '🚀', '🎨', '📊', '🛒', '📚'][index % 6]
  }));

  const filteredProjects = activeFilter === 'all' 
    ? enhancedProjects 
    : enhancedProjects.filter(p => p.category === activeFilter);

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'design', label: 'Design' }
  ];

  return (
    <motion.section
      ref={ref}
      id="projets"
      style={{
        padding: '8rem 2rem',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(102,126,234,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.5rem',
              letterSpacing: '-2px'
            }}
          >
            Projets
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              lineHeight: 1.7
            }}
          >
            Voici une sélection de projets sur lesquels j'ai travaillé, illustrant mon
            expérience des technologies web et mobiles modernes.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {filters.map(filter => (
            <FilterButton
              key={filter.key}
              label={filter.label}
              isActive={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id || index}
                project={project}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '4rem 2rem',
                color: 'rgba(255,255,255,0.5)'
              }}
            >
              <p style={{ fontSize: '1.1rem' }}>Aucun projet trouvé dans cette catégorie.</p>
            </motion.div>
          )}
        </motion.div>

        {/* View more button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'transparent',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Voir plus de projets
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12,5 19,12 12,19"/>
              </svg>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* CSS for responsive */}
      <style>{`
        @media (max-width: 768px) {
          #projets > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;