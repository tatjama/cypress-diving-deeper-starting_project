///<reference types="Cypress"/>

describe('contact form', () => {
    it('should submit form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Hello World!');
        cy.get('[data-cy="contact-input-name"]').type('tanja');
        cy.get('[data-cy="contact-input-email"]').type('tanja120a@gmail.com');
        cy.get('[data-cy="contact-btn-submit"]').then((el) => {
        expect(el.attr('disabled')).to.be.undefined;
        expect(el.text()).to.eq('Send Message');
        });
        //cy.get('[data-cy="contact-btn-submit"]')
        //.contains('Send Message')
        //.and('not.have.attr', 'disabled');
        const btn = cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
        cy.get('@submitBtn').click()
        cy.get('@submitBtn').contains('Sending...')
        cy.get('@submitBtn').should('have.attr', 'disabled');        
    });
});