'use strict';

// game-characters.js
const { spawn } = require("child_process");
const { join } = require('path');
const dataFile = join(__dirname, 'game-characters-data.js');

class GameCharacters {
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  getGameCharacters(callback) {
    const child = spawn('node', [this.scriptPath]);

    let outputCharacterData = '';

    child.stdout.on('data', (data) => {
      outputCharacterData += data.toString(); // append character data
    });

    child.stdout.on('end', () => {
      try {
        const gameCharacterData = JSON.parse(outputCharacterData.trim()); // parse JSON
        callback(gameCharacterData, null);
      } catch (error) {
        callback(null, error);
      }
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      callback(null, new Error(data.toString()));
    });

    child.on('error', (error) => {
      console.error(`spawn error: ${error}`);
      callback(null, error);
    });
  }
}

module.exports = { GameCharacters };
