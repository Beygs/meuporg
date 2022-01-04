import Game from "./game.js";

const game = new Game();

while (game.turnLeft > 0) {
  game.newTurn();
}