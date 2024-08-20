// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[id="firstName"]').type('Maria', { delay: 1500 }).should('have.value', 'Maria')
    cy.get('input[id="lastName"]').type('Silva').should('have.value', 'Silva')
    cy.get('input[id="email"]').type('teste@teste.com').should('have.value', 'teste@teste.com')
    cy.get('input[id="phone"]').type('12988654443').should('have.value', '12988654443')
    cy.get('#open-text-area').type('teste').should('have.value', 'teste')
    cy.get('button[type="submit"]').click()
})
