describe('first test', () => {
  it('visits the codepen site', () => {
    cy.visit('https://john-greer-07-29-22.surge.sh/') // Given the user visits 'https://john-greer-07-29-22.surge.sh/'
  })

  it('loads a 3x3 grid', () => {
    cy.visit('https://john-greer-07-29-22.surge.sh/')
    cy.get('#number')
      .type('3')
  })

})