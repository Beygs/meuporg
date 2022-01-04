import Character from "../character";

export default class Berzerker extends Character {
  constructor({ hp = 8, dmg = 4, mana = 0 } = {}) {
    super({ hp, dmg, mana });
  }
}