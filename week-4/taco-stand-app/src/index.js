/**
 * Author:      Devin Ledesma
 * Date:        04/11/2025
 * File Name:   index.js
 * Description: Uses the TacoStandEmitter class from taco-stand.js to pass commands and arguments through the CLI
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("../src/taco-stand");
const console = require("node:console");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  // Handle the commands
  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;
    case "prepare":
      tacoStand.prepareTaco(argument);
      break;
    case "rush":
      tacoStand.handleRush(argument);
      break;
    default:
      console.log(
        `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
      );
  }
});

