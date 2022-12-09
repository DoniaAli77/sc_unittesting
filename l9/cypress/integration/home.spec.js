// https://docs.cypress.io/api/commands/

describe('Home page Test cases', () => {
  it('open the home page and verify the url and the title', () => {
    cy.visit('http://localhost:3001/');
    cy.url().should('include', '3001');
    cy.title().should('eq', 'Tut9');
  });
  it('open the home page and verify elements', () => {
    cy.visit('http://localhost:3001/');
    cy.get('nav').within(() => {
      cy.get('ul').within(()=>{
        cy.get('.active').should('have.text','Home')
      })
    })
    //or = line 11
    cy.get('nav').find('ul').find('.active').should('have.text','Home')

    cy.get('#title').should('have.text','Tutorial 9')
    cy.get('#description').should('have.text','Tutorial is mainly about cypress')

  });

  it('clicks Apply from home page and asserts the url', () => {
    cy.get('li#apply').find('a').should('have.text','Apply');
    cy.get('li#apply').click();
    cy.url().should('include', 'apply');
  });

  it('clicks Employee from home page and asserts the url', () => {
    cy.visit('http://localhost:3001/');
    cy.get('li#employee').find('a').should('have.text','Employee');
    cy.get('li#employee').click();
    cy.url().should('include', 'employee');
  });

  it('clicks add from home page and asserts the url', () => {
    cy.visit('http://localhost:3001/');
    cy.get('li#add').find('a').should('have.text','Add');
    cy.get('li#add').click();
    cy.url().should('include', 'addEmployee');
  });
  
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
// describe('Home Tests', () => {
//   it('open the home page and verify the url and the title', () => {
//     cy.visit('https://practice.automationbro.com');
//     cy.url().should('include', 'automationbro');
//     cy.title().should('eq', 'Practice E-Commerce Site – Automation Bro');
//   });
//   it('clicks the Get started button and asserts the url', () => {
//     cy.get('#get-started').click();
//     cy.url().should('include', '#get-started');
//   });
//   it('gets text of the heading and assert the value', () => {
//     cy.get('h1.elementor-heading-title').should(e => {
//       expect(e.text()).to.eq('Think different. Make different.');
//     });
//     // or
//     cy.get('h1.elementor-heading-title').should('have.text', 'Think different. Make different.');
//   });
//   it('verifies the text of the first menu link item', () => {
//     cy.get('#primary-menu').find('li').first().should('have.text', 'Home');
//   });
// });