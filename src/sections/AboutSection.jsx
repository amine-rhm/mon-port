import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Database, Code, BarChart } from "lucide-react";

// Import images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.png";

const images = [img1, img2, img3, img4];

// Icônes des technologies avec Devicons CDN - Liste étendue
const technologies = [
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB", 
    bgColor: "#61DAFB15" 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933", 
    bgColor: "#33993315" 
  },
  { 
    name: "Python", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB", 
    bgColor: "#3776AB15" 
  },
  { 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E", 
    bgColor: "#F7DF1E15" 
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6", 
    bgColor: "#3178C615" 
  },
  { 
    name: "Java", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#ED8B00", 
    bgColor: "#ED8B0015" 
  },
  { 
    name: "PHP", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4", 
    bgColor: "#777BB415" 
  },
  { 
    name: "C++", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "#00599C", 
    bgColor: "#00599C15" 
  },
  { 
    name: "MongoDB", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248", 
    bgColor: "#47A24815" 
  },
  { 
    name: "PostgreSQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#336791", 
    bgColor: "#33679115" 
  },
  { 
    name: "Firebase", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28", 
    bgColor: "#FFCA2815" 
  },
  { 
    name: "Git", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032", 
    bgColor: "#F0503215" 
  },
  { 
    name: "Docker", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED", 
    bgColor: "#2496ED15" 
  },
  { 
    name: "Figma", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E", 
    bgColor: "#F24E1E15" 
  },
  { 
    name: "Pandas", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    color: "#150458", 
    bgColor: "#15045815" 
  },
  { 
    name: "NumPy", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "#013243", 
    bgColor: "#01324315" 
  },
  { 
    name: "BeautifulSoup", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB", 
    bgColor: "#3776AB15" 
  },
  { 
    name: "Requests", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB", 
    bgColor: "#3776AB15" 
  },
  { 
    name: "Tableau", 
    icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png",
    color: "#E97627", 
    bgColor: "#E9762715" 
  },
  { 
    name: "Power BI", 
    icon: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png",
    color: "#F2C811", 
    bgColor: "#F2C81115" 
  },
  { 
    name: "PyCharm", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    color: "#000000", 
    bgColor: "#00000015" 
  },
  { 
    name: "Terminal", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    color: "#4EAA25", 
    bgColor: "#4EAA2515" 
  },
  { 
    name: "Linux", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624", 
    bgColor: "#FCC62415" 
  },
  { 
    name: "Modelio", 
    icon: <Code size={32} color="#FF6B35" />, 
    color: "#FF6B35", 
    bgColor: "#FF6B3515" 
  },
  { 
    name: "Draw.io", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
    color: "#FF5722", 
    bgColor: "#FF572215" 
  },
  { 
    name: "Matplotlib", 
    icon: <BarChart size={32} color="#11557c" />, 
    color: "#11557c", 
    bgColor: "#11557c15" 
  },
  { 
    name: "SQL", 
    icon: <Database size={32} color="#336791" />, 
    color: "#336791", 
    bgColor: "#33679115" 
  },
];

// Fonction pour rendre les icônes
const renderTechIcon = (tech) => {
  if (typeof tech.icon === 'string') {
    // C'est une URL d'icône
    return (
      <img 
        src={tech.icon} 
        alt={tech.name}
        style={{ width: '32px', height: '32px' }}
      />
    );
  } else {
    // C'est un composant React
    return tech.icon;
  }
};

// Composant pour le carrousel de technologies avec carrés
const TechCarousel = ({ theme = "dark" }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "5rem 0",
        background: theme === "dark" ? "#121212" : "#FAFAFA",
        borderBottom: theme === "dark" ? "0px solid #333" : "0px solid #eee",
      }}
    >
      <motion.div
        animate={{
          x: [0, -60 * technologies.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Durée augmentée pour plus de technologies
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          gap: "1.25rem",
          width: "fit-content",
        }}
      >
        {/* Première série d'icônes */}
        {technologies.map((tech, index) => (
          <motion.div
            key={`first-${index}`}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "65px",
              height: "45px",
              background: tech.bgColor,
              borderRadius: "15px",
              border: `1px solid ${tech.color}30`,
              boxShadow: `0 2px 8px ${tech.color}25`,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "scale(0.8)",
              }}
            >
              {renderTechIcon(tech)}
            </div>
          </motion.div>
        ))}
        
        {/* Deuxième série pour un défilement continu */}
        {technologies.map((tech, index) => (
          <motion.div
            key={`second-${index}`}
            whileHover={{ scale: 1.1, y: -5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "65px",
              height: "45px",
              background: tech.bgColor,
              borderRadius: "15px",
              border: `1px solid ${tech.color}30`,
              boxShadow: `0 2px 8px ${tech.color}25`,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "scale(0.8)",
              }}
            >
              {renderTechIcon(tech)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const AboutSection = forwardRef(
  ({ theme = "dark", textColor = "#ffffff", primaryColor = "#61DAFB", borderColor = "#333", bgColor = "#121212" }, ref) => {
    return (
      <>
        {/* Carrousel de technologies séparé */}
        <TechCarousel theme={theme} />
        
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
                    key={img}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
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
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </>
    );
  }
);

export default AboutSection;