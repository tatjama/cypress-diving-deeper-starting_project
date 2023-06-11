///<reference types="Cypress"/>

describe('contact form', () => {
  before(() => {
    //runs only once,  before all tests
  });
  beforeEach(() => {
    // runs before every tests
    cy.visit('/about');//'http://localhost:5173/about'
  });
  afterEach(() => {
    // runs after every test
  });
  after(() => {
    // runs only once, before all tests
  })

  it('should submit form', () => {
    cy.task('seedDatabase', 'filename.csv').then(returnvalue => {
      //... use some return value
    });
    cy.getById("contact-input-message").type('Hello World!');
    cy.getById("contact-input-name").type('tanja');
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr('disabled')).to.be.undefined;
      expect(el.text()).to.eq('Send Message');
    });
    cy.getById("contact-input-email").type('tanja120a@gmail.com');
    cy.submitForm();
    //cy.get('[data-cy="contact-btn-submit"]')
    //.contains('Send Message')
    //.and('not.have.attr', 'disabled');
    cy.getById("contact-btn-submit").as('submitBtn');
    //cy.get('@submitBtn').click()
    cy.get('@submitBtn').contains('Sending...')
    cy.get('@submitBtn').should('have.attr', 'disabled');        
  });

  it('should validate form input', () => {
    cy.submitForm();
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled');
      expect(el.text()).to.not.equal('Sending...');
    });
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
    
    cy.getById("contact-input-message").blur();
    cy.getById("contact-input-message")
      .parent()
      .should('have.attr', 'class').and('match', /invalid/);
    
    cy.getById("contact-input-name").focus().blur();
    cy.getById("contact-input-name")
      .parent()
      .should('have.attr', 'class').and('match', /invalid/);
    cy.screenshot();
    cy.getById("contact-input-email").focus().blur();
    cy.getById("contact-input-email")
      .parent()
      .should((el) => {
        expect(el.attr('class')).to.contains('invalid');
      });

  });
});