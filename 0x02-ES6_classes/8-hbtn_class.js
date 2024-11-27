export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Override valueOf to return the size when cast to a number
  valueOf() {
    return this._size;
  }

  // Override toString to return the location when cast to a string
  toString() {
    return this._location;
  }
}
