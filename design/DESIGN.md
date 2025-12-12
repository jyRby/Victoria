# DESIGN – Victoria

Ce document présente l’architecture, la logique de conception et les éléments visuels prévus pour l’application Victoria.

---

# 🎨 1. Design UX/UI

## 🎯 Principes directeurs
- **Clarté** : informations faciles à consulter rapidement
- **Émotion** : couleurs et styles associés à l’équipe
- **Gamification** : badges, prédictions, votes
- **Communauté** : interaction simple (notes + likes)

## 🧩 Écrans principaux
- Accueil : résumé des prochains matchs + derniers résultats
- Horaire complet
- Détails d’un match (play-by-play, stats)
- Profil de joueuse
- Vestiaire d’après-match (notes, likes, vote MVP)
- Section mini-jeux (prédiction)
- Classement des meilleurs prédicteurs
- Profil utilisateur + badges

## 🖼️ Wireframes (Sprint 1)
- Page d’accueil  
- Liste des matchs  
- Détail d’un match  
- Page de stats d’une joueuse  
- Tableau de prédictions  
- Vestiaire (mots + likes)  

*(Les visuels réels seront ajoutés dans `/design/wireframes`)*

---

# 🏗️ 2. Architecture d’ensemble

## Architecture globale


- Communication mobile ↔ backend en REST
- Fonctions serverless Vercel pour :
  - notifications FCM
  - calcul des points des prédictions
  - modération
- S3 pour média (photos, avatars, etc.)

---

# 🗂️ 3. Modules fonctionnels

## Auth
- Login email / Google
- Gestion token Firebase
- Middleware backend de validation

## Horaire & matches
- Récupération via API externe  
- Mise en cache (React Query)
- Play-by-play si accessible

## Statistiques
- Statistiques équipe
- Statistiques joueuses
- Graphiques simples (RN Chart Kit)

## Vestiaire
- Notes courtes (max 150 caractères)
- Like en temps réel
- Classement automatique “Top 3 échos”

## Mini-Jeux de prédiction
- Score du match
- Meilleure pointeuse
- % arrêt gardienne
- Historique personnel
- Leaderboard global

## Gamification
- Système de badges progressifs
- Points gagnés → actions (vote, participation, prédictions)

## Admin
- Signalement de contenu
- Dashboard minimal
- Suppression / restauration de posts

---

# 🧪 4. Standards techniques

## Definition of Ready (DoR)
- Description claire  
- Critères d’acceptation  
- Dépendances identifiées  
- Estimation story points  
- DevOps environnement défini  

## Definition of Done (DoD)
- Code revu  
- Tests unitaires + intégration  
- Documentation minimale  
- Tests d’acceptation passés  
- Déploiement staging  
- CI verte  

---

# 🚀 5. Roadmap visuelle

- Sprint 1 : Design + fondations technos  
- Sprint 2 : Horaire + stats + vestiaire  
- Sprint 3 : Système de vote + prédictions  
- Sprint 4 : Badges + admin + notifications  

---

# 📎 Annexes
À venir :  
- Diagrammes d’activités  
- Diagrammes de séquence  
- Modèle de données