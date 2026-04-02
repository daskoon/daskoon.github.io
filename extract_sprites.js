// Reads project.json and writes the full sprite map to a file
const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets', 'project.json'), 'utf8'));

let output = '# OverStory Sprite Map\n';
output += '# Extracted from project.json\n';
output += '# Format: Sprite Name -> Costume Name -> Hash Filename\n\n';

data.targets.forEach((target, i) => {
  output += '\n=== ' + target.name + ' (Target #' + i + ') ===\n';
  
  if (target.costumes) {
    output += '  Costumes (' + target.costumes.length + '):\n';
    target.costumes.forEach((c, j) => {
      output += '    ' + (j+1) + '. "' + c.name + '" -> ' + c.md5ext + '\n';
    });
  }
  
  if (target.sounds && target.sounds.length > 0) {
    output += '  Sounds (' + target.sounds.length + '):\n';
    target.sounds.forEach((s, j) => {
      output += '    ' + (j+1) + '. "' + s.name + '" -> ' + s.md5ext + '\n';
    });
  }
});

fs.writeFileSync(path.join(__dirname, 'sprite_map.txt'), output);
console.log('Written to sprite_map.txt - ' + data.targets.length + ' sprites total');
