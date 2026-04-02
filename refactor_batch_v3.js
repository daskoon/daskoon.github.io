const fs = require('fs');
const path = require('path');

const tasks = JSON.parse(fs.readFileSync('rename_tasks_v3.json', 'utf8'));
const coreDir = 'overstory-core';
const indexFile = path.join(coreDir, 'index.js');
const mapFile = 'sprite_map.txt';

// CONFIG: Full run settings
const BATCH_START = 0; 
const BATCH_SIZE = tasks.length; 
const currentBatch = tasks.slice(BATCH_START, BATCH_START + BATCH_SIZE);

console.log(`Starting Refactor Batch V3 (Size: ${currentBatch.length})...`);

let indexContent = fs.readFileSync(indexFile, 'utf8');
let mapContent = fs.readFileSync(mapFile, 'utf8');

function getCaseInsensitivePath(base, targetName) {
    if (!fs.existsSync(base)) return null;
    const files = fs.readdirSync(base);
    const found = files.find(f => f.toLowerCase() === targetName.toLowerCase());
    return found ? path.join(base, found) : null;
}

// Map Target ID to current Registry Name from sprite_map.txt
const registryMap = {};
const lines = mapContent.split('\n');
lines.forEach(line => {
    const match = line.match(/^=== (.*?) \(Target #(\d+)\) ===/);
    if (match) {
        registryMap[match[2]] = match[1];
    }
});

for (const task of currentBatch) {
    const { id, newName } = task;
    const currentRegistryName = registryMap[id];
    
    if (!currentRegistryName) {
        console.warn(`[SKIP] Target #${id} not found in sprite_map.txt`);
        continue;
    }

    const currentFolderPath = getCaseInsensitivePath(coreDir, currentRegistryName);
    
    if (!currentFolderPath) {
        console.warn(`[SKIP] Folder ${currentRegistryName} (Target #${id}) not found on disk.`);
        continue;
    }

    const currentFolderName = path.basename(currentFolderPath);

    if (currentFolderName.toLowerCase() === newName.toLowerCase()) {
        console.log(`[SKIP] ${currentFolderName} is already named ${newName} (Target #${id})`);
        continue;
    }

    // Check for collision with OTHER folders
    const collisionPath = getCaseInsensitivePath(coreDir, newName);
    if (collisionPath && path.basename(collisionPath).toLowerCase() !== currentFolderName.toLowerCase()) {
        console.warn(`[CONFLICT] Cannot rename ${currentFolderName} to ${newName}. ${path.basename(collisionPath)} already exists.`);
        continue;
    }

    console.log(`[PROCESS] ${currentFolderName} -> ${newName} (ID: ${id})`);

    try {
        const oldJsFile = path.join(currentFolderPath, `${currentFolderName}.js`);
        
        // 1. Update Class, Name, and Asset Paths inside JS
        if (fs.existsSync(oldJsFile)) {
            let jsContent = fs.readFileSync(oldJsFile, 'utf8');
            
            // Class definition
            jsContent = jsContent.replace(new RegExp(`class ${currentFolderName}`, 'g'), `class ${newName}`);
            // Leopard name
            jsContent = jsContent.replace(new RegExp(`this.name = "${currentFolderName}"`, 'g'), `this.name = "${newName}"`);
            // Asset paths: Replace /FolderName/ with /NewName/
            jsContent = jsContent.replace(new RegExp(`"\\.\\/${currentFolderName}\\/`, 'g'), `"./${newName}/`);
            
            fs.writeFileSync(oldJsFile, jsContent);
            
            const newJsFile = path.join(currentFolderPath, `${newName}.js`);
            fs.renameSync(oldJsFile, newJsFile);
        }

        // 2. Rename Directory (with Windows-safe intermediate step if same name different case)
        const newPath = path.join(coreDir, newName);
        if (currentFolderName.toLowerCase() === newName.toLowerCase()) {
            const tempPath = currentFolderPath + "_TEMP_" + Date.now();
            fs.renameSync(currentFolderPath, tempPath);
            fs.renameSync(tempPath, newPath);
        } else {
            fs.renameSync(currentFolderPath, newPath);
        }

        // 3. Update index.js
        // Import line
        indexContent = indexContent.replace(
            new RegExp(`import ${currentFolderName} from "./${currentFolderName}/${currentFolderName}.js";`, 'g'),
            `import ${newName} from "./${newName}/${newName}.js";`
        );
        // sprites object key
        indexContent = indexContent.replace(
            new RegExp(`^\\s+${currentFolderName}: new ${currentFolderName}\\(`, 'gm'),
            `  ${newName}: new ${newName}(`
        );

        // 4. Update sprite_map.txt
        const mapRegex = new RegExp(`=== ${currentFolderName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} \\(Target #${id}\\) ===`, 'g');
        mapContent = mapContent.replace(mapRegex, `=== ${newName} (Target #${id}) ===`);

        console.log(`[SUCCESS] Renamed ${currentFolderName} to ${newName}`);
    } catch (err) {
        console.error(`[ERROR] Failed to refactor ${currentFolderName}: ${err.message}`);
    }
}

fs.writeFileSync(indexFile, indexContent);
fs.writeFileSync(mapFile, mapContent);

console.log('Batch V3 Processing Finished.');
