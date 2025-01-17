function makeMultipleLister(num) {
  return function() {
    for (let curr = num; curr < 100; curr += num) {
      console.log(curr);
    }
  };
}

let lister = makeMultipleLister(13);
lister();