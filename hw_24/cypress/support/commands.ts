Cypress.Commands.add(
  'getLinkByHrefAttribute',
  (cssSelector: string, hrefAttribute: string) => {
    cy.get(`${cssSelector}[href='${hrefAttribute}']`);
  }
);
