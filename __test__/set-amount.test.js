import setAmount from '../src/js/set-amount.js'

describe ('set-amount', () => {
	let amount;
	beforeEach(()=>{amount = setAmount(119)()});
	it('returns the amount of quarters in object form', () => {
		expect(amount['coinOfValue_25']).toEqual(4);
	});
	it('returns the amount of dimes in object form', () => {
		expect(amount['coinOfValue_10']).toEqual(1);
	});
	it('returns the amount of nickels in object form', () => {
		expect(amount['coinOfValue_5']).toEqual(1);
	});
	it('returns the amount of pennies in object form', () => {
		expect(amount['coinOfValue_1']).toEqual(4);
	});
});