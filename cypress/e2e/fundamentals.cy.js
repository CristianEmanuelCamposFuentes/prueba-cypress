describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('http://localhost:3000/fundamentals')
//    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing')
  })
  it('Accordion works correctly', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('[data-test="accordion-item-1"]').click().pause()
  })
})