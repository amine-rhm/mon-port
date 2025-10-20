import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index, theme, textColor, primaryColor, secondaryColor, borderColor }) => {
  // URLs des vrais logos depuis CDN
  const getIconUrl = (name) => {
    const iconMap = {
      'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'r': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      'stata': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', // Pas d'icône STATA, on met Python
      'vba': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg',
      'database': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'html5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'agile': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    };
    
    return iconMap[name.toLowerCase()] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

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
      <div>
        <div style={{
          color: primaryColor,
          fontWeight: '500',
          fontSize: '1.1rem',
          marginBottom: '1rem'
        }}>
          {experience.period}
        </div>

        {/* Section des icônes technologiques */}
        {experience.icons && experience.icons.length > 0 && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '0.6rem'
          }}>
            <h4 style={{
              color: textColor,
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Technologies
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {experience.icons.map((iconItem, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                    background: theme === 'dark' 
                      ? `linear-gradient(135deg, ${iconItem.color}15, ${iconItem.color}05)`
                      : `linear-gradient(135deg, ${iconItem.color}10, ${iconItem.color}05)`,
                    padding: '0.6rem 0.9rem',
                    borderRadius: '10px',
                    border: `1px solid ${iconItem.color}40`,
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src={getIconUrl(iconItem.name)}
                    alt={iconItem.name}
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      objectFit: 'contain',
                      filter: theme === 'dark' ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                    onError={(e) => {
                      // Si l'image ne charge pas, on affiche un point coloré
                      e.target.style.display = 'none';
                      const dot = document.createElement('div');
                      dot.style.width = '10px';
                      dot.style.height = '10px';
                      dot.style.borderRadius = '50%';
                      dot.style.background = iconItem.color;
                      e.target.parentElement.insertBefore(dot, e.target);
                    }}
                  />
                  <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600',
                    color: iconItem.color,
                    textShadow: `0 0 20px ${iconItem.color}40`
                  }}>
                    {iconItem.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 style={{
          marginBottom: '0.5rem',
          color: textColor,
          fontSize: '1.5rem',
          fontWeight: '700',
          lineHeight: '1.3'
        }}>
          {experience.title}
        </h3>
        <p style={{
          color: secondaryColor,
          marginBottom: '1rem',
          fontSize: '1.1rem',
          fontWeight: '500'
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
            fontWeight: '600',
            fontSize: '1.1rem'
          }}>
            Réalisations clés
          </h4>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem'
          }}>
            {experience.achievements.map((achievement, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.2) + (i * 0.1) }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.7rem',
                  color: theme === 'dark' ? '#ccc' : '#555',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                <span style={{
                  color: primaryColor,
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  lineHeight: '1.4'
                }}>
                  •
                </span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* CSS responsive */}
      <style jsx>{`
        @media (max-width: 900px) {
          div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ExperienceCard;