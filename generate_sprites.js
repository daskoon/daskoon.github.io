// generate_sprites.js
// This script scans the overstory-core directory, discovers sprite subfolders,
// and generates a fresh index.js with correct import statements and a populated
// sprites object. It is intended to replace the manually‑crafted imports that
// became out‑of‑sync after the de‑obfuscation process.

const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, 'overstory-core');
const indexPath = path.join(coreDir, 'index.js');

// Helper: convert a folder name like "sprite2" or "b4046b0aee4244ed8c1626776c7c0ca2"
// into a PascalCase variable name. For numeric sprite names we keep the "Sprite" prefix.
function toPascalCase(name) {
  // If name starts with "sprite" (case‑insensitive) followed by digits, keep capital S.
  const spriteMatch = name.match(/^sprite(\d+)$/i);
  if (spriteMatch) {
    return 'Sprite' + spriteMatch[1];
  }
  // For other names, split on non‑alphanumeric and capitalize each part.
  return name
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Gather all subfolders that contain a .js file.
const entries = fs.readdirSync(coreDir, { withFileTypes: true });
const spriteDirs = entries.filter(e => e.isDirectory());

const imports = [];
const spriteInits = [];

spriteDirs.forEach(dir => {
  const dirPath = path.join(coreDir, dir.name);
  const files = fs.readdirSync(dirPath);
  const jsFile = files.find(f => f.endsWith('.js'));
  if (!jsFile) return; // skip if no js file
  const varName = toPascalCase(dir.name);
  const importPath = `./${dir.name}/${jsFile}`;
  imports.push(`import ${varName} from "${importPath}";`);
  spriteInits.push(`  ${varName}: new ${varName}({ costumeNumber: 1 }),`);
});

// Build the new index.js content.
const header = `// Auto‑generated imports and sprites object\n`;
const stageImport = `import { Stage, Project } from "./Stage/Stage.js";`;
const stageInit = `const stage = new Stage({ costumeNumber: 1 });`;
const spritesBlock = `const sprites = {\n${spriteInits.join('\n')}\n};`;
const projectBlock = `const project = new Project(stage, sprites, {\n  frameRate: 30, // Set to 60 to make your project run faster\n});\n\nexport default project;`;

const newContent = [header, ...imports, '', stageImport, '', stageInit, '', spritesBlock, '', projectBlock].join('\n');

fs.writeFileSync(indexPath, newContent, 'utf8');
console.log('index.js regenerated with', imports.length, 'imports.');
