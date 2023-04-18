describe('Validar un reporte', () => {
  beforeEach('Pruebas de formulario', ()=> {
    cy.visit('http://srvonbasepruws.udea.local/AppNet/Login.aspx')
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
})