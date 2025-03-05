class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  getInfo() {
    return `This is a ${this.color} ${this.name}`;
  }
  stop() {
    return `${this.name} has stopped`;
  }
}

class ElectricCar extends Car {
  constructor(name, color, batteryCapacity) {
    super(name, color);
    this.batteryCapacity = batteryCapacity;
  }
  charge() {
    return `This ${this.name} is charging`;
  }
  getBatteryStatus() {
    return `Battery capacity: ${this.batteryCapacity} kWh`;
  }
  getInfo() {
    return `${super.getInfo()}. It's electric with ${this.batteryCapacity} kWh battery.`;
  }
}

const porsche = new Car("Porsche 911", "black", 330);
console.log(porsche.getInfo());
console.log(porsche.stop());

const tesla = new ElectricCar("Tesla Model 3", "red", 75);
console.log(tesla.getInfo());
console.log(tesla.getBatteryStatus());
console.log(tesla.charge());
//!---------------------------------------
class CofeeMashine {
  #waterAmount = 0;

  constructor(power) {
    this.power = power;
  }

  set addWater(value) {
    this.#waterAmount += value;
  }
  get waterAmount() {
    return this.#waterAmount;
  }

  createCofee() {
    if (this.#waterAmount >= 200) {
      this.#waterAmount -= 200;
      console.log("Створилась чашка кави");
    } else {
      console.log("Упс, закінчилась вода");
    }
  }
}

const cofeeMashine = new CofeeMashine(100);
console.log(cofeeMashine instanceof CofeeMashine);
cofeeMashine.addWater = 1000;

cofeeMashine.createCofee();
cofeeMashine.createCofee();
cofeeMashine.createCofee();
cofeeMashine.createCofee();
cofeeMashine.createCofee();
cofeeMashine.createCofee();
