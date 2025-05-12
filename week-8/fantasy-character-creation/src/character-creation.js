"use strict";

// For promises:
const fs = require('fs').promises;
const path = require('path');


const CHARACTERS_FILE = path.join(__dirname, 'characters.txt');

async function createCharacter(character) {
  // TODO: Implement this function
  const characterData = {
    class: character.class,
    gender: character.gender,
    skill: character.skill
  }
  try {
    await fs.writeFile(CHARACTERS_FILE, JSON.stringify(characterData, null, 2), 'utf8');
    console.log('New Character written.')
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }

  console.log(characterData);
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(CHARACTERS_FILE, 'utf8');
    const characters = data.split('\n').filter(character => character);

    console.log('File Read');
    console.log(data);

    return characters;
  } catch (err) {
    throw err;
  }
}

createCharacter({
  class: 'Warrior',
  gender: 'Male',
  skill: 'Invisibility'
});

getCharacters({
  class: 'Warrior',
  gender: 'Male',
  skill: 'Invisibility'
})

module.exports = { createCharacter, getCharacters }; // For promises