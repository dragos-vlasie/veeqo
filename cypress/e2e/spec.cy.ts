describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('main').should('be.visible');
    cy.get('h1').should('have.text', 'Test');

  })
})