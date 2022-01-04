import Character from "../character.js";

export default class Fighter extends Character {
  constructor({ hp = 12, dmg = 4, mana = 40 } = {}) {
    super({ hp, dmg, mana });
  }
}