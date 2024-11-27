import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range; // Initialize the new attribute
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    return new Car(); // Return a new instance of Car (not EVCar)
  }
}

export default EVCar;
