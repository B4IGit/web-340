const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const character = JSON.stringify({
      class: 'warrior',
      gender: 'male',
      funFact: 'has the power of invisibility'
    });

    characterCreator.on('data', (data) => {
      const output = data.toString().trim();
      const expectedOutput = 'A male warrior has the power of invisibility.';

      expect(output).toBe(expectedOutput);
      done();
    });

    characterCreator.write(character);
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('No data provided.');
      done();
    });

    characterCreator.write('');
  });

  test("should transform data correctly when written to", (done) => {
    const character = JSON.stringify({
      class: 'mage',
      gender: 'female',
      funFact: 'has the power to summon dark souls'
    });

    const expectedOutput = 'A female mage has the power to summon dark souls.';

    characterCreator.write(character, 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      })
    })
  });
});