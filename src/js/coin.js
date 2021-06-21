const cloneArray = array => [...array];

const sumBelowRec = (number, sum = 0) =>
  number === 0 ? sum : () => sumBelowRec(number - 1, sum + number);

const trampoline =
  recursiveFunction =>
    (...args) => {
      let result = recursiveFunction(...args);
      while (typeof result === `function`) result = result();
      return result;
    };

const coin = (value, totalCoins = 0) => {

  return (acum) => {

    if (acum < value) {
      return totalCoins;
    }

    if(acum >= value) {
      acum -= value;
      totalCoins++;
      return coin(value, totalCoins)(acum); 
    }

  };

};
export default coin;