export const trampoline =
  recursiveFunction =>
    (...args) => {
      let result = recursiveFunction(...args);
      while (typeof result === `function`) result = result();
      return result;
    };

const number = false ? 3 : 0;

const favoriteNumber = (() => {
  if (true) {
    return 3;
  } else {
    return 0;
  }
})();

const nthTriangleNumber = (n, sum = 0) =>
  n ? () => nthTriangleNumber(n - 1, sum + n)
    : sum;

const countCoins = (valueOfCoin, totalCoins = 0) => 
  centsRemaining => 
    centsRemaining < valueOfCoin 
      ? totalCoins
      : () => countCoins(valueOfCoin, totalCoins++)(centsRemaining - valueOfCoin);
  

export default countCoins;