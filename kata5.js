const urlEncode = function (url) {
  let encoded = ''; // new url
  for (let i = 0; i < url.length; i++) { //loop through each character of url string
    if (url[i] !== ' ') { //if character is not a ' ' then add it to encoded
      encoded += url[i];
    } else if ((url[i] === ' ') && (i > 0) && (i < url.length - 1)) { //extra logic parameters limit the addition if %20 when a ' ' occurs as the first or last character in string
      encoded += '%20'; //if url is a space add %20 to encoded instead 
    }
  }
  return encoded //return new version of the url
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));