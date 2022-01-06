import Character from "../character.js";

export default class Monk extends Character {
  constructor({ name, hp = 8, dmg = 2, mana = 200 } = {}) {
    super({ name, hp, dmg, mana });
    this.specialAttack = {
      name: 'Heal',
      action: this.specialAttackAction,
      cost: 25
    }
  }

  specialAttackAction() {
    console.group(`${this.name} lance son attaque spéciale : %cHeal`, `color: hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);`);

    this.mana -= this.specialAttack.cost;
    this.hp += 8;

    console.log(`${this.name} se soigne de 8 points de vie. Il a désormais ${this.hp} points de vie`);

    console.groupEnd();

    this.turn.nextTurn();
  }
}