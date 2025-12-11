import { 
  SiPython, 
  SiR, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiMysql 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { MdOutlineScience } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';

export const experiences = [
  {
    title: "Stage – Analyse de données et développement front-end",
    company: "Laboratoire d'économie, finance, management et innovation UPJV / ULULE",
    period: "Avril 2025 - Juin 2025",
    description: "Développement d'outils d'analyse et d'automatisation. Conception de bases de données et rédaction de scripts documentés. Maintenance du site web et optimisation des outils économétriques.",
    achievements: [
      "Développement d'outils d'analyse et d'automatisation (Python, R, STATA, VBA)",
      "Conception de bases de données et rédaction de scripts documentés",
      "Maintenance et optimisation du site web du laboratoire (WordPress) : mise à jour de contenu,gestion des extensions, optimisation des performances",
    ],
    icons: [
      { name: 'Python', Icon: SiPython, color: '#3776ab' },
      { name: 'R', Icon: SiR, color: '#276DC3' },
      { name: 'STATA', Icon: MdOutlineScience, color: '#1a5490' },
      { name: 'VBA', Icon: GiProgression, color: '#217346' },
      { name: 'Database', Icon: FaDatabase, color: '#4479a1' }
    ]
  },
  {
    title: "Stage – Développement d'une application de gestion des réclamations",
    company: "Bejaia Mediterranean Terminal (Sarl BMT)",
    period: "Février 2024 - Avril 2024",
    description: "Développement d'une application web complète de gestion des réclamations avec approche Agile/Scrum.",
    achievements: [
      "Analyse des besoins, conception et architecture de l'application",
      "Modélisation et conception de bases de données relationnelles",
      "Développement full stack : HTML, CSS, JavaScript, PHP et MySQL",
      "Rédaction et optimisation de requêtes SQL complexes",
      "Tests unitaires et fonctionnels de l'application",
      "Débogage et correction des anomalies détectées",
      "Déploiement et mise en production de l'application",
      "Agile/Scrum : coordination équipe et suivi projet"
    ],
    icons: [
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572b6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'PHP', Icon: SiPhp, color: '#777bb4' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { name: 'Agile', Icon: GiProgression, color: '#009fdb' }
    ]
  }
];
