const fs = require('fs');
let t = fs.readFileSync('sprite_map.txt', 'utf8');
t = t.replace(/=== Sprite1 \(Target #\d+\) ===/g, '=== TextBox (Target #1) ===');
t = t.replace(/=== Sprite16 \(Target #\d+\) ===/g, '=== Jone (Target #16) ===');
t = t.replace(/=== Sprite20 \(Target #\d+\) ===/g, '=== Heart (Target #20) ===');
t = t.replace(/=== Sprite26 \(Target #\d+\) ===/g, '=== PlayButton (Target #26) ===');
t = t.replace(/=== Sprite27 \(Target #\d+\) ===/g, '=== LoadButton (Target #27) ===');
fs.writeFileSync('sprite_map.txt', t);
console.log('Successfully updated sprite_map.txt mapping.');
