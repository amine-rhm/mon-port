import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ContactSection = forwardRef((props, ref) => {
  const { theme, textColor, primaryColor } = props;

  const bgColor = "#0a0a0a";

  const contactLinks = [
    {
      icon: <Github size={32} />,
      title: "GitHub",
      handle: "@amine-rhm",
      description: "Découvrez mes projets et mon code",
      url: "https://github.com/amine-rhm"
    },
    {
      icon: <Linkedin size={32} />,
      title: "LinkedIn",
      handle: "/dans/rahmouni mohamed amine",
      description: "Contactez-moi sur le plan professionnel",
      url: "https://linkedin.com/in/rahmouni mohamed amine "
    },
    {
      icon: <Mail size={32} />,
      title: "E-mail",
      handle: "rahmouni.mohamedamine1@gmail.com",
      description: "Envoyez-moi un message privé",
      url: "mailto:rahmouni.mohamedamine1@gmail.com"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        minHeight: "100vh"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        
        {/* Titre en haut à gauche */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: "80px" }}
        >
          <p style={{
            fontSize: "1rem",
            opacity: 0.6,
            marginBottom: "10px",
            letterSpacing: "1px"
          }}>
            Allons-y parler
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "700",
              color: textColor
            }}
          >
            Contact
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}>
          
          {/* Texte à gauche */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                fontWeight: "600",
                marginBottom: "30px",
                color: textColor
              }}
            >
              Vous pouvez me trouver sur...
            </h3>
            
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.7,
                lineHeight: "1.8",
                marginBottom: "20px"
              }}
            >
              Vous avez une idée, un projet, ou simplement quelque chose de sympa à construire ? Je suis tout ouïe.
            </p>
            
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.7,
                lineHeight: "1.8"
              }}
            >
              Je suis toujours ouvert aux conversations intéressantes, aux collaborations et aux échanges avec d'autres développeurs et créateurs. N'hésitez pas à me contacter via l'une de ces plateformes !
            </p>
          </motion.div>

          {/* Cards à droite */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            gap: "20px"
          }}>
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "25px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: textColor,
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <div style={{
                  color: textColor,
                  minWidth: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.9
                }}>
                  {link.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontWeight: "700", 
                    marginBottom: "3px",
                    fontSize: "1.2rem"
                  }}>
                    {link.title}
                  </h4>
                  <p style={{ 
                    opacity: 0.9, 
                    fontSize: "0.95rem",
                    marginBottom: "3px"
                  }}>
                    {link.handle}
                  </p>
                  <p style={{ 
                    opacity: 0.5, 
                    fontSize: "0.85rem" 
                  }}>
                    {link.description}
                  </p>
                </div>

                <ExternalLink size={18} style={{ opacity: 0.4 }} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </motion.section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;