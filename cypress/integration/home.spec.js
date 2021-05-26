/// <reference types="cypress" />

context('Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('should render home page', () => {
      cy.get('h1[ data-testid="sales-heading"]').should('be.visible')
    })
  })
  