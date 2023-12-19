describe('practicing Admin', () => {
before(() => {
    cy.fixture('users').then((data) => {
        globalThis.data = data
    })
})

    beforeEach(() => {
        cy.login(data.username, data.password)
    });


    it('Test 1', () => {

        cy.visit('/')
        cy.contains('Admin').click()
        cy.contains('[aria-label="Topbar Menu"] ul li','Configuration')
        .click()
        .contains('Language Packages')
        .click()
        cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('[class="oxd-select-text oxd-select-text--active"]')
        .click()
       
       cy.get('[class="oxd-form-row"]')
       .contains('Turkish (Turkey)').click()
       cy.get('[type="submit"]').click()

       cy.get('[class="orangehrm-container"]')
       .contains('Turkish (Turkey) - Türk (Türkiye)')
       .should('have.text','Turkish (Turkey) - Türk (Türkiye)')
        

    })
})