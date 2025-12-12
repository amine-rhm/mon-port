import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experiences';

const ExperienceSection = forwardRef(({ theme, textColor, primaryColor, secondaryColor, borderColor }, ref) => {
  return (
    <motion.section
      id="experiences"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: '6rem 2rem',
        background: '#0a0a0a'
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
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            marginBottom: '3rem',
            color: textColor,
             zIndex: 2,
            fontWeight: '600'
          }}
        >
          Expériences Professionnelles
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              experience={exp}
              index={index}
              theme={theme}
              textColor={textColor}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              borderColor={borderColor}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
});

export default ExperienceSection;