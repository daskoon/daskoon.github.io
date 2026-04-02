const fs = require('fs');
const path = require('path');

const tasks = JSON.parse(fs.readFileSync('rename_tasks.json', 'utf8'));
const coreDir = 'overstory-core';
const indexFile = path.join(coreDir, 'index.js');
const mapFile = 'sprite_map.txt';

const batchSize = 10;
const currentBatch = tasks.slice(0, batchSize);

console.log(`Starting Refactor for Batch 1 (${currentBatch.length} sprites)...`);

let indexContent = fs.readFileSync(indexFile, 'utf8');
let mapContent = fs.readFileSync(mapFile, 'utf8');

for (const task of currentBatch) {
    const { id, oldFolder, newName } = task;
    const oldPath = path.join(coreDir, oldFolder);
    const newPath = path.join(coreDir, newName);

    if (!fs.existsSync(oldPath)) {
        console.warn(`[SKIP] ${oldFolder} does not exist at ${oldPath}`);
        continue;
    }

    console.log(`[PROCESS] ${oldFolder} -> ${newName}`);

    // 1. Rename JS file inside
    const oldJsFile = path.join(oldPath, `${oldFolder}.js`);
    const newJsFile = path.join(oldPath, `${newName}.js`);
    
    if (fs.existsSync(oldJsFile)) {
        let jsContent = fs.readFileSync(oldJsFile, 'utf8');
        
        // Update Class name: export default class SpriteXX extends ...
        jsContent = jsContent.replace(new RegExp(`class ${oldFolder}`, 'g'), `class ${newName}`);
        
        // Update constructor: super(...args) { super(...args); this.name = "SpriteXX"; ...
        // Leopard usually has this.name = "..." in the constructor
        jsContent = jsContent.replace(new RegExp(`this.name = "${oldFolder}"`, 'g'), `this.name = "${newName}"`);
        
        fs.writeFileSync(oldJsFile, jsContent);
        fs.renameSync(oldJsFile, newJsFile);
    }

    // 2. Rename Directory
    fs.renameSync(oldPath, newPath);

    // 3. Update index.js imports
    // import SpriteXX from "./SpriteXX/SpriteXX.js";
    indexContent = indexContent.replace(new RegExp(`from "./${oldFolder}/${oldFolder}.js"`, 'g'), `from "./${newName}/${newName}.js"`);
    // new SpriteXX({ ... })
    indexContent = indexContent.replace(new RegExp(`new ${oldFolder}\\(`, 'g'), `new ${newName}(`);

    // 4. Update sprite_map.txt
    // Format is: === SpriteXX (Target #ID) ===
    const mapRegex = new RegExp(`=== ${oldFolder} \\(Target #${id}\\) ===`, 'g');
    mapContent = mapContent.replace(mapRegex, `=== ${newName} (Target #${id}) ===`);
}

fs.writeFileSync(indexFile, indexContent);
fs.writeFileSync(mapFile, mapContent);

console.log('Batch 1 Refactor Complete.');
