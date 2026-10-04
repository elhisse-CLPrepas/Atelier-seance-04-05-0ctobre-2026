# Atelier séance 04 LN-IA
Challenge 100 Jours — Relance Automne 2026
Lundi 05 octobre 2026 · Module 01 · Horaire à confirmer
Prof. Abderrahman EL HISSE

## Démarrer
Décompresser le pack et ouvrir le dossier atelier-seance-04-LN-IA dans VS Code.
Installer Node.js 24 LTS, puis ouvrir un terminal à cette racine.
```sh
npm ci
npm run dev
```
Ouvrir http://localhost:5173. Ne pas ouvrir index.html par double-clic : les modules Vite nécessitent le serveur local.

## Ce que contient le site
Accueil et planning de 100 minutes, synthèse du module 01, présentation de 20 écrans, démonstration en 6 étapes, carnet candidat avec exports, ressources et conducteur formateur.
Le guide complet Word et PDF est dans public/ressources. Les modèles candidats sont disponibles séparément et dans un ZIP téléchargeable.

## Avec Codex
Copier le contenu de PROMPT-PILOTAGE-CODEX.md dans Codex ouvert sur ce dossier.
Les consignes locales sont dans AGENTS.md.

## Démonstration
```sh
npm run demo
```
Le script rejoue les fichiers préparés dans un nouveau dossier travail-local et produit une trace technique. Aucune IA n’est appelée. Pour un essai IA réel, utiliser le prompt de demonstration/02-prompt.md et conserver la réponse réellement obtenue.

## Contrôler et compiler
```sh
npm run check
npm run build
npm run preview
```
La sortie est dist. Une copie compilée est fournie dans le pack pour faciliter le contrôle.

## Publier
Suivre docs/DEPLOIEMENT-GITHUB-PAGES.md. Le workflow GitHub Actions est inclus. Le pack ne crée pas de dépôt et ne publie rien automatiquement depuis votre ordinateur.

## Données candidats
Le site n’envoie aucune saisie. Les réponses restent en mémoire jusqu’à un enregistrement local explicite ou un téléchargement. « Reprendre le brouillon enregistré » récupère le brouillon de ce navigateur. « Effacer mon brouillon » supprime les saisies et la sauvegarde locale après confirmation.
Les exports restent des fichiers locaux. Ne pas les copier dans public ou dist. Les fiches personnelles et signatures restent hors dépôt public. Un export ou une case cochée ne vaut pas validation du formateur.

## Structure
- src : contenu et interface du site
- public/assets : logo LN-IA
- public/modeles : modèles vierges
- public/ressources : guide Word, PDF, ZIP candidat et conducteur
- demonstration : scénario fictif complet
- prompts : six prompts pédagogiques
- docs : cadrage, sources, déploiement et compte rendu de contrôle
- scripts : vérifications et rejeu de démonstration
- .github/workflows : publication Pages

Pour modifier le texte des écrans et prompts : src/content.js. Pour l’interface : src/main.js et src/style.css. Les guides Word/PDF doivent être révisés si la progression pédagogique change.
