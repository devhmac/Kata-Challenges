// create multiplication table based on function argument
const multiplicationTable = maxValue => {
  let table = '\n' // answer variable
  for (let i = 1; i <= maxValue; i++) { // loop going through each number between 1 and argument
    for (let c = 1; c <= maxValue; c++) {
      table += (i * c) + ' '; //multiply each number of loop 1 by each number in loop 2
    }
    table += '\n' // line down each each time we go 1 - maxValue 
  }
  return table;
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));