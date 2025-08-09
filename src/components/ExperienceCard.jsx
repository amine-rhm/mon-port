import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index, theme, textColor, primaryColor, secondaryColor, borderColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      style={{
        background: theme === 'dark' ? '#1e1e1e' : '#fff',
        padding: '2.5rem',
        borderRadius: '15px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2rem',
        alignItems: 'flex-start',
        borderLeft: `4px solid ${primaryColor}`,
        border: `1px solid ${borderColor}`
      }}
    >
      <div style={{
        color: primaryColor,
        fontWeight: '500',
        fontSize: '1.1rem'
      }}>
        {experience.period}
      </div>
      <div>
        <h3 style={{ 
          marginBottom: '0.5rem', 
          color: textColor, 
          fontSize: '1.4rem',
          fontWeight: '600'
        }}>
          {experience.title}
        </h3>
        <p style={{ 
          color: secondaryColor, 
          marginBottom: '1rem', 
          fontSize: '1.1rem'
        }}>
          {experience.company}
        </p>
        <p style={{ 
          color: theme === 'dark' ? '#ccc' : '#555', 
          lineHeight: '1.7',
          fontSize: '1.05rem',
          marginBottom: '1.5rem'
        }}>
          {experience.description}
        </p>
        <div>
          <h4 style={{ 
            color: primaryColor, 
            marginBottom: '0.8rem',
            fontWeight: '500'
          }}>
            Réalisations clés:
          </h4>
          <ul style={{ 
            listStyleType: 'none', 
            paddingLeft: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {experience.achievements.map((achievement, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                color: theme === 'dark' ? '#ccc' : '#555'
              }}>
                <span style={{ 
                  color: primaryColor, 
                  fontWeight: 'bold',
                  marginTop: '0.3rem'
                }}>•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;