const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
