/// <reference types ="Cypress" />

describe('Demoblaze site', function () {
  beforeEach(function(){
    cy.fixture('objectLocation').as('locators')
    cy.fixture('siteDetails').as('detail')
  })
  it("login",function(){
    var web = this.detail
    var locator = this.locators
    cy.visit(web.url)
    cy.xpath(locator.Login).click()
    cy.get(locator.username).type('worl')
    cy.wait(3000)
    cy.get(locator.password).type('demo')
    cy.xpath(locator.loginbtn).click()
    cy.waitFor('#logout2')
  })
 // Visits url and seraches product

  it("Visit URL and serach for product",function(){
    var web = this.detail
    var locator = this.locators
    cy.wait(3000)
    cy.xpath(locator.productName).scrollIntoView().click()
    cy.wait(4000)
    cy.xpath(locator.addCart).click();
    cy.wait(6000)
    var locator = this.locators
    cy.on('window:confirm',(str)=>{
      expect(str).equal('Product added')
    })
    cy.get(locator.cartButton).click();
   
  })

  //  Enter details needed
  it("Enter place order details", function(){
    var locator = this.locators
    var detail = this.detail
      cy.xpath(locator.placeOrder).click()
      cy.wait(2000)
      cy.xpath(locator.enterName).type(detail.name)
      cy.xpath(locator.country).type(detail.country)
      cy.xpath(locator.entercity).type(detail.city)
      cy.xpath(locator.card).type(detail.card_number)
      cy.xpath(locator.month).type(detail.month)
      cy.xpath(locator.year).type(detail.year)
      cy.xpath(locator.purchase).click()
  })
  it('Validate Order success',function(){
    var locator = this.locators
    var detail = this.detail
    cy.xpath(locator.success).should('be.visible')
    .contains(detail.Message)
    cy.get('.sa-confirm-button-container button').click()
  })
 
})