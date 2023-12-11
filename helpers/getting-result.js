class GameResult {
  constructor(posibleMoves, userMove, computerMove) {
    this.posibleMoves = posibleMoves;
    this.userMove = userMove;
    this.computerMove = computerMove;
  }

  getResult() {
    const isDraw = this.userMove === this.computerMove;
    const isWithinHalfLength =
      Math.abs(this.userMove - this.computerMove) <=
      this.posibleMoves.length / 2;

    const drawResult = () => 0;
    const withinHalfLengthResult = () =>
      this.userMove < this.computerMove ? 1 : 2;
    const outsideHalfLengthResult = () =>
      this.userMove < this.computerMove ? 2 : 1;

    return isDraw
      ? drawResult()
      : isWithinHalfLength
      ? withinHalfLengthResult()
      : outsideHalfLengthResult();
  }
}

const resultTableMap = {
  0: "draw",
  1: "lose",
  2: "win",
};

const resultUserMap = {
  0: "Draw!",
  1: "You lose(",
  2: "You win!",
};

module.exports = {
  GameResult,
  resultTableMap,
  resultUserMap,
};
