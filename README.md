# Victoria – Application Mobile (En Développement)

Bienvenue dans le dépôt officiel du projet **Victoria**, une application mobile destinée aux fans de l’équipe *La Victoire de Montréal*.  
L’objectif du projet est d’unifier l’information officielle (horaire, alignement, statistiques) et le contenu généré par les fans afin de bâtir une plateforme interactive et gamifiée.

---

## 📌 Statut du projet

🚧 **Projet en développement actif**  
Les livrables sont développés en suivant une approche Agile/Scrum et un MVP clair.

---

## 📅 Suivi de production

| Phase | Dates | Description |
|-------|--------|-------------|
| **Sprint 1** | 4 déc – 18 déc | Modélisation, wireframes, mise en place du repo, configuration CI/CD, base RN + backend, connexion API externe, authentification |
| **Sprint 2** | 19 déc – 8 jan | Module horaire, stats équipe/joueuses, vestiaire d’après-match |
| **Sprint 3** | 8 jan – 14 jan | Votes patin/bâton/rondelle d’or + système de prédiction |
| **Sprint 4** | 15 jan – 21 jan | Gamification (badges), outils admin, notifications |
| **Tests** | 21 jan | Tests fonctionnels + d’acceptation |
| **Déploiement** | 22 jan | Build final + publication |
| **Présentation** | 23 jan | Présentation |

---

## 🎯 Vision du produit

Victoria vise à offrir une **plateforme unifiée, interactive et communautaire** aux fans :

- Horaire complet + détails des matchs  
- Statistiques de l’équipe et des joueuses  
- Vestiaire d’après-match (notes, likes, votes MVP)  
- Mini-jeux : prédiction du score, meilleure pointeuse, pourcentage d’arrêt  
- Système de badges et gamification  

Contrairement aux médias sociaux dispersés, Victoria centralise tout le fandom dans une seule app mobile.

---

## 🧩 Vision du MVP

- Authentification simple (email / Google)
- Horaire de la saison + détails des matchs
- Statistiques essentielles des joueuses
- Système minimal de prédiction
- Vestiaire d’après-match (notes + likes + vote MVP)
- Badges + profil utilisateur
- Notifications optionnelles

---

## 🛠️ Stack technologique

'''mer

### **Frontend – Mobile**
- React Native  
- TypeScript  
- Redux Toolkit / React Query  
- Nativewind UI + Gluestack

### **Backend**
- Node.js + Express  
- JWT  
- API externe : *pwhl-scrapper / league-stat*

### **Base de données**
- PostgreSQL (Supabase)
- Stockage médias : S3 (DigitalOcean Spaces)

### **Infrastructure**
- Vercel (backend + serverless)
- CI/CD : GitHub Actions

### **Autre**
- Tests : Jest, RNTL  
- Linting : Prettier  

---

## 📄 Documents

- [DESIGN.md](DESIGN.md) — Architecture, diagrammes, UX, design system  
- [USER_STORIES.md](USER_STORIES.md) — Backlog complet + épics + points  

---

## 📜 Licence

Ce projet sera publié sous licence MIT
