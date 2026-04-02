const fs = require('fs');

function parseMapping(text) {
    const sections = text.split("▶");
    const mapping = {};
    for (let section of sections) {
        section = section.trim();
        if (!section) continue;
        
        const lines = section.split("\n").map(l => l.trim()).filter(l => l);
        if (lines.length === 0) continue;
        
        // Find Sprite ID from lines that look like "SPRITE_ID: 66"
        let spriteId = null;
        for (const line of lines) {
            const match = line.match(/SPRITE_ID:\s*(\d+)/);
            if (match) {
                spriteId = match[1];
                break;
            }
        }
        
        if (!spriteId) continue;

        // The name is usually the first line, BUT if the first line is Target #, 
        // or a hash, or "Set Human Name...", we look for a better one.
        let name = null;
        for (const line of lines) {
            if (line.includes("Target #")) continue;
            if (line.includes("SPRITE_ID")) continue;
            if (line == "Set Human Name...") continue;
            if (line == "costume1") continue;
            if (line.match(/^[A-F0-9-]{36}$/)) continue;
            if (line.match(/^\d+ Costumes$/)) continue;
            if (line.startsWith("IMG_")) { name = line; break; } // Keep IMGs if nothing else
            
            name = line;
            break;
        }
        
        if (!name) continue;

        const cleanName = name.replace(/[^a-zA-Z0-9_]/g, "");
        if (cleanName && !cleanName.startsWith("SPRITE")) {
            mapping[spriteId] = cleanName;
        }
    }
    return mapping;
}

const data = fs.readFileSync('raw_mapping.txt', 'utf8');
const mapping = parseMapping(data);
fs.writeFileSync('sprite_mapping.json', JSON.stringify(mapping, null, 2));
console.log(`Extracted ${Object.keys(mapping).length} mappings.`);
