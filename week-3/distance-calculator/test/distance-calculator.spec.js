"use strict";

const assert = require('assert');
const {planets, calculateDistance} = require("../src/distance-calculator");

// test 1
function testPlanetDistance() {
  try {
    let getDistance = planets.mercury;
    assert.strictEqual(getDistance, 0.39);
    console.log('testPlanetDistance passed');
    return true;
  } catch (error) {
    console.error(`Failed testPlanetDistance: ${error.message}`);
    return false;
  }
}

// test 2
function testSaturnToNeptune() {
  try {
     let distance = calculateDistance('saturn', 'neptune');
     assert.strictEqual(distance, 20.52);
     console.log('testSaturnToNeptune passed');
     return true;
  } catch (error) {
     console.error(`Failed testSaturnToNeptune: ${error.message}`);
     return false;
  }
}

// test 3
function testEarthToUranus() {
  try {
    let distance = calculateDistance('earth', 'uranus');
    assert.equal(distance, 18.22);
    console.log('testEarthToUranus passed');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToUranus: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testPlanetDistance();
testSaturnToNeptune();
testEarthToUranus();
