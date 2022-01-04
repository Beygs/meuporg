import Character from "../character.js";

export default class Berzerker extends Character {
  constructor({ name, hp = 8, dmg = 4, mana = 0 } = {}) {
    super({ name, hp, dmg, mana });
  }
}