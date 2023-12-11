const Table = require("cli-table3");
const { GameResult, resultTableMap } = require("./getting-result");

class HelpTable {
  constructor(moves) {
    this.moves = moves;
    this.table = new Table({
      head: ["v PC/User >", ...moves],
    });
  }

  calculateRow(move) {
    const row = [move];

    this.moves.forEach((opponentMove) => {
      const result = new GameResult(this.moves, opponentMove, move).getResult();
      row.push(resultTableMap[result]);
    });

    return row;
  }

  buildTable() {
    const data = this.moves.map(this.calculateRow.bind(this)); // про

    data.forEach((row) => {
      this.table.push(row);
    });

    console.log(this.table.toString());
  }
}

module.exports = HelpTable;
