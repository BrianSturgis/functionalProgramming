import coin from '../src/js/coin.js';

describe('coin', () => {
  it('returns the amount of quarters', () => {
    const quarter = coin(25);
    expect(quarter(100)).toEqual(4);
  });
  it('returns the amount of dimes', () => {
    const dime = coin(10);
    expect(dime(100)).toEqual(10);
  });
  it('returns the amount of nickels', () => {
    const nickel = coin(5);
    expect(nickel(100)).toEqual(20);
  });
  it('returns the amount of pennies', () => {
    const penny = coin(1);
    expect(penny(100)).toEqual(100);
  });
});



