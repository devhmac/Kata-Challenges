
const PI = 3.14149; //given pi value

//function for approx sphere vol.
const sphereVolume = radius => {
  let vol = 4 / 3 * PI * radius ** 3;
  return vol.toFixed(2)
}

//function for approx cone vol.
const coneVolume = (radius, height) => {
  let vol = 1 / 3 * PI * (radius ** 2) * height;
  return vol.toFixed(2);
}

//function for prism vol.
const prismVolume = (height, width, depth) => {
  let vol = (width * depth) * height;
  return vol
}

//item shape objects
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}




const totalVolume = (array) => {
  let sumAll = 0; // sum of all volumes

  for (let i = 0; i < array.length; i++) { // loop through all objects
    if (array[i]['type'] === 'sphere') { // if its a sphere

      sumAll += Number(sphereVolume(array[i]['radius'])); // we add the sphere volume to sumAll

    } else if (array[i]['type'] === 'cone') { //if its a cone

      sumAll += Number(coneVolume(array[i]['radius'], array[i]['height'])); //add cone volume to sumAll

    } else if (array[i]['type'] === 'prism') { //if prism

      sumAll += Number(prismVolume(array[i]['height'], array[i]['width'], array[i]['depth'])); //add prism volume
    }
  }
  return sumAll;
}
// blow up item we're trying to find the volume for
const duck = [
  largeSphere,
  smallSphere,
  cone
]
console.log(totalVolume(duck))

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);