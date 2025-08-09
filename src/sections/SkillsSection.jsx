import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiDocker,
} from 'react-icons/si';

// Tableau des compétences défini en dehors du composant
const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
];

const SkillsSection = forwardRef(({ theme, textColor, borderColor }, ref) => {
  const cardBg = theme === 'dark' ? '#1e1e1e' : '#fff';

  return (
    <motion.section
      id="competences"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: '6rem 2rem',
        background: theme === 'dark' ? '#1a1a1a' : '#f8f9fa',
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
            fontWeight: '600',
          }}
        >
          Technologies que j’utilise
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
            lineHeight: '1.6',
          }}
        >
          Voici un aperçu des technologies et outils que j’utilise régulièrement
          dans mes projets de développement.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
          }}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: cardBg,
                  padding: '2rem',
                  borderRadius: '15px',
                  width: '180px',
                  boxShadow: `0 5px 15px rgba(0,0,0,${theme === 'dark' ? 0.2 : 0.05})`,
                  border: `1px solid ${borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'transform 0.2s ease',
                }}
                aria-label={`Compétence : ${skill.name}`}
              >
                <Icon size={48} style={{ color: skill.color }} title={skill.name} />
                <span style={{ fontWeight: 600, color: textColor, fontSize: '1rem' }}>
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
});

export default SkillsSection;
