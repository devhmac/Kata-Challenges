//Learned a bubble sort for this one!

const sumLargestNumbers = function (array) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] > array[i]) {
        sorted = false;
        let temp = array[i]
        array[i] = array[i + 1];
        array[i + 1] = temp
      }
    }
  }
  let sum = array[0] + array[1];
  return sum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));