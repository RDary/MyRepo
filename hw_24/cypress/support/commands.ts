Cypress.Commands.add(
  'getSelectorByHrefAttribute',
  (cssSelector: string, hrefAttribute: string) => {
    cy.get(`${cssSelector}[href='${hrefAttribute}']`);
  }
);
