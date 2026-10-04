# Contrôle ORIA du pack séance 04

Date du contrôle : 04 octobre 2026, Africa/Casablanca.

Le README a été lu et le prompt PROMPT-PILOTAGE-CODEX.md exécuté dans les limites indiquées ci-dessous. Les sources, scripts, configuration, consignes locales et texte complet du guide Word ont été examinés. La progression pédagogique existante a été conservée.

## Vérifié pendant cette session

- Node v24.12.0 et npm 11.6.2 disponibles ; installation npm ci réussie, audit npm : aucune vulnérabilité signalée.
- npm run check réussi : 16 fichiers essentiels, 20 écrans, planning de 100 minutes, 6 prompts, fiche préparée de 154 mots, 15 ressources publiques.
- npm run build réussi avec Vite 8.3.2 ; dist régénéré.
- npm run dev et npm run preview démarrés, respectivement sur http://127.0.0.1:5173/ et http://127.0.0.1:4173/.
- 16 réponses HTTP 200 : accueil et sept ressources sur chacun des deux serveurs. Détail dans controle-http-oria-2026-10-04.json. Cela contrôle leur disponibilité, pas leur affichage ou leur ouverture dans Word.
- Archive candidat inspectée : dix entrées, dont les modèles vierges et le fichier LISEZ-MOI.
- npm run demo exécuté ; sept copies et leurs empreintes vérifiées par le script. Journal relu dans travail-local/demo-2026-10-04T16-58-49-767Z/journal-technique.md. Aucun appel IA durant ce rejeu.
- Nouvelle production assistée créée séparément dans travail-local/production-oria-2026-10-04, à partir du cadrage et du prompt fictif fournis ; contrôle consigné dans ce dossier privé exclu de Git.
- Lecture du code : sauvegarde locale explicite, reprise filtrée, effacement avec confirmation, valeurs utilisateur échappées avant insertion HTML, champs vides signalés dans les exports. Aucun appel distant de collecte repéré dans le code applicatif examiné. Ces observations ne remplacent pas un test interactif.
- Git initialisé localement sur main. Le workflow fourni cible main et la configuration Vite conserve les chemins relatifs.
- Authentification GitHub disponible sur elhisse-CLPrepas. La recherche du dépôt elhisse-CLPrepas/atelier-seance-04-LN-IA n’a pas trouvé de dépôt accessible. Aucun dépôt distant créé, aucun push ni déploiement réalisés.

## Non vérifié pendant cette session

La connexion au navigateur a été tentée ; aucun navigateur pilotable disponible. Les sept vues, vingt écrans, clavier, notes, plein écran, copie, quatre exports, sauvegarde/reprise/effacement et affichages mobile/ordinateur restent à tester dans un navigateur. Le contenu du Word a été extrait et lu ; sa mise en page et celle du PDF n’ont pas été vérifiées visuellement ici. Les anciens rapports CONTROLE-LIVRAISON.md et controle-navigateur.json sont des déclarations fournies avec le pack, pas les résultats de cette session. Les liens externes des séances précédentes et l’hébergement en sous-dossier n’ont pas été retestés.

## État de préparation

Aucune erreur bloquante relevée par les contrôles exécutés. Aucun changement pédagogique ou applicatif nécessaire établi. Le support reste à apprécier par le formateur ; la publication distante nécessite une décision explicite dans la session conformément au prompt de pilotage. Avant publication, terminer les vérifications interactives et visuelles, puis relire les fichiers sélectionnés et leur diff. Les travaux locaux, node_modules et dist sont exclus du dépôt.

## Fichiers produits

- docs/CONTROLE-ORIA-2026-10-04.md : ce compte rendu.
- docs/controle-http-oria-2026-10-04.json : résultats HTTP.
- travail-local/demo-2026-10-04T16-58-49-767Z/ : rejeu technique.
- travail-local/production-oria-2026-10-04/ : nouvelle fiche fictive et trace de contrôle.
- dist/ : compilation locale régénérée.
- .git/ : dépôt local initialisé, sans commit ni publication à ce stade.

## Liaison au dépôt communiqué ensuite

Le dépôt https://github.com/elhisse-CLPrepas/Atelier-s-ance-04_05-0ctobre-2026 a été fourni par le formateur et inspecté : il est vide. Le remote origin local pointe désormais vers ce dépôt. Les 53 fichiers utiles ont été sélectionnés explicitement ; node_modules, dist et travail-local restent exclus. Le premier commit local prépare la synchronisation. Aucun push ni publication Pages n’a encore été effectué ; les limites des tests visuels et interactifs restent applicables.

## Intégration de l’affiche et nettoyage avant envoi

Le 04 octobre 2026, le formateur a demandé l’intégration de son affiche et l’envoi de la production vers le dépôt communiqué. L’affiche originale est conservée localement ; sa copie identique public/assets/affiche-seance-04-LN-IA.png est intégrée à l’accueil avec texte alternatif, ouverture en grand et téléchargement. Le style prévoit une disposition sur une colonne sur petit écran.

Le cas fictif est nommé « Madame Samira » dans le site, les vingt écrans concernés, les prompts, les fiches, les sources du guide et les guides Word/PDF. Le nettoyage a aussi été appliqué aux copies exclues de Git dans travail-local, dont production-oria-2026-10-04/fiche-accueil-v1.md. Le journal de rejeu conserve les empreintes initiales comme historique et ajoute celles des copies corrigées ; la copie du prompt de production est signalée comme anonymisée après production.

Contrôles de cette révision : npm run check et npm run build réussis ; guide Word et PDF sans nom de famille par contrôle du contenu ; copie publique de l’affiche identique à l’original. Les pages PDF modifiées 9 à 11 ont été inspectées visuellement. Aucun navigateur pilotable n’est disponible ; affichage interactif et rendu Word restent non vérifiés. La demande concernant les « permissions de chantier » nécessite l’identification des passages visés ; une clarification a été demandée sans modifier arbitrairement les règles de confidentialité ou de validation.

Le dépôt distant était toujours vide avant cet envoi. GitHub Pages n’est pas configuré au moment de cette vérification (API Pages : 404). L’envoi Git autorisé ne constitue pas une preuve de publication d’un site.

## Simplification précisée et envoi Git

Après clarification du formateur, les instructions npm et de rejeu dans VS Code ont été retirées de la démonstration visible et du guide pédagogique Word/PDF. L’écran des outils et la synthèse du module présentent désormais le dossier personnel et le binôme. Le conducteur indique simplement d’ouvrir le site. Les instructions d’installation et de déploiement restent dans le README et la documentation technique. Les sept vues et les vingt écrans sont conservés, ainsi que les consignes de confidentialité, de sauvegarde et de validation humaine.

Le commit 714b130 a été envoyé sur origin/main. Le workflow lancé par cet envoi a échoué à actions/configure-pages, parce que GitHub Pages n’est pas activé (run 37224960513). Aucune publication du site n’est attestée. Les corrections de simplification font l’objet d’un envoi complémentaire. Les tests de navigateur et de rendu Word restent non vérifiés dans cette session.
