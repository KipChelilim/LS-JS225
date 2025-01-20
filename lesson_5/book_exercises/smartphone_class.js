class Smartphone {
  constructor(brand, model, year, battery = 80) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.battery = battery
  }

  checkBatteryLevel() {
    return `${this.brand} ${this.model} has ${this.battery}% battery remaining.`;
  }

  displayInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21