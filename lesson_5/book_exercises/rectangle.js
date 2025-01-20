class Rectangle {
  #width = 0;
  #height = 0;
  static #validInput(num) {
    return num > 0 && typeof(num) === 'number';
  }

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  get width() {
    return this.#width;
  }

  set width(newWidth) {
    if (Rectangle.#validInput(newWidth)) {
      this.#width = newWidth;
    } else {
      throw new RangeError('Width must be a positive number');
    }
  }

  get height() {
    return this.#height;
  }

  set height(newHeight) {
    if (Rectangle.#validInput(newHeight)) {
      this.#height = newHeight;
    } else {
      throw new RangeError('Height must be a positive number');
    }
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}