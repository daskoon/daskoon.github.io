const fs = require('fs');
const project = JSON.parse(fs.readFileSync('c:/Users/transmacsual/projects/overstory all chapters/daskoon.github.io/assets/project.json', 'utf8'));

const targets = project.targets;
const mapping = {};

console.log("Descriptive Sprite Names found in project.json:");
targets.forEach((target, index) => {
  const isGeneric = /^Sprite\d+$/.test(target.name) || /^Bullet\d+$/.test(target.name) || target.name === 'Bullet' || target.name === 'Player';
  if (!target.isStage) {
    if (!isGeneric) {
      console.log(`Target Index ${index}: ${target.name}`);
    }
    // Track Sprite27 specifically if possible
    // Note: Sprite numbering in leopard might not match project.json index exactly if Stage is 0.
  }
});

// Find Sprite27's logic name
console.log("\nSearching for Sprite27 specifically...");
const sprite27Target = targets.find(t => t.name === 'Sprite27');
if (sprite27Target) {
    console.log("Sprite27 found in project.json! It's named Sprite27.");
} else {
    console.log("Sprite27 NOT found by name in project.json. It might be target index 27?");
    if (targets[27]) console.log(`Target Index 27 is: ${targets[27].name}`);
}

fs.writeFileSync('/tmp/sprite_mapping.json', JSON.stringify(mapping, null, 2));
