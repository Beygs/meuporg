import { display } from "./utils.js";

export default class Turn {
  constructor({ turnNumber, characters, game }) {
    this.turnNumber = turnNumber;
    this.characters = characters;
    this.game = game;
    this.turnOfId = 0;
    characters.forEach(c => {
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
    this.turnOf(this.shuffleCharacters()[this.turnOfId]);
  }

  nextTurn() {
    if (this.turnOfId === this.characters.length - 1) return this.game.newTurn();

    this.turnOfId += 1;
    this.turnOf(this.characters[this.turnOfId]);
  }

  shuffleCharacters() {
    return this.characters.sort(() => Math.random() - 0.5);
  }

  turnOf(character) {
    display({
      text: `C'est au tour de ${character.name} de jouer !`,
      options: [
        {
          text: "Attaquer",
          action: character.attack.bind(character),
        },
        {
          text: character.specialAttack.name,
          action: character.specialAttack.action.bind(character)
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
}
