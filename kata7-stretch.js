//convert string to camel case
const camelCase = string => { //trying out an arrow function
  camelVersion = '' //var to store new string
  for (let i = 0; i < string.length; i++) { //loop through all string characters
    if (string[i] !== ' ') {
      camelVersion += string[i]; // if its not a ' ', add it to camelVersion
    } else if (string[i] === ' ') { // if it is a ' '
      camelVersion += string[i + 1].toUpperCase(); // make the next character uppercase
      i++ // add one iteration, because you've already input the next character into camelVersion var.
    }

  }
  return camelVersion;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));