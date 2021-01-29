//this one had some good logic to try to wrap my head around

const repeatNumbers = function (data) { // func declare
  let numList = '' //creating empty string for solution output
  for (let r = 0; r < data.length; r++) { // loop through first array
    for (let i = 0; i < data[r][1]; i++) { // for each nested array, repeat loop by nested array[1] value
      numList += data[r][0]; // add the another value of nestedarray[0] to numList
    }
    if (r < data.length - 1) { //for each outer array, add a ',' to numList every loop, unless its at the last iteration
      numList += (',');
    }
  }

  return numList
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));