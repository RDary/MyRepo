import { defineConfig } from 'cypress';
import {
  assetsFolder,
  baseUrl,
  defaultWaitingTime,
} from './cypress/support/constants/constants';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    specPattern: 'hw_24/cypress/e2e/**/*.cy.ts',
    baseUrl,
    defaultCommandTimeout: defaultWaitingTime * 5,
    supportFile: 'hw_24/cypress/support/index.ts',
    videosFolder: `${assetsFolder}/videos`,
    downloadsFolder: `${assetsFolder}/downloads`,
    screenshotsFolder: `${assetsFolder}/screenshots`,
    fixturesFolder: 'hw_24/cypress/fixtures',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: 'true',
      allureResultsPath: `hw_24/cypress/assets/allure-results`,
    },
  },
});
