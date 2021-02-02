const calculateChange = function (total, cash) {
  let cashReturn = {};
  let change = cash - total;
  if (change / 2000 >= 1) {
    let numTwenties = Math.floor(change / 2000);
    console.log("numTwenties is " + numTwenties);
    change = change - (2000 * numTwenties);
    cashReturn.twentyDollar = numTwenties;
    // console.log(change)
    // console.log(cashReturn)
  }
  if (change / 1000 >= 1) {
    let numTens = Math.floor(change / 1000);
    change = change - (1000 * numTens);
    cashReturn.tenDollar = numTens;
    //console.log(change)
    //console.log(cashReturn)
  }
  if (change / 500 >= 1) {
    let numFives = Math.floor(change / 500);
    change = change - (500 * numFives);
    cashReturn.fiveDollar = numFives;
    //console.log(change)
    //console.log(cashReturn)
  }
  if (change / 200 >= 1) {
    let numToonies = Math.floor(change / 200);
    change = change - (200 * numToonies);
    cashReturn.twoDollar = numToonies;
    //console.log(change)
    //console.log(cashReturn)
  }

  if (change / 100 >= 1) {
    let numLoonies = Math.floor(change / 100);
    change = change - (100 * numLoonies);
    cashReturn.oneDollar = numLoonies;
    //console.log(change)
    //console.log(cashReturn)
  }

  if (change / 25 >= 1) {
    let numQuarter = Math.floor(change / 25);
    change = change - (25 * numQuarter);
    cashReturn.quarter = numQuarter;
    //console.log(change)
    //console.log(cashReturn)
  }
  if (change / 10 >= 1) {
    let numDime = Math.floor(change / 10);
    change = change - (10 * numDime);
    cashReturn.dime = numDime;
    //console.log(change)
    //console.log(cashReturn)
  }
  if (change / 5 >= 1) {
    let numNickel = Math.floor(change / 5);
    change = change - (5 * numNickel);
    cashReturn.nickel = numNickel;
    // console.log(change)
    // console.log(cashReturn)
  }
  if (change / 1 >= 1) {
    let numPenny = Math.floor(change / 1);
    change = change - (1 * numPenny);
    cashReturn.penny = numPenny;
    // console.log(change)
    // console.log(cashReturn)
  }
  return cashReturn
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));