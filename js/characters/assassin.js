import Character from "../character.js";

export default class Assassin extends Character {
  constructor({ hp = 6, dmg = 6, mana = 20 } = {}) {
    super({ hp, dmg, mana });
  }
}