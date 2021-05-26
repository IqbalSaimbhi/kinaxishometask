/// <reference types="cypress" />

context('Products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products')
  })

  it('should render products', () => {
    cy.get('button[data-testid="add-to-cart-button-0"]').should('be.visible')
    cy.get('button[data-testid="add-to-cart-button-1"]').should('be.visible')
    cy.get('button[data-testid="add-to-cart-button-2"]').should('be.visible')
  })
})
