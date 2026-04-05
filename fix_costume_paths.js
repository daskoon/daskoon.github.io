const fs = require('fs');
const path = require('path');

const coreDir = path.join(process.cwd(), 'overstory-core');
const dirs = fs.readdirSync(coreDir).filter(f => fs.statSync(path.join(coreDir, f)).isDirectory());

let fileUpdates = 0;

for (const dir of dirs) {
  const dirPath = path.join(coreDir, dir);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
  
  if (files.length === 0) continue;
  
  for (const file of files) {
    const jsPath = path.join(dirPath, file);
    let content = fs.readFileSync(jsPath, 'utf8');
    let original = content;
    
    content = content.replace(/\.\/[^\/]+\/costumes\//g, `./${dir}/costumes/`);
    content = content.replace(/\.\/[^\/]+\/sounds\//g, `./${dir}/sounds/`);
    
    if (content !== original) {
      fs.writeFileSync(jsPath, content, 'utf8');
      fileUpdates++;
      console.log(`Updated paths in ${dir}/${file}`);
    }
  }
}

console.log(`Successfully updated paths in ${fileUpdates} files!`);
