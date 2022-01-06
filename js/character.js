import { display } from "./utils.js";

export default class Character {
  constructor({ name, hp, dmg, mana }) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.turn;
    this.status = "playing";
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.group(`${this.name} perd ${damage} points de vie.`);
    console.log(`Il reste ${this.hp} points de vie à ${this.name}.`);
    console.groupEnd();

    if (this.hp <= 0) {
      this.status = "loser"
      this.hp = 0;
    };
  }

  dealDamage({ victim, dmg = this.dmg } = {}) {
    victim.takeDamage(dmg);

    if (victim.status === "loser") this.mana += 20;

    this.turn.nextTurn();
  }

  attack({ dmg = this.dmg } = {}) {
    const options = [];

    this.turn.characters.forEach((character) => {
      if (character !== this) {
        options.push({
          text: character.name,
          action: () => this.dealDamage({ victim: character, dmg }),
          deactivated: character.status !== 'playing'
        });
      }
    });

    return display({ text: "Qui voulez-vous tabasser ?", options });
  }

  activateSpecial = () => {
    return this.mana < this.specialAttack.cost;
  };
}
