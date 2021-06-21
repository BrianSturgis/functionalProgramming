/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import getCoins from './js/set-amount.js';

$;

// immediate invoked function expression or IIFE
// (() => {



  // const brian = 8;

  // const myObj = {f: (quarters) => (dime) => (nickels) => (pennies) => {return `Quarter Worth: ${quarters}`}}


  const threeHundredNFifteen = getCoins(240000);

  console.log(threeHundredNFifteen);

// })()


