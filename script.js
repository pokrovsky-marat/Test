function gap(g, m, n) {
  function isPrime(n) {
    let i = 2,
      j = 0;
    while (i * i <= n && j != 1) {
      if (n % i == 0) {
        j = 1;
      }
      i = i + 1;
    }
    return j == 1 ? false : true;
  }
  m = m % 2 == 0 ? m + 1 : m;
  let leftPrime = Infinity;

  for (let i = m; i < n; i += 2) {
    if (isPrime(i)) {
      if (i - leftPrime == g) {
        return [leftPrime, i];
      } else {
        leftPrime = i;
      }
    }
  }
  return null;
}
console.log(gap(2, 100, 110));
