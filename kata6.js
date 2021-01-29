const whereCanIPark = function (spots, vehicle) {
  //first must loop though entire array
  for (let r = 0; r < spots.length; r++) { //first loop
    for (let c = 0; c < spots[r].length; c++) { // second loop (We are now touching each individual item)
      if ((vehicle === 'regular') && (spots[r][c] === "R")) {
        return [c, r];
      } else if ((vehicle === 'small') && (spots[r][c] === "R" || spots[r][c] === "S")) {
        return [c, r];
      } else if ((vehicle == 'motorcycle') && (spots[r][c] === "R" || spots[r][c] === "S" || spots[r][c] === "M")) {
        return [c, r]
      }
    }
  }
  return false; // if vehicle argument values do not match into a logic function we will return false, meaning no spots available for that vehicle
}
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
