const cloneArray = array => [...array];
const pushSafe = (array, pushedElement) => [...array, pushedElement];

const numbers = [1,2,3,4];
const numbersIncluding5 = pushSafe(numbers, 5);