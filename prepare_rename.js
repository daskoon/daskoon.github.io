const fs = require('fs');
const path = require('path');

const rawMapping = JSON.parse(fs.readFileSync('sprite_mapping.json', 'utf8'));
const finalMapping = {};
const nameCounts = {};

// 1. Resolve suffixes for duplicates
for (const [id, name] of Object.entries(rawMapping)) {
    let cleanName = name.replace(/[^a-zA-Z0-9_]/g, "");
    if (!nameCounts[cleanName]) {
        nameCounts[cleanName] = 0;
    }
    nameCounts[cleanName]++;
    
    let finalName = cleanName;
    if (nameCounts[cleanName] > 1) {
        finalName = `${cleanName}_${nameCounts[cleanName]}`;
    }
    finalMapping[id] = finalName;
}

// 2. Identify current folder names for these IDs
const coreDir = 'overstory-core';
const folders = fs.readdirSync(coreDir).filter(f => fs.statSync(path.join(coreDir, f)).isDirectory());

const idToFolder = {};
for (const folder of folders) {
    if (folder.startsWith('Sprite')) {
        const id = folder.replace('Sprite', '');
        idToFolder[id] = folder;
    } else {
        // Some are already named, let's see if our mapping matches or conflicts
        // For now, we only care about renaming the generic ones.
    }
}

const renameTasks = [];
for (const [id, newName] of Object.entries(finalMapping)) {
    const oldFolder = idToFolder[id];
    if (oldFolder && oldFolder !== newName) {
        renameTasks.push({ id, oldFolder, newName });
    }
}

fs.writeFileSync('rename_tasks.json', JSON.stringify(renameTasks, null, 2));
console.log(`Prepared ${renameTasks.length} renaming tasks.`);
