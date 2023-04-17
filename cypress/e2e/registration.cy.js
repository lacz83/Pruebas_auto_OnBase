describe('Testing basic OnBase Login', () => {
beforeEach('Pruebas', ()=> {
       cy.visit('http://srvonbasepruws.udea.local/AppNet/Login.aspx')
        //cy.visit('http://srvonbasepruws.udea.local/AppNet//UnityForm.aspx?d1=AeZWifNz2GqR7TOVZTyt6qnpFWHkp3aItmEZvjrOB6wdsFrdT2rgmc%2f07oCVBwf6ZvwmdjP3Z3gw39NQMnRLi68rAjIUEQD9VE1PMankJdBpbGhjBKit3XMDirCuFqmNI4ZI1vBXxEqgxQ8WGXxATHlYk3bETrH39gfAIjUOsi9n')
        cy.wait(1000)
        cy.contains('Iniciar sesión')
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('ANALISTA1.PRUEBAS')
            cy.get('input[name="password"]').type('t3st.Ud34')
            cy.get('button.btn.btn-primary.loginButton').click()
        })

        cy.get('div.js-navMenuButton.navMenuButton').click()
        cy.wait(3000)
        cy.get('li#newform.navLink.firstLinkSet').click()
        cy.wait(3000)
        //Ingresar al formulario SL - Envío de comunicación
        cy.log('Se ingresa al formulario SL - Envío de comunicación')
        cy.get('#NavPanelIFrame').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy
            .get($body).within(()=> {
                cy.get('div.formBlock.panel').within(()=>{
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
        })
    })
    
    it('Validar formulario', ()=>{
        cy.wait(10000)
        cy.log('Se inician las pruebas en la sección Datos de solicitud')
        cy.get('#frmViewer').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.
            get($body).within(()=> {
                cy.get('form').within(()=> {
                    cy.get('#uf_hostframe').then(($iframe) => {
                        const $body = $iframe.contents().find('body')
                        cy.
                        get($body).within(()=> {
                            //Validar Externo - Digital - Correo
                            cy.log('Pruebas de Externo - Digital - Correo')
                            cy.get('#destino_input').type('EXTERNO')
                            cy.get('#medio_input').type('DIGITAL')
                            cy.get('#asuntocomunicación511_input').type('PRUEBA AUTOMATIZADA')
                            cy.get('#CorreoCertificado_label').should('be.visible')
                            cy.get('#CorreoCertificado_radiobutton1').should('not.be.checked').and('have.value', 'SÍ')
                            cy.get('#CorreoCertificado_radiobutton2').should('be.checked').and('have.value', 'NO')
                            cy.wait(3000)

                            //Validar Externo - Físico - Operador
                            cy.log('Pruebas de Externo - Físico - Operador')
                            cy.get('#destino_input').clear()
                            cy.get('#medio_input').clear()
                            cy.get('#destino_input').type('EXTERNO')
                            cy.get('#medio_input').type('FÍSICO' , {force: true})
                            
                            //Validar visibilidad de campo Centro de costo envío
                            
                            //Si el tipo de servicio es personalizado
                            cy.get('#tipodeservicio122_input').type('PERSONALIZADO', {force: true})
                            cy.get('#generarcomunicación164_input').click()
                            cy.get('#retornoconradicado345_label').should('be.visible')
                            cy.get('#centrodecostogeneral126_input').should('not.be.visible')
                            cy.wait(2000)

                            //Si el tipo de servicio es operador logístico
                            cy.get('#tipodeservicio122_input').clear()
                            cy.get('#tipodeservicio122_input').type('OPERADOR LOGÍSTICO', {force: true})
                            cy.get('#generarcomunicación164_input').click()
                            cy.get('#centrodecostogeneral126_input').should('be.visible')

                            cy.get('#retornoconradicado345_radiobutton1').click()
                            cy.get('#requierepaquete346_radiobutton2').click()
                            
                            //cy.get('#requierepaquete346_radiobutton2').type('NO')
                            cy.wait(3000)
                            cy.get('#header_secDatosSolicitud').click()

                            //Validar sección Datos de quien tramita
                            cy.log('Pruebas Datos de quien tramita')
                            cy.get('#nombredelfuncionarioquetramitalasolicitud123').click()
                            cy.get('#loginoid').clear()
                            cy.get('#loginoid').type('edwin.gaviria')
                            cy.get('#nombredelfuncionarioquetramitalasolicitud123_input').click()
                            cy.wait(4000)
                            cy.get('#teléfonodelfuncionarioquetramitalasolicitud125').type('3128965687')
                            cy.get('#nombredelfuncionarioquetramitalasolicitud123_input').focus()
                            cy.wait(3000)
                            cy.get('#header_SecDatosquientramita').click()

                            //Validar sección Datos remitente con Externo - Físico - Operador
                            cy.log('Pruebas Datos remitente')
                            cy.get('#nombredelfuncionario101_input').type('GOMEZ ZULUAGA OLGA INES')
                            cy.get('#empleo125_input').click()
                            cy.wait(4000)
                            cy.get('#centrodecostogeneral126_input').type('0123456789')
                            cy.get('#nombredelfuncionario101_input').focus()
                            cy.wait(3000)
                            cy.get('#header_secDatosRemitente').click()

                            //Validar sección Datos destinatario con Externo - Físico - Operador
                            cy.get('#nombredepersonanaturaloentidaddestinataria357_input').type('LUIS')
                            cy.get('#teléfono359_input').click()
                            cy.wait(4000)
                            cy.get('#destino352_input').type('NACIONAL')
                            cy.get('#ciudad395_input').type('CALI')
                            cy.get('#confirmarcorreelectronicodestinatario_input').type('luiscortes@datecsa.com')
                            cy.get('#nombredepersonanaturaloentidaddestinataria357_input').focus()
                            cy.wait(3000)
                            cy.get('#header_seccionDatosDestinatarios').click()
                        })
                    })
                })
            })
        })


        /*cy.get('header.client_header').within(() => {
           
        })

        cy.get('nav.js-navMenu.navMenu').within(() => {
           
        })

        cy.get('div.client_content.js-client_content').within(() => {
            cy.get('div.navPanelContainer.sideOne').within(() => {
                cy.get('iframe#NavPanelIFrame').within(() => {
                    cy.contains('document').within(() => {
                
                    })
                })
            })
        })/*

        /*cy.get('#itemLabelunity103.CSListBlock_listOption_label.js-listOptionLabelform').click()
        cy.wait(3000)*/
    })
  })
/*describe('Testing basic Angular registration', () => {
    beforeEach(() => {
        cy.visit('https://angular-6-registration-login-example.stackblitz.io/register')
        cy.wait(7000)
        cy.get('button').click()
    })
    it('Test links between registration and login page', () => {
        cy.get('a.btn.btn-link').click()
        cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/login')
        cy.get('a.btn.btn-link').click()
        cy.url().should('eq', 'https://angular-6-registration-login-example.stackblitz.io/register')
    })
    it('Test form feedback', () => {
        cy.get('button.btn.btn-primary').click()
        cy.wait(1000)
        cy.get('div.invalid-feedback').then(($divs) => {
            expect($divs.length).to.equal(4)
        })
    })
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="firstName"]').type('Monitor')
            cy.get('input[formcontrolname="lastName"]').type('Pruebas')
            cy.get('input[formcontrolname="username"]').type('pruebas')
            cy.get('input[formcontrolname="password"]').type('MISO4208')
            cy.get('button.btn.btn-primary').click()
        })
        cy.wait(1000)
        //Redirected to login
        cy.get('div.alert.alert-success').should('be.visible')
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="username"]').type('pruebas')
            cy.get('input[formcontrolname="password"]').type('MISO4208')
            cy.get('button.btn.btn-primary').click()
        })
        cy.wait(1000)
        //logged in
        cy.get('h1').then(($header) => {
            expect($header[0].innerText).to.equal('Hi Monitor!')
        })
    })
})*/
