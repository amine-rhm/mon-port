import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ 
  theme, 
  toggleTheme, 
  scrollToSection, 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen,
  textColor,
  borderColor,
  primaryColor
}) => {
  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '2rem',
        right: '2rem',
        background: theme === 'dark' ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        padding: '0.8rem 2rem',
        zIndex: 1000,
        borderRadius: '50px',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${borderColor}`,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={{ fontSize: '1.2rem', fontWeight: '600', color: primaryColor }}
        >
          RH M.A.
        </motion.div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }} className="desktop-nav">
            {sections.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: textColor,
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontWeight: activeSection === item.id ? '600' : 'normal',
                  backgroundColor: activeSection === item.id ? (theme === 'dark' ? '#333' : '#f0f0f0') : 'transparent'
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: theme === 'dark' ? '#333' : '#f0f0f0',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: textColor
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
          
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none',
              border: 'none',
              color: textColor,
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              marginTop: '1rem'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1rem 0'
            }}>
              {sections.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 5 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: textColor,
                    cursor: 'pointer',
                    padding: '0.8rem',
                    textAlign: 'left',
                    borderRadius: '8px'
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;