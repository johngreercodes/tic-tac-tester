describe('tic tac toe tests', () => {

  it('wins a 3x3 game for player X', () => {
    
    cy.visit('https://john-greer-07-29-22.surge.sh/')
    cy.get('#number').should('be.visible')
    cy.get('#start').should('be.visible')
    cy.get('#number').type('3')
    cy.contains('Play').click()
    cy.get('#table').should('be.visible')

    cy.get('#4')
      .click() 
      .should('have.text','X')
    cy.get('#1')
      .click() 
      .should('have.text','O')
    cy.get('#0')
      .click()
      .should('have.text','X') 
    cy.get('#3')
      .click()
      .should('have.text','O') 
    cy.get('#8')
      .click()
      .should('have.text','X') 

    cy.get('#endgame').should('have.text', `Congratulations player X! You've won. Refresh to play again!`)

  })

  it('wins a 3x3 game for player O', () => {
    
    cy.visit('https://john-greer-07-29-22.surge.sh/')
    
    cy.get('#number').type('3')
    
    cy.contains('Play').click()
    
    cy.get('#table').should('be.visible')

    cy.get('#4')
      .click() 
      .should('have.text','X')
    cy.get('#2')
      .click()
      .should('have.text','O')
    cy.get('#8')
      .click()
      .should('have.text','X')
    cy.get('#0')
      .click() 
      .should('have.text','O')
    cy.get('#7')
      .click() 
      .should('have.text','X')
    cy.get('#1')
      .click() 
      .should('have.text','O')

    cy.get('#endgame').should('have.text', `Congratulations player O! You've won. Refresh to play again!`)

  })

  it('ties a 3x3 game between player X and player O', () => {
    cy.visit('https://john-greer-07-29-22.surge.sh/')
    cy.get('#number').type('3')
    cy.contains('Play').click()
    cy.get('#table').should('be.visible')

    cy.get('#4')
      .click() 
      .should('have.text','X')
    cy.get('#2')
      .click() 
      .should('have.text','O')
    cy.get('#1')
      .click() 
      .should('have.text','X')
    cy.get('#7')
      .click() 
      .should('have.text','O')
    cy.get('#5')
      .click() 
      .should('have.text','X')
    cy.get('#3')
      .click() 
      .should('have.text','O')
    cy.get('#8')
      .click() 
      .should('have.text','X')
    cy.get('#0')
      .click() 
      .should('have.text','O')
    cy.get('#6')
      .click()
      .should('have.text','X')

    cy.get('#endgame').should('be.visible')

  }) 

  it('tries to enter a non-numerical value', () => {
    cy.visit('https://john-greer-07-29-22.surge.sh/')
    cy.get('#number').type('!@#$%^&*(')
    cy.contains('Play').click()
    cy.get('#0').should('not.exist')
  })
})