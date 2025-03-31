/**
 * Author:      Devin Ledesma
 * Date:        03/30/2025
 * File Name:   recipes.js
 * Description: This file styles the output for each function: createRecipe(ingredients), setTimer(minutes), and quit()
*/
"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  // create formated message for list of ingredients
  let ingredientMsg = 'Recipe created with ingredients: ';

  // loop through the ingredients - adds comma to separate each ingredient
  for (let i = 0; i < ingredients.length; i++) {
    // used AI for assistance to separate each ingredient with a comma
    ingredientMsg += ingredients[i];
    if (i < ingredients.length - 1) {
      ingredientMsg += ', ';
    }
  }

  return ingredientMsg
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return `Program exited`;
}


// TODO: Export the functions
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};