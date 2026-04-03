// restore_index.js
// Scans overstory-core directories, finds .js sprite files,
// and writes a correct index.js matching what's on disk.
// ETA: < 2 seconds to run.

const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, 'overstory-core');
const indexPath = path.join(coreDir, 'index.js');

// Skip these directories (not sprites)
const SKIP = new Set(['Stage', 'systems']);

const entries = fs.readdirSync(coreDir, { withFileTypes: true });
const spriteDirs = entries.filter(e => e.isDirectory() && !SKIP.has(e.name));

const found = [];
const empty = [];

for (const dir of spriteDirs) {
  const dirPath = path.join(coreDir, dir.name);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
  if (files.length === 0) {
    empty.push(dir.name);
  } else {
    found.push({ dirName: dir.name, jsFile: files[0] });
  }
}

// Generate variable name from directory name
function toVarName(dirName) {
  if (dirName.startsWith('_')) return dirName;
  if (/^\d/.test(dirName)) return '_' + dirName;
  // For B4046... hash names, keep as-is
  if (/^B\d/.test(dirName)) return dirName;
  // Capitalize first letter for everything else
  return dirName.charAt(0).toUpperCase() + dirName.slice(1);
}

// Sort found sprites for clean output
found.sort((a, b) => a.dirName.localeCompare(b.dirName, undefined, { numeric: true }));

// Build output
const lines = [];

// Leopard import (exact match to existing pattern)
lines.push('import {');
lines.push('  Project,');
lines.push('  Sprite,');
lines.push('} from "https://unpkg.com/leopard@^1/dist/index.esm.js";');
lines.push('');

// Stage import
lines.push('import Stage from "./Stage/Stage.js";');

// Sprite imports
for (const { dirName, jsFile } of found) {
  const varName = toVarName(dirName);
  lines.push(`import ${varName} from "./${dirName}/${jsFile}";`);
}

lines.push('');
lines.push('const stage = new Stage({ costumeNumber: 1 });');
lines.push('');
lines.push('const sprites = {');

for (const { dirName, jsFile } of found) {
  const varName = toVarName(dirName);
  lines.push(`  ${varName}: new ${varName}({ costumeNumber: 1 }),`);
}

lines.push('};');
lines.push('');
lines.push('const project = new Project(stage, sprites, {');
lines.push('  frameRate: 30, // Set to 60 to make your project run faster');
lines.push('});');
lines.push('export default project;');

fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');

// Report
console.log('=== RESTORE COMPLETE ===');
console.log('Sprites with .js files: ' + found.length);
console.log('Empty directories (skipped): ' + empty.length);
if (empty.length > 0) {
  console.log('Empty dirs: ' + empty.join(', '));
}
console.log('New index.js written with ' + found.length + ' sprite imports.');
