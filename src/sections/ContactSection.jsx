import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = forwardRef(function ContactSection(props, ref) {
  const { theme = "dark", textColor = "#fff", primaryColor } = props;
  const [hoveredCard, setHoveredCard] = useState(null);
  const { t } = useTranslation();

  // Détection du mode
  const isDark = theme === 'dark';

  // Couleurs dynamiques
  const colors = {
    bg: isDark ? '#050507' : '#f8f9fa',
    text: isDark ? '#fff' : '#1a1a1a',
    textMuted: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    textSubtle: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    textLight: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
    cardBg: isDark ? '#0a0a0f' : '#ffffff',
    border: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    borderSubtle: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
    decorInactive: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    buttonBg: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    shadowBase: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)',
    shadowHover: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.12)',
    glowOpacity: isDark ? '0.08' : '0.12',
  };

  const contactLinks = [
    {
      icon: <Github size={28} />,
      title: t('contact.github.title'),
      handle: t('contact.github.handle'),
      description: t('contact.github.description'),
      url: "https://github.com/amine-rhm",
      color: isDark ? "#fff" : "#333"
    },
    {
      icon: <Linkedin size={28} />,
      title: t('contact.linkedin.title'),
      handle: t('contact.linkedin.handle'),
      description: t('contact.linkedin.description'),
      url: "https://www.linkedin.com/in/mohamed-amine-rahmouni-5a08292a5/",
      color: "#0A66C2"
    },
    {
      icon: <Mail size={28} />,
      title: t('contact.email.title'),
      handle: t('contact.email.handle'),
      description: t('contact.email.description'),
      url: "mailto:rahmouni.mohamedamine1@gmail.com",
      color: "#EA4335"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{
        background: colors.bg,
        color: colors.text,
        padding: "60px 40px 80px 40px",
        minHeight: "auto",
        position: "relative",
        overflow: "hidden"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        bottom: "0",
        right: "10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(99, 102, 241, " + colors.glowOpacity + ") 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: "50px" }}
        >
          <p style={{
            fontSize: "0.85rem",
            color: colors.textSubtle,
            marginBottom: "0.75rem",
            letterSpacing: "3px",
            textTransform: "uppercase"
          }}>
            {t('contact.subtitle')}
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            marginBottom: "1rem",
            letterSpacing: "-1px",
            color: colors.text
          }}>
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "start"
        }}>
          
          {/* Texte à gauche */}
          <motion.div
            className="contact-left"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: colors.text
            }}>
              {t('contact.findMe')}
            </h3>
            
            <p style={{
              fontSize: "1rem",
              color: colors.textMuted,
              lineHeight: "1.8",
              marginBottom: "15px"
            }}>
              {t('contact.description1')}
            </p>
            
            <p style={{
              fontSize: "1rem",
              color: colors.textMuted,
              lineHeight: "1.8"
            }}>
              {t('contact.description2')}
            </p>

            {/* Petit élément décoratif */}
            <div className="contact-decor" style={{
              marginTop: "40px",
              display: "flex",
              gap: "8px"
            }}>
              {[0, 1, 2].map(function(i) {
                return (
                  <div
                    key={i}
                    style={{
                      width: "40px",
                      height: "4px",
                      borderRadius: "2px",
                      background: i === 0 ? "#6366f1" : colors.decorInactive
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Cards à droite */}
          <div className="contact-cards" style={{ 
            display: "flex", 
            flexDirection: "column",
            gap: "16px"
          }}>
            {contactLinks.map(function(link, index) {
              const isHovered = hoveredCard === index;
              
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={function() { setHoveredCard(index); }}
                  onMouseLeave={function() { setHoveredCard(null); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "24px 28px",
                    background: colors.cardBg,
                    borderRadius: "16px",
                    textDecoration: "none",
                    color: colors.text,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                    boxShadow: isHovered 
                      ? "0 20px 40px " + colors.shadowHover + ", 0 0 30px " + link.color + "10"
                      : "0 5px 20px " + colors.shadowBase
                  }}
                >
                  {/* Bordure dégradée */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    padding: "4px",
                    background: isHovered 
                      ? "linear-gradient(135deg, " + link.color + "50, transparent 50%, " + link.color + "30)"
                      : "linear-gradient(135deg, " + colors.border + ", transparent 50%, " + colors.borderSubtle + ")",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    transition: "all 0.4s ease"
                  }} />

                  {/* Glow effect */}
                  {isHovered && (
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "-20%",
                      transform: "translateY(-50%)",
                      width: "100px",
                      height: "100px",
                      background: "radial-gradient(circle, " + link.color + (isDark ? "20" : "30") + " 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />
                  )}

                  {/* Icon */}
                  <div className="contact-icon" style={{
                    width: "52px",
                    height: "52px",
                    minWidth: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: link.color + (isDark ? "15" : "18"),
                    border: "1px solid " + link.color + "25",
                    color: link.color,
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    boxShadow: isHovered ? "0 0 20px " + link.color + "30" : "none"
                  }}>
                    {link.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="contact-info" style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ 
                      fontWeight: "700", 
                      marginBottom: "4px",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      textShadow: isHovered ? "0 0 20px " + link.color + "40" : "none",
                      color: colors.text
                    }}>
                      {link.title}
                    </h4>
                    <p className="contact-handle" style={{ 
                      color: colors.textLight, 
                      fontSize: "0.9rem",
                      marginBottom: "2px",
                      wordBreak: "break-all"
                    }}>
                      {link.handle}
                    </p>
                    <p className="contact-desc" style={{ 
                      color: colors.textSubtle, 
                      fontSize: "0.8rem" 
                    }}>
                      {link.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="contact-arrow" style={{
                    width: "36px",
                    height: "36px",
                    minWidth: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    background: isHovered ? link.color + "20" : colors.buttonBg,
                    transition: "all 0.3s ease",
                    transform: isHovered ? "translate(3px, -3px)" : "translate(0, 0)"
                  }}>
                    <ArrowUpRight 
                      size={18} 
                      style={{ 
                        color: isHovered ? link.color : colors.textSubtle,
                        transition: "color 0.3s ease"
                      }} 
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 968px) {
          #contact {
            padding: 60px 1.5rem 80px 1.5rem !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-left {
            text-align: center;
          }
          .contact-decor {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          #contact {
            padding: 50px 1rem 60px 1rem !important;
          }
          .contact-card {
            padding: 16px 16px !important;
            gap: 12px !important;
            flex-wrap: wrap;
          }
          .contact-icon {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
          }
          .contact-icon svg {
            width: 22px !important;
            height: 22px !important;
          }
          .contact-info {
            flex: 1 1 calc(100% - 100px);
          }
          .contact-info h4 {
            font-size: 1rem !important;
          }
          .contact-handle {
            font-size: 0.8rem !important;
          }
          .contact-desc {
            font-size: 0.75rem !important;
          }
          .contact-arrow {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
          }
          .contact-left h3 {
            font-size: 1.3rem !important;
          }
          .contact-left p {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 400px) {
          .contact-card {
            padding: 14px 12px !important;
          }
          .contact-handle {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </motion.section>
  );
});

export default ContactSection;