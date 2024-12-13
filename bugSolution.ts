function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    throw new Error('Both arguments must be numbers');
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return subtract(a, b);
  } else {
    throw new Error('Both arguments must be numbers');
  }
}

console.log(addSafe(2, 2)); //4
console.log(subtractSafe(2, 2));//0
console.log(addSafe('2', 2)); // throws an error
console.log(subtractSafe(2, '2'));// throws an error