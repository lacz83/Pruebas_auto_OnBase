describe("Validación flujo de comunicaciones", () => {
    beforeEach('Pruebas de Workflow', () => {
        cy.visit('http://srvonbasepruws.udea.local/Appnet/Workflow/WFLogin.aspx?')
        cy.wait(1000)
        cy.contains('Iniciar sesión')
        cy.get('#form1').within(() => {
            cy.get('input[name="username"]').type('ANALISTA1.PRUEBAS')
            cy.get('input[name="password"]').type('t3st.Ud34')
            cy.get('button.btn.btn-primary.loginButton').click()
        })

        /*cy.visit('http://srvonbasepruws.udea.local/AppNet/Login.aspx')
        cy.wait(1000)
        cy.contains('Iniciar sesión')
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('ANALISTA1.PRUEBAS')
            cy.get('input[name="password"]').type('t3st.Ud34')
            cy.get('button.btn.btn-primary.loginButton').click()
        })
   
        cy.get('div.js-navMenuButton.navMenuButton').click()
        cy.wait(3000)
        cy.get('#openworkflow').click()*/
        cy.wait(3000)

        /*cy.get('#frmWorkflowTree').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy
            .get($body).within(()=> {
                cy.get('#T105').within(()=>{
                    cy.get('#formList').within(()=> {
                        cy.get('.js-listContainer.checkSelect_listContainer').within(()=> {
                            cy.get('.js-list-checkSelectform.list-checkSelect').within(()=>{
                                cy.get('#group101').within(()=> {
                                    cy.get('ul>li#liunity103').click()
                                })
                            })
                        })
                    })
                })
            })
        })*/
    })

    it('Ingreso a la bandeja Elaborar documento', () => {
        /*cy.get('#frmWorkflowTree').then(($iframe) => {
          const body = $iframe.contents().find('body')
          cy
          .get($body).within(() => {
            
          })
        })*/

    })
})