import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

// Import images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.png";

const images = [img1, img2, img3, img4];

const AboutSection = forwardRef(
  ({ theme, textColor, primaryColor, borderColor, bgColor }, ref) => {
    return (
      <motion.section
        id="apropos"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          padding: "6rem 2rem",
          background: bgColor || (theme === "dark" ? "#121212" : "#fafafa"),
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "3rem",
              color: textColor,
              fontWeight: "600",
            }}
          >
            À Propos
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  color: primaryColor,
                  fontWeight: "500",
                }}
              >
                Qui suis-je ?
              </h3>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: theme === "dark" ? "#ccc" : "#555",
                  marginBottom: "2rem",
                }}
              >
                Je suis un développeur web passionné par la création
                d'interfaces utilisateur modernes et intuitives. Formé aux
                méthodologies agiles et à la gestion Scrum depuis trois ans, je
                me spécialise dans les projets digitaux innovants et créatifs.
              </p>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: theme === "dark" ? "#ccc" : "#555",
                  marginBottom: "2.5rem",
                }}
              >
                Mon objectif est de transformer les idées en expériences
                digitales concrètes, en combinant design élégant et
                fonctionnalités robustes. Je travaille avec les dernières
                technologies pour créer des solutions performantes et
                évolutives.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                {[
                  { icon: <Github size={24} />, url: "https://github.com" },
                  { icon: <Linkedin size={24} />, url: "https://linkedin.com" },
                  {
                    icon: <Mail size={24} />,
                    url: "mailto:rahmouni.amine@email.com",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: theme === "dark" ? "#333" : "#f0f0f0",
                      color: textColor,
                      textDecoration: "none",
                    }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={img} // utiliser la source d'image pour la clé
                  whileHover={{ scale: 1.05 }}
                  style={{
                    height: "200px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      theme === "dark"
                        ? "0 4px 12px rgba(0,0,0,0.5)"
                        : "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <motion.img
                    src={img}
                    alt="Projet"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
);

export default AboutSection;
