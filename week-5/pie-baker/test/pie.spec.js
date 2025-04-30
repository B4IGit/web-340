/**
 * Author:      Devin Ledesma
 * Date:        04/29/25
 * File Name:   pie.spec.js
 * Description: Using TDD and jest for unit testing.
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const exit = jest.spyOn(process, 'exit').mockImplementation((code) => code);

describe('bakePie', () => {
  let log;

  beforeEach(() => {
    log = jest.spyOn(console, "log");
  });

  afterEach(() => {
    log.mockRestore();
  });

  test('should bake successfully if all essential ingredient are declared', () => {
    bakePie('Apple', ['flour', 'sugar', 'butter']);
    expect(log).toHaveBeenCalledWith('Apple Pie was baked successfully!');
    expect(exit).not.toHaveBeenCalled();
  });

  test('should console log error message and exit if essential ingredient is missing', () => {
    bakePie('Cherry', ['cherry', 'flour', 'sugar']);
    expect(log).toHaveBeenCalledWith('Missing essential ingredient: Your pie cannot be baked.');
    expect(exit).toHaveBeenCalledWith(1);
  });

  test('should exit process and display console log if pieType is not declared', () => {
    bakePie('', ['flour', 'sugar', 'butter']);
    expect(log).toHaveBeenCalledWith('Error: Pie Type is undefined!');
    expect(exit).toHaveBeenCalledWith(1);
  });
})
