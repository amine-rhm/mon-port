import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Figma, Eye, Sparkles } from 'lucide-react';

// Composant SVG pour les projets de design
const DesignIcon = (props) => (
  <svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{"\n\t.linesandangles_een{fill:#ffffff;}\n"}</style>
    <path
      className="linesandangles_een"
      d="M20,20.854c0-1.136,0.642-2.175,1.658-2.683L24,17L17,3h-2L8,17l2.342,1.171 C11.358,18.679,12,19.718,12,20.854V21h-2v8h12v-8h-2V20.854z M11.236,16.382l-0.553-0.276L15,7.472V15h2V7.472l4.317,8.633 l-0.553,0.276C19.059,17.234,18,18.948,18,20.854V21h-4v-0.146C14,18.948,12.941,17.234,11.236,16.382z M20,27h-8v-4h8V27z"
    />
  </svg>
);

const ProjectCard = ({
  project = {},
  theme = 'dark',
  textColor = '#fff',
  borderColor = '#333',
  cardBg = '#1a1a2e',
  primaryColor = '#6366f1'
}) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const {
    title = 'Projet sans titre',
    description = 'Aucune description disponible.',
    technologies = [],
    github = '',
    figma = '',
    status = '',
    features = [],
    client = '',
    speciality = ''
  } = project;

  const handleGithubClick = () => {
    if (github) {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFigmaClick = () => {
    if (figma) {
      window.open(figma, '_blank', 'noopener,noreferrer');
    }
  };

  // Vérifier si c'est le projet Vizzo ou Soutenplan pour un style spécial
  const isVizzo = title === 'Vizzo';
  const isSoutenplan = title === 'Soutenplan';
  
  // CORRECTION: Logique améliorée pour détecter les projets de design
  const isDesignProject = technologies.some(tech => {
    const techLower = tech.toLowerCase();
    return techLower === 'figma' || 
           techLower === 'ux/ui design' ||
           techLower === 'ux design' ||
           techLower === 'ui design' ||
           techLower === 'design système' ||
           techLower === 'interface utilisateur' ||
           techLower.includes('design');
  }) || isSoutenplan || isVizzo || (figma && figma.trim() !== '');

  // CORRECTION: Vérifier si on a un lien Figma valide
  const hasFigmaLink = figma && figma.trim() !== '' && figma !== '#';
  
  // CORRECTION: Vérifier si on a un lien GitHub valide
  const hasGithubLink = github && github.trim() !== '' && github !== '#';

  // Debug complet des données reçues
  // console.log(`=== DEBUG PROJET ${title} ===`);
  // console.log('Projet complet:', project);
  // console.log('figma value:', figma);
  // console.log('figma type:', typeof figma);
  // console.log('figma length:', figma?.length);
  // console.log('hasFigmaLink:', hasFigmaLink);
  // console.log('github value:', github);
  // console.log('hasGithubLink:', hasGithubLink);
  // console.log('isDesignProject:', isDesignProject);
  // console.log('==========================');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: '#000000',
        borderRadius: '15px',
        border: '1px solid #222222',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Header */}
      <div style={{
        padding: '2rem 2rem 1.5rem',
        background: '#111111',
        borderBottom: '1px solid #222222'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <div style={{
            background: '#222222',
            padding: '0.8rem',
            borderRadius: '10px'
          }}>
            {isDesignProject ? (
              <DesignIcon />
            ) : (
              <Code size={24} color="#fff" />
            )}
          </div>

          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {/* CORRECTION: Bouton Figma - Conditionnel sur hasFigmaLink */}
            {hasFigmaLink && (
              <button
                onClick={handleFigmaClick}
                onMouseEnter={() => setHoveredButton('figma')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  background: hoveredButton === 'figma' ? '#3A86FF' : '#222222',
                  border: 'none',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Figma size={20} color="#fff" />
                <span style={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  Voir le prototype
                </span>
              </button>
            )}
            
            {/* CORRECTION: Bouton GitHub - Conditionnel sur hasGithubLink */}
            {hasGithubLink && (
              <button
                onClick={handleGithubClick}
                onMouseEnter={() => setHoveredButton('github')}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  background: hoveredButton === 'github' ? '#3A86FF' : '#222222',
                  border: 'none',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Github size={20} color="#fff" />
                <span style={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  Code source
                </span>
              </button>
            )}
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          flexWrap: 'wrap'
        }}>
          <h3 style={{
            color: '#fff',
            fontSize: '1.4rem',
            fontWeight: '600',
            margin: 0
          }}>
            {title}
          </h3>
          
          {status && (
            <span style={{
              background: '#333333',
              color: '#fff',
              padding: '0.2rem 0.6rem',
              borderRadius: '12px',
              fontSize: '0.7rem',
              fontWeight: '500'
            }}>
              {status}
            </span>
          )}
        </div>

        {/* Informations client/spécialité */}
        {(client || speciality) && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {client && (
              <span style={{
                background: 'rgba(102, 102, 102, 0.2)',
                color: '#cccccc',
                padding: '0.2rem 0.6rem',
                borderRadius: '8px',
                fontSize: '0.65rem',
                fontWeight: '500'
              }}>
                {client}
              </span>
            )}
            {speciality && (
              <span style={{
                background: 'rgba(102, 102, 102, 0.2)',
                color: '#cccccc',
                padding: '0.2rem 0.6rem',
                borderRadius: '8px',
                fontSize: '0.65rem',
                fontWeight: '500'
              }}>
                {speciality}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Contenu */}
      <div style={{
        padding: '1.5rem 2rem 2rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        background: '#000000'
      }}>
        <p style={{
          color: '#cccccc',
          lineHeight: '1.6',
          fontSize: '0.95rem',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>

        {/* Fonctionnalités */}
        {features.length > 0 && (
          <div style={{
            marginBottom: '1.5rem'
          }}>
            <h4 style={{
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '0.8rem'
            }}>
              Fonctionnalités clés :
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {features.slice(0, isSoutenplan ? 4 : 3).map((feature, index) => (
                <li key={`feature-${title}-${index}-${feature.substring(0, 10)}`} style={{
                  color: '#cccccc',
                  fontSize: '0.85rem',
                  marginBottom: '0.4rem',
                  paddingLeft: '1rem',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.2rem',
                    width: '4px',
                    height: '4px',
                    background: '#666',
                    borderRadius: '50%'
                  }}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {technologies.length > 0 ? (
            technologies.map((tech, index) => (
              <span
                key={`tech-${title}-${tech}-${index}`}
                style={{
                  background: '#222222',
                  color: '#fff',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                {tech}
              </span>
            ))
          ) : (
            <span style={{
              color: '#666666',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              Technologies non spécifiées
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;