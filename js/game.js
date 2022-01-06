import Assassin from "./characters/assassin.js";
import Berzerker from "./characters/berzerker.js";
import Fighter from "./characters/fighter.js";
import Monk from "./characters/monk.js";
import Paladin from "./characters/paladin.js";
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
    display({
      text: "Bienvenue dans le MEUPORG",
      options: [
        { text: "Continuer", action: this.newTurn.bind(this) },
      ],
    });
  }

  newTurn() {
    const turn = new Turn({
      turnNumber: this.totalTurns - this.turnLeft + 1,
      characters: this.characters,
      game: this
    });
    this.turnLeft -= 1;
  }
}
