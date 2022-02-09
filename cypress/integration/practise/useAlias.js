describe("use alias",function(){
beforeEach(() => {
   // alias fixtures
   cy.fixture('example.json').as('u')
})

it('scenario', function () {
   // '@' to handle aliases
   cy.get('@u').then((u) => {
      // access element argument
     // const i = u[0]
      //verification
      cy.visit(u.website)
   })
})
})
