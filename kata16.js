let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let generateBoard = function (whiteQueen, blackQueen) { //generates the board. 

  //board = 8x8, 0's
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
    board[whiteQueen[0]][whiteQueen[1]] = 1; //the board coordinate given by whiteQueen = 1
  }
  if (blackQueen) {
    board[blackQueen[0]][blackQueen[1]] = 1; //the board coordinate given by blackQueen = 1
  }
  return board
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);

const queenThreat = function (generatedBoard) {
  let whiteX = whiteQueen[1]; // takes x & y values from the coordinates given
  let whiteY = whiteQueen[0];
  let blackX = blackQueen[1];
  let blackY = blackQueen[0];

  let threat = false; // if there is no threat, threat will stay false
  let horizThreat = 0; //if there is a threat that will be determined by the number landing into these variables
  let vertThreat = 0;
  let diagThreat = 0;


  //checks horizontal threat
  for (let x = 0; x < generatedBoard.length; x++) {
    horizThreat += generatedBoard[whiteY][x]; //add all the values in the row that a queen is in
    if (horizThreat === 2) {
      threat = true; // if 2 queens are in that row, horizThreat will = 2, meaning threat is true
    }
  }

  //checks vertical threat
  for (let y = 0; y < generatedBoard.length; y++) {
    vertThreat += generatedBoard[y][whiteX]; //check position whiteX in each row of the board (whiteX = column a queen is in) add all queen values
    if (vertThreat === 2) {
      threat = true; // 2 queens = threat
    }
  }

  //diagonal threat
  for (let row = 0; row < generatedBoard.length; row++) { //loops though each row of board

    for (let col = 0; col < generatedBoard[row].length; col++) { // nested loop, loops through each postion on board
      if (generatedBoard[row][col] === 1) { // if we find a queen k
        //console.log([[row], [col]]);
        for (let diag = 1; diag < generatedBoard.length; diag++) { // new variable, diagonal iterator

          if (col + diag < generatedBoard.length && row === generatedBoard.length - 1) { // this is making sure we dont start adding values outside of the board
            //col +diag, cant be over 7 as thats how many board spaces there are
            //row = 7 is checking to see if we're on the last row, which means we dont want to +1, it would put us outside of the board
            diagThreat += generatedBoard[row][col + diag]; //last row, diag col + space

          } else if (col + diag < generatedBoard.length && row + 1 < generatedBoard.length) { // if row is less than the last row, we want to row+1, to make sure col+diag is checking the next row, not the current row, so row +1
            diagThreat += generatedBoard[row + 1][col + diag]; //col +diag = right diagonal

          }
          if (col - diag >= 0 && row + 1 < generatedBoard.length) { //col(individual square we're checking) - diag (Diagonal iterator), have to be above -1 to stay on the board to the left. 
            //row +1 still needs to be less than 8 to keep it on the board at the last row
            diagThreat += generatedBoard[row + 1][col - diag]; //col - diag = left diagonal

          }
          if (row + 1 > generatedBoard.length - 1) { //if we go past the bottom row break the loop, we've checked the entire board. 
            break;
          }
          row++ // adds another row to our diagonal loop, to make sure the next space is diagonal
        }
      }
    }
    if (diagThreat === 1) { // if it finds a queen on the diagonal path of the first found queen, there is a threat.
      threat = true;
    }
  }




  return threat; // woohoo complete!





}


console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));