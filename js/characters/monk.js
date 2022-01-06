import Character from "../character.js";
import { display } from "../utils.js";

export default class Monk extends Character {
  constructor({ name, hp = 8, dmg = 2, mana = 200 } = {}) {
    super({ name, hp, dmg, mana });
    this.specialAttack = {
      name: "Heal",
      action: this.specialAttackAction,
      cost: 25,
      hover: `Coûte 25 mana\nPermet de récupérer 8 points de vie`
    };
  }

  specialAttackAction() {
    this.hp += 8;

    super.specialAttackAction();

    const hp = document.querySelector(`.c${this.id} .hp`);

    hp.classList.add("positive");

    setTimeout(() => {
      hp.classList.remove("positive");
    }, 2000);

    display({
      text: `${this.name} lance son attaque spéciale : Heal, qui lui permet de récupérer 8 hp.\nIl a désormais ${this.hp} points de vie.`,
      options: [
        {
          text: "Continuer",
          action: () => this.turn.nextTurn(),
        },
      ],
    });
  }
}
