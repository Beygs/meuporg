import Character from "../character.js";

export default class Monk extends Character {
  constructor({ name, hp = 8, dmg = 2, mana = 200 } = {}) {
    super({ name, hp, dmg, mana });
  }

  special_attack() {
    console.group(`${this.name} lance son attaque spéciale : %cHeal`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.hp += 8;

    console.log(`${this.name} se soigne de 8 points de vie. Il a désormais ${this.hp} points de vie`);

    console.groupEnd();
  }
}