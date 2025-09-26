# Backend API - Club de Badminton

Backend simple pour le site web du club de badminton utilisant Express.js et un stockage JSON (prêt pour Prisma/SQLite).

## Installation et démarrage

### Prérequis
- Node.js 18+ installé

### Étapes d'installation

1. **Installer les dépendances**
   ```bash
   cd server
   npm install
   ```

2. **Configuration de l'environnement**
   ```bash
   cp .env.example .env
   ```

3. **Lancer le serveur en mode développement**
   ```bash
   npm run dev
   ```

Le serveur sera disponible sur http://localhost:5174

### Commandes disponibles

- `npm run dev` - Démarre le serveur en mode développement avec rechargement automatique
- `npm start` - Démarre le serveur en mode production
- `npm run prisma:migrate` - Lance les migrations Prisma (quand configuré)
- `npm run prisma:generate` - Génère le client Prisma (quand configuré)
- `npm run prisma:seed` - Lance le seeding de la base de données (quand configuré)

## API Endpoints

### GET /api/health
Endpoint de santé du serveur.

**Réponse :**
```json
{
  "status": "ok",
  "uptime": 123.456,
  "timestamp": "2024-12-01T10:00:00.000Z"
}
```

### GET /api/news
Retourne les actualités du club triées par date décroissante.

**Paramètres de requête :**
- `limit` (optional) - Nombre d'articles à retourner (par défaut : tous)

**Exemple :**
```bash
curl "http://localhost:5174/api/news?limit=3"
```

**Réponse :**
```json
[
  {
    "id": 1,
    "title": "Tournoi de fin d'année",
    "date": "2024-12-15T10:00:00.000Z",
    "author": "Pierre Martin",
    "body": "Notre tournoi annuel aura lieu le 15 décembre 2024...",
    "excerpt": "Participez à notre tournoi annuel le 15 décembre 2024.",
    "featured": true,
    "published": true
  }
]
```

### GET /api/sessions
Retourne les séances d'entraînement à venir triées par date croissante.

**Paramètres de requête :**
- `limit` (optional) - Nombre de séances à retourner (par défaut : toutes)

**Exemple :**
```bash
curl "http://localhost:5174/api/sessions?limit=2"
```

**Réponse :**
```json
[
  {
    "id": 1,
    "date": "2025-09-30T18:00:00.000Z",
    "start": "18:00",
    "end": "20:00",
    "location": "Gymnase Municipal",
    "level": "Tous niveaux",
    "coach": "Pierre Martin",
    "slots": 16,
    "available": 4
  }
]
```

## Configuration

### Variables d'environnement

Le fichier `.env` contient :

- `DATABASE_URL` - URL de la base de données (pour Prisma, par défaut: `file:./dev.db`)
- `PORT` - Port du serveur (par défaut: 5174)

### CORS

Le serveur est configuré pour accepter les requêtes depuis :
- http://localhost:5173 (frontend Vite)
- http://127.0.0.1:5173

## Architecture

### Structure des dossiers

```
server/
├── src/
│   └── index.js          # Point d'entrée de l'application
├── data/                 # Données JSON (simulation base de données)
│   ├── news.json        # Articles d'actualité
│   └── sessions.json    # Séances d'entraînement
├── prisma/              # Configuration Prisma (préparée)
│   ├── schema.prisma    # Schéma de base de données
│   └── seed.js          # Script de seeding
├── .env.example         # Exemple de configuration
├── package.json         # Dépendances et scripts
└── README.md           # Cette documentation
```

### Modèles de données

**News (Actualités)**
- `id`: Identifiant unique
- `title`: Titre de l'article
- `date`: Date de publication
- `author`: Auteur de l'article
- `body`: Contenu complet
- `excerpt`: Extrait court
- `featured`: Article mis en avant
- `published`: Article publié

**Session (Séances)**
- `id`: Identifiant unique
- `date`: Date et heure de la séance
- `start`: Heure de début
- `end`: Heure de fin
- `location`: Lieu de la séance
- `level`: Niveau requis
- `coach`: Entraîneur
- `slots`: Nombre de places total
- `available`: Places disponibles

## Notes techniques

- **Lecture seule** : L'API ne propose que des endpoints de lecture (GET)
- **Filtrage automatique** : Les séances passées sont automatiquement filtrées
- **CORS activé** : Configuré pour le développement local
- **Gestion d'erreurs** : Middleware de gestion des erreurs inclus
- **Prêt pour Prisma** : La structure est prête pour une migration vers Prisma/SQLite

## Migration vers Prisma

Quand les binaires Prisma seront disponibles :

1. Exécuter la migration initiale :
   ```bash
   npx prisma migrate dev --name init
   ```

2. Générer le client :
   ```bash
   npm run prisma:generate
   ```

3. Peupler la base de données :
   ```bash
   npm run prisma:seed
   ```

4. Modifier `src/index.js` pour utiliser Prisma au lieu des fichiers JSON.