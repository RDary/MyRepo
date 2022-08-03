export function calculator(
  oneNumber: number,
  twoNumber: number,
  operator: '+' | '-' | '/' | '*'
) {
  if (operator === '+') {
    return oneNumber + twoNumber;
  }

  if (operator === '-') {
    return oneNumber - twoNumber;
  }

  if (operator === '/') {
    return oneNumber / twoNumber;
  }

  if (operator === '*') {
    return oneNumber * twoNumber;
  }
}
