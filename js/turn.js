import Game from "./game.js";
import { display } from "./utils.js";

export default class Turn {
  constructor({ turnNumber, characters, game }) {
    this.turnNumber = turnNumber;
    this.characters = characters;
    this.game = game;
    this.turnOfId = 0;
    characters.forEach((c) => {
      if (c.special) c.special = false;
      c.turn = this;
    });
    display({
      text: `C'est parti pour le tour ${this.turnNumber} !`,
      options: [
        {
          text: "Continuer",
          action: this.startTurn.bind(this),
        },
      ],
    });
  }

  startTurn() {
    this.shuffleCharacters();
    this.nextTurn();
  }

  nextTurn() {
    if (this.game.checkForWin()) return this.game.endGame();

    this.game.hud.showStats();

    if (this.turnOfId === this.characters.length) return this.game.newTurn();

    const character = this.characters[this.turnOfId];
    this.turnOfId += 1;

    if (character.status === "playing") {
      this.turnOf(character);
    } else {
      this.nextTurn();
    }
  }

  shuffleCharacters() {
    return this.characters.sort(() => Math.random() - 0.5);
  }

  turnOf(character) {
    const characterImg = document.querySelector(`.c${character.id} img`);
    characterImg.classList.add("turn");

    display({
      text: `C'est au tour de ${character.name} de jouer !`,
      options: [
        {
          text: "Attaquer",
          action: character.attack.bind(character),
        },
        {
          text: character.specialAttack.name,
          action: character.specialAttack.action.bind(character),
          deactivated: character.activateSpecial(),
          cost: character.specialAttack.cost,
        },
      ],
    });
  }

  attack({ character, victim }) {
    character.dealDamage({ victim });

    this.turnOfId += 1;

    display({
      text: "Cliquez pour continuer",
      options: [
        { text: "Continuer", action: this.turnOf(characters[this.turnOfId]) },
      ],
    });
  }

  endGame() {
    display({
      text: `Fin du jeu ! Le ou les gagnants sont : ${this.characters
        .filter((c) => c.status === "playing")
        .map((c) => c.name)
        .join(", ")} !`,
      options: [
        {
          options: {
            text: "Rejouer",
            action: () => new Game({ turnLeft: 10 }),
          },
        },
      ],
    });
  }
}
