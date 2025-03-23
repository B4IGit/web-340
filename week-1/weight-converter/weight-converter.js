/**
 * Author: Devin Ledesma
 * Date: 03/22/2025
 * File Name: Weight Converter
 * Description: Converts lbs to kil
 */

"use strict";

// TODO: Implement the weight conversion logic here

// weight-converter.js

function main() {
  // Checks if user entered a value
  if (process.argv.length < 3) {
    console.error('Usage: node weight-converter.js <pounds>') // display error message
    process.exit(1); // exit with a non-zero error code
  }

  // Get value from command line
  let pound = process.argv[2];

  // Checks if value is a number
  if (isNaN(pound)) {
    console.error('Please enter a numeric value');
    process.exit(1); // exit with a non-zero error code
  }

  // Converts lb to kg
  let kg = (pound * 0.453592).toFixed(2);
  console.log(`${pound} pounds is equal to ${kg} kilograms`);
} // End main()

main() // call the main function