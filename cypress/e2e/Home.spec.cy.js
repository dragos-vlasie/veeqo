describe("Header Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); 
  });

  it("should renders the header with correct content", () => {
    cy.get("header").should("exist");

    cy.get("header").within(() => {
      cy.get("h1").contains("Own your");
      cy.get('.next-video-container').should('exist')
      cy.get("span").contains("future");
      cy.get("span").contains("free");
      cy.get("img").should("be.visible");
    });
  });

  it("should display the dark theme section", () => {
    cy.get("section.dark").should("exist");
    cy.get("section.dark")
      .first()
      .within(() => {
        // wait animation to end
        cy.wait(2000);
        cy.get(".text-block.order-2").contains(
          "Our one of a kind integration lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        );
        cy.get(".text-block.order-1").contains("Who we are");
      });

    cy.get("section.dark").should("exist");
    cy.get("section.dark")
      .eq(1)
      .within(() => {
        // wait animation to end
        cy.get(".order-1").contains("We’re a team of");
        cy.get(".order-2 img").should("exist");
      });
  });

  it("should display the light theme section", () => {
    // Assert that the section with class "dark" exists
    cy.get("section.light").should("exist");
    cy.get("section.light")
      .eq(0)
      .within(() => {
        // wait animation to end
        cy.wait(2000);
        cy.get(".text-block.order-1").contains("See how much you could save");
        cy.get(".order-2 img").should("exist");
      });

    cy.get("section.light")
      .eq(1)
      .within(() => {
        cy.get(".text-block.order-2").contains("See how much you could save");
        cy.get(".order-1 img").should("exist");
      });

    cy.get("section.dark").should("exist");
    cy.get("section.dark")
      .eq(1)
      .within(() => {
        // wait animation to end
        cy.get(".order-1").contains("We’re a team of");
        cy.get(".order-2 img").should("exist");
      });
  });

  it("should display the intro images section", () => {
    cy.wait(2000);
    cy.get(".overflow-hidden").should("exist");
    cy.get(".overflow-hidden img").should("have.length", 4); // Assuming there are 4 intro images
  });
});
