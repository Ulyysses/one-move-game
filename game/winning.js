const getResult = (posibleMoves, userMove, computerMove) => {
  const isDraw = userMove === computerMove;
  const isWithinHalfLength =
    Math.abs(userMove - computerMove) <= posibleMoves.length / 2;

  return (
    (isDraw && 0) ||
    (isWithinHalfLength
      ? userMove < computerMove
        ? 1
        : 2
      : userMove < computerMove
      ? 2
      : 1)
  );
};

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
  getResult,
  resultTableMap,
  resultUserMap,
};
