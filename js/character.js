import { display } from "./utils.js";

export default class Character {
  constructor({ name, hp, dmg, mana }) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.turn;
    this.status = "playing";
    this.id = Date.now() - Math.floor(Math.random() * 1000);
  }

  takeDamage(damage) {
    this.hp -= damage;

    const sounds = [
      "Aïe",
      "Aouch",
      "Non mais dis-donc",
      "ça fait mal",
      "Ouille",
      "Je vais me plaindre à Féfé",
    ];

    const speech = new SpeechSynthesisUtterance(
      sounds[Math.floor(Math.random() * sounds.length)]
    );

    speech.lang = "fr-FR";
    speech.value = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    if (this.hp <= 0) {
      this.status = "loser";
      this.hp = 0;
      const deadSounds = [
        "Mince alors je suis mort",
        "RIP petit ange parti trop vite",
        "J'ai envie de me suicider parce que c'est cool la mort",
      ];

      speech.text = deadSounds[Math.floor(Math.random() * deadSounds.length)];

      window.speechSynthesis.speak(speech);
    }

    const text =
      this.hp > 0
        ? `Il lui reste ${this.hp} points de vie`
        : `${this.name} est mort 💀💀💀💀`;

    display({
      text: `${this.name} perd ${damage} points de vie.\n` + text,
      options: [
        {
          text: "Continuer",
          action: () => this.turn.nextTurn(),
        },
      ],
    });
  }

  dealDamage({ victim, dmg = this.dmg } = {}) {
    victim.takeDamage(dmg);

    if (victim.status === "loser") this.mana += 20;

    this.turn.game.hud.showStats();

    const victimImg = document.querySelector(`.c${victim.id} img`);
    const victimHp = document.querySelector(`.c${victim.id} .hp`);

    victimImg.classList.add("hurt");
    victimHp.classList.add("hurt");

    setTimeout(() => {
      victimImg.classList.remove("hurt");
      victimHp.classList.remove("hurt");
    }, 2000);
  }

  attack({ dmg = this.dmg } = {}) {
    const options = [];

    this.turn.characters.forEach((character) => {
      if (character !== this) {
        options.push({
          text: character.name,
          action: () => this.dealDamage({ victim: character, dmg }),
          deactivated: character.status !== "playing",
        });
      }
    });

    return display({ text: "Qui voulez-vous tabasser ?", options });
  }

  activateSpecial = () => {
    return this.mana < this.specialAttack.cost;
  };
}
