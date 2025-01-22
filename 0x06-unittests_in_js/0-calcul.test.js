const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  describe('Rounding the first number', () => {
    it('should round the first number and return the sum', () => {
      assert.strictEqual(calculateNumber(1.4, 3), 4);
      assert.strictEqual(calculateNumber(1.6, 3), 5);
    });
  });

  describe('Rounding the second number', () => {
    it('should round the second number and return the sum', () => {
      assert.strictEqual(calculateNumber(1, 3.4), 4);
      assert.strictEqual(calculateNumber(1, 3.6), 5);
    });
  });

  describe('Rounding both numbers', () => {
    it('should round both numbers and return the sum', () => {
      assert.strictEqual(calculateNumber(1.4, 3.6), 5);
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should round inputs and handle negative numbers', () => {
      assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
      assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
    });

    it('should handle edge cases like 0.5 and 0.5', () => {
      assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    });
  });
});

