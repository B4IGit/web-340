const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString().trim();

    // Checks if data is empty
    if (!data) {
      callback(new Error('No data provided.'));
      return;
    }

    try {
      // Parse the character data
      const character = JSON.parse(data);

      // Format character data
      const formatData = `A ${character.gender} ${character.class} ${character.funFact}.`;

      // Add to queue
      this.queue.push(formatData);

      callback();
    } catch (error) {
      callback(error);
    }
  }

  _read(size) {
    if (this.queue.length) {
      this.push(this.queue.shift());
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;