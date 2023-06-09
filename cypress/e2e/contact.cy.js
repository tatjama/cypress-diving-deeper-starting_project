///<reference types="Cypress"/>

describe('contact form', () => {
    it('should submit form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Hello World!');
        cy.get('[data-cy="contact-input-name"]').type('tanja');
        cy.get('[data-cy="contact-input-email"]').type('tanja120a@gmail.com');
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
        //cy.get('[data-cy="contact-btn-submit"]').should('be.enabled');
        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').click();
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
        //cy.get('[data-cy="contact-btn-submit"]').should('be.disabled');
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
        
    })
})