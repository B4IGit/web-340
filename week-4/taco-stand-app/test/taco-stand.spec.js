/**
 * Author:      Devin Ledesma
 * Date:        04/11/2025
 * File Name:   taco-stand.spec.js
 * Description: Unit tests using Node.js assert library
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const console = require("node:console");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
function testServeCustomer() {
  try {
    tacoStand.on('serve', (customer) => {
      assert.strictEqual(customer, 'John');
    });
    tacoStand.serveCustomer('John');
    console.log('Passed testServerCustomer');
    console.log('');
    return true;
  } catch (err) {
    console.error(`Failed testServerCustomer: ${err}`);
    console.log('');
    return false;
  }
}

function testPrepareTaco() {
  try {
    tacoStand.on('prepare', (taco) => {
      assert.strictEqual(taco, 'beef');
    });
    tacoStand.prepareTaco('beef');
    console.log('Passed testPrepareTaco');
    console.log('');
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    console.log('');
    return false;
  }
}

function testHandleRush() {
  try {
    tacoStand.on('rush', (rush) => {
      assert.strictEqual(rush, 'lunch');
    });
    tacoStand.handleRush('lunch');
    console.log('Passed testHandleRush');
    console.log('');
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    console.log('');
    return false;
  }

}


testServeCustomer();
testPrepareTaco();
testHandleRush();

