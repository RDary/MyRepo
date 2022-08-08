import { customCalculator } from './custom-calculator';

// positive tests
customCalculator(4, 2, '+', 6);
customCalculator(4, -2, '+', 2);
customCalculator(4, 0, '+', 4);
customCalculator(4, 2, '-', 2);
customCalculator(4, 0, '-', 4);
customCalculator(4, 2, '/', 2);
customCalculator(4, -2, '/', -2);
customCalculator(4, 2, '*', 8);
customCalculator(4, -2, '*', -8);
customCalculator(4, 0, '*', 0);

// negative tests
customCalculator(4, 2, '+', 5);
customCalculator(4, -2, '+', 3);
customCalculator(4, 0, '+', 5);
customCalculator(4, 2, '-', 3);
customCalculator(4, 0, '-', 5);
customCalculator(4, 2, '/', 1);
customCalculator(4, -2, '/', -3);
customCalculator(4, 2, '*', 9);
customCalculator(4, -2, '*', -9);
customCalculator(4, 0, '*', 5);
