# 🚀 Démarrage Rapide

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site s'ouvrira automatiquement sur **http://localhost:3000**

### 3. Build pour la production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 🎯 Commandes Essentielles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement avec hot-reload |
| `npm run build` | Crée un build optimisé pour la production |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run lint` | Vérifie la qualité du code JavaScript |
| `npm run lint:fix` | Corrige automatiquement les erreurs de linting |
| `npm run format` | Formate le code avec Prettier |

## 📝 Personnalisation Rapide

### Changer la date d'anniversaire
Éditer `src/js/utils/constants.js` :
```javascript
export const BIRTHDAY_DATE = 'December 26, 2026 00:00:00';
```

### Modifier les messages du calendrier
Éditer le tableau `GIFTS` dans `src/js/utils/constants.js`

### Changer les couleurs
Éditer les variables dans `src/css/base/variables.css` :
```css
:root {
  --primary: #ff7eb3;
  --secondary: #ff758c;
  --accent: #ffd700;
}
```

### Remplacer les images
- Photo principale : `src/assets/images/IMG_1041.jpeg`
- Autres images : `src/assets/images/`

### Changer la musique
Remplacer `src/assets/audio/background-music.mp3`

## 🔥 Fonctionnalités

✅ **Hot Module Replacement (HMR)** - Les changements s'appliquent instantanément
✅ **Auto-formatage** - Code formaté automatiquement à la sauvegarde (si VS Code configuré)
✅ **Linting en temps réel** - Détection des erreurs pendant le développement
✅ **Build optimisé** - Minification, tree-shaking, code splitting automatiques
✅ **Source maps** - Debugging facile même en production

## 🐛 Dépannage

### Le serveur ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreurs de build
```bash
# Vérifier le linting
npm run lint

# Nettoyer le cache de Vite
rm -rf node_modules/.vite
npm run build
```

### La musique ne se lance pas
- Vérifier que le fichier audio existe dans `src/assets/audio/`
- Certains navigateurs bloquent l'autoplay audio (nécessite une interaction utilisateur)

## 💡 Astuces

- Utilisez **VS Code** avec les extensions recommandées (voir `.vscode/extensions.json`)
- Les modifications CSS sont appliquées instantanément sans rafraîchir la page
- Le build optimise automatiquement les images et la musique
- Utilisez `console.log` en dev, ils seront automatiquement supprimés en production

## 📚 Documentation Complète

Pour plus de détails, consultez le [README.md](./README.md) complet.

## 🆘 Besoin d'aide ?

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guide de contribution
- [Issues GitHub](https://github.com/votre-repo/issues) - Reporter un bug
- Documentation Vite : https://vitejs.dev/

---

Bon développement ! 🎉
