class GameInfo {
  constructor(moves, exitOption, helpOption) {
    this.moves = moves;
    this.exitOption = exitOption;
    this.helpOption = helpOption;
  }

  generateMovesInfo() {
    let movesInfo = "Available moves:\n";
    const possibleMoves = this.moves.map((item, index) => {
      movesInfo += `${index + 1} - ${item}\n`;
      return `${index + 1}`;
    });
    movesInfo += `${this.exitOption} - exit\n${this.helpOption} - help`;
    return {
      movesInfo,
      possibleMoves: [...possibleMoves, this.exitOption, this.helpOption],
    };
  }
}

module.exports = GameInfo;
