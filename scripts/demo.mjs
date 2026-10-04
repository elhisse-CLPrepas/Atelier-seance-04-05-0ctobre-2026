import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const dir=path.join(root,'travail-local',`demo-${stamp}`);
fs.mkdirSync(dir,{recursive:true});
const names=['01-cadrage.md','02-prompt.md','03-brouillon-a-controler.md','04-corrections.md','fiche-accueil-corrigee.md','fiche-accueil-corrigee.html','phrase-engagement-exemple.md'];
let rows=[];
for(const n of names){
 const source=fs.readFileSync(path.join(root,'demonstration',n));
 fs.writeFileSync(path.join(dir,n),source,{flag:'wx'});
 const reread=fs.readFileSync(path.join(dir,n));
 if(!source.equals(reread))throw Error(`Copie différente : ${n}`);
 rows.push(`- ${n} : ${reread.length} octets, SHA-256 ${crypto.createHash('sha256').update(reread).digest('hex')}`);
}
fs.writeFileSync(path.join(dir,'journal-technique.md'),`# Rejeu du scénario préparé\n\nDate technique UTC : ${new Date().toISOString()}\n\nFichiers copiés et relus par le script :\n${rows.join('\n')}\n\nLe script n’a appelé aucune IA et n’a pas validé le contenu pédagogique. Ouvrez les fichiers pour réaliser votre contrôle humain, puis notez votre observation et sa date réelle.\n`,{flag:'wx'});
console.log(`Rejeu effectué dans ${path.relative(root,dir)}`);
console.log('Fichiers copiés et relus techniquement. Contrôle humain à effectuer. Aucun appel IA.');
