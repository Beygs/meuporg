import Character from "../character.js";

export default class Monk extends Character {
  constructor({ name, hp = 8, dmg = 2, mana = 200 } = {}) {
    super({ name, hp, dmg, mana });
  }
}