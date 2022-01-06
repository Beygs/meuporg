import Character from "../character.js";
import { display } from "../utils.js";

export default class Paladin extends Character {
  constructor({ name, hp = 16, dmg = 3, mana = 160, game } = {}) {
    super({ name, hp, dmg, mana, game });
    this.specialAttack = {
      name: "Healing Light",
      action: this.specialAttackAction,
      cost: 40,
    };
  }

  specialAttackAction() {
    this.mana -= this.specialAttack.cost;
    this.hp += 5;

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
