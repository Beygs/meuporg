import Character from "../character.js";
import { display } from "../utils.js";

export default class GrosseMerde extends Character {
  constructor({ name, hp = 2, dmg = 2, mana = 19 } = {}) {
    super({ name, hp, dmg, mana });
    this.special = false;
    this.specialAttack = {
      name: "Bande de cons",
      action: this.specialAttackAction,
      cost: 20,
      hover: `Coûte 20 mana\nInflige 1000 dégats`
    };
  }

  specialAttackAction() {
    super.specialAttackAction();

    display({
      text: `${this.name} lance son attaque spéciale : Bande de cons`,
      options: [
        {
          text: "Continuer",
          action: () => this.attack({ dmg: 1000 }),
        },
      ],
    });
  }
}