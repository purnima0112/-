/// <reference types="Cypress" />
describe('Perform actions on demoblaze', function(){
    it("launch url",() =>{
        cy.visit("https://www.demoblaze.com/")
      })
      it('scroll to htc product itemn',function(){
          cy.contains('Phones').click();
          cy.contains('Iphone 6').click();
      })

})