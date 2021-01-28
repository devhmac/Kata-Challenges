
const conditionalSum = function (values, condition) { // Function creation
  let totalSum = 0 // this will make the function return 0 if no condition is matched
  for (let i = 0; i < values.length; i++) { // this loops through array
    if (condition === 'even') { // matches condition to logic
      if (values[i] % 2 === 0) { //determines if values are even based on condition of 'even'
        totalSum += values[i] //adds values that match condition statement together
      }
    } else if (condition === 'odd') {
      if (values[i] % 2 !== 0) {
        totalSum += values[i]
      }
    }
  }
  return totalSum
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));