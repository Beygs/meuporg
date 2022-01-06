import Character from "../character.js";
import { display } from "../utils.js";

export default class Wizard extends Character {
  constructor({ name, hp = 10, dmg = 2, mana = 200 } = {}) {
    super({ name, hp, dmg, mana });
    this.special = false;
    this.specialAttack = {
      name: "Fireball",
      action: this.specialAttackAction,
      cost: 25,
      hover: `Coûte 25 mana\nInflige 7 dégats`
    };
  }

  specialAttackAction() {
    super.specialAttackAction();

    display({
      text: `${this.name} lance son attaque spéciale : Fireball`,
      options: [
        {
          text: "Continuer",
          action: () => this.attack({ dmg: 7 }),
        },
      ],
    });
  }
}