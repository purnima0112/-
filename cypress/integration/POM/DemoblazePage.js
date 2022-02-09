// require ('../../fixtures/siteDetails.json')
// require('../../fixtures/objectLocation.json')
class DemoblazePage{

    login(locator,web){
      cy.visit(web.url)
      cy.xpath(locator.Login).click()
      cy.get(locator.username).type(web.un)
      cy.wait(3000)
      cy.get(locator.password).type(web.password)
      cy.xpath(locator.loginbtn).click()
      cy.waitFor(locator.logout)
    }
    navigate(product,addCart,cartButton){
      cy.wait(4000)
      cy.xpath(product).scrollIntoView().click()
      cy.xpath(addCart).click();
      cy.wait(3000)
      cy.on('window:confirm',(str)=>{
        expect(str).equal('Product added')
      })
    }
    verifyProduct(price, button , product){
        cy.get(button).click();
        cy.wait(2000)
        cy.get(product).should('have.text','HTC One M9')
        cy.xpath(price).should('have.text',700)
    }

    enterDetails(locator,detail){
        cy.xpath(locator.placeOrder).click()
        cy.wait(2000)
        cy.xpath(locator.enterName).type(detail.name)
        cy.xpath(locator.country).type(detail.country)
        cy.xpath(locator.entercity).type(detail.city)
        cy.xpath(locator.card).type(detail.card_number)
        cy.xpath(locator.month).type(detail.month)
        cy.xpath(locator.year).type(detail.year)
        cy.xpath(locator.purchase).click()
    }
    verfiySuccessMessage(locator,detail){
      cy.xpath(locator.success).should('be.visible').contains(detail.Message)
      cy.get(locator.Ok).click()
    }
}
export default DemoblazePage