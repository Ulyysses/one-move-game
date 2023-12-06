const game = (array) => {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let movesInfo = "Available moves:\n";
  let indexArr = [];

  array.forEach((item, index) => {
    movesInfo += `${index + 1} - ${item}\n`;
    indexArr.push(`${index + 1}`);
  });
  movesInfo += "0 - exit\n? - help";
  console.log(movesInfo);

  indexArr.push("0", "?");

  rl.question("Enter your move: ", (userMove) => {
    if (indexArr.includes(userMove)) {
      console.log(`Your move: ${userMove}`);
      const computerMove = "1";
      console.log(`Computer move: ${computerMove}`);
      console.log("You win!");
    } else {
      console.log(
        "Invalid choice."
      );
    }

    rl.close();
  });
};

game([...process.argv.slice(2)]);
