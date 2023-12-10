const Table = require("cli-table3");
const { getResult, resultTableMap } = require("./winning");

const openTable = (moves) => {
  const table = new Table({
    head: ["v PC/User >", ...moves],
  });

  const data = [];

  moves.forEach((move) => {
    const row = [move];

    for (let i = 0; i < moves.length; i++) {
      row.push(resultTableMap[getResult(moves, moves[i], move)]);
    }

    data.push(row);
  });

  data.forEach((row) => {
    table.push(row);
  });

  console.log(table.toString());
};

module.exports = openTable;
