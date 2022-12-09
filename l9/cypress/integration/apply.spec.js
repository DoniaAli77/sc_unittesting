// https://docs.cypress.io/api/commands/

// cy.get('#comparison')
//   .get('div')
//   // finds the div.test-title outside the #comparison
//   // and the div.feature inside
//   .should('have.class', 'test-title')
//   .and('have.class', 'feature')
// cy.get('#comparison')
//   .find('div')
//   // the search is limited to the tree at #comparison element
//   // so it finds div.feature only
//   .should('have.length', 1)
//   .and('have.class', 'feature')

describe("Apply page Tests", () => {
  it("open Apply page and verify the url and the title", () => {
    cy.visit("http://localhost:3001/apply");
    cy.url().should("include", "apply");
    cy.title().should("eq", "Apply Now");
  });
  it("verify existence of elements", () => {
    cy.contains("First Name").should("be.visible");
    cy.contains("Middle Name").should("be.visible");
    cy.contains("Last Name").should("be.visible");
    cy.contains("Country").should("be.visible");
    cy.contains("Salary").should("be.visible");
    cy.contains("Birth Date").should("be.visible");
    cy.get("#fname").should("be.visible");
    cy.get("#mname").should("be.visible");
    cy.get("#lname").should("be.visible");
    cy.get("#country").should("be.visible");
    cy.get("#salary").should("be.visible");
    cy.get("#birthdate").should("be.visible");
    cy.get("#submit").should("be.visible");

  });
  it("open Apply page and start typing ", () => {
    cy.get("#fname").type("donia");
    cy.get("#mname").type("ali");
    cy.get("#lname").type("ali");
    cy.get("#country").type("egypt");
    cy.get("#salary").type("1000");
    cy.get("#birthdate").type("1999-07-07");
    cy.get("#submit").click();
    cy.url().should("include", "profile");
  });

  it("verify profile page elements number", () => {
    cy.url().should("include", "profile");
    cy.get("label").should("have.length",12)
    cy.get(".form-group").get("div").should("have.length", 14);
    cy.get(".form-group").find("div").should("have.length", 6);
    cy.get(".form-group").first().find("div").should("have.length", 1);

  });

  it("verify that profile page recieves info from apply page", () => {
   
    cy.get('label#FName').should('have.text', 'donia');
    cy.get('label#MName').should('have.text', 'ali');
    cy.get('label#LName').should('have.text', 'ali');
    cy.get('label#salary').should('have.text', '1000');
    cy.get('label#country').should('have.text', 'egypt');
    cy.get('label#birthdate').should('have.text', '1999-07-07');

  });

  // it('clicks Employee from home page and asserts the url', () => {
  //   cy.visit('http://localhost:3001/');
  //   cy.get('li#employee').find('a').should('have.text','Employee');
  //   cy.get('li#employee').click();
  //   cy.url().should('include', 'employee');
  // });

  // it('clicks add from home page and asserts the url', () => {
  //   cy.visit('http://localhost:3001/');
  //   cy.get('li#add').find('a').should('have.text','Add');
  //   cy.get('li#add').click();
  //   cy.url().should('include', 'addEmployee');
  // });

  // it('gets text of the heading and assert the value', () => {
  //   cy.get('h1.elementor-heading-title').should(e => {
  //     expect(e.text()).to.eq('Think different. Make different.');
  //   });
  //   // or
  //   cy.get('h1.elementor-heading-title').should('have.text', 'Think different. Make different.');
  // });
  // it('verifies the text of the first menu link item', () => {
  //   cy.get('#primary-menu').find('li').first().should('have.text', 'Home');
  // });
});
