# 🎉 Site d'Anniversaire Shana

Site d'anniversaire interactif avec calendrier de l'Avent, compte à rebours, et effets visuels immersifs.

## 🚀 Architecture Moderne

Ce projet utilise une architecture moderne et scalable pour une expérience développeur optimale :

- **Build Tool**: Vite pour un développement ultra-rapide avec HMR (Hot Module Replacement)
- **Modularité**: Code JavaScript organisé en modules ES6+ réutilisables
- **CSS Architecture**: Styles modulaires avec CSS custom properties
- **Performance**: Debouncing, throttling, et lazy loading des ressources
- **Qualité**: ESLint et Prettier pour un code cohérent et maintenable
- **Accessibilité**: Support complet ARIA, navigation clavier, et contraste optimisé

## 📁 Structure du Projet

```
annivShana/
├── src/
│   ├── js/
│   │   ├── main.js                    # Point d'entrée principal
│   │   ├── modules/                   # Modules métier
│   │   │   ├── Countdown.js          # Compte à rebours
│   │   │   ├── Calendar.js           # Calendrier de l'Avent
│   │   │   ├── MusicPlayer.js        # Lecteur audio
│   │   │   ├── Modal.js              # Système de modal
│   │   │   └── Effects.js            # Effets visuels
│   │   └── utils/                     # Utilitaires
│   │       ├── debounce.js           # Performance utilities
│   │       └── constants.js          # Configuration centralisée
│   ├── css/
│   │   ├── main.css                  # Point d'entrée CSS
│   │   ├── base/                     # Styles de base
│   │   │   ├── variables.css        # Variables CSS
│   │   │   ├── reset.css            # Reset CSS
│   │   │   └── animations.css       # Animations
│   │   └── components/               # Styles des composants
│   │       ├── header.css
│   │       ├── countdown.css
│   │       ├── card.css
│   │       ├── calendar.css
│   │       ├── modal.css
│   │       └── controls.css
│   └── assets/
│       ├── images/                   # Images
│       └── audio/                    # Fichiers audio
├── public/
│   └── index.html                    # HTML principal
├── dist/                             # Build de production (généré)
├── package.json                      # Dépendances
├── vite.config.js                    # Configuration Vite
├── .eslintrc.json                    # Configuration ESLint
├── .prettierrc                       # Configuration Prettier
└── README.md                         # Documentation
```

## 🛠️ Installation

### Prérequis

- Node.js 18+ et npm/yarn/pnpm

### Étapes

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera disponible sur http://localhost:3000
```

## 📝 Scripts Disponibles

```bash
# Développement avec hot-reload
npm run dev

# Build de production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code JavaScript
npm run lint

# Corriger automatiquement les erreurs de lint
npm run lint:fix

# Formater le code avec Prettier
npm run format

# Vérifier le formatage
npm run format:check
```

## 🎨 Fonctionnalités

### 🎄 Calendrier de l'Avent Interactif
- 19 jours de surprises (du 8 au 26 décembre)
- Système de validation : ouverture uniquement à la bonne date
- Persistence des jours ouverts (localStorage)
- Animations et confettis lors de l'ouverture

### ⏱️ Compte à Rebours
- Mise à jour en temps réel
- Affichage jusqu'au jour J
- Message spécial le jour de l'anniversaire

### 🎵 Lecteur Audio
- Musique d'ambiance
- Contrôles intuitifs (play/pause)
- Gestion des erreurs gracieuse

### 🎴 Carte 3D Interactive
- Effet flip 3D au clic
- Support clavier (accessibilité)
- Style Polaroid

### ✨ Effets Visuels
- Neige animée
- Traînée de souris
- Père Noël volant
- Coeurs flottants
- Confettis de célébration

## 🔧 Configuration

### Modifier la Date d'Anniversaire

Éditez `src/js/utils/constants.js` :

```javascript
export const BIRTHDAY_DATE = 'December 26, 2026 00:00:00';
```

### Personnaliser les Messages

Modifiez le tableau `GIFTS` dans `src/js/utils/constants.js`.

### Thème et Couleurs

Les variables CSS sont centralisées dans `src/css/base/variables.css` :

```css
:root {
  --primary: #ff7eb3;
  --secondary: #ff758c;
  --accent: #ffd700;
  /* ... */
}
```

## 🎯 Optimisations de Performance

- **Debouncing** sur les événements fréquents (mousemove)
- **Throttling** pour les animations
- **Lazy loading** des images
- **Code splitting** automatique par Vite
- **Minification** en production
- **Source maps** pour le debugging

## ♿ Accessibilité

- Support complet du clavier
- ARIA labels et rôles appropriés
- Contraste des couleurs optimisé (WCAG AA)
- Focus management dans le modal
- Messages annoncés aux lecteurs d'écran

## 🏗️ Patterns Architecturaux Utilisés

### Module Pattern
Chaque fonctionnalité est encapsulée dans sa propre classe :
- Separation of Concerns
- Réutilisabilité
- Testabilité

### Observer Pattern
Événements DOM gérés de manière découplée :
- Event listeners organisés
- Cleanup approprié
- Prévention des memory leaks

### Singleton Pattern
L'application principale (`App`) est une instance unique qui orchestre tous les modules.

## 🧪 Tests (à venir)

Structure préparée pour l'ajout de tests :
- Unit tests avec Vitest
- E2E tests avec Playwright
- Visual regression tests

## 📦 Build de Production

```bash
npm run build
```

Le build optimisé sera généré dans le dossier `dist/` :
- HTML minifié
- CSS minifié et combiné
- JavaScript minifié avec tree-shaking
- Assets optimisés
- Source maps pour debugging

## 🚀 Déploiement

Le dossier `dist/` peut être déployé sur :
- Netlify
- Vercel
- GitHub Pages
- Tout serveur statique

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - Libre d'utilisation et de modification

## 🙏 Remerciements

- [Vite](https://vitejs.dev/) - Build tool
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) - Animations de confettis
- [Font Awesome](https://fontawesome.com/) - Icônes
- [Google Fonts](https://fonts.google.com/) - Polices Pacifico et Poppins

---

Fait avec ❤️ pour Shana
