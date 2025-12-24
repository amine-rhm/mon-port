import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ============================================
// Logo Code
// ============================================
const CodeLogo = ({ color = '#fff' }) => (
  <motion.svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M8 18L2 12L8 6"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6L22 12L16 18"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 4L10 20"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </motion.svg>
);

// ============================================
// Toggle Dark/Light
// ============================================
const ThemeToggle = ({ theme, toggleTheme, isDark }) => (
  <motion.button
    onClick={toggleTheme}
    whileHover={{ scale: 1.1, rotate: 15 }}
    whileTap={{ scale: 0.9 }}
    style={{
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      border: 'none',
      background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <motion.div
      initial={false}
      animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : -90, opacity: isDark ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'absolute' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#a78bfa">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </motion.div>
    <motion.div
      initial={false}
      animate={{ scale: isDark ? 0 : 1, rotate: isDark ? 90 : 0, opacity: isDark ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'absolute' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    </motion.div>
  </motion.button>
);

// ============================================
// Toggle Langue
// ============================================
const LanguageToggle = ({ isDark }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'fr' ? 'Fr' : 'En';

  const toggleLang = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        height: '42px',
        padding: '0 14px',
        borderRadius: '50px',
        border: 'none',
        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: isDark ? '#fff' : '#000',
        fontSize: '0.85rem',
        fontWeight: 500
      }}
    >
      <Globe size={16} />
      {currentLang}
    </motion.button>
  );
};

// ============================================
// COMPOSANT PRINCIPAL
// ============================================
const Header = ({ 
  theme,
  toggleTheme,
  activeSection, 
  scrollToSection 
}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const isDark = theme === 'dark';
  const textColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
  const textColorHover = isDark ? '#fff' : '#000';

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'apropos', label: t('nav.about') },
    { id: 'projets', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ============================================ */}
      {/* NAVBAR INITIALE - Transparente */}
      {/* ============================================ */}
      <AnimatePresence>
        {!showNavbar && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              padding: '1.5rem 3rem'
            }}
          >
            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              
              <div onClick={() => handleNavClick('accueil')}>
                <CodeLogo color={textColorHover} />
              </div>

              <nav className="desktop-nav" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: textColor,
                      fontSize: '0.95rem',
                      fontWeight: 400,
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = textColorHover}
                    onMouseLeave={(e) => e.currentTarget.style.color = textColor}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="toggles-container" style={{ display: 'flex', gap: '0.5rem' }}>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
                <LanguageToggle isDark={isDark} />
              </div>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="mobile-menu-btn"
                style={{
                  display: 'none',
                  background: 'transparent',
                  border: 'none',
                  color: textColorHover,
                  cursor: 'pointer'
                }}
              >
                <Menu size={24} />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ============================================ */}
      {/* NAVBAR SCROLLED - PLUS LARGE */}
      {/* ============================================ */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: '2.5rem',
              left: 0,
              right: 0,
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div 
              className="scrolled-nav-container"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5rem',
                background: isDark 
                  ? 'rgba(25, 25, 25, 0.53)' 
                  : 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderRadius: '50px',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                padding: '0.5rem 3rem',
                boxShadow: isDark 
                  ? '0 4px 24px rgba(0, 0, 0, 0.25)' 
                  : '0 4px 24px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div 
                onClick={() => handleNavClick('accueil')}
                style={{
                  paddingRight: '1.5rem',
                  borderRight: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <CodeLogo color={textColorHover} />
              </div>

              <nav className="desktop-nav" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem'
              }}>
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: activeSection === item.id ? textColorHover : textColor,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = textColorHover}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) e.currentTarget.style.color = textColor;
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div style={{ display: 'flex', gap: '0.6rem', marginLeft: '0.5rem' }}>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
                <LanguageToggle isDark={isDark} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================ */}
      {/* Menu Mobile */}
      {/* ============================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: isDark ? 'rgba(10, 10, 10, 0.98)' : 'rgba(255, 255, 255, 0.98)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'transparent',
                border: 'none',
                color: textColorHover,
                cursor: 'pointer'
              }}
            >
              <X size={28} />
            </motion.button>

            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
              <LanguageToggle isDark={isDark} />
            </div>

            {[{ id: 'accueil', label: t('nav.home') }, ...navItems].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: activeSection === item.id ? textColorHover : textColor,
                  fontSize: '2rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .toggles-container { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .scrolled-nav-container { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;