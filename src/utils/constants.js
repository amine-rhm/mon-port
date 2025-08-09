// utils/constants.js

export const EXPERIENCES = [
    {
      title: "Développeur Full Stack",
      company: "TechSolutions Inc.",
      period: "Jan 2023 - Présent",
      description: "Développement d'applications web avec React et Node.js. Gestion de bases de données MongoDB et implémentation d'API RESTful.",
      achievements: ["Réduction du temps de chargement de 40%", "Implémentation de tests automatisés", "Refonte de l'interface utilisateur"]
    },
    {
      title: "Stage Data Analyst",
      company: "DataInsight Corp.",
      period: "Juin 2022 - Août 2022",
      description: "Analyse de données et création de tableaux de bord interactifs. Extraction et transformation de données à partir de diverses sources.",
      achievements: ["Automatisation des rapports hebdomadaires", "Détection d'anomalies dans les données", "Visualisation des tendances clés"]
    }
  ];
  
  export const PROJECTS = [
    {
      title: "Plateforme E-commerce",
      description: "Solution complète de commerce électronique avec gestion de panier, système de paiement sécurisé et tableau de bord administrateur.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web"
    },
    {
      title: "Application de Gestion de Tâches",
      description: "Outil collaboratif de gestion de projets avec attribution de tâches, échéances et notifications en temps réel.",
      technologies: ["Vue.js", "Express", "Firebase"],
      category: "mobile"
    },
    {
      title: "Tableau de Bord Météo",
      description: "Application météo avec prévisions sur 7 jours, visualisation des données et alertes personnalisées.",
      technologies: ["React", "API Météo", "Chart.js"],
      category: "web"
    }
  ];
  
  export const SKILLS = [
    { name: 'JavaScript', icon: 'SiJavascript', color: '#f7df1e' },
    { name: 'React', icon: 'SiReact', color: '#61dafb' },
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'TypeScript', icon: 'SiTypescript', color: '#3178c6' },
    { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
    { name: 'Git', icon: 'SiGit', color: '#f05032' },
    { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06b6d4' },
    { name: 'Docker', icon: 'SiDocker', color: '#2496ed' },
  ];
  
  export const THEME_COLORS = {
    primary: '#3a86ff',
    secondary: '#ff6b6b'
  };
  
  export const TYPING_TEXTS = [
    "Développeur Full Stack", 
    "UI/UX Designer", 
    "Étudiant en Master MIAGE"
  ];
  
  export const SOCIAL_LINKS = [
    { icon: 'Github', url: 'https://github.com' },
    { icon: 'Linkedin', url: 'https://linkedin.com' },
    { icon: 'Mail', url: 'mailto:rahmouni.amine@email.com' }
  ];
  
  export const NAVIGATION_ITEMS = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'apropos' },
    { label: 'Expériences', id: 'experiences' },
    { label: 'Projets', id: 'projets' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Contact', id: 'contact' }
  ];