import Assassin from "./characters/assassin.js";
import Berzerker from "./characters/berzerker.js";
import Fighter from "./characters/fighter.js";
import GrosseMerde from "./characters/grosse_merde.js";
import Monk from "./characters/monk.js";
import Paladin from "./characters/paladin.js";
import Wizard from "./characters/wizard.js";
import Hud from "./hud.js";
import Turn from "./turn.js";
import { display, speech } from "./utils.js";

const text = document.getElementById("text");
const btns = document.getElementById("btns");

export default class Game {
  constructor({ turnLeft = 10 } = {}) {
    this.turnLeft = turnLeft;
    this.totalTurns = turnLeft;
    this.characters = this.selectCharacters();
    this.hud = new Hud(this.characters);

    display({
      text: "Bienvenue dans le MEUPORG ",
      options: [{ text: "Continuer", action: this.newTurn.bind(this) }],
    });
  }

  selectCharacters() {
    const characters = [];

    const classes = [
      name => new Fighter({ name }),
      name => new Paladin({ name }),
      name => new Monk({ name }),
      name => new Berzerker({ name }),
      name => new Assassin({ name }),
      name => new Wizard({ name }),
      name => new GrosseMerde({ name }),
    ];

    const names = [
      "Grace",
      "Ulder",
      "Moana",
      "Draven",
      "Carl",
      "Jacques",
      "Eric",
      "René",
      "Micheline",
      "Jean",
      "Henri",
      "Pierre",
      "Lilian",
      "Féfé",
      "Cédric",
      "Juan",
      "Jérémie",
      "Julien",
      "Lucas",
      "Lionel",
      "Kim",
      "Laurent",
      "Jacqueline",
      "Guillaume",
      "Harry",
      "Anthony",
      "Violette",
      "Mathias",
      "Anaïs",
      "Gérard Depardieu",
      "Evan",
      "Mariem",
    ];

    for (let i = 0; i < 5; i++) {
      characters.push(
        classes[Math.floor(Math.random() * classes.length)](
          names[Math.floor(Math.random() * names.length)]
        )
      );
    }

    return characters;
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
    return this.endGame();
  }

  checkForWin() {
    return this.characters.filter((c) => c.status === "playing").length <= 1;
  }

  endGame() {
    speech([
      "Youpiiiiii j'ai gagné !",
      "C'était trop facile",
      "Moi j'adore la bagarre",
    ]);

    display({
      text: `Fin du jeu ! Le ou les gagnants sont : ${this.characters
        .filter((c) => c.status === "playing")
        .map((c) => c.name)
        .join(", ")} !`,
      options: [
        {
          text: "Rejouer",
          action: () => new Game(),
        },
      ],
    });
  }
}
