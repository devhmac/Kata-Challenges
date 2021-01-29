// longest instructor name

const instructorWithLongestName = function (array) {
  let longest; //this will hold our object with the longest name
  let length = 0; // this will hold the current 'longest' name in the loop thus far
  for (let i = 0; i < array.length; i++) { // loop though the functions argument
    if (array[i].name.length > length) { // is the name property key in the current array element longer than 'length' 
      length = array[i].name.length; // array[i] is longer than length, so make length the length of array[i].name
      longest = array[i]; // the current longest is the most recent array[i].name which has made it past the >length logic, if nothing new passes logic, then we have the longest
    }
  }
  return longest;
}
console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));

console.log(instructorWithLongestName([ //if same length, first one returns
  { name: "Devin", course: "Web" },
  { name: "David", course: "iOS" },
]));