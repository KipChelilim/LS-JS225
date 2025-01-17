function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
  this.battery = 80;

  this.batteryLevel = function() {
    console.log(`Battery level: ${this.battery}%`);
  }

  this.info = function() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Release year: ${this.releaseYear}`);
  }
}

let iphone = new Smartphone('Apple', 'iPhone 12', 2020);
let android = new Smartphone('Samsung', 'Galaxy S21', 2021);
iphone.battery = 50;

iphone.info();
iphone.batteryLevel();

android.info();
android.batteryLevel();