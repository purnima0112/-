/// <reference types="Cypress" />

describe('My First Test', () => {
   beforeEach(function(){
     cy.fixture('objectLocation').as('fixtureAlias')
 
   })
    it("launch url",() =>{
      cy.visit("https://www.demoblaze.com/")
      cy.wait(2000)
      cy.xpath("//a[(text()='HTC One M9')]").scrollIntoView();
      cy.wait(2000);
      cy.xpath("//a[(text()='HTC One M9')]").click();
      cy.wait(4000)
      cy.xpath("//a[text()='Add to cart']").click();
      cy.wait(4000)
      cy.on('window:confirm',(str)=>{
        expect(str).equal('Product added')
      })
      cy.xpath("//a[@id='cartur']").click();
      cy.get(".success >td :nth-of-type(1)[width='100']").should('be.visible')
      cy.xpath("//td[text()='700']").should('have.text','700')
    
  })
    it('purchase order',()=>{
      cy.xpath("//button[text()='Place Order']").click()
      var file
      cy.xpath("//input[@id='name']").type("Purnima")
      cy.xpath("//input[@id='country']").type("Country")
      cy.xpath("//input[@id='city']").type("LA")
      cy.xpath("//input[@id='card']").type('8478563896')
      cy.xpath("//input[@id='month']").type('January')
      cy.xpath("//input[@id='year']").type('2022')
      cy.xpath("//button[text()='Purchase']").click()
      
    })
    it('Validate Order success',()=>{
      cy.xpath("//h2[text()='Thank you for your purchase!']").should('be.visible').contains('Thank you for your purchase!')
      cy.get('.sa-confirm-button-container button').click()
    })
  })
