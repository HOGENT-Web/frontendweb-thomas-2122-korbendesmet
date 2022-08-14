describe('Load homepage', () => {
    it('Visited succesfully!', () => {
        cy.visit('/');
        cy.get('#header').should('exist');
    })
})