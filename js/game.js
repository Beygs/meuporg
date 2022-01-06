import Assassin from "./characters/assassin.js";
import Berzerker from "./characters/berzerker.js";
import Fighter from "./characters/fighter.js";
import Monk from "./characters/monk.js";
import Paladin from "./characters/paladin.js";
import Hud from "./hud.js";
import Turn from "./turn.js";
import { display } from "./utils.js";

const text = document.getElementById("text");
const btns = document.getElementById("btns");

export default class Game {
  constructor({ turnLeft = 10 } = {}) {
    this.turnLeft = turnLeft;
    this.totalTurns = turnLeft;
    this.characters = [
      new Fighter({ name: "Grace" }),
      new Paladin({ name: "Ulder" }),
      new Monk({ name: "Moana" }),
      new Berzerker({ name: "Draven" }),
      new Assassin({ name: "Carl" }),
    ];
    this.hud = new Hud(this.characters);
    display({
      text: "Bienvenue dans le MEUPORG ",
      options: [{ text: "Continuer", action: this.newTurn.bind(this) }],
    });
  }

  newTurn() {
    if (this.turnLeft > 0) {
      this.turnLeft -= 1;
      return new Turn({
        turnNumber: this.totalTurns - this.turnLeft,
        characters: this.characters,
        game: this,
      });
    }
    return display({
      text: "C'est fini !",
      options: [{ text: "Rejouer", action: () => new Game({ turnLeft: 10 }) }],
    });
  }
}
