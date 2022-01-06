import Character from "../character.js";
import { display } from "../utils.js";

export default class Paladin extends Character {
  constructor({ name, hp = 16, dmg = 3, mana = 160 } = {}) {
    super({ name, hp, dmg, mana });
    this.specialAttack = {
      name: "Healing Light",
      action: this.specialAttackAction,
      cost: 40,
      hover: `Coûte 40 mana\nPermet de récupérer 5 points de vie\nInflige 4 dégats`
    };
  }

  specialAttackAction() {
    this.hp += 5;

    super.specialAttackAction();

    const hp = document.querySelector(`.c${this.id} .hp`);

    hp.classList.add("positive");

    setTimeout(() => {
      hp.classList.remove("positive");
    }, 2000);

    display({
      text: `${this.name} lance son attaque spéciale : Healing Light, qui lui permet de récupérer 5 hp.\nIl a désormais ${this.hp} points de vie.`,
      options: [
        {
          text: "Continuer",
          action: () => this.attack({ dmg: 4 }),
        },
      ],
    });
  }
}
