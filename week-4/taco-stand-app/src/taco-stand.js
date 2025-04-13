/**
 * Author:      Devin Ledesma
 * Date:        04/11/2025
 * File Name:   taco-stand.js
 * Description: Contains the logic and error handling for the TacoStandEmitter class
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
const myEmitter = new EventEmitter();

 class TacoStandEmitter extends EventEmitter {
   serveCustomer(customer) {
     // Capitalizes the first letter of each word
     customer = customer
       .split(' ')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
       .join(' ');

     // Error message if user does not enter a name
     if (!customer) {
       console.error('No name provided. Please enter name.');
     } else {
       this.emit('serve', customer);
     }

     // console.log(''); // adds space above
     // console.log(`Taco Stand serves: ${customer}`); // displays users name
   }

   prepareTaco(taco) {
     taco = taco.toLowerCase(); // set input to lowercase

     // Error message if user does not enter a taco
     if (!taco) {
       console.error('No taco provided');
     }

     // Tacos available on menu
     const tacoOption = ['beef', 'chicken', 'pork, veggie'];

     // checks if taco exists
     if (!tacoOption.includes(taco)) {
       console.error('Please choose for one of the following: Beef, Chicken, Pork, or Veggie.');
     } else {
       this.emit('prepare', taco);
     }

     // console.log(`Taco Stand prepares: ${taco} taco`); // display name of taco
   }

   handleRush(rush) {
     rush = rush.toLowerCase(); // set input to lowercase

     if (!rush) {
       console.error('Must enter a valid input.');
     }

     const rushOptions = ['morning', 'lunch', 'dinner'];

     if (!rushOptions.includes(rush)) {
       console.log('Please chose from the following: Morning, Lunch, or Dinner.')
     } else {
       this.emit('rush', rush);
     }

     // console.log(`Taco Stand handles rush: ${rush}`);
   }
}

module.exports = TacoStandEmitter;