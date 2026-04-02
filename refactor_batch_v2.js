const fs = require('fs');
const path = require('path');

const tasks = JSON.parse(fs.readFileSync('rename_tasks_v3.json', 'utf8'));
const coreDir = 'overstory-core';
const indexFile = path.join(coreDir, 'index.js');
const mapFile = 'sprite_map.txt';

// CONFIG: Batch settings
const BATCH_START = 0; 
const BATCH_SIZE = 5; 
const currentBatch = tasks.slice(BATCH_START, BATCH_START + BATCH_SIZE);

console.log(`Starting Refactor Batch (Size: ${currentBatch.length})...`);

let indexContent = fs.readFileSync(indexFile, 'utf8');
let mapContent = fs.existsSync(mapFile) ? fs.readFileSync(mapFile, 'utf8') : '';

function getCaseInsensitivePath(base, targetName) {
    const files = fs.readdirSync(base);
    const found = files.find(f => f.toLowerCase() === targetName.toLowerCase());
    return found ? path.join(base, found) : null;
}

for (const task of currentBatch) {
    const { id, oldFolder, newName } = task;
    const oldPath = path.join(coreDir, oldFolder);
    
    // Check if old folder exists
    if (!fs.existsSync(oldPath)) {
        console.warn(`[SKIP] Source ${oldFolder} not found.`);
        continue;
    }

    // Check if new name is same as old name (no change)
    if (oldFolder.toLowerCase() === newName.toLowerCase()) {
        console.log(`[SKIP] ${oldFolder} is already named ${newName} (case-insensitive).`);
        continue;
    }

    // Check if target name already exists (collision)
    const existingPath = getCaseInsensitivePath(coreDir, newName);
    if (existingPath) {
        console.warn(`[CONFLICT] Cannot rename ${oldFolder} to ${newName}. ${path.basename(existingPath)} already exists.`);
        continue;
    }

    console.log(`[PROCESS] ${oldFolder} -> ${newName} (ID: ${id})`);

    try {
        const oldJsFile = path.join(oldPath, `${oldFolder}.js`);
        const newJsFile = path.join(oldPath, `${newName}.js`);

        // 1. Update Class and Property Names inside JS
        if (fs.existsSync(oldJsFile)) {
            let jsContent = fs.readFileSync(oldJsFile, 'utf8');
            
            // Regex for class definition
            jsContent = jsContent.replace(new RegExp(`class ${oldFolder}`, 'g'), `class ${newName}`);
            // Regex for leopard this.name (sometimes used)
            jsContent = jsContent.replace(new RegExp(`this.name = "${oldFolder}"`, 'g'), `this.name = "${newName}"`);
            // Regex for watchers or other string refs
            jsContent = jsContent.replace(new RegExp(`label: "${oldFolder}`, 'g'), `label: "${newName}`);
            
            fs.writeFileSync(oldJsFile, jsContent);
            fs.renameSync(oldJsFile, newJsFile);
        }

        // 2. Rename Directory
        const newPath = path.join(coreDir, newName);
        fs.renameSync(oldPath, newPath);

        // 3. Update index.js
        // Import line
        indexContent = indexContent.replace(
            new RegExp(`import ${oldFolder} from "./${oldFolder}/${oldFolder}.js";`, 'g'),
            `import ${newName} from "./${newName}/${newName}.js";`
        );
        // sprits object key and value
        indexContent = indexContent.replace(
            new RegExp(`^\\s+${oldFolder}: new ${oldFolder}\\(`, 'gm'),
            `  ${newName}: new ${newName}(`
        );

        // 4. Update sprite_map.txt
        if (mapContent) {
            const mapRegex = new RegExp(`=== ${oldFolder} \\(Target #${id}\\) ===`, 'g');
            mapContent = mapContent.replace(mapRegex, `=== ${newName} (Target #${id}) ===`);
        }

        console.log(`[SUCCESS] Renamed ${oldFolder} to ${newName}`);
    } catch (err) {
        console.error(`[ERROR] Failed to refactor ${oldFolder}: ${err.message}`);
    }
}

fs.writeFileSync(indexFile, indexContent);
if (mapContent) fs.writeFileSync(mapFile, mapContent);

console.log('Batch Processing Finished.');
