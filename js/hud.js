export default class Hud {
  constructor(characters) {
    this.characters = characters;
    this.charactersStatusEl = document.querySelector('.characters-status');
    this.showStats();
  }

  showStats() {
    while (this.charactersStatusEl.firstChild) this.charactersStatusEl.removeChild(this.charactersStatusEl.firstChild);

    this.characters.forEach(character => {
      const characterStats = document.createElement('div');
      const name = document.createElement('p');
      const charClass = document.createElement('p');
      const hp = document.createElement('p');
      const dmg = document.createElement('p');
      const mana = document.createElement('p');

      name.innerText = character.name;
      charClass.innerText = character.constructor.name;
      hp.innerText = `Points de vie : ${character.hp}`;
      dmg.innerText = `Points de dégats : ${character.dmg}`;
      mana.innerText = `Points de mana : ${character.mana}`;

      characterStats.appendChild(name);
      characterStats.appendChild(charClass);
      characterStats.appendChild(hp);
      characterStats.appendChild(dmg);
      characterStats.appendChild(mana);

      if (character.hp <= 0) characterStats.classList.add('dead');

      this.charactersStatusEl.appendChild(characterStats);
    })
  }
}