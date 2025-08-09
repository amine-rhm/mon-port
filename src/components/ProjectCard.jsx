import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  project, 
  theme,
  textColor,
  borderColor,
  cardBg,
  primaryColor
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      style={{
        background: cardBg,
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{
        height: '220px',
        background: `linear-gradient(45deg, ${project.gradientColors[0]}, ${project.gradientColors[1]})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: '500',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0,0,0,0.2)',
          color: '#fff',
          padding: '0.3rem 0.8rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          backdropFilter: 'blur(5px)'
        }}>
          {project.category === 'web' ? 'Web' : 
           project.category === 'mobile' ? 'Mobile' : 'Design'}
        </div>
        {project.title}
      </div>
      <div style={{ padding: '1.8rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          marginBottom: '1rem', 
          color: textColor, 
          fontSize: '1.3rem',
          fontWeight: '600'
        }}>
          {project.title}
        </h3>
        <p style={{ 
          color: theme === 'dark' ? '#ccc' : '#555', 
          marginBottom: '1.5rem', 
          lineHeight: '1.6',
          fontSize: '1rem',
          flexGrow: 1
        }}>
          {project.description}
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '1.5rem'
        }}>
          {project.technologies.map((tech) => (
            <motion.span 
              key={tech}
              whileHover={{ scale: 1.05 }}
              style={{
                background: theme === 'dark' ? '#333' : '#f0f8ff',
                color: primaryColor,
                padding: '0.4rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'none',
              color: primaryColor,
              border: `1px solid ${primaryColor}`,
              padding: '0.6rem 1.2rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500'
            }}
          >
            <Github size={16} />
            Code
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: primaryColor,
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500'
            }}
          >
            <ExternalLink size={16} />
            Voir le projet
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;