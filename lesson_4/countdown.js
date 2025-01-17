function countdown(num) {
  (function() {
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!');
  })(num);
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