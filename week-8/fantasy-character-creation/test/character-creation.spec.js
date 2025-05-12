"use strict";

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve('Character 1\nCharacter 2\nCharacter 3\n'));
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test('writes new character to file', async () => {
    await expect(createCharacter({ class: 'Warrior', gender: 'Male', skill: 'Invisibility' })).resolves.toBeUndefined();
  })
  // 2. Test that getCharacters reads characters from the file
  test('reads characters from file', async () => {
    await expect(getCharacters()).resolves.toEqual(['Character 1', 'Character 2', 'Character 3']);
  })
  // 3. Test that createCharacter handles errors when writing to the file
  test('handles errors when writing to CHARACTERS_FILE', async () => {
    fs.writeFile.mockImplementationOnce(() => Promise.reject(new Error('File not found')));

    await expect(createCharacter({class: 'Please', gender: 'Pass', skill: 'Test'})).rejects.toThrow('File not found');
  });
});