import { calculator } from './calculator';
export function customCalculator(
  oneNumber: number,
  twoNumber: number,
  operator: '+' | '-' | '/' | '*',
  result: number
) {
  if (calculator(oneNumber, twoNumber, operator) === result) {
    console.log('Test passed');
  } else {
    console.log('Test failed');
  }
}
