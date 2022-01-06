import Character from "../character.js";
import { display } from "../utils.js";

export default class Fighter extends Character {
  constructor({ name, hp = 12, dmg = 4, mana = 40, game } = {}) {
    super({ name, hp, dmg, mana, game });
    this.special = false;
    this.specialAttack = {
      name: "Dark Vision",
      action: this.specialAttackAction,
      cost: 20,
      hover: `Coûte 20 mana\nDégats infligés jusqu'à la fin du tour réduits de 2\nInflige 5 dégats`
    };
  }

  specialAttackAction() {
    super.specialAttackAction();

    this.special = true;

    display({
      text: `${this.name} lance son attaque spéciale : Dark Vision\nLes attaques dirigées contre lui lui feront moins mal jusqu'à la fin du tour.`,
      options: [
        {
          text: "Continuer",
          action: () => this.attack({ dmg: 5 }),
        },
      ],
    });
  }

  takeDamage(damage) {
    if (this.special) damage -= 2;

    super.takeDamage(damage);
  }
}
