import assert from 'assert';
import { expect } from 'chai';
import { Calculator } from '../src/calculator';

let calculator: any;
const ERROR_MESSAGE: string = 'Result of calculation is not as expected';
describe('Tests for calculator', () => {
  before('Initialize class instance', () => {
    calculator = new Calculator();
  });

  it('Should check the addition of two positive numbers', () => {
    assert.equal(calculator.addition(4, 2), 6, ERROR_MESSAGE);
  });

  it('Should check the addition of two negative numbers', () => {
    assert.equal(calculator.addition(-4, -2), -6, ERROR_MESSAGE);
  });

  it('Should check the addition of one negative and one positive numbers', () => {
    assert.equal(calculator.addition(-4, 2), -2, ERROR_MESSAGE);
  });

  it('Should check the addition when one of the arguments is 0', () => {
    assert.equal(calculator.addition(4, 0), 4, ERROR_MESSAGE);
  });

  it('Should check the subtraction of two positive numbers', () => {
    expect(calculator.subtraction(4, 2)).to.be.equal(2, ERROR_MESSAGE);
  });

  it('Should check the subtraction of two negative numbers', () => {
    expect(calculator.subtraction(-4, -2)).to.be.equal(-2, ERROR_MESSAGE);
  });

  it('Should check the subtraction of one negative and one positive numbers', () => {
    expect(calculator.subtraction(-4, 2)).to.be.equal(-6, ERROR_MESSAGE);
  });

  it('Should check the subtraction when one of the arguments is 0', () => {
    assert.equal(calculator.subtraction(4, 0), 4, ERROR_MESSAGE);
  });

  it('Should check the multiplication of two positive numbers', () => {
    assert.equal(calculator.multiplication(4, 2), 8, ERROR_MESSAGE);
  });

  it('Should check the multiplication of two negative numbers', () => {
    assert.equal(calculator.multiplication(-4, -2), 8, ERROR_MESSAGE);
  });

  it('Should check the multiplication of one negative and one positive numbers', () => {
    assert.equal(calculator.multiplication(-4, 2), -8, ERROR_MESSAGE);
  });

  it('Should check the multiplication when one of the arguments is 0', () => {
    assert.equal(calculator.multiplication(4, 0), 0, ERROR_MESSAGE);
  });

  it('Should check the division of two positive numbers', () => {
    assert.equal(calculator.division(4, 2), 2, ERROR_MESSAGE);
  });

  it('Should check the division of two negative numbers', () => {
    assert.equal(calculator.division(-4, -2), 2, ERROR_MESSAGE);
  });

  it('Should check the division of one negative and one positive numbers', () => {
    assert.equal(calculator.division(-4, 2), -2, ERROR_MESSAGE);
  });

  it('Should check the division when one of the arguments is 0', () => {
    assert.equal(calculator.division(0, 2), 0, ERROR_MESSAGE);
  });

  after('Delete class instance', () => {
    calculator = null;
  });
});
