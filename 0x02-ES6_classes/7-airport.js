export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  // Override toString to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
