// https://docs.cypress.io/api/commands/
// https://www.tutorialspoint.com/cypress/index.htm 
describe("Employee page Tests", () => {
    it("open Employee page and verify the url and the title", () => {
      cy.visit("http://localhost:3001/Employee");
      cy.url().should("include", "Employee");
      cy.title().should("eq", "Employees");
    });
  
  
    it("verify elemnts number", () => {
      cy.get("tbody").children().should("have.length",2)
      cy.get("tbody").children().first().children().should("have.length",8)
    });
  
    it('clicks 1st remove button ', () => {
      cy.get('tbody').find('button#1').should('be.visible');
      cy.get('button#1').click();
      cy.get('tbody').find('button#1').should('not.exist');
    });
  
   
  });
  