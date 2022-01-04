import Character from "../character.js";

export default class Paladin extends Character {
  constructor({ name, hp = 16, dmg = 3, mana = 160 } = {}) {
    super({ name, hp, dmg, mana });
  }
}