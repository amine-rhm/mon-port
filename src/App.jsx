import React from "react";
import { motion } from "framer-motion";
import { projectsData } from './data/projects';
// Composants
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

// Sections
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from './sections/ProjectSection';
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

// Hooks
import useTypingEffect from "./hooks/useTypingEffect";

const App = () => {
  // States
  const [theme, setTheme] = React.useState("dark");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("accueil");
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  // Texte animé
  const displayText = useTypingEffect([
    "Développeur Web",
    "Étudiant en Informatique",
    "Passionné de Technologie",
  ]);

  // Styles dynamiques
  const bgColor = theme === "dark" ? "#0a0a0a" : "#fafafa";  // ← Changé ici !
  const textColor = theme === "dark" ? "#fff" : "#333";
  const cardBg = theme === "dark" ? "#1e1e1e" : "#fff";
  const borderColor = theme === "dark" ? "#333" : "#eee";
  const primaryColor = "#3a86ff";
  const secondaryColor = "#ff6b6b";

  // Références pour le défilement
  const sectionRefs = React.useRef({
    accueil: React.createRef(),
    apropos: React.createRef(),
    experiences: React.createRef(),
    projets: React.createRef(),
    competences: React.createRef(),
    contact: React.createRef(),
  });

  // Fonction pour scroller vers une section
  const scrollToSection = React.useCallback((section) => {
    const ref = sectionRefs.current[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  }, []);

  // Gestion du mouvement du curseur
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        margin: 0,
        padding: 0
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Cursor cursorPosition={cursorPosition} primaryColor={primaryColor} />

      <Header
        theme={theme}
        toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        textColor={textColor}
        borderColor={borderColor}
        primaryColor={primaryColor}
      />

      <HomeSection
        ref={sectionRefs.current.accueil}
        theme={theme}
        textColor={textColor}
        primaryColor={primaryColor}
        displayText={displayText}
        scrollToSection={scrollToSection}
      />

      <AboutSection
        ref={sectionRefs.current.apropos}
        theme={theme}
        textColor={textColor}
        primaryColor={primaryColor}
        borderColor={borderColor}
        bgColor={bgColor}
      />

      <ExperienceSection
        ref={sectionRefs.current.experiences}
        theme={theme}
        textColor={textColor}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        borderColor={borderColor}
        cardBg={cardBg}
      />

      <ProjectsSection 
        ref={sectionRefs.current.projets}
        projects={projectsData} 
        theme={theme}
        textColor={textColor}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        borderColor={borderColor}
        cardBg={theme === 'dark' ? '#1a1a2e' : '#fff'}
      />

      <SkillsSection
        ref={sectionRefs.current.competences}
        theme={theme}
        textColor={textColor}
        borderColor={borderColor}
        cardBg={cardBg}
      />

      <ContactSection
        ref={sectionRefs.current.contact}
        theme={theme}
        textColor={textColor}
        primaryColor={primaryColor}
      />

      <Footer theme={theme} borderColor={borderColor} textColor={textColor} />
    </motion.div>
  );
};

export default App;