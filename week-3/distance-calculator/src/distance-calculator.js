"use strict";

// array to store the distance of each planet from the sun
const planets = {
  'mercury': 0.39,
  'venus': 0.72,
  'earth': 1,
  'mars': 1.52,
  'jupiter': 5.20,
  'saturn': 9.54,
  'uranus': 19.22,
  'neptune': 30.06,
}
function calculateDistance(planet1, planet2) {
  // access planet from planets array
  let distanceOfPlanet1 = planets[planet1];
  let distanceOfPlanet2 = planets[planet2];

  // returns the difference between planet1 and planet2
  return Math.abs(distanceOfPlanet2 - distanceOfPlanet1);
}

module.exports = {
  planets,
  calculateDistance
};