const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 0 when adding -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 0 when subtracting 1.4 from 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return "Error" when dividing 1.4 by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return -0.3333333333333333 when dividing -1.4 by 2.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 2.5), -0.3333333333333333);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error when an invalid type is passed', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid type',
      });
    });
  });
});

