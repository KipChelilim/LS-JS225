function makeCounterLogger(num) {
  return function(countTo) {
    let curr = num;
    while (curr !== countTo) {
      console.log(curr)
      curr += (curr < countTo) ? 1 : -1;
    }

    console.log(countTo);
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2