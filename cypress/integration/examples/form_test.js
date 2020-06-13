/* eslint-disable no-undef */
describe("Testing Pizza Order form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/Order");
  });

  it("Add test to inputs and submit form", function() {
      cy.get("#size")
      .select("Small")
      .should("have.value", "Small")
      .should("not.have.value", "Select Size")
      cy.wait(5000)

      cy.get('#original, #ranch').check()
      cy.wait(5000)
      
      cy.get('#pepperoni, #sausage')
      .check()
      .should('be.checked')
      cy.wait(5000)
      

      cy.get("textarea[name='instructions']")
      .type("No garlic please!!!")
      .should("have.value", "No garlic please!!!")

      cy.get("input[name='quantity']")
      .type("20")
      .should("have.value", "20")
      cy.wait(5000)

    cy.get('button').click()
    cy.wait(5000)
    
  });
});