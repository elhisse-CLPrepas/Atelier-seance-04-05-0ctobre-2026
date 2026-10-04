export const meta = {
  title: 'Produire, contrôler et s’engager',
  date: 'Lundi 05 octobre 2026',
  module: 'Module 01 · Cadrage et prise de conscience',
  author: 'Prof. Abderrahman EL HISSE',
  version: '1.0',
  status: 'Support préparé · validation pédagogique par le formateur',
};

export const journey = [
  {n:'01',date:'25 septembre',title:'Entrer dans le Challenge',text:'Choisir un projet motivant, comprendre la méthode et préparer son dossier.',proof:'Fiche de départ et premières notes.'},
  {n:'02',date:'28 septembre',title:'Définir son objectif',text:'Préciser le public, le besoin et trois productions possibles.',proof:'Objectif personnel et liste des premiers livrables.'},
  {n:'03',date:'02 octobre',title:'Choisir ses usages IA',text:'Relier trois usages à des livrables, des risques et des contrôles humains.',proof:'Carte personnelle des usages IA.'},
  {n:'04',date:'05 octobre',title:'Produire et s’engager',text:'Tester un usage, corriger un livrable et organiser une pratique réaliste.',proof:'Livrable corrigé, engagement et portfolio de preuves.'}
];
export const method = [
 ['Besoin réel','À qui et à quoi servira votre production ?'],
 ['Cadrage','Public, entrées, limites et résultat attendu.'],
 ['Prompt','Une consigne qui exprime le besoin et les critères.'],
 ['Production','Une première version identifiable.'],
 ['Contrôle humain','Faits, cohérence, utilité, confidentialité.'],
 ['Correction','Une erreur repérée et une amélioration expliquée.'],
 ['Documentation','Conserver le prompt et les choix effectués.'],
 ['Preuve','Enregistrer, rouvrir et retrouver le fichier.']
];
export const schedule = [
 ['10 min','Choisir l’essai','Objectif reformulé et premier fichier choisi.'],
 ['15 min','Formaliser l’engagement','Livrable, rythme réaliste, contrôle et preuve prévus.'],
 ['30 min','Produire une première version','10 minutes de démonstration, puis 20 minutes de production candidat.'],
 ['20 min','Contrôler et corriger','Conserver un passage avant et après correction.'],
 ['15 min','Relire à deux','Partager uniquement un extrait autorisé et noter le retour.'],
 ['10 min','Classer et préparer la suite','Rouvrir le fichier et compléter la preuve du module 01.']
];
export const prompts = [
 {title:'Cadrer mon premier essai',file:'01-cadrer-mon-essai.md',text:`Tu es mon assistant de cadrage LN-IA.
Mon activité : [activité]. Mon public : [public].
Mon objectif : [objectif]. Mon usage IA choisi : [usage].
Mes informations confirmées : [entrées autorisées].
Mes contraintes : [temps, format, confidentialité].
Propose un premier livrable réalisable dans l’atelier.
Indique son nom de fichier, ses rubriques et trois critères de contrôle.
N’invente aucune donnée. Marque les manques « à confirmer ».
Si un manque empêche de produire, pose au plus trois questions.
Je conserve la décision finale.`},
 {title:'Rédiger mon engagement',file:'02-rediger-mon-engagement.md',text:`Tu es mon assistant pédagogique LN-IA.
Mon objectif personnel : [objectif].
Mon premier livrable : [livrable].
Mon échéance choisie : [date ou à confirmer].
Mon rythme réaliste : [fréquence et durée].
Le contrôle que je réaliserai : [contrôle].
La preuve à conserver : [preuve].
Rédige à la première personne quatre rubriques : mon engagement,
ma responsabilité, mes preuves, ma régularité.
Préserve mon intention. N’invente ni disponibilité ni signature.
Ne promets aucun résultat garanti. Je relis et j’approuve le texte.`},
 {title:'Produire mon brouillon',file:'03-produire-mon-brouillon.md',text:`Tu es mon assistant de production.
Besoin : [besoin]. Public : [public].
Livrable : [type, longueur et nom du fichier].
Informations utilisables : [entrées confirmées et autorisées].
Rubriques attendues : [rubriques].
Contraintes : [style, données exclues, format].
Produis une première version en français simple.
N’ajoute ni témoignage, ni prix, ni chiffre, ni certification non fournis.
Sépare les informations manquantes du texte proposé.
Statut : brouillon à relire. Ne publie et n’envoie rien.`},
 {title:'Contrôler et corriger',file:'04-controler-et-corriger.md',text:`Voici mon besoin et mes critères : [cadrage].
Voici les informations confirmées : [entrées].
Voici mon brouillon : [texte].
Repère les inventions, incohérences et données sensibles inutiles.
Présente un tableau : passage, problème, correction proposée,
vérification à réaliser par moi.
Propose ensuite une version corrigée sans ajouter de fait.
Ne déclare pas le document validé à ma place.`},
 {title:'Organiser les preuves',file:'05-organiser-les-preuves.md',text:`Voici les fichiers que j’ai réellement produits : [liste].
Voici les contrôles que j’ai réellement faits : [observations].
Aide-moi à préparer preuves-module-01.md.
Distingue : présent, à compléter, à relire, prêt pour relecture.
N’affirme pas avoir ouvert un fichier auquel tu n’as pas accès.
Ne coche pas une preuve manquante. Sépare privé et partageable.
Pour chaque preuve : fichier, date réelle, contrôle et prochaine action.
La validation pédagogique finale appartient au formateur.`},
 {title:'Préparer le module 02',file:'06-preparer-le-module-02.md',text:`Je termine le module 01 du Challenge 100 Jours LN-IA.
Mon objectif : [objectif]. Mon livrable : [fichier].
Mon prompt réellement utilisé : [prompt].
Ma difficulté : [difficulté]. Mon contrôle humain : [contrôle].
Propose une amélioration de mon prompt en explicitant le contexte,
la tâche, les contraintes, le format et les critères de réussite.
Indique une question à poser au formateur et une prochaine action.
N’invente pas de programme ou de date de séance.`}
];

export const demo = {
 person:'Madame Samira', activity:'Coach en organisation',
 label:'Cas fictif · scénario préparé · aucun appel à une IA depuis ce site',
 inputs:`Public : indépendants.
Activité : accompagnement à l’organisation du travail.
Format : rendez-vous à distance.
Objectif du premier échange : clarifier les priorités et choisir une première action.
À préparer : une priorité et un exemple de difficulté sans données de tiers.
Non fournis : tarifs, durée du rendez-vous, coordonnées, résultats chiffrés, certification.`,
 prompt:`À partir des seules informations confirmées ci-dessous,
rédige une fiche d’accueil de 150 à 220 mots pour le premier échange
avec Madame Samira, coach en organisation.
Public : indépendants. Échange à distance.
Objectif : clarifier les priorités et choisir une première action.
À préparer : une priorité et un exemple de difficulté sans données de tiers.
Structure : pour qui, objectif, préparation, déroulement, suite.
N’invente ni prix, ni durée, ni témoignage, ni certification.
N’annonce aucun résultat garanti. Signale les modalités à confirmer.
Fichier : fiche-accueil-v1.md. Statut : brouillon à relire.`,
 draft:`Bienvenue chez Madame Samira, coach certifiée en organisation.
Notre méthode vous garantit 30 % de productivité en plus en sept jours.
Votre premier rendez-vous à distance dure 60 minutes et coûte 500 DH.
Envoyez votre liste de clients et leurs numéros pour préparer notre échange.
Nous choisirons ensuite vos priorités et une première action.`,
 corrections:[
  ['« coach certifiée »','Certification absente des entrées','Retirer la certification.'],
  ['« 30 % … en sept jours »','Résultat chiffré et garanti sans source','Retirer la promesse.'],
  ['« 60 minutes … 500 DH »','Durée et tarif non fournis','Indiquer que ces modalités restent à confirmer.'],
  ['« liste de clients et leurs numéros »','Données de tiers inutiles au besoin','Demander un exemple de difficulté anonymisé.']
 ],
 final:`# Préparer votre premier échange

## Pour qui

Cette fiche s’adresse aux indépendants qui souhaitent clarifier leurs priorités et mieux organiser leur travail. Madame Samira propose un accompagnement à l’organisation à distance.

## Objectif de l’échange

Le premier échange sert à comprendre votre besoin et à choisir une première action adaptée à votre situation. Il ne constitue pas une promesse de résultat chiffré.

## Ce que vous préparez

Notez une priorité et un exemple de difficulté rencontrée dans votre activité. Décrivez la situation avec vos propres mots. Utilisez un exemple anonymisé, sans nom, contact ou information confidentielle concernant vos clients ou vos collègues.

## Déroulement proposé

Vous présentez votre priorité. Vous expliquez ensuite ce qui vous empêche d’avancer. Avec Madame Samira, vous clarifiez le besoin et choisissez une première action. Vous gardez la décision sur les informations que vous partagez et sur l’action que vous souhaitez engager.

## Après l’échange

Conservez une courte trace de l’action choisie et des questions restantes. Les modalités pratiques, la durée et le tarif éventuel sont à confirmer avant de convenir d’un rendez-vous.

Exemple pédagogique fictif LN-IA. Contenu préparé pour l’atelier du 05 octobre 2026.`,
 engagement:`# Phrase d’engagement personnel
Exemple fictif à adapter, sans signature réelle.

## Mon engagement
Je choisis de préparer une fiche d’accueil pour mon accompagnement.
Mon échéance sera fixée après vérification de mes disponibilités.

## Ma responsabilité
Je contrôle chaque affirmation, les modalités annoncées et les informations partagées.

## Mes preuves
Je conserve le prompt, le brouillon, la version corrigée et une trace de réouverture du fichier.

## Ma régularité
Je propose deux créneaux de vingt minutes par semaine, à confirmer dans mon planning.`
};

export const slides = [
 ['Séance 04','Produire, contrôler et s’engager','Lundi 05 octobre 2026 · Module 01',['Challenge 100 Jours · Relance Automne','Un premier livrable et une preuve de votre travail.'],'Accueillir le groupe. L’horaire n’est pas fixé dans le support.'],
 ['Votre résultat','À la fin, vous aurez quatre traces','Des fichiers que vous pouvez retrouver et expliquer.',['Le prompt réellement utilisé.','Le livrable corrigé.','Une preuve datée du contrôle.','Un engagement adapté à votre disponibilité.'],'Montrer le dossier de remise avant de commencer.'],
 ['Le parcours','Quatre séances, une progression','De votre projet à une pratique observable.',['01 · Entrer dans le Challenge.','02 · Clarifier son objectif et ses livrables.','03 · Choisir trois usages IA et leurs contrôles.','04 · Tester, corriger, s’engager et classer.'],'Demander un objectif en une phrase à deux candidats.'],
 ['Votre besoin','Choisissez une production limitée','Qui doit pouvoir l’utiliser ?',['Un guide d’accueil d’une page.','Un texte de présentation de votre activité.','Une trame de rapport sans données réelles.'],'Limiter le périmètre. Une seule production pendant cet atelier.'],
 ['L’IA','Une assistance à la production','Elle propose à partir du contexte disponible.',['Clarifier et reformuler.','Structurer et préparer un brouillon.','Comparer et suggérer des corrections.'],'Éviter toute promesse de justesse automatique.'],
 ['Les limites','Une réponse plausible peut être fausse','Vous devez pouvoir contrôler ce qui est affirmé.',['Un fait peut être inventé.','Une contrainte peut être oubliée.','Un contenu peut exposer des données inutiles.'],'Faire citer une erreur rencontrée ou utiliser le cas préparé.'],
 ['L’humain','Vous gardez les décisions','Votre jugement intervient pendant toute la production.',['Choisir le besoin et les données autorisées.','Vérifier, corriger et arbitrer.','Approuver le partage et les engagements.'],'La validation LN-IA est une relecture humaine pédagogique.'],
 ['Les outils','Un outil pour chaque fonction','Le contrôle reste le même quel que soit l’outil.',['Assistant IA · réfléchir et rédiger.','Dossier personnel · enregistrer et retrouver vos fichiers.','Word et navigateur · relire et tester.','Binôme · relire un extrait et expliquer une correction.'],'La fiche personnelle reste privée. Partager uniquement un extrait autorisé.'],
 ['La méthode','Huit étapes à rendre visibles','Un résultat devient utilisable après contrôle.',['Besoin → cadrage → prompt → production.','Contrôle humain → correction.','Documentation → preuve.'],'Demander où le candidat intervient. Réponse : à toutes les étapes.'],
 ['10 minutes','Cadrez votre premier essai','Complétez le besoin, le public et le fichier attendu.',['Choisissez un usage de votre carte.','Listez les informations confirmées.','Écrivez un critère de réussite observable.'],'Ouvrir Mon atelier. Les 10 premières minutes incluent les rappels courts.'],
 ['15 minutes','Rédigez un engagement réaliste','Ce que vous produirez et ce que vous contrôlerez.',['Un livrable précis.','Un rythme et une échéance choisis.','Une vérification et une preuve prévues.'],'La fiche d’identification se complète séparément dans l’espace privé.'],
 ['Démonstration','Madame Samira prépare une fiche d’accueil','Cas fictif, entrées limitées, résultat vérifiable.',['Le besoin · expliquer le premier échange.','Le public · indépendants.','Le livrable · fiche d’accueil de 150 à 220 mots.'],'Ouvrir Démonstration. Démo 10 minutes, incluse dans les 30 minutes de production.'],
 ['Le contrôle','Repérez quatre ajouts injustifiés','Le brouillon est un exemple d’erreurs préparé.',['Une certification non fournie.','Un résultat chiffré garanti.','Un tarif et une durée inventés.','Une demande inutile de données clients.'],'Ne pas attribuer ce brouillon à un outil en direct.'],
 ['30 minutes','Produisez votre première version','10 minutes de démonstration puis 20 minutes de pratique.',['Exécutez votre prompt dans l’assistant choisi.','Copiez le prompt réellement utilisé.','Enregistrez le brouillon sous un nom explicite.'],'Le site n’appelle aucune IA. Les candidats travaillent dans leur outil puis reviennent au carnet.'],
 ['20 minutes','Corrigez une erreur identifiable','Documentez le changement, même s’il est petit.',['Passage avant correction.','Problème observé et vérification.','Version retenue et motif du choix.'],'Si aucune erreur factuelle, améliorer un critère de clarté et l’expliquer.'],
 ['15 minutes','Faites relire un extrait autorisé','Une question précise améliore le retour.',['Le besoin est-il compris ?','Quelle affirmation reste à vérifier ?','La prochaine action est-elle claire ?'],'Le relecteur ne reçoit ni signature ni coordonnées personnelles.'],
 ['10 minutes','Classez votre preuve','Rouvrez le fichier que vous venez d’enregistrer.',['Prompt et correction conservés.','Livrable corrigé retrouvé.','Trace datée et point restant à compléter.'],'Un téléchargement n’atteste pas l’exactitude du contenu.'],
 ['Le module 01','Prêt pour une relecture humaine','Le formateur apprécie les preuves disponibles.',['Objectif clair et carte des usages.','Engagement personnel et première production.','Contrôles expliqués et fichiers classés.'],'Ne pas transformer une checklist automatique en certification.'],
 ['La suite','Préparez votre premier prompt à améliorer','Le module 02 approfondira la formulation des demandes.',['Apportez le prompt utilisé.','Montrez le résultat obtenu.','Expliquez un écart entre votre besoin et la réponse.'],'Ne pas annoncer de date ou d’horaire non confirmés.'],
 ['Votre prochaine action','Terminez un fichier que vous pouvez expliquer','Prof. Abderrahman EL HISSE · LN-IA',['Apprendre en produisant. Produire avec méthode.','Partager avec valeur. Avancer avec conscience.'],'Clore avec une prochaine action choisie par chaque candidat.']
].map(([tag,title,sub,items,note])=>({tag,title,sub,items,note}));
