function nextBigger(n) {
  let max = (n + '').split('').sort((a, b) => b - a).join('');
  if (n == max) return -1;
  do n++;
  while (max != (n + '').split('').sort((a, b) => b - a).join(''));
  return n;
}
console.log(nextBigger(9876543210 ));
console.log(nextBigger(59884848459853));
console.log(nextBigger(513 ));
console.log(nextBigger(2017 ));
console.log(nextBigger(414 ));
console.log(nextBigger(144 ));


// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)
