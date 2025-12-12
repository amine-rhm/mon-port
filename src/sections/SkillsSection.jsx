import React, { useState, forwardRef } from 'react';
import { 
  Code, Database, Smartphone, Settings, 
  Palette, BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection = forwardRef(function SkillsSection(props, ref) {
  const { theme = "dark", textColor = "#fff" } = props;
  
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={20} />,
      color: "#61DAFB",
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
      icon: <Database size={20} />,
      color: "#22c55e",
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
          name: "Express.js",
          description: "Framework web rapide pour Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          color: "#ffffff"
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
          name: "MongoDB",
          description: "Base de données NoSQL pour applications modernes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          color: "#47A248"
        }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={20} />,
      color: "#a855f7",
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
      icon: <BarChart3 size={20} />,
      color: "#f59e0b",
      skills: [
        {
          name: "Pandas",
          description: "Bibliothèque de manipulation et d'analyse de données",
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
          name: "Power BI",
          description: "Solution d'analyse commerciale de Microsoft",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
          color: "#F2C811"
        }
      ]
    },
    {
      title: "Design",
      icon: <Palette size={20} />,
      color: "#ec4899",
      skills: [
        {
          name: "Figma",
          description: "Outil de conception et de prototypage collaboratif",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          color: "#F24E1E"
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
      icon: <Settings size={20} />,
      color: "#06b6d4",
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

  const activeColor = categories[activeCategory].color;

  return (
    <section
      ref={ref}
      id="competences"
      style={{
        background: "#050507",
        color: "#fff",
        padding: "100px 40px 80px 40px",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, " + activeColor + "08 0%, transparent 70%)",
        pointerEvents: "none",
        transition: "background 0.5s ease"
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "0.75rem",
              letterSpacing: "3px",
              textTransform: "uppercase"
            }}
          >
            Technologies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              marginBottom: "1rem",
              letterSpacing: "-1px"
            }}
          >
            Ce que j'utilise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "600px",
              lineHeight: "1.7"
            }}
          >
            Voici les outils et technologies que j'utilise pour donner vie à mes idées.
          </motion.p>
        </div>

        {/* Tabs navigation */}
        <div style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0.5rem",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          {categories.map(function(category, index) {
            const isActive = activeCategory === index;
            return (
              <button
                key={category.title}
                onClick={function() { setActiveCategory(index); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: isActive 
                    ? "linear-gradient(135deg, " + category.color + "20, " + category.color + "10)"
                    : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                  border: isActive 
                    ? "1px solid " + category.color + "40"
                    : "1px solid transparent",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? "600" : "500",
                  boxShadow: isActive 
                    ? "0 0 20px " + category.color + "20"
                    : "none"
                }}
              >
                <span style={{ 
                  color: isActive ? category.color : "rgba(255,255,255,0.5)",
                  transition: "color 0.3s"
                }}>
                  {category.icon}
                </span>
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px"
            }}
          >
            {categories[activeCategory].skills.map(function(skill, index) {
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onMouseEnter={function() { setHoveredSkill(skill.name); }}
                  onMouseLeave={function() { setHoveredSkill(null); }}
                  style={{
                    background: "#0a0a0f",
                    borderRadius: "16px",
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered 
                      ? "0 20px 40px rgba(0,0,0,0.4), 0 0 30px " + skill.color + "15"
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
                      ? "linear-gradient(135deg, " + skill.color + "50, transparent 50%, " + skill.color + "30)"
                      : "linear-gradient(135deg, rgba(255,255,255,0.1), transparent 50%, rgba(255,255,255,0.05))",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    transition: "all 0.4s ease"
                  }} />

                  {/* Glow en haut */}
                  {isHovered && (
                    <div style={{
                      position: "absolute",
                      top: "-50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      height: "100px",
                      background: "radial-gradient(ellipse, " + skill.color + "20 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />
                  )}

                  {/* Icon */}
                  <div style={{
                    width: "56px",
                    height: "56px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: skill.color + "10",
                    border: "1px solid " + skill.color + "20",
                    position: "relative",
                    transition: "all 0.3s ease",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    boxShadow: isHovered ? "0 0 20px " + skill.color + "30" : "none"
                  }}>
                    <img 
                      src={skill.icon}
                      alt={skill.name}
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                        filter: isHovered ? "drop-shadow(0 0 8px " + skill.color + "60)" : "none",
                        transition: "filter 0.3s ease"
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    textShadow: isHovered ? "0 0 20px " + skill.color + "40" : "none"
                  }}>
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0
                  }}>
                    {skill.description}
                  </p>

                  {/* Petit indicateur de couleur */}
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: skill.color,
                    opacity: isHovered ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                    boxShadow: isHovered ? "0 0 10px " + skill.color : "none"
                  }} />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
});

export default SkillsSection;