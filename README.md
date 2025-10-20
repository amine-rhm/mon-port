# Portfolio - Rahmouni Mohamed Amine

Portfolio personnel développé avec React et Vite.

## Description

Portfolio moderne présentant mes compétences, expériences professionnelles et projets. Interface responsive avec mode sombre/clair et animations fluides.

## Technologies

- React 18
- Vite
- Framer Motion
- Lucide React
- React Icons
- EmailJS

## Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/portfolio.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## Scripts

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
```

## Structure

```
src/
├── components/     # Composants réutilisables
├── sections/       # Sections de la page
├── hooks/          # Hooks personnalisés
├── data/           # Données (projets, expériences)
├── App.jsx
└── index.jsx
```

## Personnalisation

- **Expériences** : `src/data/experiences.js`
- **Projets** : `src/data/projects.js`
- **Couleurs** : `src/App.jsx` (primaryColor, secondaryColor)
- **Informations personnelles** : Sections HomeSection et ContactSection

## Déploiement

Compatible avec Vercel, Netlify, GitHub Pages.

### Vercel (recommandé)

```bash
npm i -g vercel
vercel --prod
```

## Contact

- Email : rahmouni.amine@email.com
- LinkedIn : [Profil LinkedIn](https://linkedin.com/in/votre-profil)
- GitHub : [@VotreUsername](https://github.com/VotreUsername)

## Licence

MIT