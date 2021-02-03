const organizeInstructors = function (instructors) {
  let orgList = {}; // defining object for answer

  for (let i = 0; i < instructors.length; i++) { //

    let courseName = instructors[i].course; // courseName = the Course property key for each object as its iterated 

    if (orgList[courseName] === undefined) { // if orgList does not have a property key of the course name from the argument array, make one thats a []
      orgList[courseName] = [];
    }

    orgList[courseName].push(instructors[i].name); //each loop push the name key of the object on the iteration we're in, to its own course key, which is now a property key in our new object

  }

  return orgList;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));