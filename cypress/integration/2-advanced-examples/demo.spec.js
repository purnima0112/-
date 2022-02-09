import DemoblazePage from "../POM/DemoblazePage"
require ('../../fixtures/siteDetails.json')
require('../../fixtures/objectLocation.json')

beforeEach(function(){
    cy.fixture('siteDetails').as('webPage')
    cy.fixture('objectLocation').as('locators')
})

describe("Automate DmoBlaze Page", function(){
    it("Basic Automation", function () {
        const object = new DemoblazePage();
        var web = this.webPage
        var locator = this.locators
        object.login(locator,web)
        object.navigate(locator.productName,locator.addCart,locator.cartButton);
        object.verifyProduct(locator.price,locator.cartButton,locator.verifyProduct);
        object.enterDetails(locator,web);
        object.verfiySuccessMessage(locator,web)
    })
})