import React, { useState, forwardRef } from 'react';
import { 
  Code, Database, Smartphone, Settings, 
  Palette, BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection = forwardRef((props, ref) => {
  const { theme = "light", textColor = "#333" } = props;
  
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: [
        {
          name: "React",
          description: "Bibliothèque UI moderne pour créer des interfaces interactives",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB"
        },
        {
          name: "JavaScript",
          description: "Langage de programmation dynamique pour le web",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "#F7DF1E"
        },
        {
          name: "TypeScript",
          description: "Superset typé de JavaScript pour un meilleur développement",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          color: "#3178C6"
        },
        {
          name: "Next.js",
          description: "Framework React complet pour la production",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          color: "#ffffff"
        },
        {
          name: "Tailwind CSS",
          description: "Framework CSS utility-first pour un style rapide",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          color: "#06B6D4"
        }
      ]
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      skills: [
        {
          name: "Node.js",
          description: "Runtime JavaScript pour le développement côté serveur",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          color: "#339933"
        },
        {
          name: "PHP",
          description: "Langage de script côté serveur pour le web",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          color: "#777BB4"
        },
        {
          name: "Python",
          description: "Langage polyvalent pour le backend",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        },
        {
          name: "Java",
          description: "Langage de programmation de niveau entreprise",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "#007396"
        },
        {
          name: "C++",
          description: "Langage de programmation haute performance",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
          color: "#00599C"
        },
        {
          name: "C",
          description: "Langage de programmation bas niveau",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
          color: "#A8B9CC"
        },
        {
          name: "Symfony",
          description: "Framework PHP pour applications web",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
          color: "#000000"
        },
        {
          name: "Express.js",
          description: "Framework web rapide pour Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "#000000"
        },
        {
          name: "Firebase",
          description: "Plateforme Backend-as-a-Service de Google",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          color: "#FFCA28"
        },
        {
          name: "PostgreSQL",
          description: "Base de données relationnelle open source avancée",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          color: "#336791"
        },
        {
          name: "MySQL",
          description: "Système de gestion de base de données populaire",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "#4479A1"
        },
        {
          name: "MongoDB",
          description: "Base de données NoSQL pour applications modernes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        },
        {
          name: "WordPress",
          description: "CMS populaire pour sites web et blogs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
          color: "#21759B"
        }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      skills: [
        {
          name: "React Native",
          description: "Développement d'applications mobiles multiplateformes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "#61DAFB"
        }
      ]
    },
    {
      title: "Data",
      icon: <BarChart3 size={24} />,
      skills: [
        {
          name: "Pandas",
          description: "Bibliothèque de manipulation et d'analyse de données pour Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
          color: "#150458"
        },
        {
          name: "NumPy",
          description: "Bibliothèque de calcul numérique pour Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          color: "#013243"
        },
        {
          name: "BeautifulSoup",
          description: "Bibliothèque de web scraping pour Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        },
        {
          name: "Requests",
          description: "Bibliothèque HTTP pour le web scraping Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "#3776AB"
        },
        {
          name: "Tableau",
          description: "Business intelligence et visualisation de données",
          icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png",
          color: "#E97627"
        },
        {
          name: "Power BI",
          description: "Solution d'analyse commerciale de Microsoft",
          icon: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png",
          color: "#F2C811"
        }
      ]
    },
    {
      title: "UX/UI",
      icon: <Palette size={24} />,
      skills: [
        {
          name: "Figma",
          description: "Outil de conception et de prototypage collaboratif",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "#F24E1E"
        },
        {
          name: "Adobe XD",
          description: "Logiciel de conception d'expérience utilisateur",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
          color: "#FF61F6"
        },
        {
          name: "Sketch",
          description: "Boîte à outils de conception numérique",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
          color: "#F7B500"
        },
        {
          name: "Photoshop",
          description: "Édition d'images et conception graphique",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
          color: "#31A8FF"
        }
      ]
    },
    {
      title: "Outils",
      icon: <Settings size={24} />,
      skills: [
        {
          name: "VS Code",
          description: "Éditeur de code puissant avec de nombreuses extensions",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          color: "#007ACC"
        },
        {
          name: "Git",
          description: "Système de contrôle de version pour la gestion du code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "#F05032"
        },
        {
          name: "Docker",
          description: "Plateforme de conteneurisation pour applications",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "#2496ED"
        },
        {
          name: "Webpack",
          description: "Bundler de modules pour applications JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
          color: "#8DD6F9"
        },
        {
          name: "Terminal",
          description: "Interface en ligne de commande pour opérations système",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
          color: "#4EAA25"
        },
        {
          name: "Postman",
          description: "Plateforme de test et développement d'API",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          color: "#FF6C37"
        }
      ]
    }
  ];

  return (
    <section
      ref={ref}
      id="competences"
      style={{
        backgroundColor: "#0a0a0a",
        color: textColor,
        padding: "120px 40px 80px 40px",
        minHeight: "100vh"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "80px", paddingLeft: "20px" }}>
          <p style={{
            fontSize: "0.9rem",
            opacity: 0.6,
            marginBottom: "15px",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}>
            Technologies
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            marginBottom: "30px",
            color: textColor,
            lineHeight: "1.2"
          }}>
            Ce que j'utilise
          </h2>
          <p style={{
            fontSize: "1.1rem",
            opacity: 0.7,
            maxWidth: "700px",
            lineHeight: "1.7"
          }}>
            Voici les outils et technologies que j'utilise pour donner vie à mes idées. Des frameworks frontend aux services backend, ce sont mes solutions de prédilection pour développer des applications modernes.
          </p>
        </div>

        {/* Barre de navigation horizontale */}
        <div style={{
          display: "flex",
          gap: "0",
          marginBottom: "60px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {categories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                backgroundColor: "transparent",
                color: activeCategory === index ? textColor : "#666",
                border: "none",
                borderBottom: activeCategory === index ? `3px solid ${textColor}` : "3px solid transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "1.1rem",
                fontWeight: "600"
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.color = "#999";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== index) {
                  e.currentTarget.style.color = "#666";
                }
              }}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Container animé pour les skills */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                maxWidth: "1400px",
                width: "100%"
              }}
            >
              {categories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  style={{
                    backgroundColor: "#111",
                    border: "1px solid #1a1a1a",
                    borderRadius: "20px",
                    padding: "40px 32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#333";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#1a1a1a";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icône avec cercle coloré */}
                  <div style={{
                    width: "70px",
                    height: "70px",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#1a1a1a",
                    border: `2px solid ${skill.color}20`,
                    position: "relative"
                  }}>
                    <img 
                      src={skill.icon}
                      alt={skill.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  {/* Nom */}
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                    color: textColor
                  }}>
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    opacity: 0.6,
                    margin: 0
                  }}>
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;