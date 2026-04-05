import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Text extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("a", "./Text/costumes/a.png", { x: 7, y: 8 }),
      new Costume("A", "./Text/costumes/A.png", { x: 7, y: 8 }),
      new Costume("b", "./Text/costumes/b.png", { x: 6, y: 17 }),
      new Costume("B", "./Text/costumes/B.png", { x: 6, y: 17 }),
      new Costume("c", "./Text/costumes/c.png", { x: 11, y: 6 }),
      new Costume("C", "./Text/costumes/C.png", { x: 11, y: 6 }),
      new Costume("d", "./Text/costumes/d.png", { x: 11, y: 10 }),
      new Costume("D", "./Text/costumes/D.png", { x: 11, y: 10 }),
      new Costume("e", "./Text/costumes/e.png", { x: 6, y: 6 }),
      new Costume("E", "./Text/costumes/E.png", { x: 6, y: 6 }),
      new Costume("f", "./Text/costumes/f.png", { x: 9, y: 13 }),
      new Costume("F", "./Text/costumes/F.png", { x: 9, y: 13 }),
      new Costume("g", "./Text/costumes/g.png", { x: 9, y: 7 }),
      new Costume("G", "./Text/costumes/G.png", { x: 9, y: 7 }),
      new Costume("h", "./Text/costumes/h.png", { x: 4, y: 9 }),
      new Costume("H", "./Text/costumes/H.png", { x: 4, y: 9 }),
      new Costume("i", "./Text/costumes/i.png", { x: 3, y: 9 }),
      new Costume("I", "./Text/costumes/I.png", { x: 3, y: 9 }),
      new Costume("j", "./Text/costumes/j.png", { x: 7, y: 13 }),
      new Costume("J", "./Text/costumes/J.png", { x: 7, y: 13 }),
      new Costume("k", "./Text/costumes/k.png", { x: 9, y: 12 }),
      new Costume("K", "./Text/costumes/K.png", { x: 9, y: 12 }),
      new Costume("l", "./Text/costumes/l.png", { x: 4, y: 12 }),
      new Costume("L", "./Text/costumes/L.png", { x: 4, y: 12 }),
      new Costume("m", "./Text/costumes/m.png", { x: 10, y: 7 }),
      new Costume("M", "./Text/costumes/M.png", { x: 10, y: 7 }),
      new Costume("n", "./Text/costumes/n.png", { x: 8, y: 6 }),
      new Costume("N", "./Text/costumes/N.png", { x: 8, y: 6 }),
      new Costume("o", "./Text/costumes/o.png", { x: 8, y: 5 }),
      new Costume("O", "./Text/costumes/O.png", { x: 8, y: 5 }),
      new Costume("p", "./Text/costumes/p.png", { x: 5, y: 7 }),
      new Costume("P", "./Text/costumes/P.png", { x: 5, y: 7 }),
      new Costume("q", "./Text/costumes/q.png", { x: 10, y: 5 }),
      new Costume("Q", "./Text/costumes/Q.png", { x: 10, y: 5 }),
      new Costume("r", "./Text/costumes/r.png", { x: 6, y: 10 }),
      new Costume("R", "./Text/costumes/R.png", { x: 6, y: 10 }),
      new Costume("s", "./Text/costumes/s.png", { x: 7, y: 8 }),
      new Costume("S", "./Text/costumes/S.png", { x: 7, y: 8 }),
      new Costume("t", "./Text/costumes/t.png", { x: 7, y: 13 }),
      new Costume("T", "./Text/costumes/T.png", { x: 7, y: 13 }),
      new Costume("u", "./Text/costumes/u.png", { x: 8, y: 3 }),
      new Costume("U", "./Text/costumes/U.png", { x: 8, y: 3 }),
      new Costume("v", "./Text/costumes/v.png", { x: 9, y: 3 }),
      new Costume("V", "./Text/costumes/V.png", { x: 9, y: 3 }),
      new Costume("w", "./Text/costumes/w.png", { x: 9, y: 5 }),
      new Costume("W", "./Text/costumes/W.png", { x: 9, y: 5 }),
      new Costume("x", "./Text/costumes/x.png", { x: 8, y: 6 }),
      new Costume("X", "./Text/costumes/X.png", { x: 8, y: 6 }),
      new Costume("y", "./Text/costumes/y.png", { x: 6, y: 7 }),
      new Costume("Y", "./Text/costumes/Y.png", { x: 6, y: 7 }),
      new Costume("z", "./Text/costumes/z.png", { x: 6, y: 11 }),
      new Costume("Z", "./Text/costumes/Z.png", { x: 6, y: 11 }),
      new Costume(",", "./Text/costumes/,.png", { x: 7, y: -5 }),
      new Costume(".", "./Text/costumes/..png", { x: 8, y: -6 }),
      new Costume('"', './Text/costumes/".png', { x: 6, y: 13 }),
      new Costume("Ã¢â‚¬Ëœ", "./Text/costumes/Ã¢â‚¬Ëœ.png", { x: 6, y: 12 }),
      new Costume("Ã¢â‚¬â„¢", "./Text/costumes/Ã¢â‚¬â„¢.png", { x: 6, y: 12 }),
      new Costume("'", "./Text/costumes/'.png", { x: 6, y: 12 }),
      new Costume("question_mark", "./Text/costumes/question_mark.png", {
        x: 6,
        y: 11,
      }),
      new Costume("!", "./Text/costumes/!.png", { x: 3, y: 12 }),
      new Costume("-", "./Text/costumes/-.png", { x: 5, y: 5 }),
      new Costume("_", "./Text/costumes/_.png", { x: 8, y: -10 }),
      new Costume(" ", "./Text/costumes/ .png", { x: 0, y: 0 }),
      new Costume(" 1", "./Text/costumes/ 1.png", { x: 5, y: 13 }),
      new Costume(" 2", "./Text/costumes/ 2.png", { x: 8, y: 10 }),
      new Costume(" 3", "./Text/costumes/ 3.png", { x: 9, y: 14 }),
      new Costume(" 4", "./Text/costumes/ 4.png", { x: 10, y: 14 }),
      new Costume(" 5", "./Text/costumes/ 5.png", { x: 7, y: 17 }),
      new Costume(" 6", "./Text/costumes/ 6.png", { x: 10, y: 18 }),
      new Costume(" 7", "./Text/costumes/ 7.png", { x: 10, y: 12 }),
      new Costume(" 8", "./Text/costumes/ 8.png", { x: 12, y: 15 }),
      new Costume(" 9", "./Text/costumes/ 9.png", { x: 8, y: 13 }),
      new Costume(" 0", "./Text/costumes/ 0.png", { x: 9, y: 12 }),
      new Costume("(", "./Text/costumes/(.png", { x: 6, y: 13 }),
      new Costume(")", "./Text/costumes/).png", { x: 3, y: 13 }),
      new Costume(">", "./Text/costumes/>.png", { x: 17, y: 19 }),
      new Costume("<", "./Text/costumes/<.png", { x: 24, y: 17 }),
      new Costume("Ã¢â‚¬Â¦", "./Text/costumes/Ã¢â‚¬Â¦.png", { x: 17, y: 41 }),
      new Costume("&", "./Text/costumes/&.png", { x: 31, y: 15 }),
      new Costume("Ã‚Â§", "./Text/costumes/Ã‚Â§.png", { x: 17, y: -28 }),
      new Costume("~", "./Text/costumes/~.png", { x: 20, y: 20 }),
      new Costume("Ã¢â‚¬â€ ", "./Text/costumes/Ã¢â‚¬â€ .png", { x: 27, y: 31 }),
      new Costume("@", "./Text/costumes/@.svg", {
        x: -2.729729729729911,
        y: 268.6366316366367,
      }),
      new Costume("$", "./Text/costumes/$.png", { x: 33, y: 37 }),
      new Costume("%", "./Text/costumes/%.svg", {
        x: -10.183183183183331,
        y: 173.00000000000014,
      }),
      new Costume("|", "./Text/costumes/|.png", { x: 14, y: 43 }),
      new Costume("^", "./Text/costumes/^.png", { x: -27, y: 360 }),
      new Costume(";", "./Text/costumes/;.png", { x: 0, y: 0 }),
      new Costume("=", "./Text/costumes/=.png", { x: 0, y: 14 }),
      new Costume("Ã‚Â°", "./Text/costumes/Ã‚Â°.svg", {
        x: -72.19669669669668,
        y: 283.6036036036037,
      }),
      new Costume("{", "./Text/costumes/{.png", { x: 6, y: 28 }),
      new Costume("}", "./Text/costumes/}.png", { x: 5, y: 29 }),
      new Costume("Ã„Å¾", "./Text/costumes/Ã„Å¾.png", { x: 23, y: 24 }),
      new Costume("Ã„â€“", "./Text/costumes/Ã„â€“.png", { x: -1, y: 24 }),
      new Costume("ÃˆÅ¡", "./Text/costumes/ÃˆÅ¡.png", { x: -12, y: 29 }),
      new Costume("Ã…Â ", "./Text/costumes/Ã…Â .png", { x: -56, y: 29 }),
      new Costume("Ã…Â²", "./Text/costumes/Ã…Â².png", { x: -91, y: 31 }),
      new Costume("Ã…Â¤", "./Text/costumes/Ã…Â¤.png", { x: -113, y: 33 }),
      new Costume("Ã¢â€žÂ¢", "./Text/costumes/Ã¢â€žÂ¢.png", { x: 13, y: 20 }),
      new Costume("]", "./Text/costumes/].svg", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound("Boop Bing Bop", "./Text/sounds/Boop Bing Bop.wav"),
      new Sound("Interaction", "./Text/sounds/Interaction.wav"),
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
