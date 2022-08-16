import { Calculator } from '../src/calculator';

let calculator: any;

describe('Tests for calculator', () => {
  beforeAll(() => {
    calculator = new Calculator();
  });

  test('Should check the addition of two positive numbers', () => {
    expect(calculator.addition(4, 2)).toBe(6);
  });

  test('Should check the addition of two negative numbers', () => {
    expect(calculator.addition(-4, -2)).toBe(-6);
  });

  test('Should check the addition of one negative and one positive numbers', () => {
    expect(calculator.addition(-4, 2)).toBe(-2);
  });

  test('Should check the addition when one of the arguments is 0', () => {
    expect(calculator.addition(4, 0)).toBe(4);
  });

  test('Should check the subtraction of two positive numbers', () => {
    expect(calculator.subtraction(4, 2)).toBe(2);
  });

  test('Should check the subtraction of two negative numbers', () => {
    expect(calculator.subtraction(-4, -2)).toBe(-2);
  });

  test('Should check the subtraction of one negative and one positive numbers', () => {
    expect(calculator.subtraction(-4, 2)).toBe(-6);
  });

  test('Should check the subtraction when one of the arguments is 0', () => {
    expect(calculator.subtraction(4, 0)).toBe(4);
  });

  test('Should check the multiplication of two positive numbers', () => {
    expect(calculator.multiplication(4, 2)).toBe(8);
  });

  test('Should check the multiplication of two negative numbers', () => {
    expect(calculator.multiplication(-4, -2)).toBe(8);
  });

  test('Should check the multiplication of one negative and one positive numbers', () => {
    expect(calculator.multiplication(-4, 2)).toBe(-8);
  });

  test('Should check the multiplication when one of the arguments is 0', () => {
    expect(calculator.multiplication(4, 0)).toBe(0);
  });

  test('Should check the division of two positive numbers', () => {
    expect(calculator.division(4, 2)).toBe(2);
  });

  test('Should check the division of two negative numbers', () => {
    expect(calculator.division(-4, -2)).toBe(2);
  });

  test('Should check the division of one negative and one positive numbers', () => {
    expect(calculator.division(-4, 2)).toBe(-2);
  });

  test('Should check the division when one of the arguments is 0', () => {
    expect(calculator.division(0, 4)).toBe(0);
  });

  afterAll(() => {
    calculator = null;
  });
});
