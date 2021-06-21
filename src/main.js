/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { trampoline } from './js/countCoins.js';
import getCoins from './js/set-amount.js';

$;

// immediate invoked function expression or IIFE
// (() => {



  // const brian = 8;

  // const myObj = {f: (quarters) => (dime) => (nickels) => (pennies) => {return `Quarter Worth: ${quarters}`}}


  const threeHundredNFifteen = getCoins(240000);

  console.log(threeHundredNFifteen);

  const nthTriangleNumber = (n, sum = 0) =>
    number !== 0
      ? () => nthTriangleNumber(n - 1, sum + n) 
      : sum;

  console.log(trampoline(nthTriangleNumber(5))())
// })()

/*
. . . . .
 . . . .
  . . .
   . .
    .
*/



const nthTriangleNumber = (n, sum = 0) =>
  number !== 0
    ? () => nthTriangleNumber(n - 1, sum + n) 
    : sum;

console.log(trampoline(nthTriangleNumber(5))())

