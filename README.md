# Club de Badminton

Site web moderne pour un club de badminton, développé avec Vue 3, Vite et Tailwind CSS.

## Fonctionnalités

- 🏸 Page d'accueil avec présentation du club
- 📰 Section actualités avec articles et annonces
- 🏃‍♂️ Gestion des séances d'entraînement
- 👨‍💼 Panneau d'administration
- 📱 Design responsive optimisé mobile/desktop
- 🎨 Interface moderne avec Tailwind CSS

## Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **Vite** - Outil de build moderne et rapide
- **Vue Router** - Routage côté client
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Transformation CSS
- **Autoprefixer** - Compatibilité navigateurs

## Installation et démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone <repository-url>
cd badminton
```

2. Installez les dépendances :
```bash
npm install
```

### Développement

Démarrez le serveur de développement :
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Production

Construisez l'application pour la production :
```bash
npm run build
```

Prévisualisez la version de production :
```bash
npm run preview
```

## Structure du projet

```
src/
├── components/          # Composants réutilisables
├── views/              # Pages principales
│   ├── Home.vue        # Page d'accueil
│   ├── News.vue        # Page actualités
│   ├── Sessions.vue    # Page séances
│   └── Admin.vue       # Panneau administration
├── router/             # Configuration du routage
├── data/               # Données de démonstration
│   ├── news.js         # Articles de presse
│   └── sessions.js     # Séances d'entraînement
├── App.vue             # Composant racine
├── main.js             # Point d'entrée
└── style.css           # Styles globaux
```

## Pages disponibles

- **Accueil** (`/`) - Présentation du club et actualités récentes
- **Actualités** (`/news`) - Liste complète des articles et annonces
- **Séances** (`/sessions`) - Planning des entraînements avec disponibilités
- **Administration** (`/admin`) - Tableau de bord pour la gestion du club

## Personnalisation

### Données de démonstration

Les données sont stockées dans les fichiers `src/data/`:
- `news.js` - Articles et actualités
- `sessions.js` - Séances d'entraînement

### Styles

Les styles utilisent Tailwind CSS. La configuration se trouve dans `tailwind.config.js`.

### Routing

Les routes sont définies dans `src/router/index.js`.

## Contribution

1. Fork le project
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence ISC.