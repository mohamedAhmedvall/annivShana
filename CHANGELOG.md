# Changelog

Tous les changements notables du projet seront documentés ici.

## [2.0.0] - 2026-01-10

### 🎉 Refonte Complète - Architecture Moderne

#### ✨ Ajouts Majeurs

**Infrastructure de Développement**
- ⚡ Ajout de Vite pour le build et le hot-reload ultra-rapide
- 📦 Configuration npm avec scripts modernes
- 🔧 Configuration ESLint pour la qualité du code
- 💅 Configuration Prettier pour le formatage automatique
- 📝 EditorConfig pour la cohérence entre éditeurs
- 🔍 Configuration VS Code avec extensions recommandées

**Architecture du Code**
- 🏗️ Restructuration complète en architecture modulaire
- 📁 Séparation propre : HTML, CSS, JavaScript
- 🎯 Modules ES6+ avec import/export
- 🧩 Classes JavaScript organisées par fonctionnalité
- 🔄 Système de gestion d'état centralisé
- 🎨 CSS modulaire avec custom properties

**Modules JavaScript**
- `Countdown.js` - Gestion du compte à rebours
- `Calendar.js` - Logique du calendrier de l'Avent
- `MusicPlayer.js` - Contrôles audio
- `Modal.js` - Système de modal réutilisable
- `Effects.js` - Effets visuels (neige, traînée, cœurs)
- Utilitaires : `debounce.js`, `constants.js`

**Composants CSS**
- Structure base/ : variables, reset, animations
- Structure components/ : styles modulaires par composant
- Variables CSS centralisées pour le theming
- Animations réutilisables

**Performance**
- ⚡ Debouncing sur les événements fréquents (mousemove)
- 🎯 Throttling pour les animations
- 📦 Lazy loading des images
- 🗜️ Minification et tree-shaking en production
- 📊 Source maps pour le debugging

**Accessibilité**
- ♿ Support complet de la navigation au clavier
- 🏷️ ARIA labels et rôles appropriés
- 🎨 Contraste des couleurs optimisé (WCAG AA)
- 🔊 Annonces pour les lecteurs d'écran
- ⌨️ Raccourcis clavier (Escape pour fermer modal)

**Documentation**
- 📖 README.md complet avec architecture détaillée
- 🚀 QUICKSTART.md pour démarrer rapidement
- 🤝 CONTRIBUTING.md avec guidelines de contribution
- 📋 Commentaires JSDoc dans le code
- 📝 Documentation inline dans les CSS

**Qualité du Code**
- ✅ Linting ESLint configuré
- 💅 Formatage Prettier automatique
- 📏 Standards de code définis
- 🧪 Structure préparée pour les tests
- 🔒 Gestion d'erreurs robuste

#### 🔄 Modifications

**Structure du Projet**
```
Avant : Fichier HTML unique monolithique
Après : Architecture modulaire professionnelle
```

- Séparation des responsabilités (SoC)
- Code réutilisable et maintenable
- Imports ES6+ natifs
- Build optimisé pour la production

**Gestion des Assets**
- Déplacement dans `src/assets/`
- Organisation par type (images/, audio/)
- Chemins relatifs cohérents
- Optimisation automatique au build

**Configuration Git**
- `.gitignore` mis à jour
- Exclusion de node_modules, dist, cache
- Exclusion des fichiers IDE
- Conservation des assets essentiels

#### 🐛 Corrections

- ✅ Encodage HTML corrigé (caractères spéciaux)
- ✅ Date du compte à rebours mise à jour (2026)
- ✅ Gestion des erreurs audio améliorée
- ✅ Performance de la traînée de souris optimisée
- ✅ Memory leaks prévenus (cleanup des listeners)
- ✅ Compatibilité cross-browser améliorée

#### 🗑️ Suppressions

- Ancien fichier HTML monolithique (sauvegardé)
- Inline CSS et JavaScript
- Code dupliqué
- Dépendances inutiles

### 📦 Dépendances

**Production**
- `canvas-confetti` ^1.9.2 - Animations de confettis

**Développement**
- `vite` ^5.0.11 - Build tool moderne
- `eslint` ^8.56.0 - Linter JavaScript
- `prettier` ^3.2.4 - Formateur de code

### 🔧 Configuration

**Scripts npm disponibles**
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Vérifier le code
- `npm run lint:fix` - Corriger automatiquement
- `npm run format` - Formater le code

### 🚀 Migration depuis v1.0

**Pour les développeurs :**

1. **Sauvegarder l'ancien index.html** (déjà fait automatiquement)
2. **Installer les dépendances :**
   ```bash
   npm install
   ```
3. **Lancer le serveur de dev :**
   ```bash
   npm run dev
   ```

**Changements breaking :**
- Structure de fichiers complètement différente
- Nécessite Node.js pour le développement
- Build requis pour la production

**Avantages :**
- Développement 10x plus rapide avec HMR
- Code maintenable et scalable
- Outils modernes de qualité
- Performance optimisée

---

## [1.0.0] - 2025-12-XX

### Release Initiale

- Site d'anniversaire interactif basique
- Calendrier de l'Avent
- Compte à rebours
- Effets visuels (neige, traînée)
- Lecteur audio
- Carte flip 3D
- Fichier HTML unique avec CSS et JS inline

---

**Format basé sur [Keep a Changelog](https://keepachangelog.com/)**
**Versioning selon [Semantic Versioning](https://semver.org/)**
