import coin from './coin.js'

const setAmount = (total) => {
  const returnObj = {}
  return () => {
    [25,10,5,1].forEach(coinValue => {
      const currentCoin = coin(coinValue);
      const amount = currentCoin(total);
      total = total % coinValue;
      returnObj[`coinOfValue_${coinValue}`] = amount
    });
    return returnObj;
  }
}
export default setAmount