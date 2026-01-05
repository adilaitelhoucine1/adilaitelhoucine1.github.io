# 🚀 Portfolio - Adil Ait Elhoucine

Portfolio interactif avec page de choix entre mode Tech et mode Professionnel.

## 🌐 Déploiement sur GitHub Pages

### Configuration initiale:

1. **Push le code sur GitHub:**
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

2. **Activer GitHub Pages:**
   - Va sur ton repo GitHub
   - Settings → Pages
   - Source: **GitHub Actions**

3. **Le site sera disponible à:**
   - `https://TON_USERNAME.github.io/Port-Folio/`

### Développement local:

```bash
# Installer les dépendances
npm install

# Lancer en dev
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## ✨ Fonctionnalités

- 🎯 Page de choix interactive (Tech Mode / Professional Mode)
- 🌍 Support multilingue (FR/EN/AR)
- 🎨 Animations avec Framer Motion
- 📱 Responsive design
- 🚀 Déploiement automatique avec GitHub Actions

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- i18next

## 📝 Notes

- Le projet est configuré pour GitHub Pages avec le base path `/Port-Folio/`
- Le déploiement est automatique à chaque push sur `main`
- Les fichiers sont construits dans le dossier `dist/`

