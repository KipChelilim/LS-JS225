class Person {
  #name
  #age

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  set age(age) {
    if (Person.#validAge(age)) {
      return this.#age = age;
    } else {
      throw new RangeError('Age must be a positive number');
    }
  }

  static #validAge(age) {
    return age > 0;
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

try {
  // This line should raise a RangeError,
  // but does not.
  person.age = -5;
  person.showAge(); // -5
} catch (e) {
  // The following line should run, but won't
  console.log('RangeError: Age must be positive');
}