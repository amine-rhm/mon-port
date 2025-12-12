import locu from '../assets/locu.png';
import soutenplan from '../assets/soutenplan.png';
import vizzo from '../assets/vizzo.png';
import hand from '../assets/hand.png';
import gs from '../assets/project.png';


export const projectsData = [
  {
    id: 1,
    title: "HandControlPC",
    description: "Application innovante de contrôle d'ordinateur à distance utilisant la reconnaissance gestuelle des mains. Permet de contrôler le volume, effectuer des captures d'écran et gérer diverses fonctionnalités PC uniquement par des mouvements de la main grâce à des algorithmes de vision par ordinateur avancés.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "PyCharm"],
    category: "web",
    github: "https://github.com/amine-rhm/HandControlPC-",
    image: hand
  },
  {
    id: 2,
    title: "MiniShell",
    description: "Développement complet d'un mini-shell Linux personnalisé implémenté en langage C. Ce projet reproduit les fonctionnalités essentielles d'un shell Unix avec gestion avancée des processus, des commandes système, des pipes et des redirections pour une meilleur utilisation complète.",
    technologies: ["C", "Linux", "GCC", "Make", "Unix", "System Programming"],
    category: "web",
    github: "https://github.com/amine-rhm/minishell",
    emoji:'@'
  },
  {
    id: 3,
    title: "Locu",
    description: "Plateforme web complète de gestion de locations immobilières facilitant la mise en relation entre propriétaires et locataires. Interface moderne et intuitive avec système de réservation, gestion des biens, authentification sécurisée et API RESTful robuste pour une expérience utilisateur optimale.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "SQL", "JWT"],
    category: "web",
    github: "https://github.com/amine-rhm/minipr",
    image: locu
  },
  {
    id: 4,
    title: "Gestion de Projet",
    description: "Programme spécialisé dans la gestion et la planification de projets permettant de créer et visualiser des diagrammes de Pert et des diagrammes de Gantt. Outil essentiel pour la planification stratégique, le suivi des tâches et l'optimisation des délais de réalisation des projets complexes.",
    technologies: ["Algorithmes", "Planification", "Diagrammes", "Gestion de projet"],
    category: "web",
    github: "https://github.com/amine-rhm/getion-de-projet",
    image:gs
  },
  {
    id: 5,
    title: "Vizzo",
    description: "Plateforme e-commerce révolutionnaire de rénovation intégrant l'intelligence artificielle et la visualisation 3D. L'IA permet de superposer virtuellement les produits sur une photo de l'utilisateur pour un essayage virtuel, tandis que la 3D offre une visualisation immersive des produits.",
    technologies: ["IA", "3D Visualization", "E-commerce", "Computer Vision", "Figma", "UX/UI Design"],
    category: "design",
    github: "", 
    demo: "https://www.figma.com/proto/igj3GqUcQXvBsNZPEZs6sm/nova?page-id=1%3A8&node-id=93-95&starting-point-node-id=93%3A95&scaling=scale-down-width&content-scaling=fixed&t=Po1na5tCYJ7NDy6t-1",
    image: vizzo
  },
  {
    id: 6,
    title: "Soutenplan",
    description: "Plateforme numérique complète de gestion des soutenances de Master MIAGE développée pour l'Université de Picardie Jules Verne. Cette solution innovante digitalise et optimise l'ensemble du processus de soutenance.",
    technologies: ["Figma", "UX/UI Design", "Gestion académique", "Workflow"],
    category: "design",
    demo: "https://www.figma.com/proto/ucEuavaZMSPzAOYinlKjPM/Soutenplan?page-id=119%3A2&node-id=119-3&starting-point-node-id=119%3A3&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&t=UGhDnuTjiGsJTk0m-1",
    github: "", 
    image: soutenplan
  }
];