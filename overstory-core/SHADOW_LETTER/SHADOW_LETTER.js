import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SHADOW_LETTER extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("a", "./costumes/a.png", { x: 7, y: 8 }),
      new Costume("A", "./costumes/A.png", { x: 7, y: 8 }),
      new Costume("b", "./costumes/b.png", { x: 6, y: 17 }),
      new Costume("B", "./costumes/B.png", { x: 6, y: 17 }),
      new Costume("c", "./costumes/c.png", { x: 11, y: 6 }),
      new Costume("C", "./costumes/C.png", { x: 11, y: 6 }),
      new Costume("d", "./costumes/d.png", { x: 11, y: 10 }),
      new Costume("D", "./costumes/D.png", { x: 11, y: 10 }),
      new Costume("e", "./costumes/e.png", { x: 6, y: 6 }),
      new Costume("E", "./costumes/E.png", { x: 6, y: 6 }),
      new Costume("f", "./costumes/f.png", { x: 9, y: 13 }),
      new Costume("F", "./costumes/F.png", { x: 9, y: 13 }),
      new Costume("g", "./costumes/g.png", { x: 9, y: 7 }),
      new Costume("G", "./costumes/G.png", { x: 9, y: 7 }),
      new Costume("h", "./costumes/h.png", { x: 4, y: 9 }),
      new Costume("H", "./costumes/H.png", { x: 4, y: 9 }),
      new Costume("i", "./costumes/i.png", { x: 3, y: 9 }),
      new Costume("I", "./costumes/I.png", { x: 3, y: 9 }),
      new Costume("j", "./costumes/j.png", { x: 7, y: 13 }),
      new Costume("J", "./costumes/J.png", { x: 7, y: 13 }),
      new Costume("k", "./costumes/k.png", { x: 9, y: 12 }),
      new Costume("K", "./costumes/K.png", { x: 9, y: 12 }),
      new Costume("l", "./costumes/l.png", { x: 4, y: 12 }),
      new Costume("L", "./costumes/L.png", { x: 4, y: 12 }),
      new Costume("m", "./costumes/m.png", { x: 10, y: 7 }),
      new Costume("M", "./costumes/M.png", { x: 10, y: 7 }),
      new Costume("n", "./costumes/n.png", { x: 8, y: 6 }),
      new Costume("N", "./costumes/N.png", { x: 8, y: 6 }),
      new Costume("o", "./costumes/o.png", { x: 8, y: 5 }),
      new Costume("O", "./costumes/O.png", { x: 8, y: 5 }),
      new Costume("p", "./costumes/p.png", { x: 5, y: 7 }),
      new Costume("P", "./costumes/P.png", { x: 5, y: 7 }),
      new Costume("q", "./costumes/q.png", { x: 10, y: 5 }),
      new Costume("Q", "./costumes/Q.png", { x: 10, y: 5 }),
      new Costume("r", "./costumes/r.png", { x: 6, y: 10 }),
      new Costume("R", "./costumes/R.png", { x: 6, y: 10 }),
      new Costume("s", "./costumes/s.png", { x: 7, y: 8 }),
      new Costume("S", "./costumes/S.png", { x: 7, y: 8 }),
      new Costume("t", "./costumes/t.png", { x: 7, y: 13 }),
      new Costume("T", "./costumes/T.png", { x: 7, y: 13 }),
      new Costume("u", "./costumes/u.png", { x: 8, y: 3 }),
      new Costume("U", "./costumes/U.png", { x: 8, y: 3 }),
      new Costume("v", "./costumes/v.png", { x: 9, y: 3 }),
      new Costume("V", "./costumes/V.png", { x: 9, y: 3 }),
      new Costume("w", "./costumes/w.png", { x: 9, y: 5 }),
      new Costume("W", "./costumes/W.png", { x: 9, y: 5 }),
      new Costume("x", "./costumes/x.png", { x: 8, y: 6 }),
      new Costume("X", "./costumes/X.png", { x: 8, y: 6 }),
      new Costume("y", "./costumes/y.png", { x: 6, y: 7 }),
      new Costume("Y", "./costumes/Y.png", { x: 6, y: 7 }),
      new Costume("z", "./costumes/z.png", { x: 6, y: 11 }),
      new Costume("Z", "./costumes/Z.png", { x: 6, y: 11 }),
      new Costume(",", "./costumes/,.png", { x: 7, y: -5 }),
      new Costume(".", "./costumes/..png", { x: 8, y: -6 }),
      new Costume('"', './costumes/".png', { x: 6, y: 13 }),
      new Costume("Ã¢â‚¬Ëœ", "./costumes/Ã¢â‚¬Ëœ.png", { x: 6, y: 12 }),
      new Costume("Ã¢â‚¬â„¢", "./costumes/Ã¢â‚¬â„¢.png", { x: 6, y: 12 }),
      new Costume("'", "./costumes/'.png", { x: 6, y: 12 }),
      new Costume("question_mark", "./costumes/question_mark.png", {
        x: 6,
        y: 11,
      }),
      new Costume("!", "./costumes/!.png", { x: 3, y: 12 }),
      new Costume("-", "./costumes/-.png", { x: 5, y: 5 }),
      new Costume("_", "./costumes/_.png", { x: 8, y: -10 }),
      new Costume(" ", "./costumes/ .png", { x: 0, y: 0 }),
      new Costume(" 1", "./costumes/ 1.png", { x: 5, y: 13 }),
      new Costume(" 2", "./costumes/ 2.png", { x: 8, y: 10 }),
      new Costume(" 3", "./costumes/ 3.png", { x: 9, y: 14 }),
      new Costume(" 4", "./costumes/ 4.png", { x: 10, y: 14 }),
      new Costume(" 5", "./costumes/ 5.png", { x: 7, y: 17 }),
      new Costume(" 6", "./costumes/ 6.png", { x: 10, y: 18 }),
      new Costume(" 7", "./costumes/ 7.png", { x: 10, y: 12 }),
      new Costume(" 8", "./costumes/ 8.png", { x: 12, y: 15 }),
      new Costume(" 9", "./costumes/ 9.png", { x: 8, y: 13 }),
      new Costume(" 0", "./costumes/ 0.png", { x: 9, y: 12 }),
      new Costume("(", "./costumes/(.png", { x: 6, y: 13 }),
      new Costume(")", "./costumes/).png", { x: 3, y: 13 }),
      new Costume(">", "./costumes/>.png", { x: 17, y: 19 }),
      new Costume("<", "./costumes/<.png", { x: 24, y: 17 }),
      new Costume("Ã¢â‚¬Â¦", "./costumes/Ã¢â‚¬Â¦.png", { x: 17, y: 41 }),
      new Costume("&", "./costumes/&.png", { x: 31, y: 15 }),
      new Costume("Ã‚Â§", "./costumes/Ã‚Â§.png", { x: 17, y: -28 }),
      new Costume("~", "./costumes/~.png", { x: 20, y: 20 }),
      new Costume("Ã¢â‚¬â€ ", "./costumes/Ã¢â‚¬â€ .png", { x: 27, y: 31 }),
      new Costume("@", "./costumes/@.svg", {
        x: -2.729729729729911,
        y: 268.6366316366367,
      }),
      new Costume("$", "./costumes/$.png", { x: 33, y: 37 }),
      new Costume("%", "./costumes/%.svg", {
        x: -10.183183183183331,
        y: 173.00000000000014,
      }),
      new Costume("|", "./costumes/|.png", { x: 14, y: 43 }),
      new Costume("^", "./costumes/^.png", { x: -27, y: 360 }),
      new Costume(";", "./costumes/;.png", { x: 0, y: 0 }),
      new Costume("=", "./costumes/=.png", { x: 0, y: 14 }),
      new Costume("Ã‚Â°", "./costumes/Ã‚Â°.svg", {
        x: -72.19669669669668,
        y: 283.6036036036037,
      }),
      new Costume("{", "./costumes/{.png", { x: 6, y: 28 }),
      new Costume("}", "./costumes/}.png", { x: 5, y: 29 }),
      new Costume("Ã„Å¾", "./costumes/Ã„Å¾.png", { x: 23, y: 24 }),
      new Costume("Ã„â€“", "./costumes/Ã„â€“.png", { x: -1, y: 24 }),
      new Costume("ÃˆÅ¡", "./costumes/ÃˆÅ¡.png", { x: -12, y: 29 }),
      new Costume("Ã…Â ", "./costumes/Ã…Â .png", { x: -56, y: 29 }),
      new Costume("Ã…Â²", "./costumes/Ã…Â².png", { x: -91, y: 31 }),
      new Costume("Ã…Â¤", "./costumes/Ã…Â¤.png", { x: -113, y: 33 }),
      new Costume("Ã¢â€žÂ¢", "./costumes/Ã¢â€žÂ¢.png", { x: 13, y: 20 }),
      new Costume("]", "./costumes/].svg", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound("Boop Bing Bop", "./sounds/Boop Bing Bop.wav"),
      new Sound("Interaction", "./sounds/Interaction.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Fobert talk" },
        this.whenIReceiveFobertTalk
      ),
      new Trigger(Trigger.BROADCAST, { name: "bun" }, this.whenIReceiveBun),
      new Trigger(
        Trigger.BROADCAST,
        { name: "fobert battle end" },
        this.whenIReceiveFobertBattleEnd
      ),
    ];

    this.vars.tick = 9;
    this.vars.holdy = 0;
    this.vars.pin = 0;
  }

  *startAsClone() {
    this.visible = true;
    this.vars.holdy = this.y;
    while (true) {
      this.y = this.toNumber(this.vars.holdy);
      this.y +=
        Math.cos(
          this.degToRad(this.timer * 350 + this.toNumber(this.vars.tick) * 10)
        ) / 0.8;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.stage = 1;
  }

  *speieach(wordth, voice) {
    if (window.GAMEOVER) return;
    this.vars.pin = 0;
    this.stage.vars.mouth = 1.5;
    this.stage.vars.whytextwhy = wordth;
    
    if (this.toNumber(this.stage.vars.shutUpMode) === 0) {
      this.broadcast("fin");
      this.vars.tick = 0;
      this.goto(-235, -120);
      this.size = 110;

      const textStr = String(wordth);
      const xStart = -235;
      const xLimit = 200;
      const lineSpacing = 17;
      
      let i = 0;
      while (i < textStr.length) {
        const char = textStr[i];
        
        // Handle special formatting characters
        if (char === "*") {
          this.x = xStart;
          this.y -= lineSpacing;
          i++;
          continue;
        }
        if (char === "Ã¢â€žÂ¢") {
          this.vars.pin = 1;
          i++;
          continue;
        }

        // Word wrap lookahead
        if (char === " ") {
          // Check if the next word fits
          let nextSpace = textStr.indexOf(" ", i + 1);
          if (nextSpace === -1) nextSpace = textStr.length;
          
          const nextWord = textStr.substring(i + 1, nextSpace);
          // Rough estimation of word width. Some characters are wider, but most are ~6-13 in this sprite.
          // Using a conservative 13 per char for logic.
          if (this.x + (nextWord.length * 13) > xLimit) {
            this.x = xStart;
            this.y -= lineSpacing;
            i++; // skip the space
            continue;
          }
        }

        // Generic character rendering
        this.vars.tick++;
        this.costume = char;
        this.audioEffects.pitch = this.random(-145, 33);
        
        if (this.toNumber(this.stage.vars.textskip) === 0) {
          yield* this.startSound(voice);
        }

        let charWidth = 13;
        if (this.toNumber(char) === 0 && char !== " ") { // Leopard toNumber on " " is often 0
          charWidth = 15;
        } else if (char === "~") {
          charWidth = 30;
        } else if (char === " ") {
          charWidth = 8;
        }

        // Final safety line break
        if (this.x + charWidth > xLimit) {
          this.x = xStart;
          this.y -= lineSpacing;
        }

        this.x += charWidth;
        
        while (!!this.touching(this.sprites["Sprite78"].andClones())) {
          yield;
        }
        
        if (this.costume.name === "]") {
          yield* this.wait(0.5);
        }
        
        this.createClone();
        
        if (this.toNumber(this.stage.vars.textskip) === 0) {
          yield* this.wait(0);
        }
        i++;
      }

      this.vars.pin = 0;
      this.broadcast("Text wait to clear");
      yield* this.wait(0.3);
      while (!(this.mouse.down || this.keyPressed("any"))) {
        yield;
      }
      while (!!this.mouse.down) {
        yield;
      }
    }
    this.broadcast("bun");
  }

  *startAsClone2() {
    while (true) {
      if (this.toNumber(this.stage.vars.voice2) === 31) {
        this.size = 80;
      }
      yield;
    }
  }

  *startAsClone3() {
    if (this.toNumber(this.vars.pin) === 1) {
      while (true) {
        this.direction += 15;
        yield;
      }
    }
  }

  *startAsClone4() {
    if (this.toNumber(this.stage.vars.voice2) === 31) {
      while (true) {
        for (let i = 0; i < 2; i++) {
          this.direction += 10;
          yield;
        }
        for (let i = 0; i < 2; i++) {
          this.direction -= 10;
          yield;
        }
        for (let i = 0; i < 2; i++) {
          this.direction -= 10;
          yield;
        }
        for (let i = 0; i < 2; i++) {
          this.direction += 10;
          yield;
        }
        yield;
      }
    }
  }

  *startAsClone5() {
    this.moveAhead();
  }

  *whenIReceiveFobertTalk() {
    yield* this.speieach("AHEM.", 1);
    yield* this.speieach("It is i!!", 1);
    this.broadcast("Fobert appear");
    yield* this.wait(4);
    yield* this.speieach("Fobert!", 1);
    yield* this.speieach("And now", 1);
    yield* this.speieach("We fight.", 1);
    this.broadcast("Fobert fight");
    this.broadcast("...abattlestart");
  }

  *whenIReceiveBun() {
    this.deleteThisClone();
  }

  *whenIReceiveFobertBattleEnd() {
    this.stage.vars.speed = 0;
    this.stage.vars.yunuchi += 200;
    this.stage.vars.yunuchi += this.toNumber(this.stage.vars.dangerPoint);
    yield* this.speieach("(You won! You got two hundred*dollars!)", 2);
    yield* this.speieach("hm.", 1);
    yield* this.speieach("beware.", 1);
    yield* this.speieach(
      "the person ahead of us is*a very dangerous criminal.",
      1
    );
    this.stage.vars.speed = 4;
  }
}
