/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
$;

// immediate invoked function expression or IIFE
// (() => {



  // const brian = 8;

  // const myObj = {f: (quarters) => (dime) => (nickels) => (pennies) => {return `Quarter Worth: ${quarters}`}}

  const coins = (value, totalCoins = 0) => {

		return (acum) => {

      if (acum < value) {
        return totalCoins
      };

      if(acum >= value) {
        acum -= value;
        totalCoins++;
        return coins(value, totalCoins)(acum)
      }
    }

  }

  const setAmount = (total) => {
    const returnObj = {}
    return () => {
      [25,10,5,1].forEach(coinValue => {
        const currentCoin = coins(coinValue);
        const amount = currentCoin(total);
        total = total % coinValue;
        returnObj[`CoinOfValue_${coinValue}`] = amount
      })
      return returnObj;
    }
  }

  const threeHundredNFifteen = setAmount(315);

  console.log(threeHundredNFifteen());

// })()


