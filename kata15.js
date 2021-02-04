const squareCode = function (string) {
  let arrayBox = boxString().split('\n'); //turning the input string into an array of the box rows
  let codedArray = []; //will be function return

  for (let r = 0; r < arrayBox.length; r++) { //loop through arrayBox
    for (let l = 0; l < arrayBox[r].length; l++) { //for each letter in in arraybox[r] 
      if (!codedArray[l]) { // is there a codedArray[l] yet?
        codedArray.push(arrayBox[r][l]); // if not, push the first letter of that row into codedarray, making it codedArray[l]

      } else {

        codedArray[l] += arrayBox[r][l]; //if there is a codedArray[l], add the letter from the row of arrayBox you're on.
      }
    }

  }
  //console.log(codedArray)
  return codedArray.join(' '); // join the array into a string with ' ' in between

  //-------------------------------------------

  function boxString() { //function to remove all spaces from string, and create box
    let noSpace = "";
    let box = ""
    let squareNum = 0;
    for (let i = 0; i < string.length; i++)
      if (string[i] !== ' ') {
        noSpace += string[i];
      }
    //console.log(noSpace);

    squareNum = Math.ceil(Math.sqrt(noSpace.length));
    //console.log(squareNum)

    for (let i = 0; i < noSpace.length; i++) {
      if (i === 0) {
        box += noSpace[i];
      } else if (i % squareNum === 0) {
        box += '\n';
        box += noSpace[i];
      } else {
        box += noSpace[i];
      }

    }

    return box
  }
}
console.log(squareCode("chill out"))
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
