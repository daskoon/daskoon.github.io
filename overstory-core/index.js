import { Project, Sprite } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
import { App } from '@capacitor/app';

// AI Test Hook initialization - defined early to be accessible via devtools
window.aiTest = {
  project: null,
  stage: null,
  sprites: null,
  isReady: false,
  getState: () => ({ error: "Project not yet initialized" })
};
console.log("[Engine] window.aiTest initialized (Waiting for project...)");
import Stage from "./Stage/Stage.js";
import attackbuttons from "./attackbuttons/attackbuttons.js";
import Attackslider from "./attackslider/attackslider.js";
import B4046b0aEe4244ed8c1626776c7c0ca2 from "./B4046b0aEe4244ed8c1626776c7c0ca2/B4046b0aEe4244ed8c1626776c7c0ca2.js";
import B4046b0aEe4244ed8c1626776c7c0ca3 from "./B4046b0aEe4244ed8c1626776c7c0ca3/B4046b0aEe4244ed8c1626776c7c0ca3.js";
import B4046b0aEe4244ed8c1626776c7c0ca4 from "./B4046b0aEe4244ed8c1626776c7c0ca4/B4046b0aEe4244ed8c1626776c7c0ca4.js";
import Bluebutton from "./bluebutton/bluebutton.js";
import Bullet2 from "./Bullet2/Bullet2.js";
import Bullet4 from "./Bullet4/Bullet4.js";
import Bullet6 from "./Bullet6/Bullet6.js";
import Bullet7 from "./Bullet7/Bullet7.js";
import Bullet8 from "./Bullet8/Bullet8.js";
import Buttonred from "./buttonred/buttonred.js";
import Cutesyarmorshop from "./cutesyarmorshop/cutesyarmorshop.js";
import DevController from "./DevController/DevController.js";
import Doorbadguy from "./doorbadguy/doorbadguy.js";
import Exit from "./exit/exit.js";
import Explosion from "./explosion/explosion.js";
import Explosion3 from "./explosion3/explosion3.js";
import Explosiontnt from "./explosiontnt/explosiontnt.js";
import Greenthing from "./greenthing/greenthing.js";
import Img1556 from "./Img1556/Img1556.js";
import Img1669 from "./Img1669/Img1669.js";
import Img_1556 from "./img_1556/img_1556.js";
import Img_1669 from "./img_1669/img_1669.js";
import Joystick from "./Joystick/Joystick.js";
import Lilgreendude from "./lilgreendude/lilgreendude.js";
import Miss from "./miss/miss.js";
import Money from "./money/money.js";
import Mysteryguy from "./mysteryguy/mysteryguy.js";
import omgredbutton from "./omgredbutton/omgredbutton.js";
import Pay1000dollars from "./pay1000dollars/pay1000dollars.js";
import Playbutton from "./playbutton/playbutton.js";
import Player from "./Player/Player.js";
import Purple from "./purple/purple.js";
import Redbutton from "./redbutton/redbutton.js";
import Redbutton2 from "./redbutton2/redbutton2.js";
import SaveManagerSprite from "./SaveManagerSprite/SaveManagerSprite.js";
import ShadowJone from "./ShadowJone/ShadowJone.js";
import ShadowZork from "./ShadowZork/ShadowZork.js";
import Shopoverlaymanager from "./shopoverlaymanager/shopoverlaymanager.js";
import Slideblock from "./slideblock/slideblock.js";
import Sprite101 from "./sprite101/sprite101.js";
import Sprite103 from "./sprite103/sprite103.js";
import Sprite106 from "./sprite106/sprite106.js";
import Sprite11 from "./sprite11/sprite11.js";
import Sprite111 from "./sprite111/sprite111.js";
import Sprite113 from "./sprite113/sprite113.js";
import Sprite116 from "./sprite116/sprite116.js";
import Sprite12 from "./sprite12/sprite12.js";
import Sprite122 from "./sprite122/sprite122.js";
import Sprite124 from "./sprite124/sprite124.js";
import Sprite128 from "./sprite128/sprite128.js";
import Sprite130 from "./sprite130/sprite130.js";
import Sprite132 from "./Sprite132/Sprite132.js";
import Sprite136 from "./sprite136/sprite136.js";
import Sprite137 from "./Sprite137/Sprite137.js";
import Sprite139 from "./sprite139/sprite139.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite143 from "./sprite143/sprite143.js";
import Sprite145 from "./sprite145/sprite145.js";
import Sprite151 from "./sprite151/sprite151.js";
import Sprite153 from "./sprite153/sprite153.js";
import Sprite154 from "./sprite154/sprite154.js";
import Sprite157 from "./sprite157/sprite157.js";
import Sprite159 from "./sprite159/sprite159.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite161 from "./sprite161/sprite161.js";
import Sprite162 from "./sprite162/sprite162.js";
import Sprite168 from "./sprite168/sprite168.js";
import Sprite170 from "./sprite170/sprite170.js";
import Sprite171 from "./sprite171/sprite171.js";
import Sprite174 from "./sprite174/sprite174.js";
import Sprite176 from "./sprite176/sprite176.js";
import Sprite178 from "./sprite178/sprite178.js";
import Sprite179 from "./sprite179/sprite179.js";
import Sprite185 from "./sprite185/sprite185.js";
import Sprite187 from "./sprite187/sprite187.js";
import Sprite188 from "./sprite188/sprite188.js";
import Sprite190 from "./sprite190/sprite190.js";
import Sprite192 from "./sprite192/sprite192.js";
import Sprite193 from "./Sprite193/Sprite193.js";
import Sprite194 from "./sprite194/sprite194.js";
import Sprite195 from "./sprite195/sprite195.js";
import Sprite197 from "./sprite197/sprite197.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite203 from "./sprite203/sprite203.js";
import Sprite205 from "./sprite205/sprite205.js";
import Sprite206 from "./sprite206/sprite206.js";
import Sprite208 from "./sprite208/sprite208.js";
import Sprite21 from "./sprite21/sprite21.js";
import Sprite210 from "./sprite210/sprite210.js";
import Sprite211 from "./sprite211/sprite211.js";
import Sprite212 from "./sprite212/sprite212.js";
import Sprite213 from "./Sprite213/Sprite213.js";
import Sprite214 from "./sprite214/sprite214.js";
import Sprite215 from "./sprite215/sprite215.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite221 from "./sprite221/sprite221.js";
import Sprite223 from "./sprite223/sprite223.js";
import Sprite224 from "./sprite224/sprite224.js";
import Sprite228 from "./sprite228/sprite228.js";
import Sprite23 from "./Sprite23/Sprite23.js";
import Sprite231 from "./Sprite231/Sprite231.js";
import Sprite234 from "./Sprite234/Sprite234.js";
import Sprite235 from "./Sprite235/Sprite235.js";
import Sprite236 from "./Sprite236/Sprite236.js";
import Sprite237 from "./Sprite237/Sprite237.js";
import Sprite238 from "./Sprite238/Sprite238.js";
import Sprite239 from "./Sprite239/Sprite239.js";
import Sprite24 from "./Sprite24/Sprite24.js";
import Sprite241 from "./Sprite241/Sprite241.js";
import Sprite244 from "./Sprite244/Sprite244.js";
import Sprite245 from "./Sprite245/Sprite245.js";
import Sprite246 from "./Sprite246/Sprite246.js";
import Sprite25 from "./Sprite25/Sprite25.js";
import Sprite28 from "./Sprite28/Sprite28.js";
import Sprite40 from "./Sprite40/Sprite40.js";
import Sprite47 from "./Sprite47/Sprite47.js";
import Sprite48 from "./Sprite48/Sprite48.js";
import Sprite49 from "./Sprite49/Sprite49.js";
import Sprite50 from "./sprite50/sprite50.js";
import Sprite52 from "./sprite52/sprite52.js";
import Sprite53 from "./sprite53/sprite53.js";
import Sprite54 from "./Sprite54/Sprite54.js";
import Sprite56 from "./Sprite56/Sprite56.js";
import Sprite58 from "./Sprite58/Sprite58.js";
import Sprite61 from "./Sprite61/Sprite61.js";
import Sprite66 from "./sprite66/sprite66.js";
import Sprite68 from "./sprite68/sprite68.js";
import Sprite70 from "./sprite70/sprite70.js";
import Sprite71 from "./sprite71/sprite71.js";
import Sprite76 from "./sprite76/sprite76.js";
import Sprite78 from "./sprite78/sprite78.js";
import Sprite80 from "./sprite80/sprite80.js";
import Sprite81 from "./sprite81/sprite81.js";
import Sprite86 from "./sprite86/sprite86.js";
import Sprite88 from "./sprite88/sprite88.js";
import Sprite9 from "./sprite9/sprite9.js";
import Sprite92 from "./sprite92/sprite92.js";
import Sprite93 from "./sprite93/sprite93.js";
import Sprite94 from "./sprite94/sprite94.js";
import Sprite97 from "./sprite97/sprite97.js";
import Text from "./Text/Text.js";
import TextBox from "./TextBox/TextBox.js";
import textboxinner from "./textboxinner/textboxinner.js";
import Yetanotherredbutton from "./yetanotherredbutton/yetanotherredbutton.js";
import _666666666666666666666666666666666666666666666666666666666666666666666666 from "./_666666666666666666666666666666666666666666666666666666666666666666666666/_666666666666666666666666666666666666666666666666666666666666666666666666.js";
import RestartButton from "./RestartButton/RestartButton.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  attackbuttons: new attackbuttons({ costumeNumber: 1 }),
  Attackslider: new Attackslider({ costumeNumber: 1 }),
  B4046b0aEe4244ed8c1626776c7c0ca2: new B4046b0aEe4244ed8c1626776c7c0ca2({ costumeNumber: 1 }),
  B4046b0aEe4244ed8c1626776c7c0ca3: new B4046b0aEe4244ed8c1626776c7c0ca3({ costumeNumber: 1 }),
  B4046b0aEe4244ed8c1626776c7c0ca4: new B4046b0aEe4244ed8c1626776c7c0ca4({ costumeNumber: 1 }),
  Bluebutton: new Bluebutton({ costumeNumber: 1 }),
  Bullet2: new Bullet2({ costumeNumber: 1 }),
  Bullet4: new Bullet4({ costumeNumber: 1 }),
  Bullet6: new Bullet6({ costumeNumber: 1 }),
  Bullet7: new Bullet7({ costumeNumber: 1 }),
  Bullet8: new Bullet8({ costumeNumber: 1 }),
  Buttonred: new Buttonred({ costumeNumber: 1 }),
  Cutesyarmorshop: new Cutesyarmorshop({ costumeNumber: 1 }),
  DevController: new DevController({ costumeNumber: 1 }),
  Doorbadguy: new Doorbadguy({ costumeNumber: 1 }),
  Exit: new Exit({ costumeNumber: 1 }),
  Explosion: new Explosion({ costumeNumber: 1 }),
  Explosion3: new Explosion3({ costumeNumber: 1 }),
  Explosiontnt: new Explosiontnt({ costumeNumber: 1 }),
  Greenthing: new Greenthing({ costumeNumber: 1 }),
  Img1556: new Img1556({ costumeNumber: 1 }),
  Img1669: new Img1669({ costumeNumber: 1 }),
  Img_1556: new Img_1556({ costumeNumber: 1 }),
  Img_1669: new Img_1669({ costumeNumber: 1 }),
  Joystick: new Joystick({ costumeNumber: 1 }),
  Lilgreendude: new Lilgreendude({ costumeNumber: 1 }),
  Miss: new Miss({ costumeNumber: 1 }),
  Money: new Money({ costumeNumber: 1 }),
  Mysteryguy: new Mysteryguy({ costumeNumber: 1 }),
  omgredbutton: new omgredbutton({ costumeNumber: 1 }),
  Pay1000dollars: new Pay1000dollars({ costumeNumber: 1 }),
  Playbutton: new Playbutton({ costumeNumber: 1 }),
  Player: new Player({ costumeNumber: 1 }),
  Purple: new Purple({ costumeNumber: 1 }),
  Redbutton: new Redbutton({ costumeNumber: 1 }),
  Redbutton2: new Redbutton2({ costumeNumber: 1 }),
  SaveManagerSprite: new SaveManagerSprite({ costumeNumber: 1 }),
  ShadowJone: new ShadowJone({ costumeNumber: 1 }),
  ShadowZork: new ShadowZork({ costumeNumber: 1 }),
  Shopoverlaymanager: new Shopoverlaymanager({ costumeNumber: 1 }),
  Slideblock: new Slideblock({ costumeNumber: 1 }),
  Sprite101: new Sprite101({ costumeNumber: 1 }),
  Sprite103: new Sprite103({ costumeNumber: 1 }),
  Sprite106: new Sprite106({ costumeNumber: 1 }),
  Sprite11: new Sprite11({ costumeNumber: 1 }),
  Sprite111: new Sprite111({ costumeNumber: 1 }),
  Sprite113: new Sprite113({ costumeNumber: 1 }),
  Sprite116: new Sprite116({ costumeNumber: 1 }),
  Sprite12: new Sprite12({ costumeNumber: 1 }),
  Sprite122: new Sprite122({ costumeNumber: 1 }),
  Sprite124: new Sprite124({ costumeNumber: 1 }),
  Sprite128: new Sprite128({ costumeNumber: 1 }),
  Sprite130: new Sprite130({ costumeNumber: 1 }),
  Sprite132: new Sprite132({ costumeNumber: 1 }),
  Sprite136: new Sprite136({ costumeNumber: 1 }),
  Sprite137: new Sprite137({ costumeNumber: 1 }),
  Sprite139: new Sprite139({ costumeNumber: 1 }),
  Sprite14: new Sprite14({ costumeNumber: 1 }),
  Sprite143: new Sprite143({ costumeNumber: 1 }),
  Sprite145: new Sprite145({ costumeNumber: 1 }),
  Sprite151: new Sprite151({ costumeNumber: 1 }),
  Sprite153: new Sprite153({ costumeNumber: 1 }),
  Sprite154: new Sprite154({ costumeNumber: 1 }),
  Sprite157: new Sprite157({ costumeNumber: 1 }),
  Sprite159: new Sprite159({ costumeNumber: 1 }),
  Sprite16: new Sprite16({ costumeNumber: 1 }),
  Sprite161: new Sprite161({ costumeNumber: 1 }),
  Sprite162: new Sprite162({ costumeNumber: 1 }),
  Sprite168: new Sprite168({ costumeNumber: 1 }),
  Sprite170: new Sprite170({ costumeNumber: 1 }),
  Sprite171: new Sprite171({ costumeNumber: 1 }),
  Sprite174: new Sprite174({ costumeNumber: 1 }),
  Sprite176: new Sprite176({ costumeNumber: 1 }),
  Sprite178: new Sprite178({ costumeNumber: 1 }),
  Sprite179: new Sprite179({ costumeNumber: 1 }),
  Sprite185: new Sprite185({ costumeNumber: 1 }),
  Sprite187: new Sprite187({ costumeNumber: 1 }),
  Sprite188: new Sprite188({ costumeNumber: 1 }),
  Sprite190: new Sprite190({ costumeNumber: 1 }),
  Sprite192: new Sprite192({ costumeNumber: 1 }),
  Sprite193: new Sprite193({ costumeNumber: 1 }),
  Sprite194: new Sprite194({ costumeNumber: 1 }),
  Sprite195: new Sprite195({ costumeNumber: 1 }),
  Sprite197: new Sprite197({ costumeNumber: 1 }),
  Sprite20: new Sprite20({ costumeNumber: 1 }),
  Sprite203: new Sprite203({ costumeNumber: 1 }),
  Sprite205: new Sprite205({ costumeNumber: 1 }),
  Sprite206: new Sprite206({ costumeNumber: 1 }),
  Sprite208: new Sprite208({ costumeNumber: 1 }),
  Sprite21: new Sprite21({ costumeNumber: 1 }),
  Sprite210: new Sprite210({ costumeNumber: 1 }),
  Sprite211: new Sprite211({ costumeNumber: 1 }),
  Sprite212: new Sprite212({ costumeNumber: 1 }),
  Sprite213: new Sprite213({ costumeNumber: 1 }),
  Sprite214: new Sprite214({ costumeNumber: 1 }),
  Sprite215: new Sprite215({ costumeNumber: 1 }),
  Sprite22: new Sprite22({ costumeNumber: 1 }),
  Sprite221: new Sprite221({ costumeNumber: 1 }),
  Sprite223: new Sprite223({ costumeNumber: 1 }),
  Sprite224: new Sprite224({ costumeNumber: 1 }),
  Sprite228: new Sprite228({ costumeNumber: 1 }),
  Sprite23: new Sprite23({ costumeNumber: 1 }),
  Sprite231: new Sprite231({ costumeNumber: 1 }),
  Sprite234: new Sprite234({ costumeNumber: 1 }),
  Sprite235: new Sprite235({ costumeNumber: 1 }),
  Sprite236: new Sprite236({ costumeNumber: 1 }),
  Sprite237: new Sprite237({ costumeNumber: 1 }),
  Sprite238: new Sprite238({ costumeNumber: 1 }),
  Sprite239: new Sprite239({ costumeNumber: 1 }),
  Sprite24: new Sprite24({ costumeNumber: 1 }),
  Sprite241: new Sprite241({ costumeNumber: 1 }),
  Sprite244: new Sprite244({ costumeNumber: 1 }),
  Sprite245: new Sprite245({ costumeNumber: 1 }),
  Sprite246: new Sprite246({ costumeNumber: 1 }),
  Sprite25: new Sprite25({ costumeNumber: 1 }),
  Sprite28: new Sprite28({ costumeNumber: 1 }),
  Sprite40: new Sprite40({ costumeNumber: 1 }),
  Sprite47: new Sprite47({ costumeNumber: 1 }),
  Sprite48: new Sprite48({ costumeNumber: 1 }),
  Sprite49: new Sprite49({ costumeNumber: 1 }),
  Sprite50: new Sprite50({ costumeNumber: 1 }),
  Sprite52: new Sprite52({ costumeNumber: 1 }),
  Sprite53: new Sprite53({ costumeNumber: 1 }),
  Sprite54: new Sprite54({ costumeNumber: 1 }),
  Sprite56: new Sprite56({ costumeNumber: 1 }),
  Sprite58: new Sprite58({ costumeNumber: 1 }),
  Sprite61: new Sprite61({ costumeNumber: 1 }),
  Sprite66: new Sprite66({ costumeNumber: 1 }),
  Sprite68: new Sprite68({ costumeNumber: 1 }),
  Sprite70: new Sprite70({ costumeNumber: 1 }),
  Sprite71: new Sprite71({ costumeNumber: 1 }),
  Sprite76: new Sprite76({ costumeNumber: 1 }),
  Sprite78: new Sprite78({ costumeNumber: 1 }),
  Sprite80: new Sprite80({ costumeNumber: 1 }),
  Sprite81: new Sprite81({ costumeNumber: 1 }),
  Sprite86: new Sprite86({ costumeNumber: 1 }),
  Sprite88: new Sprite88({ costumeNumber: 1 }),
  Sprite9: new Sprite9({ costumeNumber: 1 }),
  Sprite92: new Sprite92({ costumeNumber: 1 }),
  Sprite93: new Sprite93({ costumeNumber: 1 }),
  Sprite94: new Sprite94({ costumeNumber: 1 }),
  Sprite97: new Sprite97({ costumeNumber: 1 }),
  Text: new Text({ costumeNumber: 1 }),
  TextBox: new TextBox({ costumeNumber: 1 }),
  textboxinner: new textboxinner({ costumeNumber: 1 }),
  Yetanotherredbutton: new Yetanotherredbutton({ costumeNumber: 1 }),
  _666666666666666666666666666666666666666666666666666666666666666666666666: new _666666666666666666666666666666666666666666666666666666666666666666666666({ costumeNumber: 1 }),
  RestartButton: new RestartButton({ costumeNumber: 1 }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});

// Update the AI test hook with the live project instances
Object.assign(window.aiTest, {
  project,
  stage,
  sprites,
  isReady: true,
  
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
      const rect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { left: 0, top: 0, width: 480, height: 360 };
      
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
});
console.log("[Engine] window.aiTest attached.");
// ----------------------------------------------- //

import { App } from '@capacitor/app';

// Handle Audio Lifecycle for Android - HARDENED
App.addListener('appStateChange', ({ isActive }) => {
  console.log(`[Lifecycle] App is now ${isActive ? 'ACTIVE' : 'BACKGROUND'}`);
  if (isActive) {
    // When returning to the app, we need a user gesture to resume AudioContext
    const kickstartAudio = async () => {
      if (project.audioContext.state === 'suspended') {
        try {
          await project.audioContext.resume();
          console.log("[Audio] AudioContext resumed via user gesture");
        } catch (e) {
          console.error("[Audio] Failed to resume AudioContext:", e);
        }
      }
      window.removeEventListener('click', kickstartAudio);
      window.removeEventListener('touchstart', kickstartAudio);
    };
    window.addEventListener('click', kickstartAudio);
    window.addEventListener('touchstart', kickstartAudio);
    console.log("[Audio] Waiting for user gesture (click/touch) to resume audio...");
  } else {
    // Suspend immediately when backgrounded
    project.audioContext.suspend().then(() => {
      console.log("[Audio] AudioContext suspended (Background)");
    }).catch(e => {
      console.error("[Audio] Failed to suspend AudioContext:", e);
    });
  }
});

export default project;