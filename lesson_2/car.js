function makeCar(accelerationRate, brakeRate) {
  return {
    speed: 0,
    accelerationRate,
    brakeRate,

    accelerate() {
      this.speed += this.accelerationRate;
    },

    brake() {
      this.speed -= Math.min(this.speed, this.brakeRate);
    },
  };
}

// let sedan = makeCar(8);
// sedan.accelerate();
// console.log(sedan.speed);

// let coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed);

// let hatchback = makeCar(9);

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);
