let whiteQueen = [0, 5];
let blackQueen = [7, 7];

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
  let horizThreat = 0;
  let vertThreat = 0;
  let diagThreat = 0;


  //checks horizontal threat
  for (let x = 0; x < generatedBoard.length; x++) {
    horizThreat += generatedBoard[whiteY][x];
    if (horizThreat === 2) {
      threat = true;
    }
  }

  //checks vertical threat
  for (let y = 0; y < generatedBoard.length; y++) {
    vertThreat += generatedBoard[y][whiteX];
    if (vertThreat === 2) {
      threat = true;
    }
  }

  //diagonal threat
  for (let row = 0; row < generatedBoard.length; row++) {

    for (let col = 0; col < generatedBoard[row].length; col++) {
      if (generatedBoard[row][col] === 1) {
        console.log([[row], [col]]);
        for (let diag = 1; diag < generatedBoard.length; diag++) {
          //if (diagR + row <= generatedBoard.length - 1) {
          if (col + diag < generatedBoard.length && row === generatedBoard.length - 1) {
            diagThreat += generatedBoard[row][col + diag];
            // console.log('diag R [' + [[row], [col + diag]] + ']');
          } else if (col + diag < generatedBoard.length) {
            diagThreat += generatedBoard[row + 1][col + diag];
            //console.log('diag R [' + [[row + 1], [col + diag]] + ']');
          }
          if (col - diag >= 0 && row <= generatedBoard.length - 1) {
            diagThreat += generatedBoard[row + 1][col - diag];
            //console.log('diag L [' + [[row + 1], [col - diag]] + ']');
          }
          if (row + 1 > generatedBoard.length - 1) {
            break;
          }
          row++
        }
      }
    }
    if (diagThreat === 1) {
      threat = true;
    }
  }




  return threat;





}


console.log(queenThreat(generatedBoard));