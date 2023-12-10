const SecurityFunctions = require("./security");
const { getResult, resultUserMap } = require("./winning");
const readline = require("readline");
const openTable = require("./table");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const securityFunctions = new SecurityFunctions();

const game = (array) => {
  let movesInfo = "Available moves:\n";

  const indexArr = [];
  const posibleMoves = [];

  array.forEach((item, index) => {
    movesInfo += `${index + 1} - ${item}\n`;
    indexArr.push(`${index + 1}`);
    posibleMoves.push(`${index + 1}`);
  });

  movesInfo += "0 - exit\n? - help";

  indexArr.push("0", "?");

  const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random() * posibleMoves.length);
    return posibleMoves[randomIndex];
  };
  const computerMove = getComputerMove();

  const key = securityFunctions.generateRandomKey();
  const hmac = securityFunctions.generateHmac(computerMove, key);

  console.log("HMAC:", hmac);

  console.log(movesInfo);

  const makeGame = () => {
    rl.question("Enter your move: ", (userMove) => {
      if (userMove === "0") {
        rl.close();
        process.exit();
      }

      if (userMove === "?") {
        openTable(posibleMoves);
        process.exit();
      }

      if (indexArr.includes(userMove)) {
        console.log(`Your move: ${userMove}`);
        console.log(`Computer move: ${computerMove}`);
        console.log(
          resultUserMap[getResult(posibleMoves, userMove, computerMove)]
        );
        console.log("HMAC key:", key);
        process.exit();
      } else {
        console.log(
          "Unfortunately, there is no such move in the game, please review the available options again."
        );
        console.log(movesInfo);
        makeGame();
      }
    });
  };
  makeGame();
};

game([...process.argv.slice(2)]);
