

snail = function (array) {
  let resultArray = [];
  let n = array[0].length;
  let max = n;
  let min = 0;
  let state = "right";
  if (n == 0) {
    return resultArray;
  }
  for (let i = 0, k = 0, j = -1; i < n * n; i++) {
    if (state == "right") {
      j++;
      if (j < max) {
        resultArray.push(array[k][j]);
      } else {
        j--;
        state = "down";
        i--;
      }
    } else if (state == "down") {
      k++;
      if (k < max) {
        resultArray.push(array[k][j]);
      } else {
        k--;
        state = "left";
        i--;
      }
    } else if (state == "left") {
      j--;

      if (j >= min) {
        resultArray.push(array[k][j]);
      } else {
        j++;
        state = "up";
        i--;
        max--;
        min++;
      }
    } else if (state == "up") {
      k--;
      if (k >= min) {
        resultArray.push(array[k][j]);
      } else {
        k++;
        state = "right";
        i--;
      }
    }
  }

  return resultArray;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
