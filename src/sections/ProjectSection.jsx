import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// ============================================
// COMPOSANT: Card de projet avec effet 3D
// ============================================
const ProjectCard = ({ project, scrollProgress }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minWidth: '400px',
        height: '550px',
        display: 'flex',
        flexDirection: 'column',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <motion.div
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          height: '350px',
          cursor: 'pointer',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
        }}
        whileHover={{ 
          borderColor: project.accentColor || 'rgba(102,126,234,0.5)',
          boxShadow: `0 20px 60px ${project.accentColor || 'rgba(102,126,234,0.3)'}80`
        }}
        transition={{ duration: 0.3 }}
      >
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
            animate={{ scale: isHovered ? 1.1 : 1 }}
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
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
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
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '55px',
                height: '55px',
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
              <Github size={24} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                background: project.accentColor || '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textDecoration: 'none',
                boxShadow: `0 5px 20px ${project.accentColor || '#667eea'}60`
              }}
            >
              <ExternalLink size={24} />
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div style={{ padding: '1.5rem 0.5rem', flex: 1 }}>
        <h3 style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.75rem',
          letterSpacing: '-0.5px'
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6,
          marginBottom: '1rem'
        }}>
          {project.description.length > 130 
            ? project.description.substring(0, 130) + '...' 
            : project.description
          }
        </p>

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 500,
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// COMPOSANT PRINCIPAL: ProjectSection avec scroll 3D
// ============================================
const ProjectSection = React.forwardRef(({ 
  projects = [],
  theme = 'dark'
}, ref) => {
  const titleRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    accentColor: project.accentColor || ['#4ade80', '#667eea', '#f472b6', '#fbbf24', '#22d3ee', '#a78bfa'][index % 6],
    emoji: project.emoji || ['💻', '🚀', '🎨', '📊', '🛒', '📚'][index % 6]
  }));

  return (
    <motion.section
      ref={ref}
      id="projets"
      style={{
        padding: '8rem 0 8rem 0',
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 0 60px', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: '4rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '0.9rem',
              opacity: 0.6,
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#fff'
            }}
          >
            Mon travail
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
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
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              lineHeight: 1.7
            }}
          >
            Voici une sélection de projets sur lesquels j'ai travaillé, illustrant mon
            expérience des technologies web et mobiles modernes.
          </motion.p>
        </div>
      </div>

      {/* Scroll horizontal container avec effet 3D */}
      <div 
        ref={scrollContainerRef}
        style={{ 
          position: 'relative',
          width: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          perspective: '1500px',
          perspectiveOrigin: 'center center',
          paddingLeft: '60px',
          paddingRight: '60px',
          paddingBottom: '20px'
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '40px',
            width: 'fit-content',
            transformStyle: 'preserve-3d'
          }}
        >
          {enhancedProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <ProjectCard 
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays pour effet de fade */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '150px',
        height: '100%',
        background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '100%',
        background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2
      }} />

      {/* Custom scrollbar styling */}
      <style>{`
        #projets div[style*="overflowX"]::-webkit-scrollbar {
          height: 8px;
        }
        #projets div[style*="overflowX"]::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        #projets div[style*="overflowX"]::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
        }
        #projets div[style*="overflowX"]::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.3);
        }
      `}</style>
    </motion.section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;