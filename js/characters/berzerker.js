import Character from "../character.js";
import { display } from "../utils.js";

export default class Berzerker extends Character {
  constructor({ name, hp = 8, dmg = 4, mana = 0 } = {}) {
    super({ name, hp, dmg, mana });
    this.specialAttack = {
      name: "Rage",
      action: this.specialAttackAction,
      cost: 0,
      hover: `Coûte 0 mana\nPermet de gagner un point de dégat`
    };
  }

  specialAttackAction() {
    this.dmg++;

    super.specialAttackAction();

    const dmg = document.querySelector(`.c${this.id} .dmg`);

    dmg.classList.add("positive");

    setTimeout(() => {
      dmg.classList.remove("positive");
    }, 2000);

    display({
      text: `${this.name} lance son attaque spéciale : Rage, qui lui permet de gagner un poitn d'attaque.\nIl a désormais ${this.dmg} points d'attaque.`,
      options: [
        {
          text: "Continuer",
          action: () => this.turn.nextTurn(),
        },
      ],
    });
  }
}
