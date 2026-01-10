# Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! 🎉

## 📋 Prérequis

- Node.js 18+
- npm, yarn ou pnpm
- Git

## 🚀 Démarrage Rapide

1. **Fork et clone le repository**
   ```bash
   git clone https://github.com/votre-username/annivShana.git
   cd annivShana
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

## 🎯 Standards de Code

### JavaScript

- Utiliser ES6+ modules
- Préférer `const` et `let` à `var`
- Utiliser les arrow functions quand approprié
- Documenter les fonctions avec JSDoc
- Respecter la configuration ESLint

**Exemple:**
```javascript
/**
 * Description de la fonction
 * @param {string} param - Description du paramètre
 * @returns {boolean} Description du retour
 */
export function maFonction(param) {
  // Implementation
  return true;
}
```

### CSS

- Utiliser les CSS custom properties (variables)
- Mobile-first approach
- BEM naming convention pour les composants complexes
- Organiser les propriétés par ordre logique

**Exemple:**
```css
.component {
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  width: 100%;

  /* Visual */
  background: var(--primary);

  /* Typography */
  font-size: 1rem;

  /* Misc */
  transition: all 0.3s;
}
```

### Commits

Utiliser des messages de commit clairs et descriptifs :

```
type(scope): description courte

Description plus détaillée si nécessaire

Fixes #123
```

**Types:**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage, point-virgules manquants, etc.
- `refactor`: Refactoring de code
- `perf`: Amélioration de performance
- `test`: Ajout de tests
- `chore`: Tâches de maintenance

## 🧪 Tests

Avant de soumettre une PR :

```bash
# Vérifier le linting
npm run lint

# Vérifier le formatage
npm run format:check

# Tester le build
npm run build
```

## 📝 Pull Requests

1. Créer une branche depuis `main` :
   ```bash
   git checkout -b feature/ma-super-feature
   ```

2. Faire vos modifications et commiter :
   ```bash
   git add .
   git commit -m "feat: ajouter ma super feature"
   ```

3. Push vers votre fork :
   ```bash
   git push origin feature/ma-super-feature
   ```

4. Ouvrir une Pull Request avec :
   - Description claire des changements
   - Screenshots si pertinent
   - Référence aux issues liées

## 🐛 Reporter un Bug

Utiliser le template d'issue GitHub avec :
- Description du bug
- Steps to reproduce
- Comportement attendu vs actuel
- Screenshots/videos si possible
- Environnement (OS, navigateur, version)

## 💡 Proposer une Fonctionnalité

1. Vérifier qu'elle n'existe pas déjà (issues/PRs)
2. Ouvrir une issue avec le template "Feature Request"
3. Décrire le use case et la solution proposée
4. Attendre la discussion avant d'implémenter

## 📚 Structure des Modules

Chaque nouveau module doit :
- Être une classe ES6+
- Avoir une méthode `init()`
- Avoir une méthode `destroy()` si nécessaire
- Gérer ses propres event listeners
- Être documenté avec JSDoc

## 🎨 Ajout de Styles

Les nouveaux composants CSS doivent :
- Être créés dans `src/css/components/`
- Être importés dans `src/css/main.css`
- Utiliser les variables CSS existantes
- Être responsive

## ✅ Checklist avant PR

- [ ] Code formaté avec Prettier
- [ ] Pas d'erreurs ESLint
- [ ] Build réussit sans erreurs
- [ ] Testé sur différents navigateurs
- [ ] Testé sur mobile
- [ ] Documentation mise à jour
- [ ] Commit messages clairs
- [ ] PR description complète

## 🤝 Code de Conduite

- Être respectueux et constructif
- Accepter les critiques constructives
- Se concentrer sur le meilleur pour le projet

## 📞 Questions ?

N'hésitez pas à ouvrir une issue avec le label "question" !

Merci de contribuer ! ❤️
