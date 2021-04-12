/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import setAmount from './js/set-amount.js';

$;

// immediate invoked function expression or IIFE
// (() => {



  // const brian = 8;

  // const myObj = {f: (quarters) => (dime) => (nickels) => (pennies) => {return `Quarter Worth: ${quarters}`}}


  const threeHundredNFifteen = setAmount(315);

  console.log(threeHundredNFifteen());

// })()


