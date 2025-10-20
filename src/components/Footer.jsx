import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = ({ theme, textColor, borderColor, primaryColor }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: theme === 'dark' ? '#1a1a1a' : '#fff',
        color: theme === 'dark' ? '#aaa' : '#666',
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: `1px solid ${borderColor}`
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{ 
          fontSize: '1.1rem', 
          fontWeight: '300',
          color: textColor
        }}>
          RAHMOUNI Mohamed Amine
        </div>
        <p style={{ maxWidth: '500px', lineHeight: '1.5' }}>
          Développeur web passionné par la création d'expériences numériques modernes et performantes.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {[
            { icon: <Github size={20} />, url: 'https://github.com' },
            { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
            { icon: <Mail size={20} />, url: 'mailto:rahmouni.amine@email.com' }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: theme === 'dark' ? '#333' : '#f5f5f5',
                color: textColor,
                textDecoration: 'none'
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div style={{ 
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: theme === 'dark' ? '#777' : '#888'
        }}>
          &copy; {new Date().getFullYear()} Rahmouni Mohamed Amine. Tous droits réservés.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;