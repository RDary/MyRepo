import assert from 'assert';
import { expect } from 'chai';
import { Calculator } from '../src/calculator';

let calculator: any;
describe('Tests for calculator', () => {
  before('Initialize class instance', () => {
    calculator = new Calculator();
  });

  it('Should check the addition of numbers', () => {
    assert.equal(calculator.addition(4, 2), 6, 'Addition is not as expected!');
  });

  it('Should check the subtration of numbers', () => {
    assert.equal(calculator.subtration(4, 2), 2);
  });

  it('Should check the multiplication of numbers', () => {
    assert.equal(calculator.multiplication(4, 2), 8);
  });

  it('Should check the division of numbers', () => {
    assert.equal(calculator.division(4, 2), 2);
  });

  after('Delete class instance', () => {
    calculator = null;
  });
});
