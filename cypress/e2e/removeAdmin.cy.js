describe('Check if admin exists', () => {
    it('Logged in succesfully!', () => {
        cy.visit('/');
        cy.get('#loginButton').should('exist');
        cy.get('#loginButton').click();
        cy.get('#loginButton').should('exist');
        cy.get('#email').should('exist');
        cy.get('#password').should('exist');
        cy.get('#email').type('korbendesmet@hotmail.com');
        cy.get('#password').type('123456');
        cy.get('#submit').click();
        cy.get('#logoutButton').should('exist');
    })
    it('Opened menu succesfully!', () => {
        cy.contains('button', 'Menu').click();
        cy.contains('button', 'Admins');
    })
    it('Admin exists!', () => {
        cy.contains('button', 'Admins').click();
        cy.contains('div', 'Korben De Smet');
    })
})