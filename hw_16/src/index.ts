import { customCalculator } from './custom-calculator';

// positive tests
customCalculator(1, 2, '+', 3);
customCalculator(5, 2, '-', 3);
customCalculator(4, 2, '/', 3);
customCalculator(1, 3, '*', 3);
customCalculator(6, 6, '*', 36);
customCalculator(10, 9, '-', 1);
customCalculator(30, 3, '/', 10);

// negative tests
customCalculator(2, 2, '+', 5);
customCalculator(25, 5, '-', 19);
customCalculator(36, 6, '/', 35);
customCalculator(2, 2, '*', 3);
customCalculator(99, 9, '/', 12);
customCalculator(100, 50, '+', 250);
customCalculator(345, 5, '-', 34);
