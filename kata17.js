const blocksAway = function (directions) {
  // we need position variable, perhaps array [x,y]
  let position = [0, 0];
  let orientation = 'start'
  let output = {
    east: 0,
    north: 0
  }
  // position[0] = horizontal movement
  //postition[1] = vertical movement

  // make a variable that has positional organization, so as we turn it changes? Making the next turn correct?

  // if orientation = vert pos[0] +i if orientation = horiz pos[1] +i
  //then change orientation with each turn

  // probably need 4 orientations, up down left right, & starts at start for baseline

  //loop though directions, adding # of blocks to a given direction

  //once we have position we can turn obj.east = pos[0] obj.north = pos[1]

  // because we always moving from bottom left corner, dont have to deal with south or west

  for (let i = 0; i <= directions.length; i += 2) {
    //test logs to track where we are in the directions array
    // console.log(i)
    // console.log(position)
    // console.log('loop start orientation ' + orientation)
    // console.log("we are moving to the " + directions[i] + ' and we moving ' + directions[i + 1] + ' spaces')

    if (orientation === 'start') { // if car has not yet moved
      if (directions[i] === 'right') {
        position[0] += directions[i + 1];
        orientation = 'r';

      } else if (directions[i] === 'left') {
        position[1] += directions[i + 1];
        orientation = 'up';
      }

    } else if (orientation === 'r') { // if car is facing right

      if (directions[i] === 'right') {
        position[1] -= directions[i + 1];
        orientation = 'down';
      } else if (directions[i] === 'left') {
        position[1] += directions[i + 1];
        orientation = 'up';
      }

    } else if (orientation === 'up') { // if car is facing up

      if (directions[i] === 'right') {
        position[0] += directions[i + 1];
        orientation = 'r';
      } else if (directions[i] === 'left') {
        position[0] -= directions[i + 1];
        orientation = 'l'
      }

    } else if (orientation === 'l') { // if car is facing left

      if (directions[i] === 'right') {
        position[1] += directions[i + 1];
        orientation = 'up';
      } else if (directions[i] === 'left') {
        position[1] -= directions[i + 1];
        orientation = 'down'
      }

    } else if (orientation === 'down') { // if car is facing down

      if (directions[i] === 'right') {
        position[0] -= directions[i + 1];
        orientation = 'l';
      } else if (directions[i] === 'left') {
        position[0] += directions[i + 1];
        orientation = 'r'
      }

    }
    // console.log('loop end ' + position)
    // console.log('loop end orientation ' + orientation)
    // console.log("loop over")

  }
  output.east = position[0];
  output.north = position[1];

  return output
}




console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));