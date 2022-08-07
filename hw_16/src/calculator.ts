export function calculator(
  firstNumber: number,
  secondNumber: number,
  operator: '+' | '-' | '/' | '*'
) {
  switch (operator) {
    case '+':
      if (operator === '+') {
        return firstNumber + secondNumber;
      }
      break;

    case '-':
      if (operator === '-') {
        return firstNumber - secondNumber;
      }
      break;

    case '/':
      if (operator === '/') {
        return firstNumber / secondNumber;
      }
      break;

    case '*':
      if (operator === '*') {
        return firstNumber * secondNumber;
      }
      break;
  }
}
