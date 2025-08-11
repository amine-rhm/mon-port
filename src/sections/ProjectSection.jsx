import React, { useState, useMemo, forwardRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectSection = forwardRef(({
  projects = [],
  theme,
  textColor,
  borderColor,
  cardBg,
  primaryColor,
  secondaryColor
}, ref) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // CORRECTION: Fonction pour nettoyer les projets en incluant TOUTES les propriétés nécessaires
  const cleanProjects = useMemo(() => {
    if (!Array.isArray(projects)) return [];
    return projects.map((project, index) => {
      const { jsx, ...rest } = project || {};
      return {
        title: rest.title || `Projet ${index + 1}`,
        description: rest.description || 'Description non disponible',
        technologies: rest.technologies || [],
        category: rest.category || 'web',
        image: rest.image || '/api/placeholder/300/200',
        github: rest.github || '',
        figma: rest.figma || '', // CORRECTION: Ajouter figma !
        demo: rest.demo || '',
        behance: rest.behance || '',
        gradientColors: rest.gradientColors || ['#000', '#333'],
        status: rest.status || '', // CORRECTION: Ajouter status
        features: rest.features || [], // CORRECTION: Ajouter features
        client: rest.client || '', // CORRECTION: Ajouter client
        speciality: rest.speciality || '', // CORRECTION: Ajouter speciality
        id: rest.id || index,
      };
    });
  }, [projects]);

  const filteredProjects = useMemo(() => 
    cleanProjects.filter(p => activeFilter === 'all' || p.category === activeFilter),
  [cleanProjects, activeFilter]);

  if (!Array.isArray(projects)) {
    return (
      <motion.section
        ref={ref}
        id="projets"
        style={{
          padding: '6rem 2rem',
          background: theme === 'dark' ? '#121212' : '#fafafa',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: textColor }}>Aucun projet disponible</h2>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      ref={ref}
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
        
        {/* Boutons de filtre */}
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
          {['all', 'web', 'mobile', 'design'].map((category) => (
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
        
        {/* Liste des projets */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                theme={theme}
                textColor={textColor}
                borderColor={borderColor}
                cardBg={cardBg}
                primaryColor={primaryColor}
              />
            ))
          ) : (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              color: textColor,
              padding: '2rem'
            }}>
              Aucun projet trouvé pour cette catégorie.
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;