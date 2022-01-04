export default class Game {
  constructor({ turnLeft = 10 } = {}) {
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft -= 1;
  }
}