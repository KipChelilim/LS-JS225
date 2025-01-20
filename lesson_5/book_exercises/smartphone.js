function makeSmartphone(brand, model, year) {
  return {
    brand,
    model,
    year,
    battery: 80,

    checkBatteryLevel() {
      console.log(`Battery level: ${this.battery}%`);
    },

    displayInfo() {
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Release year: ${this.year}`);
    },
  };
}

let iphone12 = makeSmartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = makeSmartphone('Samsung', 'Galaxy S21', 2021);

iphone12.checkBatteryLevel();
// Apple iPhone 12 has 75% battery remaining.

iphone12.displayInfo();
// 2020 Apple iPhone 12

galaxyS21.checkBatteryLevel();
// Samsung Galaxy S21 has 75% battery remaining.

galaxyS21.displayInfo();
// 2021 Samsung Galaxy S21