import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Pass sqft to the parent class constructor
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
