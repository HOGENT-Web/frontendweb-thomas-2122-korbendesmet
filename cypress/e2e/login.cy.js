describe('Test login form', () => {
    it('login form succesfully opened!', () => {
        cy.visit('/');
        cy.get('#loginButton').should('exist');
        cy.get('#loginButton').click();
        cy.get('#loginButton').should('exist');
    })
    it('Correct error message!', () => {
        cy.get('#email').should('exist');
        cy.get('#password').should('exist');
        cy.get('#email').type('korbendesmet@hotmail.com');
        cy.get('#password').type('1234567');
        cy.get('#submit').click();
        cy.get('#errorLogin').should('exist');
    })
    it('Succesfully loged in!', () => {
        cy.get('#email').clear();
        cy.get('#password').clear();
        cy.get('#email').type('korbendesmet@hotmail.com');
        cy.get('#password').type('123456');
        cy.get('#submit').click();
        cy.get('#logoutButton').should('exist');
    })
})