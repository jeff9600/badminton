# Backend (Express + Prisma)

API minimale pour servir les actus (news) et les séances (sessions) du club, en lecture seule.

## Prérequis
- Node 18+ (recommandé 20+)
- Aucune base externe requise (SQLite embarquée)

## Installation & lancement

1. Copier l’exemple d’environnement:
   ```bash
   cd server
   cp .env.example .env
   ```
2. Installer les dépendances:
   ```bash
   npm i
   ```
3. Initialiser la base et le client Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Peupler la base avec des données de test:
   ```bash
   npm run prisma:seed
   ```
5. Démarrer le serveur en dev:
   ```bash
   npm run dev
   ```
   - Le serveur écoute par défaut sur le port `5174` (configurable via `PORT`).
   - CORS autorisé pour `http://localhost:5173` (frontend Vite).

## Endpoints

- `GET /api/health`  
  Renvoie `{ status: "ok", uptime, timestamp }`.

- `GET /api/news?limit=3`  
  Liste des actualités publiées, triées par date décroissante. Supporte `?limit`.

- `GET /api/sessions?limit=2`  
  Liste des prochaines séances (date >= aujourd’hui), triées par date croissante. Supporte `?limit`.

## Notes
- Base SQLite locale (fichier `prisma/dev.db`).
- Le seed efface les tables avant d’insérer des données de démonstration (idempotent).
- Aucune écriture via l’API (lecture seule).