/**
 * Author:      Devin Ledesma
 * Date:        04/29/25
 * File Name:   pie.js
 * Description: Exports the bakePie function which validates the pie type and its essential ingredients, logs error and success messages to console.
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Check if pieType is declared
  if (!pieType) {
    console.log('Error: Pie Type is undefined!');
    process.exit(1);
  }

  // Declare essential ingredients
  const essentialIngredient = ['flour', 'sugar', 'butter'];

  // Checks if essential ingredients are included
  const hasAllIngredients = essentialIngredient.every(i => ingredients.includes(i)); // had some help with AI

  if (!hasAllIngredients) {
    // Exits the process if missing essential ingredients
    console.log('Missing essential ingredient: Your pie cannot be baked.');
    process.exit(1);
  } else {
    // Display success message if all essential ingredients are included
    console.log(`${pieType} Pie was baked successfully!`);
  }
}
module.exports = { bakePie };