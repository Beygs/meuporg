import Character from "../character.js";

export default class Fighter extends Character {
  constructor({ name, hp = 12, dmg = 4, mana = 40 } = {}) {
    super({ name, hp, dmg, mana });
  }

  special_attack(victim) {
    console.log(`${this.name} lance son attaque spéciale : Dark Vision !`);
    this.dealDamage(victim);

  }
}