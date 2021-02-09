let prompt = require("prompt-sync")();

// code below (replace this example)
let answer
//console.log("You answered: " + answer);
console.log("Welcome to the random number guessing game!");
console.log("If you would like to exit at any time, please enter the command:'exit' ")
let num = 5
let guesses=[]

while (answer !== num) {
  answer = prompt("Guess a number: ");
  if (answer === 'exit') {
    break;
  }
  if (answer == num) {
    console.log("Your guess was correct!");
    guesses.push(answer);
    break;
  }

 if (guesses.includes(answer)){
   console.log("You have already guessed that, guess again.")
 }

  if (answer < num) {
    console.log("your Guess was too low");
    guesses.push(answer);
  } else if (answer > num) {
    console.log("Your guess was too high");
    guesses.push(answer);
  } else if (parseInt(answer) !== Number) {
    console.log("Your guess was invalid, please guess a number.");
  }
  

}

console.log(`You guessed correctly! You took ${guesses.length} attempts` );