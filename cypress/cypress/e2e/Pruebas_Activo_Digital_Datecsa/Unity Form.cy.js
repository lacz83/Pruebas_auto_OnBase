describe('Validación Formulario Indexación a TRD - V2', () => {
  beforeEach('Pruebas de formulario', () => {
      cy.visit('http://srvappid01/AppNet/Login.aspx')
      cy.wait(1000)
      cy.contains('Login')
      cy.get('form').within(() => {
          cy.get('input[name="username"]').clear()
          cy.get('input[name="password"]').clear()
          cy.get('input[name="username"]').type('MGOMEZ')
          cy.get('input[name="password"]').type('Datecsa2023')
          cy.get('button.btn.btn-primary.loginButton').click()
      })

      cy.get('div.js-navMenuButton.navMenuButton').click()
      cy.wait(3000)
      cy.get('li#newform.navLink.firstLinkSet').click()
      cy.wait(3000)

      //Ingresar al Formulario Indexación a TRD - V2
      cy.log('Se ingresa al Formulario Indexación a TRD - V2')
      cy.get('#NavPanelIFrame').then(($iframe) => {
          const $body = $iframe.contents().find('body')
          cy
              .get($body).within(() => {
                  cy.get('div.formBlock.panel').within(() => {
                      cy.get('#formList').within(() => {
                          cy.get('.js-listContainer.checkSelect_listContainer').within(() => {
                              cy.get('.js-list-checkSelectform.list-checkSelect').within(() => {
                                  cy.get('#group105').within(() => {
                                      cy.get('ul>li#liunity167').click()
                                  })
                              })
                          })
                      })
                  })
              })
      })
  })

  it.only('Validar SL - Envío de comunicación Interna - Digital - Correo', () => {
      cy.wait(5000)
      cy.log('Se inician las pruebas en la sección Datos de solicitud')
      /**/
      cy.get('#frmViewer').then(($iframe) => {
          const $body = $iframe.contents().find('body')
          cy.
              get($body).within(() => {
                  cy.get('form').within(() => {
                      cy.get('#uf_hostframe').then(($iframe) => {
                          const $body = $iframe.contents().find('body')
                          cy.
                              get($body).within(() => {
                                  //Valida sección Datos TRD
                                  cy.log('Pruebas de sección Datos TRD')
                                  cy.get('#empresatrd100_input').type('EMPRESA A')
                                  cy.get('#versióntrd111_input').focus()
                                  cy.get('#versióntrd111_input').type('1')
                                  cy.get('#nombreunidaddependencia_input').focus()
                                  cy.get('#nombreunidaddependencia_input').type('JURIDICA')
                                  cy.get('#nombreunidaddependencia_input').should('be.empty')
                                  cy.get('#nombredeserie_input').focus()
                                  cy.get('#nombredeserie_input').type('ACTOS CONSTITUCIONALES')
                                  cy.get('#nombredesubserie_input').focus()
                                  cy.get('#nombredesubserie_input').type('DERECHOS DE PETICION')
                                  cy.get('#códigodeexpediente_input').focus()
                                  cy.get('[value="Limpiar"]').click()
                                  cy.wait(3000)

                                  //Validar sección Información del documento
                                  //cy.log('Pruebas Información del documento')
                                  //cy.get('#adjuntaranexos_input').click()
                                  //cy.get('#cantidadanexos209_input').should('have.value', 1)
                                  //cy.get('#seccionAnexo1').should('be.visible')

                                  //Enviar el formulario
                                  //cy.get('form').submit()
                                  //cy.wait(10000)
                              })
                      })
                  })
              })
      })
      cy.get('#realNameDiv').click()
      cy.contains('Logout').click()
      cy.get('button').contains('Log Out').click()
      //cy.get('.dialog-button').contains('No').click()
      //cy.wait(3000)
  })
})