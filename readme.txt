function nextBigger(n) {
  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  let digit = n + "";
  let cntIteration = factorial(digit.length);
  let max = digit.length - 1;
  let temp;
  digit = digit.split("");
  let listCombination = [];
  cntIteration = cntIteration / max;

  for (let i = 0; i < cntIteration; i++) {
    for (let j = max; j > 0; j--) {
      temp = digit[j - 1];
      digit[j - 1] = digit[j];
      digit[j] = temp;
      listCombination.push(digit.join(""));
    }
  }

  let setList = new Set(listCombination);
  listCombination = Array.from(setList);
  mappedList = listCombination.filter((item) => item[0] !== "0");
  listCombination = mappedList;

  listCombination.sort((a, b) => a - b);
  console.log(listCombination);
  let index = listCombination.indexOf(n + "");
  return index < listCombination.length - 1
    ? listCombination[index + 1] * 1
    : -1;
}
console.log(nextBigger(1234567890));
// Test.assertEquals(nextBigger(12),21)
// Test.assertEquals(nextBigger(513),531)
// Test.assertEquals(nextBigger(2017),2071)
// Test.assertEquals(nextBigger(414),441)
// Test.assertEquals(nextBigger(144),414)