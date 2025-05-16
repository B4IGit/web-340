'use strict';

// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");


describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getGameCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        {Class: 'Warrior', Gender: 'Male', Skill: 'Invisibility'},
        {Class: 'Mage', Gender: 'Female', Skill: 'Magic'},
        {Class: 'Rogue', Gender: 'Male', Skill: 'Inviolability'},
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacter = new GameCharacters('nonexistent-script.js');
    gameCharacter.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters('failing-script.js');
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});


