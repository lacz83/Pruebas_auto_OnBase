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
     cy.get('#openreportingdashboards').click()
     cy.wait(3000)

     //Ingresar al formulario SL - Envío de comunicación
     cy.log('Se ingresa a Reporting Dashboard')
     cy.get('#NavPanelIFrame').then(($iframe) => {
         const $body = $iframe.contents().find('body')
         cy
         .get($body).within(()=> {
             cy.get('div.formBlock.panel').within(()=>{
                 cy.get('.js-dashboardTreePanelContent.panelContent.isScrolling').within(()=> {
                     cy.get('#dashboardTreeViewn2').click()
                     cy.get('#dashboardTreeViewn20').click()
                     cy.get('#dashboardTreeViewt24').click()
                     cy.wait(4000)
                         /*cy.get('.js-list-checkSelectform.list-checkSelect').within(()=>{
                             cy.get('#group101').within(()=> {
                                 cy.get('ul>li#liunity103').click()
                             })
                         })*/
                 })
             })
         })
     })
 })

 it('Ingreso al reporte Solicitudes a la Dirección Jurídica', () => {
  cy.log('Se ingresa a la ventana de parámetros')
  cy.get('iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body.ltr')
    cy
    .get($body).within(() => {
      //cy.get('#ParameterTable').within(() => {
        //cy.get('#dp218_ufecha_udaterange_u1').within(() => {
          //cy.get('#dp218_ufecha_udaterange_u1_fromDate').within(() => {
            cy.get('#dp218_ufecha_udaterange_u1_fromDate_fromDate_date').type('01/01/2023')
            cy.get('#dp218_ufecha_udaterange_u1_toDate_toDate_date').type('18/04/2023')
          //})
        //})

      //})


    })
  })


 })
})