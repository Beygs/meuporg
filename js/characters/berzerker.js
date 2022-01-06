import Character from "../character.js";

export default class Berzerker extends Character {
  constructor({ name, hp = 8, dmg = 4, mana = 0 } = {}) {
    super({ name, hp, dmg, mana });
    this.specialAttack = {
      name: 'Rage',
      action: this.specialAttackAction
    }
  }

  specialAttackAction() {
    console.group(`${this.name} lance son attaque spéciale : %cRage`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.dmg++;

    console.log(`${this.name} gagne un point d'attaque. Il a désormais ${this.dmg} points d'attaque`);

    console.groupEnd();

    this.turn.nextTurn();
  }
}