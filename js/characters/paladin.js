import Character from "../character.js";

export default class Paladin extends Character {
  constructor({ name, hp = 16, dmg = 3, mana = 160, game } = {}) {
    super({ name, hp, dmg, mana, game });
  }

  specialAttack() {
    console.group(`${this.name} lance son attaque spéciale : %cHealing Light`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.attack({ dmg: 4 });
    this.hp += 5;

    console.log(`${this.name} se soigne de 5 points de vie. Il a désormais ${this.hp} points de vie`);

    console.groupEnd();
  }
}