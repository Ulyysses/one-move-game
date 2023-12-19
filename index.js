const Game = require("./game/game");

const exitOption = "0";
const helpOption = "?";
const moves = process.argv.slice(2);

const isValidGame = (moves) =>
  moves.length > 1 &&
  moves.length % 2 !== 0 &&
  new Set(moves).size === moves.length;

const startGame = (moves, exitOption, helpOption) =>
  new Game(moves, exitOption, helpOption).startGame();

isValidGame(moves)
  ? startGame(moves, exitOption, helpOption)
  : console.log(
      "Invalid game configuration. Please review your input. Ensure that the game includes a minimum of three distinct move options, and the total number of moves must be an odd number."
    );
