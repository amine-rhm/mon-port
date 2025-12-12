import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = forwardRef(function ContactSection(props, ref) {
  const { theme, textColor = "#fff", primaryColor } = props;
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactLinks = [
    {
      icon: <Github size={28} />,
      title: "GitHub",
      handle: "@amine-rhm",
      description: "Découvrez mes projets et mon code",
      url: "https://github.com/amine-rhm",
      color: "#fff"
    },
    {
      icon: <Linkedin size={28} />,
      title: "LinkedIn",
      handle: "Mohamed Amine Rahmouni",
      description: "Contactez-moi sur le plan professionnel",
      url: "https://www.linkedin.com/in/mohamed-amine-rahmouni-5a08292a5/",
      color: "#0A66C2"
    },
    {
      icon: <Mail size={28} />,
      title: "E-mail",
      handle: "rahmouni.mohamedamine1@gmail.com",
      description: "Envoyez-moi un message",
      url: "mailto:rahmouni.mohamedamine1@gmail.com",
      color: "#EA4335"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{
        background: "#050507",
        color: "#fff",
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
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
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
            color: "rgba(255,255,255,0.4)",
            marginBottom: "0.75rem",
            letterSpacing: "3px",
            textTransform: "uppercase"
          }}>
            Parlons ensemble
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            marginBottom: "1rem",
            letterSpacing: "-1px"
          }}>
            Contact
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "60px",
          alignItems: "start"
        }}>
          
          {/* Texte à gauche */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#fff"
            }}>
              Vous pouvez me trouver sur...
            </h3>
            
            <p style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.8",
              marginBottom: "15px"
            }}>
              Vous avez une idée, un projet, ou simplement quelque chose de sympa à construire ? Je suis tout ouïe.
            </p>
            
            <p style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: "1.8"
            }}>
              Je suis toujours ouvert aux conversations intéressantes, aux collaborations et aux échanges avec d'autres développeurs.
            </p>

            {/* Petit élément décoratif */}
            <div style={{
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
                      background: i === 0 ? "#6366f1" : "rgba(255,255,255,0.1)"
                    }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Cards à droite */}
          <div style={{ 
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
                    background: "#0a0a0f",
                    borderRadius: "16px",
                    textDecoration: "none",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                    boxShadow: isHovered 
                      ? "0 20px 40px rgba(0,0,0,0.3), 0 0 30px " + link.color + "10"
                      : "0 5px 20px rgba(0,0,0,0.2)"
                  }}
                >
                  {/* Bordure dégradée */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    padding: "1px",
                    background: isHovered 
                      ? "linear-gradient(135deg, " + link.color + "50, transparent 50%, " + link.color + "30)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%, rgba(255,255,255,0.04))",
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
                      background: "radial-gradient(circle, " + link.color + "20 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />
                  )}

                  {/* Icon */}
                  <div style={{
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: link.color + "15",
                    border: "1px solid " + link.color + "25",
                    color: link.color,
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    boxShadow: isHovered ? "0 0 20px " + link.color + "30" : "none"
                  }}>
                    {link.icon}
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      fontWeight: "700", 
                      marginBottom: "4px",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      textShadow: isHovered ? "0 0 20px " + link.color + "40" : "none"
                    }}>
                      {link.title}
                    </h4>
                    <p style={{ 
                      color: "rgba(255,255,255,0.7)", 
                      fontSize: "0.9rem",
                      marginBottom: "2px"
                    }}>
                      {link.handle}
                    </p>
                    <p style={{ 
                      color: "rgba(255,255,255,0.4)", 
                      fontSize: "0.8rem" 
                    }}>
                      {link.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    background: isHovered ? link.color + "20" : "rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                    transform: isHovered ? "translate(3px, -3px)" : "translate(0, 0)"
                  }}>
                    <ArrowUpRight 
                      size={18} 
                      style={{ 
                        color: isHovered ? link.color : "rgba(255,255,255,0.4)",
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
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </motion.section>
  );
});

export default ContactSection;