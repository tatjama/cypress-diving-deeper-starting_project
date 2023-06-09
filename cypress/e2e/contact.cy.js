///<reference types="Cypress"/>

describe('contact form', () => {
    it('should submit form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Hello World!');
        cy.get('[data-cy="contact-input-name"]').type('tanja');
        cy.get('[data-cy="contact-input-email"]').type('tanja120a@gmail.com');
        cy.get('[data-cy="contact-btn-submit"]')
        .contains('Send Message')
        .and('not.have.attr', 'disabled');
        const btn = cy.get('[data-cy="contact-btn-submit"]');
        btn.click()
        btn.contains('Sending...')
        btn.should('have.attr', 'disabled');
        
    })
})