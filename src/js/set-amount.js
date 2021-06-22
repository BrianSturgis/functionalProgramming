import countCoins from './countCoins.js';

const AMERICAN_COIN_DENOMINATIONS = [
  {name: 'quarter', value: 25},
  {name: 'dime', value: 10},
  {name: 'nickel', value: 5},
  {name: 'penny', value: 1},
];

const getCoinStacks = numberOfCents => { 
  const coinStacks = {};
  AMERICAN_COIN_DENOMINATIONS.forEach(COIN => {
    const getStackOfCertainCoin = countCoins(COIN.value);
    const amount = getStackOfCertainCoin(numberOfCents);
    numberOfCents = numberOfCents % COIN.value;
    coinStacks[COIN.name] = amount;
  });
  return coinStacks;
};
export default getCoinStacks;