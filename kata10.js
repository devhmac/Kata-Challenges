

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];




const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let bakeA = recipeCheck(bakeryA, recipes); // call funciton on bakeryA

  let bakeB = recipeCheck(bakeryB, recipes); //call function on bakeryB

  for (let a = 0; a < bakeA.length; a++) { //loop though bakery A array
    for (let b = 0; b < bakeB.length; b++) { // loop through bakery B array
      if (bakeA[a] === bakeB[b]) {
        return bakeB[b]; // if there is any matching recipie, thats the one we're making!
      }
    }
  }
}


const recipeCheck = function (bakery, recipes) { // function will compare a bakeries ingredients to a recipie list, in any ingredients match, will return the name of the recipies in an array.  
  let matchedNames = []
  for (let i = 0; i < bakery.length; i++) {


    for (let r = 0; r < recipes.length; r++) {
      for (let ing = 0; ing < recipes[r]['ingredients'].length; ing++) {


        if (bakery[i] === recipes[r]['ingredients'][ing]) {
          //console.log("The matching ingredient is " + recipes[r]['ingredients'][ing] + " from the recipe " + recipes[r]['name']);

          matchedNames.push(recipes[r]['name']);
        }
      }
    }
  }
  return matchedNames;

}

console.log(chooseRecipe(bakeryA, bakeryB, recipes));



bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));