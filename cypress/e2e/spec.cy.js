describe('calculator functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('performs addition correctly', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '+').click();
    cy.contains('button', '3').click();
    cy.contains('button', '=').click();
    cy.get('input[readonly]').should('have.value', '8');
  });

  it('performs subtraction correctly', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '0').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();
    cy.get('input[readonly]').should('have.value', '6');
  });

  it('performs multiplication correctly', () => {
    cy.contains('button', '6').click();
    cy.contains('button', '*').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();
    cy.get('input[readonly]').should('have.value', '42');
  });

  it('performs division correctly', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '5').click();
    cy.contains('button', '/').click();
    cy.contains('button', '3').click();
    cy.contains('button', '=').click();
    cy.get('input[readonly]').should('have.value', '5');
  });
});