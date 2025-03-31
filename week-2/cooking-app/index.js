/**
 * Author:      Devin Ledesma
 * Date:        03/30/2025
 * File Name:   index.js
 * Description: This file imports three functions from recipes.js by logging and returning the values of each
*/
"use strict";

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require('./recipes');

// TODO: Implement your CLI program here
const ingredients = ["Chicken", "Noodles"]

console.log(createRecipe(ingredients));
console.log(setTimer(15));
console.log(quit());