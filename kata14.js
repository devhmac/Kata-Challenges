const urlDecode = function (text) {
  let resultObj = {} // declare object 

  let stringSpace = spaceAdd() // space add = function to remove %20, and add ' ' we will then be utilizing this string to build out object

  let keyAndVal = stringSpace.split(/[&=]/); //split apart the mod'd string by & or = to get at each individual value.
  //string will alternate property key and its value
  for (let i = 0; i < keyAndVal.length; i++) { // loop through array, assign property and its value = i+1,  
    resultObj[keyAndVal[i]] = keyAndVal[i + 1];
    i++;
  }
  function spaceAdd() { //function to create a new string with %20 replaced with ' '
    let addSpace = ''
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '%') {
        addSpace += ' '
        i += 2;
      } else {
        addSpace += text[i]
      }
    }
    return addSpace;
  }

  return resultObj

}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);




