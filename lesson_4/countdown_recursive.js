function countdown(start) {
  (function logCurrentCount(num) {
    if (num < 0) {
      console.log('Done!');
    } else {
      console.log(num);
      logCurrentCount(num - 1);
    }
  })(start);
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!