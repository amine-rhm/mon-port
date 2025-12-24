import React, { useState, forwardRef } from 'react';
import { 
  Code, Database, Smartphone, Settings, 
  Palette, BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SkillsSection = forwardRef(function SkillsSection(props, ref) {
  const { theme = "dark", textColor = "#fff", borderColor, cardBg } = props;
  const { t } = useTranslation();
  
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const isDark = theme === 'dark';
  
  const colors = {
    bg: isDark ? '#050507' : '#f8f9fa',
    text: isDark ? '#fff' : '#1a1a1a',
    textMuted: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
    textSubtle: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    cardBg: isDark ? '#0a0a0f' : '#ffffff',
    tabBg: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    tabBorder: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    cardBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    cardBorderHover: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)',
    shadowBase: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)',
    shadowHover: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.12)',
  };
  
  const categories = [
    {
      title: t('skills.categories.frontend'),
      icon: <Code size={20} />,
      color: "#61DAFB",
      skills: [
        { name: "React", description: t('skills.descriptions.react'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "JavaScript", description: t('skills.descriptions.javascript'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
        { name: "TypeScript", description: t('skills.descriptions.typescript'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "Next.js", description: t('skills.descriptions.nextjs'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: isDark ? "#ffffff" : "#000000" },
        { name: "Tailwind CSS", description: t('skills.descriptions.tailwind'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" }
      ]
    },
    {
      title: t('skills.categories.backend'),
      icon: <Database size={20} />,
      color: "#22c55e",
      skills: [
        { name: "Node.js", description: t('skills.descriptions.nodejs'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "PHP", description: t('skills.descriptions.php'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
        { name: "Python", description: t('skills.descriptions.python'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
        { name: "Java", description: t('skills.descriptions.java'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
        { name: "C++", description: t('skills.descriptions.cpp'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
        { name: "C", description: t('skills.descriptions.c'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#A8B9CC" },
        { name: "Express.js", description: t('skills.descriptions.express'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: isDark ? "#ffffff" : "#000000" },
        { name: "Firebase", description: t('skills.descriptions.firebase'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
        { name: "PostgreSQL", description: t('skills.descriptions.postgresql'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
        { name: "MongoDB", description: t('skills.descriptions.mongodb'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" }
      ]
    },
    {
      title: t('skills.categories.mobile'),
      icon: <Smartphone size={20} />,
      color: "#a855f7",
      skills: [
        { name: "React Native", description: t('skills.descriptions.reactnative'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" }
      ]
    },
    {
      title: t('skills.categories.data'),
      icon: <BarChart3 size={20} />,
      color: "#f59e0b",
      skills: [
        { name: "Pandas", description: t('skills.descriptions.pandas'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#150458" },
        { name: "NumPy", description: t('skills.descriptions.numpy'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#013243" },
        { name: "Power BI", description: t('skills.descriptions.powerbi'), icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", color: "#F2C811" }
      ]
    },
    {
      title: t('skills.categories.design'),
      icon: <Palette size={20} />,
      color: "#ec4899",
      skills: [
        { name: "Figma", description: t('skills.descriptions.figma'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
        { name: "Photoshop", description: t('skills.descriptions.photoshop'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: <Settings size={20} />,
      color: "#06b6d4",
      skills: [
        { name: "VS Code", description: t('skills.descriptions.vscode'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
        { name: "Git", description: t('skills.descriptions.git'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
        { name: "Docker", description: t('skills.descriptions.docker'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
        { name: "Terminal", description: t('skills.descriptions.terminal'), icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", color: "#4EAA25" },
        { name: "Postman", description: t('skills.descriptions.postman'), icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#FF6C37" }
      ]
    }
  ];

  const activeColor = categories[activeCategory].color;

  return (
    <section
      ref={ref}
      id="competences"
      style={{
        background: colors.bg,
        color: colors.text,
        padding: "100px 4rem 80px 4rem",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, " + activeColor + (isDark ? "08" : "12") + " 0%, transparent 70%)",
        pointerEvents: "none",
        transition: "background 0.5s ease"
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <div style={{ marginBottom: "60px" }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "0.85rem",
              color: colors.textSubtle,
              marginBottom: "0.75rem",
              letterSpacing: "3px",
              textTransform: "uppercase"
            }}
          >
            {t('skills.subtitle')}
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
              letterSpacing: "-1px",
              color: colors.text
            }}
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1rem",
              color: colors.textMuted,
              maxWidth: "600px",
              lineHeight: "1.7"
            }}
          >
            {t('skills.description')}
          </motion.p>
        </div>

        <div className="skills-tabs" style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0.5rem",
          background: colors.tabBg,
          borderRadius: "16px",
          border: "1px solid " + colors.tabBorder
        }}>
          {categories.map(function(category, index) {
            const isActive = activeCategory === index;
            return (
              <button
                key={category.title}
                onClick={function() { setActiveCategory(index); }}
                className="skill-tab"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: isActive 
                    ? "linear-gradient(135deg, " + category.color + "20, " + category.color + "10)"
                    : "transparent",
                  color: isActive ? colors.text : colors.textMuted,
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
                  color: isActive ? category.color : colors.textMuted,
                  transition: "color 0.3s"
                }}>
                  {category.icon}
                </span>
                <span className="tab-label">{category.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="skills-grid"
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
                  className="skill-card"
                  style={{
                    background: colors.cardBg,
                    borderRadius: "16px",
                    padding: "28px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered 
                      ? "0 20px 40px " + colors.shadowHover + ", 0 0 30px " + skill.color + "15"
                      : "0 5px 20px " + colors.shadowBase
                  }}
                >
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    padding: "1px",
                    background: isHovered 
                      ? "linear-gradient(135deg, " + skill.color + "50, transparent 50%, " + skill.color + "30)"
                      : "linear-gradient(135deg, " + colors.cardBorder + ", transparent 50%, " + colors.cardBorderHover + ")",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    transition: "all 0.4s ease"
                  }} />

                  {isHovered && (
                    <div style={{
                      position: "absolute",
                      top: "-50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      height: "100px",
                      background: "radial-gradient(ellipse, " + skill.color + (isDark ? "20" : "30") + " 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />
                  )}

                  <div style={{
                    width: "56px",
                    height: "56px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: skill.color + (isDark ? "10" : "15"),
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

                  <h3 style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: colors.text,
                    transition: "all 0.3s ease",
                    textShadow: isHovered ? "0 0 20px " + skill.color + "40" : "none"
                  }}>
                    {skill.name}
                  </h3>

                  <p style={{
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                    color: colors.textMuted,
                    margin: 0
                  }}>
                    {skill.description}
                  </p>

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

      <style>{`
        @media (max-width: 968px) {
          #competences {
            padding: 80px 1.5rem 60px 1.5rem !important;
          }
        }

        @media (max-width: 600px) {
          #competences {
            padding: 60px 1rem 50px 1rem !important;
          }
          .skills-tabs {
            gap: 0.3rem !important;
            padding: 0.4rem !important;
          }
          .skill-tab {
            padding: 10px 14px !important;
            font-size: 0.8rem !important;
          }
          .tab-label {
            display: none;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .skill-card {
            padding: 20px !important;
          }
        }

        @media (max-width: 400px) {
          .skill-tab {
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </section>
  );
});

export default SkillsSection;