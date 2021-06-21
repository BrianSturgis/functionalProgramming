export const trampoline =
  recursiveFunction =>
    (...args) => {
      let result = recursiveFunction(...args);
      while (typeof result === `function`) result = result();
      return result;
    };

const countCoins = (value, totalCoins = 0) => {

  return (acum) => {

    if (acum < value) return totalCoins;

    if(acum >= value) {
      acum -= value;
      totalCoins++;
      return countCoins(value, totalCoins)(acum);
    }

  };

};
export default countCoins;