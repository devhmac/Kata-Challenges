//Count num of vowels

const numberOfVowels = function (string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')
      // this if statement seems so redundant, but it works
      count += 1;
  }
  return count;
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));