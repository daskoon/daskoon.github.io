const fs = require('fs');
const path = require('path');

const dirs = [
  "B4046b0aEe4244ed8c1626776c7c0ca2", "B4046b0aEe4244ed8c1626776c7c0ca3", "B4046b0aEe4244ed8c1626776c7c0ca4",
  "Bullet10", "Bullet2", "Bullet3", "Bullet4", "Bullet5", "Bullet6", "Bullet7", "Bullet8", "Bullet9",
  "DevController", "Img1556", "Img1669", "Joystick", "Player", "Sans", "SaveManagerSprite", "ShadowJone", "ShadowZork",
  "Sprite100", "Sprite104", "Sprite105", "Sprite107", "Sprite108", "Sprite109", "Sprite110", "Sprite112", "Sprite114", "Sprite115",
  "Sprite117", "Sprite118", "Sprite119", "Sprite120", "Sprite121", "Sprite123", "Sprite125", "Sprite126", "Sprite127", "Sprite129",
  "Sprite13", "Sprite131", "Sprite132", "Sprite133", "Sprite134", "Sprite135", "Sprite137", "Sprite138", "Sprite14", "Sprite140",
  "Sprite141", "Sprite142", "Sprite144", "Sprite146", "Sprite147", "Sprite148", "Sprite149", "Sprite150", "Sprite152", "Sprite155",
  "Sprite156", "Sprite158", "Sprite16", "Sprite160", "Sprite163", "Sprite164", "Sprite165", "Sprite166", "Sprite167", "Sprite169",
  "Sprite172", "Sprite173", "Sprite175", "Sprite177", "Sprite18", "Sprite180", "Sprite181", "Sprite182", "Sprite183", "Sprite184",
  "Sprite186", "Sprite189", "Sprite19", "Sprite191", "Sprite193", "Sprite196", "Sprite198", "Sprite199", "Sprite20", "Sprite200",
  "Sprite201", "Sprite202", "Sprite204", "Sprite207", "Sprite209", "Sprite213", "Sprite216", "Sprite217", "Sprite218", "Sprite219",
  "Sprite22", "Sprite220", "Sprite222", "Sprite225", "Sprite227", "Sprite23", "Sprite231", "Sprite234", "Sprite235", "Sprite236",
  "Sprite237", "Sprite238", "Sprite239", "Sprite24", "Sprite241", "Sprite244", "Sprite245", "Sprite246", "Sprite25", "Sprite28",
  "Sprite29", "Sprite3", "Sprite35", "Sprite40", "Sprite41", "Sprite44", "Sprite47", "Sprite48", "Sprite49", "Sprite54", "Sprite55",
  "Sprite56", "Sprite57", "Sprite58", "Sprite59", "Sprite60", "Sprite61", "Sprite62", "Sprite63", "Sprite64", "Sprite65", "Sprite67",
  "Sprite69", "Sprite72", "Sprite73", "Sprite74", "Sprite75", "Sprite77", "Sprite79", "Sprite82", "Sprite83", "Sprite84", "Sprite85",
  "Sprite87", "Sprite89", "Sprite90", "Sprite91", "Sprite95", "Sprite96", "Sprite98", "Sprite99", "Text", "TextBox",
  "_666666666666666666666666666666666666666666666666666666666666666666666666",
  "attackbuttons", "attackslider", "bigredbutton", "bluebutton", "buttonred", "cutesyarmorshop", "doorbadguy", "exit",
  "explosion", "explosion3", "explosiontnt", "greenbutton", "greenthing", "img_1556", "img_1669", "lilgreendude", "miss", "money",
  "mysteryguy", "omgredbutton", "pay1000dollars", "playbutton", "proposebutton", "purple", "redbutton", "redbutton2", "redbutton3",
  "shopoverlaymanager", "slideblock", "slideblock2", "slidepuzzle1", "slidepuzzle2", "sprite101", "sprite103", "sprite106",
  "sprite11", "sprite111", "sprite113", "sprite116", "sprite12", "sprite122", "sprite124", "sprite128", "sprite130", "sprite136",
  "sprite139", "sprite143", "sprite145", "sprite151", "sprite153", "sprite154", "sprite157", "sprite159", "sprite161", "sprite162",
  "sprite168", "sprite170", "sprite171", "sprite174", "sprite176", "sprite178", "sprite179", "sprite185", "sprite187", "sprite188",
  "sprite190", "sprite192", "sprite194", "sprite195", "sprite197", "sprite2", "sprite203", "sprite205", "sprite206", "sprite208",
  "sprite21", "sprite210", "sprite211", "sprite212", "sprite214", "sprite215", "sprite221", "sprite223", "sprite224", "sprite228",
  "sprite50", "sprite52", "sprite53", "sprite66", "sprite68", "sprite70", "sprite71", "sprite76", "sprite78", "sprite80", "sprite81",
  "sprite86", "sprite88", "sprite9", "sprite92", "sprite93", "sprite94", "sprite97", "textboxinner", "yetanotherredbutton"
];

const foldersRaw = fs.readdirSync(path.join(__dirname, 'overstory-core'));
console.log("All folders in overstory-core:", foldersRaw.join(", "));

const folders = foldersRaw.filter(f => {
    const fullPath = path.join(__dirname, 'overstory-core', f);
    if (!fs.statSync(fullPath).isDirectory()) return false;
    if (f === 'Stage') return false;
    
    // Ensure the main JS file exists in the folder
    const jsPath = path.join(fullPath, f + '.js');
    const exists = fs.existsSync(jsPath);
    if (f === 'DevController') {
      console.log(`Checking DevController: path=${jsPath}, exists=${exists}`);
    }
    return exists;
  });

console.log("Generating index.js for folders:", folders.join(", "));

function toVarName(name) {
  if (name.startsWith("_")) return name;
  if (/^sprite\d+$/i.test(name)) return "Sprite" + name.match(/\d+/)[0];
  if (name === "textboxinner") return "textboxinner";
  if (name === "attackbuttons") return "attackbuttons";
  if (name === "omgredbutton") return "omgredbutton";
  // Default: capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const imports = [
  'import { Project, Sprite } from "https://unpkg.com/leopard@^1/dist/index.esm.js";',
  'import Stage from "./Stage/Stage.js";'
];

const spriteEntries = [];

for (const dir of folders) {
  const varName = toVarName(dir);
  // Special case: we checked file existence manually for some. 
  // For most, we assume filename is dir.js (PascalCase) or same as dir.
  // Actually, wait - let's check one to be sure about the filename.
  // sprite50/sprite50.js
  // Sprite100/Sprite100.js
  // So it's always dir/dir.js (case sensitive).
  imports.push(`import ${varName} from "./${dir}/${dir}.js";`);
  spriteEntries.push(`  ${varName}: new ${varName}({ costumeNumber: 1 }),`);
}

const content = `
${imports.join('\n')}

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
${spriteEntries.join('\n')}
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});

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
        key: key, code: code, keyCode: keyCode, bubbles: true
      });
      document.dispatchEvent(eventDown);
      
      setTimeout(() => {
        const eventUp = new KeyboardEvent("keyup", {
          key: key, code: code, keyCode: keyCode, bubbles: true
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

  // Chapter Jump Helper
  jumpTo: (chapter) => {
    stage.vars.chapter = chapter;
    stage.broadcast("start");
  }
};
// ----------------------------------------------- //

export default project;
`;

fs.writeFileSync(path.join(__dirname, 'overstory-core/index.js'), content.trim());
console.log("Success! index.js restored.");
