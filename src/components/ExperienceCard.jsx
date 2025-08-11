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
      <div>
        <div style={{
          color: primaryColor,
          fontWeight: '500',
          fontSize: '1.1rem',
          marginBottom: '1rem'
        }}>
          {experience.period}
        </div>

        {/* Section des icônes technologiques avec vraies icônes */}
        {experience.icons && experience.icons.length > 0 && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '0.6rem'
          }}>
            <h4 style={{
              color: textColor,
              fontSize: '0.9rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              Technologies:
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {experience.icons.map((iconItem, iconIndex) => {
                // URLs des vrais logos technologiques depuis CDN
                const getIconUrl = (name) => {
                  const iconMap = {
                    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    'pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
                    'data analysis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    'web scraping': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                    'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                    'project management': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
                    'opencv': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
                    'c language': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
                    'linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                    'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    'rest api': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    'innovation': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
                    'team work': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
                    'problem solving': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                    'competition': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                  };
                  return iconMap[name.toLowerCase()] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                };

                return (
                  <motion.div
                    key={iconIndex}
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '10px',
                      border: `1px solid ${iconItem.color}30`,
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <img 
                      src={getIconUrl(iconItem.name)}
                      alt={iconItem.name}
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // Fallback si l'image ne charge pas
                        e.target.style.display = 'none';
                      }}
                    />
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: '500',
                      color: iconItem.color
                    }}>
                      {iconItem.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
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
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.2) + (i * 0.1) }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  color: theme === 'dark' ? '#ccc' : '#555'
                }}
              >
                <span style={{
                  color: primaryColor,
                  fontWeight: 'bold',
                  marginTop: '0.3rem'
                }}>•</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;