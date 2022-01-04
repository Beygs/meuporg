export default class Turn {
  constructor({ turnNumber, characters }) {
    this.turnNumber = turnNumber;
    this.characters = characters;
    this.startTurn();
  }

  startTurn() {
    console.log(`C'est parti pour le tour ${this.turnNumber} !`);
    this.shuffleCharacters().forEach(character => this.turnOf(character));
  }

  shuffleCharacters() {
    return this.characters.sort(() => Math.random() - 0.5);
  }

  turnOf(character) {
    console.log(`C'est au tour de ${character.name} de jouer !`);
  }
}