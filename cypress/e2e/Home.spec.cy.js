describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/') // Adjust the URL as needed
  })

  it('Renders the header with correct content', () => {
    cy.get('header').should('exist')

    cy.get('header').within(() => {

    cy.get('h1').contains('Own your')
    cy.get('.next-video-container').should('exist')
    cy.get('span').contains('future')
    cy.get('span').contains('free')
    cy.get('img').should('be.visible')

    })
  })
})

// cypress/integration/section.spec.js

describe('Section component', () => {
  it('should render correctly', () => {
    cy.visit('http://localhost:3000/'); // Replace '/' with the actual URL of your page

    // Assert that the section with class "dark" exists
    cy.get('section.dark').should('exist');

    // Assert that the text blocks are rendered with the correct content and styles
    cy.get('.text-block').contains('have.css', 'opacity', '0');
    // cy.get('.text-block').contains('have.text', 'Our one of a kind integration lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    // cy.get('.text-block').contains('have.css', 'transform', 'matrix(1, 0, 0, 1, 50, 0)');

    // cy.get('.text-block').contains('have.text', 'Who we are');
    // cy.get('.text-block').contains('have.css', 'opacity', '0');
    // cy.get('.text-block').contains('have.css', 'transform', 'matrix(1, 0, 0, 1, -50, 0)');
  });
});
