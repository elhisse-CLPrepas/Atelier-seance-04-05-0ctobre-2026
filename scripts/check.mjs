import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { meta, slides, schedule, prompts, demo } from '../src/content.js';

const root=path.resolve(import.meta.dirname,'..');
const required=['index.html','src/main.js','src/style.css','src/content.js','vite.config.js','package-lock.json','public/assets/logo-LN-IA.png','public/ressources/guide-complet-module-01-LN-IA.docx','public/ressources/guide-complet-module-01-LN-IA.pdf','public/ressources/modeles-candidat-module-01.zip','public/ressources/guide-formateur-seance-04.md','public/demonstration/fiche-accueil-corrigee.html','public/modeles/preuves-module-01.md','PROMPT-PILOTAGE-CODEX.md','AGENTS.md','.github/workflows/deploy.yml'];
for(const f of required)assert.ok(fs.existsSync(path.join(root,f)),`Fichier manquant : ${f}`);
assert.equal(meta.date,'Lundi 05 octobre 2026');
assert.equal(slides.length,20);
assert.equal(schedule.reduce((n,x)=>n+parseInt(x[0]),0),100);
assert.equal(prompts.length,6);
const content=fs.readFileSync(path.join(root,'src/content.js'),'utf8');
assert.ok(!/12 juin|08 juin|CTM/i.test(content),'Ancienne date ou identité dans les contenus');
assert.ok(demo.final.includes('à confirmer'));
const body=demo.final.split('\n\n').filter(p=>!p.startsWith('#')&&!p.startsWith('Exemple pédagogique')).join(' ');
const words=body.trim().split(/\s+/u).length;
assert.ok(words>=150&&words<=220,`Longueur démonstration : ${words}`);
const publicFiles=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()){assert.ok(!['travail-local','prive','node_modules'].includes(e.name),`Dossier privé publié : ${p}`);walk(p)}else{assert.ok(!e.name.startsWith('~$'),`Fichier temporaire : ${p}`);publicFiles.push(p)}}}
walk(path.join(root,'public'));
assert.ok(!fs.readFileSync(path.join(root,'src/main.js'),'utf8').includes('fetch('),'Collecte distante inattendue');
console.log(`Contrôles réussis : ${required.length} fichiers essentiels, 20 écrans, 100 minutes, 6 prompts, démonstration de ${words} mots, ${publicFiles.length} ressources publiques.`);
console.log('Ces contrôles structurels ne remplacent pas la relecture pédagogique ni les tests dans un navigateur.');
