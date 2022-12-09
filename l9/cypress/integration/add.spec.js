describe("Add page Tests", () => {
    it("open add page and verify the url and the title", () => {
      cy.visit("http://localhost:3001/addEmployee");
      cy.url().should("include", "Employee");
      cy.title().should("eq", "Register New Employee");
    });
 
    it("open addEmployee  page and start typing ", () => {
      cy.get("#fname").type("donia");
      cy.get("#mname").type("ali");
      cy.get("#lname").type("ali");
      cy.get("#country").type("egypt");
      cy.get("#salary").type("1000");
      cy.get("#birthdate").type("1999-07-07");
      cy.get("#submit").click();
      cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('employee added successfuly');
     })
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
  