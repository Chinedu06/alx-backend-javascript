import EVCar from './100-evcar';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1); // EVCar { _brand: 'Tesla', _motor: 'Turbo', _color: 'Red', _range: '250' }

const ec2 = ec1.cloneCar();
console.log(ec2); // Car { _brand: undefined, _motor: undefined, _color: undefined }
