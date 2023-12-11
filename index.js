const Game = require("./game/game");

const exitOption = "0";
const helpOption = "?";
const moves = process.argv.slice(2);

new Game(moves, exitOption, helpOption).startGame();

