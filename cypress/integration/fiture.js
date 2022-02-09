/// <reference types="cypress" />
var obj = require ('../fixtures/siteDetails.json')
describe("demo",function(){
    before(function(){
        cy.fixture('siteDetails').then(function(data) {
           
            this.data = data
          })
    })
    it("tset",function(){
        cy.visit(this.data.url)
        cy.xpath("//a[text()='Log in']").click()
    cy.get('#loginusername').type(this.data.city)
    cy.wait(4000)
    cy.get('#loginpassword').type('demo')
    cy.xpath("//button[text()='Log in']").click()
    })
})