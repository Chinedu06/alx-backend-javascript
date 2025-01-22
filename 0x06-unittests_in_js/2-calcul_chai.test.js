import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 0 when adding -1.4 and 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0 when subtracting 1.4 from 1.4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" when dividing 1.4 by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return -0.3333333333333333 when dividing -1.4 by 2.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, 2.5)).to.equal(-0.3333333333333333);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error when an invalid type is passed', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});

