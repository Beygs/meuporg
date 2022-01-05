import Character from "../character.js";

export default class Assassin extends Character {
  constructor({ name, hp = 6, dmg = 6, mana = 20 } = {}) {
    super({ name, hp, dmg, mana });
    this.special = false;
  }

  special_attack() {
    console.group(`${this.name} lance son attaque spéciale : %cShadow Hit`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.special = true;

    console.log(`Les attaques dirigées vers ${this.name} ne pourront plus lui infliger de dommages jusqu'au prochain tour`);

    console.groupEnd();
  }

  takeDamage(damage) {
    if (this.special) {
      console.log(`Grâce à son attaque spéciale Shadow hit, ${this.name} esquive l'attaque. Il ne subit aucun points de dégats`);
      return;
    }

    super.dealDamage(damage);
  }
}