# Préparer et publier sur GitHub Pages

## 1. Vérifier localement
Installer Node.js 24 LTS ou une version compatible avec le champ engines.
Dans le terminal VS Code ouvert à la racine :
```sh
npm ci
npm run check
npm run build
npm run preview
```
Ouvrir l’adresse locale affichée. Le dossier dist contient le site compilé.
`vite preview` sert au contrôle local, pas à l’hébergement de production.

## 2. Préparer le dépôt
Créer un dépôt nommé atelier-seance-04-LN-IA dans votre compte GitHub ou choisir le dépôt voulu. Son nom peut changer : la configuration utilise des chemins relatifs et des routes hash.
Ouvrir le contrôle de source de VS Code. Initialiser Git si nécessaire, inspecter les fichiers et sélectionner les sources, public, scripts, docs, demonstration, prompts, package.json, package-lock.json, vite.config.js, index.html, README.md, AGENTS.md, .gitignore et .github/workflows/deploy.yml.
Ne pas ajouter node_modules, travail-local, fiches remplies ou secrets. Inspecter le diff avant le commit. Publier le dépôt dans le compte souhaité.

## 3. Activer Pages
Dans le dépôt, ouvrir Settings > Pages > Build and deployment > Source > GitHub Actions.
Le workflow fourni cible main. Adapter la branche si votre dépôt en utilise une autre.
Ouvrir Actions et exécuter « Publier l atelier LN-IA », ou pousser un commit sur main après activation.
Le workflow installe via npm ci, contrôle, compile et publie dist.

## 4. Vérifier après publication
Copier l’URL réellement affichée par GitHub. Tester les vues, une actualisation de #atelier, le logo, le guide Word, le PDF, les modèles et le livrable de démonstration.
La présence d’un fichier workflow ne signifie pas que le site est en ligne.

## Chemins
`base: './'` et la navigation hash permettent d’héberger le pack sous un sous-dossier Pages sans chemin absolu vers un nom de dépôt. Ne pas remplacer les liens internes par des chemins commençant par /.

## Documentation technique
- https://vite.dev/guide/
- https://vite.dev/guide/static-deploy.html
Documentation consultée le 04 octobre 2026. Vite 8.3.2 est fixé dans package.json et le lockfile.
