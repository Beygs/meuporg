export default class Character {
  constructor({ name, hp, dmg, mana }) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = 'playing';
  }

  takeDamage(damage) {
    this.hp -= damage;
    console.group(`${this.name} perd ${damage} points de vie.`);
    console.log(`Il reste ${this.hp} points de vie à ${this.name}.`);
    console.groupEnd();

    if (this.hp <= 0) this.status = 'loser';
  }

  dealDamage({ victim, dmg = this.dmg }) {
    victim.takeDamage(dmg);

    if (victim.status === 'loser') this.mana += 20;
  }
}
