function makeAddAndSubtract() {
  let curr = 0;

  function add(num) {
    return curr += num;
  }

  function subtract(num) {
    return curr -= num;
  }

  return [add, subtract];
}

let [add, subtract] = makeAddAndSubtract();

console.log(add(1));
// 1
console.log(add(42));
// 43
console.log(subtract(39));
// 4
console.log(add(6));
// 10