import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectSection = ({ 
  projects, 
  theme,
  textColor,
  borderColor,
  cardBg,
  primaryColor,
  secondaryColor
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => 
    projects.filter(p => activeFilter === 'all' || p.category === activeFilter),
  [projects, activeFilter]);

  return (
    <motion.section
      id="projets"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: '6rem 2rem',
        background: theme === 'dark' ? '#121212' : '#fafafa'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: textColor,
            fontWeight: '600'
          }}
        >
          Mes Projets
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            color: theme === 'dark' ? '#ccc' : '#666',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}
        >
          Découvrez une sélection de mes projets récents, allant du développement web au design d'interface
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {['all', 'web', 'mobile', 'design'].map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: activeFilter === category ? primaryColor : 'transparent',
                color: activeFilter === category ? '#fff' : textColor,
                border: `1px solid ${borderColor}`,
                padding: '0.6rem 1.5rem',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {category === 'all' ? 'Tous' : 
               category === 'web' ? 'Web' : 
               category === 'mobile' ? 'Mobile' : 'Design'}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.title}-${index}`}
              project={project}
              theme={theme}
              textColor={textColor}
              borderColor={borderColor}
              cardBg={cardBg}
              primaryColor={primaryColor}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
