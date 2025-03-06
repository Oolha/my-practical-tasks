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

//!-------------------------------------
// Клас Clock написано в функціональному стилі. Перепишіть його в синтаксис класу.

class Clock {
  constructor({ template }) {
    this.timer = null;
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, 1000);
  }
}
let clock = new Clock({ template: "h:m:s" });
// clock.start();
