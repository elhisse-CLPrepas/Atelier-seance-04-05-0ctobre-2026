# Prompt de pilotage dans VS Code avec Codex

Tu travailles dans le projet atelier-seance-04-LN-IA.
Tu assistes le Prof. Abderrahman EL HISSE pour la séance 04 du lundi 05 octobre 2026, Module 01 du Challenge 100 Jours — Relance Automne 2026.

## Mission
Inspecter, exécuter localement, vérifier puis préparer ce site Vite pour un dépôt GitHub et GitHub Pages. Poursuivre la production pédagogique à partir de l’existant.

## Commence par lire
AGENTS.md, README.md, docs/CAHIER-ATELIER.md, docs/DEPLOIEMENT-GITHUB-PAGES.md, docs/SOURCES-ET-ADAPTATIONS.md, src/content.js et le guide Word dans public/ressources.
Ne recommence pas le site à zéro. Conserve le logo et la progression des séances 01 à 04.

## Exécution locale
1. Vérifie le dossier courant, git status, la version de Node et package-lock.json.
2. Installe avec npm ci. Si Node est incompatible, explique la mise à niveau requise avant de continuer.
3. Lance npm run check, npm run build puis npm run dev.
4. Vérifie l’affichage à http://localhost:5173. Teste les sept vues, les vingt écrans de présentation, la démonstration, les exports, la sauvegarde locale et les téléchargements.
5. Teste aussi npm run preview après le build. Corrige les erreurs constatées, puis relance les seuls contrôles concernés.

## Atelier pratique
Exécute npm run demo et lis le journal technique produit. Cela rejoue les fichiers préparés, sans appel IA. Présente clairement cette limite.
Pour une véritable nouvelle production assistée : lis demonstration/01-cadrage.md et demonstration/02-prompt.md, crée une nouvelle version dans un dossier travail-local distinct, vérifie le texte contre les entrées et conserve les corrections. N’écrase pas les exemples.
Ne marque jamais une relecture, une signature ou une preuve comme réalisée si elle ne l’est pas.

## Compléter la production
Ajoute ou révise les contenus à partir de la demande précise du formateur. Mets à jour le guide et les ressources correspondantes si la progression change. Préserve l’autonomie du site, les chemins relatifs, la navigation par hash et la séparation du privé.
Les fiches d’identification réelles, signatures, coordonnées, secrets et travaux personnels restent hors du dépôt public. Ne copie pas travail-local dans public ou dist.

## Préparation GitHub
Nom prévu : atelier-seance-04-LN-IA.
Vérifie l’authentification et l’existence du dépôt dans le compte choisi par l’utilisateur. N’invente aucune URL publiée. Si un dépôt existe, inspecte-le et préserve son historique.
Prépare les commits en sélectionnant les fichiers utiles après git status et lecture du diff. Ne fais pas de git add global aveugle. Ne fais ni force push, ni suppression distante.
Le workflow .github/workflows/deploy.yml est fourni. Dans Settings > Pages, la source doit être GitHub Actions. La branche du workflow doit correspondre à la branche réellement utilisée.
Si la publication est autorisée dans la session, effectue le push et vérifie le workflow et l’URL retournée. Sinon, présente les changements, les tests et la commande de publication pour une décision finale.

## Compte rendu
Donne les fichiers changés, les contrôles réellement exécutés, l’adresse locale et l’état du déploiement. Sépare terminé, non vérifié et restant à faire. Une compilation réussie ne prouve pas qu’un site est publié.
