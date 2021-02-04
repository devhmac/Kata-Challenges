



const makeCase = function (string, command) {


  //camelCase function

  //camel,pascal,snake,kebab,title
  //vowel,consonant
  //upper,lower
  let result = ''
  if (command === 'camel' || command.includes('camel')) {
    result = toCamelCase();
  } else if (command === 'pascal' || command.includes('pascal')) {
    result = toPascal();
  } else if (command === 'snake' || command.includes('snake')) {
    result = toSnake();
  } else if (command === 'kebab' || command.includes('kebab')) {
    result = toKebab();
  } else if (command === 'title' || command.includes('title')) {
    result = toTitle();
  }
  // vowel
  if (command === 'vowel' || command.includes('vowel')) {
    let stringMod = ''
    if (result === "") {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
          stringMod += string[i].toUpperCase();
        } else {
          stringMod += string[i];
        }
      }
    }
    if (result !== '') {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u') {
          stringMod += result[i].toUpperCase();
        } else {
          stringMod += result[i];
        }
      }
    }
    result = stringMod
  }
  //consonant
  if (command === 'consonant' || command.includes('consonant')) {
    let stringMod = ''
    if (result === "") {
      for (let i = 0; i < string.length; i++) {
        if (!(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')) {
          stringMod += string[i].toUpperCase();
        } else {
          stringMod += string[i];
        }
      }
    }
    if (result !== '') {
      for (let i = 0; i < result.length; i++) {
        if (!(result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u')) {
          stringMod += result[i].toUpperCase();
        } else {
          stringMod += result[i];
        }
      }
    }
    result = stringMod
  }




  return result




  //----------------------------Functions--------------------------------
  function toCamelCase() {
    let stringMod = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        stringMod += string[i + 1].toUpperCase();
        i++;
      } else {
        stringMod += string[i];
      }
    }
    return stringMod;
  }
  // Pascal Function
  function toPascal() {
    let stringMod = "";
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        stringMod += string[0].toUpperCase()
        i++
      }
      if (string[i] === ' ') {
        stringMod += string[i + 1].toUpperCase();
        i++;
      } else {
        stringMod += string[i];
      }
    }
    return stringMod;
  }
  //snake 
  function toSnake() {
    let stringMod = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        stringMod += '_'

      } else {
        stringMod += string[i];
      }
    }
    return stringMod;
  }

  //kebab
  function toKebab() {
    let stringMod = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        stringMod += '-'

      } else {
        stringMod += string[i];
      }
    }
    return stringMod;
  }

  // Title
  function toTitle() {
    let stringMod = "";
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        stringMod += string[0].toUpperCase()
        i++
      }
      if (string[i] === ' ') {
        stringMod += string[i]
        stringMod += string[i + 1].toUpperCase();
        i++;
      } else {
        stringMod += string[i];
      }
    }
    return stringMod;
  }



}

console.log(makeCase("this is a string", ['kebab', 'consonant']));




