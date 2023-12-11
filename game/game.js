const readline = require("readline");
const SecurityFunctions = require("../helpers/security");
const { GameResult, resultUserMap } = require("../helpers/getting-result");
const HelpTable = require("../helpers/table");
const GameInfo = require("./info");

class Game {
  constructor(moves, exitOption, helpOption) {
    this.movesInfo = new GameInfo(moves, exitOption, helpOption);
    this.exitOption = exitOption;
    this.helpOption = helpOption;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.possibleMoves = this.movesInfo.generateMovesInfo().possibleMoves;
    this.computerMove = this.getComputerMove();
    this.securityFunctions = new SecurityFunctions();
    this.key = this.securityFunctions.generateRandomKey();
    this.hmac = this.securityFunctions.generateHmac(
      this.computerMove,
      this.key
    );
  }

  getComputerMove() {
    const possibleComputerMoves = this.possibleMoves.slice(0, -2);
    const randomIndex = Math.floor(
      Math.random() * possibleComputerMoves.length
    );
    return possibleComputerMoves[randomIndex];
  }

  makeGame() {
    this.rl.question("Enter your move: ", (userMove) => {
      if (userMove === this.exitOption) {
        this.rl.close();
        process.exit();
      }

      if (userMove === this.helpOption) {
        new HelpTable(this.possibleMoves.slice(0, -2)).buildTable();
        process.exit();
      }

      if (this.possibleMoves.includes(userMove)) {
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${this.computerMove}`);
        const result = new GameResult(
          this.possibleMoves,
          userMove,
          this.computerMove
        ).getResult();
        console.log(resultUserMap[result]);
        console.log("HMAC key:", this.key);
        process.exit();
      } else {
        console.log(
          "Unfortunately, there is no such move in the game, please review the available options again."
        );
        console.log(this.movesInfo.generateMovesInfo().movesInfo);
        this.makeGame();
      }
    });
  }

  startGame() {
    console.log("HMAC:", this.hmac);
    console.log(this.movesInfo.generateMovesInfo().movesInfo);
    this.makeGame();
  }
}

module.exports = Game;

const exitOption = "0";
const helpOption = "?";
const moves = process.argv.slice(2);
new Game(moves, exitOption, helpOption).startGame();
