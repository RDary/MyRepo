import { Calculator } from '../src/calculator';

let calculator: any;

describe('Tests for calculator', () => {
  beforeAll(() => {
    calculator = new Calculator();
  });

  test('Should check the addition of numbers', () => {
    expect(calculator.addition(4, 2)).toBe(6);
  });

  test('Should check the substration of numbers', () => {
    expect(calculator.substration(4, 2)).toBe(2);
  });

  test('Should check the multiplication of numbers', () => {
    expect(calculator.multiplication(-2, 4)).toBe(-8);
  });

  test('Should check the division of numbers', () => {
    expect(calculator.division(4, 2)).toBe(2);
  });

  afterAll(() => {
    calculator = null;
  });
});
