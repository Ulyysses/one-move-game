const Game = require("./game/game");

const exitOption = "0";
const helpOption = "?";
const moves = process.argv.slice(2);

const validationRules = {
  notEnoughMoves: {
    condition: moves.length < 3,
    message: "The game must contain at least 3 possible moves",
  },
  evenMoves: {
    condition: moves.length % 2 === 0,
    message: "The game must contain an odd number of moves",
  },
  repeatingMoves: {
    condition: new Set(moves).size !== moves.length,
    message: "The game must contain different options for moves",
  }
};

const isInvalidGame = () => {
  for (const rule of Object.values(validationRules)) {
    if (rule.condition) {
      console.log(rule.message);
    }
  }
};

const isValidGame = Object.values(validationRules).every(
  (rule) => !rule.condition
);

isValidGame
  ? new Game(moves, exitOption, helpOption).startGame()
  : isInvalidGame();
