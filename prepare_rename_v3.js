const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('sprite_mapping_v2.json', 'utf8'));
const coreDir = 'overstory-core';
const indexFile = path.join(coreDir, 'index.js');

const indexContent = fs.readFileSync(indexFile, 'utf8');
const importRegex = /import\s+(\w+)\s+from\s+"\.\/(\w+)\/\w+\.js";/g;

const tasks = [];
let match;

while ((match = importRegex.exec(indexContent)) !== null) {
    const importName = match[1];
    const folderName = match[2];
    
    // Check if it's a generic SpriteXX folder
    const spriteMatch = folderName.match(/^Sprite(\d+)$/);
    if (spriteMatch) {
        const id = spriteMatch[1];
        if (mapping[id]) {
            tasks.push({
                id: id,
                oldFolder: folderName,
                newName: mapping[id]
            });
        }
    }
}

fs.writeFileSync('rename_tasks_v3.json', JSON.stringify(tasks, null, 2));
console.log(`Generated ${tasks.length} rename tasks to rename_tasks_v3.json`);
