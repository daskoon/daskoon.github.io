const fs = require('fs');
const path = require('path');

const rawMappingFile = 'raw_mapping.txt';
const outputMappingFile = 'sprite_mapping_v2.json';

if (!fs.existsSync(rawMappingFile)) {
    console.error(`File not found: ${rawMappingFile}`);
    process.exit(1);
}

const rawText = fs.readFileSync(rawMappingFile, 'utf8');
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const mapping = {};

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Look for Target #ID
    const targetMatch = line.match(/^Target #(\d+)$/);
    if (targetMatch) {
        const id = targetMatch[1];
        
        // The name is usually a few lines up, after a "▶"
        let name = null;
        for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
            if (lines[j] === '▶') {
                name = lines[j + 1];
                break;
            }
        }
        
        if (name && name !== '...' && !name.startsWith('SPRITE_ID')) {
            // Clean name (remove special chars, spaces to underscores)
            let cleanName = name.replace(/[\(\)\"\']+/g, '').replace(/\s+/g, '_').toLowerCase();
            mapping[id] = cleanName;
        }
    }
}

// Ensure unique names (add suffixes for duplicates)
const finalMapping = {};
const nameCounts = {};

Object.entries(mapping).forEach(([id, name]) => {
    if (nameCounts[name]) {
        nameCounts[name]++;
        finalMapping[id] = `${name}_${nameCounts[name]}`;
    } else {
        nameCounts[name] = 1;
        finalMapping[id] = name;
    }
});

fs.writeFileSync(outputMappingFile, JSON.stringify(finalMapping, null, 2));
console.log(`Extracted mapping for ${Object.keys(finalMapping).length} sprites to ${outputMappingFile}`);
