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

    it.only('Validar Formulario Indexación a TRD - V2', () => {
        cy.wait(4000)
        cy.log('Se inician las pruebas en la sección Datos de TRD')
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
                                    
                                    //#region Constantes
                                    const empresa = 'EMPRESA A'
                                    const valorEmpresa = 'EMPRESA A'

                                    const version_Tomo = 1
                                    const valorVersion = 1

                                    const unidadProductora = 'JURIDICA'
                                    const valorunidadProductora = 'JURIDICA'

                                    const serie = 'ACTOS CONSTITUCIONALES'
                                    const valorSerie = 'ACTOS CONSTITUCIONALES'

                                    const subserie = 'DERECHOS DE PETICION'
                                    const valorSubserie = 'DERECHOS DE PETICION'

                                    const fecha = new Date();
                                    const añoActual = fecha.getFullYear()

                                    const fechaHoraActual =  fecha.toLocaleString('en-US');

                                    const fechaFutura = new Date();
                                    fechaFutura.setDate(fechaFutura.getDate() + 1);
                                    const fechaHoraFutura =  fechaFutura.toLocaleString('en-US');

                                    const codigoExpediente = 'JURIDICA'

                                    const soporteExpediente = 'ELECTRONICO'

                                    const tipoDocumental = 'DERECHO DE PETICION'
                                    const valorTipoDocumental = 'DERECHO DE PETICION'

                                    const origenDocumento = 'DIGITALIZADO'
                                    const valorOrigenDocumento = 'DIGITALIZADO'

                                    const nombreDocumento = 'DERECHO 1'

                                    const valorNulo = null
                                    //#endregion

                                    //#region Valida sección Datos TRD
                                    cy.log('Pruebas de sección Datos TRD')

                                    cy.get('#empresatrd100_input').type(empresa)
                                    cy.get('#empresatrd100_input').should('have.value', valorEmpresa)

                                    cy.get('#versióntrd111_input').focus()
                                    cy.wait(1000)
                                    cy.get('#versióntrd111_input').type(version_Tomo)
                                    cy.get('#versióntrd111_input').should('have.value', valorVersion)

                                    cy.get('#nombreunidaddependencia_input').focus()
                                    cy.wait(1000)
                                    cy.get('#nombreunidaddependencia_input').type(unidadProductora)
                                    cy.get('#nombreunidaddependencia_input').should('have.value', valorunidadProductora)

                                    cy.get('#nombredeserie_input').focus()
                                    cy.wait(1000)
                                    cy.get('#nombredeserie_input').type(serie)
                                    cy.get('#nombredeserie_input').should('have.value', valorSerie)

                                    cy.get('#nombredesubserie_input').focus()
                                    cy.wait(1000)
                                    cy.get('#nombredesubserie_input').type(subserie)
                                    cy.get('#nombredesubserie_input').should('have.value', valorSubserie)
                                    
                                    //cy.get('[value="Limpiar"]').click()
                                    //#endregion

                                    //#region Valida sección Datos del Expediente
                                    cy.log('Pruebas de sección Datos del Expediente')

                                    cy.get('#códigodeexpediente_input').focus()
                                    cy.wait(1000)
                                    cy.get('#códigodeexpediente_input').type(codigoExpediente + añoActual)
                                    cy.get('#códigodeexpediente_input').should('not.have.value', valorNulo)

                                    cy.get('#nombreexpediente_input').focus()
                                    cy.wait(1000)
                                    cy.get('#nombreexpediente_input').type(codigoExpediente + ' ' + añoActual)
                                    cy.get('#nombreexpediente_input').should('not.have.value', valorNulo)

                                    cy.get('#númerodetomodelexpediente131_input').focus()
                                    cy.wait(1000)
                                    cy.get('#númerodetomodelexpediente131_input').type(version_Tomo)
                                    cy.get('#númerodetomodelexpediente131_input').should('not.have.value', valorNulo)

                                    cy.get('#soporteexpediente115_input').focus()
                                    cy.wait(1000)
                                    cy.get('#soporteexpediente115_input').type(soporteExpediente)
                                    cy.get('#soporteexpediente115_input').should('not.have.value', valorNulo)
                                    
                                    //cy.get('#ubicaciónfísicaarchivodegestión_input').focus()
                                    //#endregion                                        

                                    //#region Valida sección Datos del Documento
                                    cy.log('Pruebas de sección Datos del Documento')

                                    cy.get('#tipodocumental113_input').focus()
                                    cy.wait(1000)
                                    cy.get('#tipodocumental113_input').type(tipoDocumental)
                                    cy.get('#tipodocumental113_input').should('have.value', valorTipoDocumental)

                                    cy.get('#origendocumento125_input').focus()
                                    cy.wait(1000)
                                    cy.get('#origendocumento125_input').type(origenDocumento)
                                    cy.get('#origendocumento125_input').should('have.value', valorOrigenDocumento)
                                    
                                    //Validar fecha futura
                                    cy.get('#fechadecreacióndedocumento_input').focus()
                                    cy.wait(1000)
                                    cy.get('#fechadecreacióndedocumento_input').type(fechaHoraFutura)
                                    cy.get('[type="button"]').contains('OK').click()

                                    cy.get('[value="Guardar"]').should('be.disabled')
                                    
                                    //Validar fecha actual
                                    cy.get('#fechadecreacióndedocumento_input').clear()
                                    cy.wait(1000)
                                    cy.get('#fechadecreacióndedocumento_input').type(fechaHoraActual)
                                    cy.get('#nombredocumento_input').focus()

                                    cy.get('[value="Guardar"]').should('be.enabled')

                                    cy.wait(1000)
                                    cy.get('#nombredocumento_input').type(nombreDocumento)
                                    cy.get('#nombredocumento_input').should('not.have.value', valorNulo)
                                    //#endregion

                                    //Enviar el formulario
                                    cy.get('[value="Guardar"]').click()
                                    cy.wait(5000)
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