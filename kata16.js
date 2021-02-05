let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generateBoard = function (whiteQueen, blackQueen) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  if (whiteQueen) {
    board[whiteQueen[0]][whiteQueen[1]] = 1;
  }
  if (blackQueen) {
    board[blackQueen[0]][blackQueen[1]] = 1;
  }

  return board
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);

const queenThreat = function (generatedBoard) {
  let whiteX = whiteQueen[1];
  let whiteY = whiteQueen[0];
  let blackX = blackQueen[1];
  let blackY = blackQueen[0];

  let threat = false;
  let horizThreat = 0
  let vertThreat = 0

  //checks horizontal threat
  for (let x = 0; x < generatedBoard.length; x++) {
    horizThreat += generatedBoard[whiteY][x];
    if (horizThreat === 2) {
      threat = true;
    }
  }
  //console.log(horizThreat)
  //checks vertical threat

  for (let y = 0; y < generatedBoard.length; y++) {
    vertThreat += generatedBoard[y][whiteX];
    if (vertThreat === 2) {
      threat = true
    }
  }




  console.log(threat)





}


console.log(queenThreat(generatedBoard));