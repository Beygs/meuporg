import Character from "../character.js";
import Game from "../game.js";

export default class Fighter extends Character {
  constructor({ name, hp = 12, dmg = 4, mana = 40 } = {}) {
    super({ name, hp, dmg, mana });
    this.special = false;
  }

  special_attack(victim) {
    console.group(`${this.name} lance son attaque spéciale : %cDark Vision`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.dealDamage({ victim });
    this.special = true;

    console.groupEnd();
  }

  takeDamage(damage) {
    if (this.special) damage -= 2;

    super.takeDamage(damage);
  }
}