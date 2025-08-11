import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Overlay blur derrière la navbar quand centrée */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              zIndex: 999,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {/* Navbar principale */}
      <motion.nav
        key="main-nav"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          left: isScrolled ? '50%' : '2rem',
          right: isScrolled ? 'auto' : '2rem',
          transform: isScrolled ? 'translateX(-50%)' : 'none',
          maxWidth: isScrolled ? '800px' : 'calc(100vw - 4rem)',
          padding: isScrolled ? '0.5rem 1.5rem' : '0.6rem 2rem',
          borderRadius: isScrolled ? '25px' : '50px'
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          all: { duration: 0.4, ease: "easeInOut" }  // Plus rapide (0.6 → 0.4)
        }}
        style={{
          position: 'fixed',
          top: '1rem',
          background: isScrolled 
            ? (theme === 'dark' ? 'rgba(10, 10, 10, 0.7)' : 'rgba(255, 255, 255, 0.7)')
            : (theme === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)'),
          zIndex: 1000,
          backdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(20px)',
          border: `1px solid ${borderColor}`,
          boxShadow: isScrolled 
            ? '0 8px 25px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)' 
            : '0 2px 10px rgba(0,0,0,0.05)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            animate={{
              fontSize: isScrolled ? '1rem' : '1.2rem'
            }}
            transition={{ duration: 0.3 }}
            style={{ 
              fontWeight: '600', 
              color: primaryColor 
            }}
          >
          &lt;/&gt;
          </motion.div>
          
          <div style={{ display: 'flex', gap: isScrolled ? '1rem' : '1.5rem', alignItems: 'center' }}>
            {!isMobile && (
              <motion.div 
                style={{ display: 'flex', gap: isScrolled ? '0.5rem' : '1.5rem' }} 
                animate={{
                  gap: isScrolled ? '0.5rem' : '1.5rem'
                }}
                transition={{ duration: 0.3 }}
              >
                {sections.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      padding: isScrolled ? '0.4rem 0.7rem' : '0.5rem 1rem',
                      fontSize: isScrolled ? '0.85rem' : '1rem'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: textColor,
                      cursor: 'pointer',
                      borderRadius: '20px',
                      fontWeight: activeSection === item.id ? '600' : 'normal',
                      backgroundColor: activeSection === item.id ? (theme === 'dark' ? '#333' : '#f0f0f0') : 'transparent'
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {isMobile && (
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
              >
                {isMenuOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
              </motion.button>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              key="mobile-menu"
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
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 5 }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: textColor,
                      cursor: 'pointer',
                      padding: '0.4rem',
                      textAlign: 'left',
                      borderRadius: '8px',
                      fontSize: isScrolled ? '0.9rem' : '1rem'
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

      {/* Deuxième navbar avec thème et traduction */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            key="second-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              position: 'fixed',
              top: '4rem',
              left: '22%',
              transform: 'translateX(-50%)',
              width: '55%',
              maxWidth: '900px',
              background: theme === 'dark' ? 'rgba(10, 10, 10, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              border: `1px solid ${borderColor}`,
              borderRadius: '25px',
              padding: '0.3rem 1.5rem',
              zIndex: 1000,
              // SHADOW CORRIGÉ - différentes options :
              
              // Option 1: Shadow très subtile
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              
              // Option 2: Shadow plus douce (décommentez celle que vous préférez)
              // boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              
              // Option 3: Shadow similaire à la navbar principale
              // boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              
              // Option 4: Shadow plus prononcée
              // boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              
              // Option 5: Pas de shadow du tout
              // boxShadow: 'none',
              
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxSizing: 'border-box'
            }}
          >
            {/* Bouton thème à gauche */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: theme === 'dark' ? '#333' : '#f0f0f0',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: textColor
              }}
            >
              <span style={{ fontSize: '16px' }}>
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
            </motion.button>

            {/* Bouton traduction à droite */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: theme === 'dark' ? '#333' : '#f0f0f0',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: textColor
              }}
            >
              <span style={{ fontSize: '16px' }}>
                🌍
              </span>
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;