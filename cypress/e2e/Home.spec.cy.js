import Home from '../../src/app/page';

describe('Home component', () => {
  it('renders the main element', () => {
    mount(<Home />);
    cy.get('main').should('be.visible');
  });

  it('renders the "Test" heading', () => {
    mount(<Home />);
    cy.get('h1').should('have.text', 'Test');
  });
});