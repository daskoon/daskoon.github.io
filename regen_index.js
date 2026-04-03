const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, 'overstory-core');
const dirs = fs.readdirSync(coreDir).filter(file => {
  return fs.statSync(path.join(coreDir, file)).isDirectory();
});

const validDirs = [];
for (const dir of dirs) {
  let targetJs = path.join(coreDir, dir, `${dir}.js`);
  if (fs.existsSync(targetJs)) {
    validDirs.push({ dir, jsName: dir });
  } else {
    const filesInDir = fs.readdirSync(path.join(coreDir, dir));
    const jsFiles = filesInDir.filter(f => f.endsWith('.js'));
    if (jsFiles.length > 0) {
      const match = jsFiles.find(f => f.toLowerCase() === `${dir}.js`.toLowerCase());
      if (match) {
        validDirs.push({ dir, jsName: match.replace('.js', '') });
      } else {
        validDirs.push({ dir, jsName: jsFiles[0].replace('.js', '') });
      }
    }
  }
}

function toVarName(name) {
  if (name.startsWith("_")) return name;
  if (/^sprite\d+$/i.test(name)) return "Sprite" + name.match(/\d+/)[0];
  if (name === "textboxinner") return "textboxinner";
  if (name === "attackbuttons") return "attackbuttons";
  if (name === "omgredbutton") return "omgredbutton";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const imports = [
  'import { Project, Sprite } from "https://unpkg.com/leopard@^1/dist/index.esm.js";',
  'import Stage from "./Stage/Stage.js";'
];

const spriteEntries = [];

for (const { dir, jsName } of validDirs) {
  if (dir.toLowerCase() === 'stage') continue;
  
  const varName = toVarName(jsName);
  
  imports.push(`import ${varName} from "./${dir}/${jsName}.js";`);
  spriteEntries.push(`  ${varName}: new ${varName}({ costumeNumber: 1 }),`);
}

const aiTestHook = `
// ------------- DEV & AI TEST HOOKS ------------- //
window.aiTest = {
  project,
  stage,
  sprites,
  
  // Simulate keyboard presses for AI (async)
  pressKey: (key, durationMs = 150) => {
    return new Promise(resolve => {
      let code = key;
      let keyCode = 0;
      if (key === "z") { code = "KeyZ"; keyCode = 90; }
      else if (key === "x") { code = "KeyX"; keyCode = 88; }
      else if (key === "ArrowRight") { code = "ArrowRight"; keyCode = 39; }
      else if (key === "ArrowLeft") { code = "ArrowLeft"; keyCode = 37; }
      else if (key === "ArrowUp") { code = "ArrowUp"; keyCode = 38; }
      else if (key === "ArrowDown") { code = "ArrowDown"; keyCode = 40; }
      
      const eventDown = new KeyboardEvent("keydown", {
        key: key,
        code: code,
        keyCode: keyCode,
        bubbles: true
      });
      document.dispatchEvent(eventDown);
      
      setTimeout(() => {
        const eventUp = new KeyboardEvent("keyup", {
          key: key,
          code: code,
          keyCode: keyCode,
          bubbles: true
        });
        document.dispatchEvent(eventUp);
        resolve();
      }, durationMs);
    });
  },

  // Simulate mouse clicks on the canvas
  clickScreen: (x, y, durationMs = 100) => {
    return new Promise(resolve => {
      const canvas = document.querySelector('canvas') || document.body;
      const rect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { left: 0, top: 0, width: 800, height: 600 };
      
      const clientX = rect.left + (x !== undefined ? x : rect.width / 2);
      const clientY = rect.top + (y !== undefined ? y : rect.height / 2);

      const eventDown = new MouseEvent("mousedown", { clientX, clientY, bubbles: true });
      canvas.dispatchEvent(eventDown);

      setTimeout(() => {
        const eventUp = new MouseEvent("mouseup", { clientX, clientY, bubbles: true });
        canvas.dispatchEvent(eventUp);
        const eventClick = new MouseEvent("click", { clientX, clientY, bubbles: true });
        canvas.dispatchEvent(eventClick);
        resolve();
      }, durationMs);
    });
  },

  // Introspection Helper
  getState: () => {
    return {
      chapter: stage.vars.chapter || 0,
      room: stage.vars.room || 0,
      hp: stage.vars.hp || 0,
      gold: stage.vars.gold || 0,
      inBattle: stage.vars.inBattle || stage.vars.inbattle || 0,
      talking: stage.vars.talking || 0,
      playerX: sprites.Player ? sprites.Player.x : null,
      playerY: sprites.Player ? sprites.Player.y : null
    };
  },

  // Jump to Chapter Macro
  jumpTo: (chapterId) => {
    stage.vars.chapter = chapterId;
    project.fireItem("scene_change");
  }
};
`;

const content = imports.join('\\n') + '\\n\\n' +
                'const stage = new Stage({ costumeNumber: 1 });\\n\\n' +
                'const sprites = {\\n' +
                spriteEntries.join('\\n') + '\\n' +
                '};\\n\\n' +
                'const project = new Project(stage, sprites, {\\n' +
                '  frameRate: 30\\n' +
                '});\\n\\n' +
                aiTestHook + '\\n\\n' +
                'export default project;\\n';

fs.writeFileSync(path.join(__dirname, 'overstory-core/index.js'), content.trim());
console.log("Success! index.js restored and window.aiTest attached.");
