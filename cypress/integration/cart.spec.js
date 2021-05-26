/// <reference types="cypress" />

context('Cart', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/products')
      cy.get('button[data-testid="add-to-cart-button-0"]').click()
      cy.get('button[data-testid="add-to-cart-button-1"]').click()
      cy.get('button[data-testid="add-to-cart-button-2"]').click()
      cy.wait(500)
      cy.get('a[href="/cart"]').click()
    })
  
    it('should render cart', () => {
        cy.get('span[data-testid="total-price"]').contains('$ 185')
        cy.get('span[data-testid="total-count"]').contains('TOTAL: (3 items)')
    })
  })
  