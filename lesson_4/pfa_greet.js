function greet(greeting, name) {
  let properGreeting = greeting.slice(0, 1).toUpperCase() + greeting.slice(1);
  console.log(`${properGreeting}, ${name}!`)
}

function makeGreeter(greet, greeting) {
  return function(name) {
    return greet(greeting, name);
  };
}

let sayHello = makeGreet(ergreet, 'hello');
let sayHi = makeGreet(ergreet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!