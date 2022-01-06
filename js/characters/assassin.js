import Character from "../character.js";
import { display } from "../utils.js";

export default class Assassin extends Character {
  constructor({ name, hp = 6, dmg = 6, mana = 20 } = {}) {
    super({ name, hp, dmg, mana });
    this.special = false;
    this.specialAttack = {
      name: "Shadow Hit",
      action: this.specialAttackAction,
      cost: 20,
    };
  }

  specialAttackAction() {
    this.mana -= this.specialAttack.cost;
    this.special = true;

    display({
      text: `${this.name} lance son attaque spéciale : Shadow Hit\n
      Les attaques dirigées vers ${this.name} ne pourront plus lui infliger de dommages jusqu'au prochain tour`,
      options: [
        {
          text: "Continuer",
          action: () => this.attack({ dmg: 7 }),
        },
      ],
    });
  }

  takeDamage(damage) {
    if (this.special) {
      display({
        text: `Grâce à son attaque spéciale Shadow hit, ${this.name} esquive l'attaque. Il ne subit aucun points de dégats`,
        options: {
          text: "Continuer",
          action: () => this.turn.nextTurn(),
        },
      });
      return;
    }

    super.takeDamage(damage);
  }
}
