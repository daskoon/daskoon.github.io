import {
  Sprite,
  Trigger,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DevController extends Sprite {
  constructor(...args) {
    super(...args);

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.createTrainerWidget();
    yield* this.aiLoop();
  }

  createTrainerWidget() {
    if (document.getElementById("overstory-trainer")) return;

    const container = document.createElement("div");
    container.id = "overstory-trainer";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.right = "10px";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    container.style.color = "white";
    container.style.padding = "10px";
    container.style.borderRadius = "8px";
    container.style.zIndex = "9999";
    container.style.fontFamily = "monospace";
    container.style.border = "2px solid #555";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

    container.innerHTML = `
      <div style="margin-bottom: 8px; border-bottom: 1px solid #555; padding-bottom: 5px; font-weight: bold;">
        OVERSTORY TRAINER
        <span id="trainer-toggle" style="float: right; cursor: pointer;">[-]</span>
      </div>
      <div id="trainer-content">
        <label><input type="checkbox" id="infHP"> Infinite HP</label><br>
        <label><input type="checkbox" id="infGold"> Infinite Gold</label><br>
        <label><input type="checkbox" id="noClip"> NoClip (Experimental)</label><br>
        <label><input type="checkbox" id="aiActive"> Tester AI (Auto-Play)</label><br>
        <div style="margin-top: 5px;">
          Speed: <input type="range" id="speedMult" min="1" max="10" value="1" style="width: 80px;">
          <span id="speedVal">1x</span>
        </div>
      </div>
    `;

    document.body.appendChild(container);

    const toggle = document.getElementById("trainer-toggle");
    const content = document.getElementById("trainer-content");
    toggle.onclick = () => {
      if (content.style.display === "none") {
        content.style.display = "block";
        toggle.innerText = "[-]";
      } else {
        content.style.display = "none";
        toggle.innerText = "[+]";
      }
    };

    // Event Listeners for Stage Variables
    document.getElementById("infHP").onchange = (e) => {
      this.stage.vars.dev_infHP = e.target.checked ? 1 : 0;
    };
    document.getElementById("infGold").onchange = (e) => {
      this.stage.vars.dev_infGold = e.target.checked ? 1 : 0;
    };
    document.getElementById("noClip").onchange = (e) => {
      this.stage.vars.dev_noClip = e.target.checked ? 1 : 0;
    };
    document.getElementById("aiActive").onchange = (e) => {
      this.stage.vars.dev_aiActive = e.target.checked ? 1 : 0;
    };
    document.getElementById("speedMult").oninput = (e) => {
      const val = e.target.value;
      this.stage.vars.dev_speedMult = parseFloat(val);
      document.getElementById("speedVal").innerText = val + "x";
      this.stage.vars.speed = 4 * this.stage.vars.dev_speedMult;
    };
  }

  *aiLoop() {
    while (true) {
      if (this.toNumber(this.stage.vars.dev_aiActive) === 1) {
        // Dialogue skipping logic
        if (this.toNumber(this.stage.vars.talking) === 1) {
          // Simulate 'z' key down/up
          this.runtime.keyPressed.z = true;
          yield* this.wait(0.05);
          this.runtime.keyPressed.z = false;
          yield* this.wait(0.1);
        }

        // Basic Goal Seeking (Next Room)
        // Note: This is a placeholder for custom logic per room
        // For now, if we aren't talking and aren't in battle, we try to move right or up.
        if (this.toNumber(this.stage.vars.talking) === 0 && this.toNumber(this.stage.vars.inBattle) === 0) {
            // Find the player and move them
            // In Leopard, we can try to influence the player's position or keys.
            this.runtime.keyPressed.ArrowRight = true;
            yield* this.wait(0.5);
            this.runtime.keyPressed.ArrowRight = false;
        }
      }
      yield;
    }
  }
}
