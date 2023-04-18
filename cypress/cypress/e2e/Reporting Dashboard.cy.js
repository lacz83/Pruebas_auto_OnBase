describe('Validar un reporte', () => {
  beforeEach('Pruebas de Reporting Dashboard', () => {
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
    cy.log('Se ingresa a Reporting Dashboard')
    cy.get('#openreportingdashboards').click()
    cy.wait(3000)

    //Ingresar al formulario SL - Envío de comunicación
    cy.log('Se selecciona el reporte Tablero: Solicitudes a la Dirección Jurídica')
    cy.get('#NavPanelIFrame').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('div.formBlock.panel').within(() => {
            cy.get('.js-dashboardTreePanelContent.panelContent.isScrolling').within(() => {
              cy.get('#dashboardTreeViewn2').click()
              cy.get('#dashboardTreeViewn20').click()
              cy.get('#dashboardTreeViewt24').click()
              cy.wait(4000)
            })
          })
        })
    })
  })

  it('Ingreso de parámetros de búsqueda para el reporte: Solicitudes a la Dirección Jurídica', () => {
    //UNIDAD DE ASESORÍA EN CONTRATOS Y CONVENIOS - UNIDAD DE REPRESENTACIÓN Y DEFENSA JURÍDICA INSTITUCIONAL'
    cy.log('Se ingresa a la ventana para ingresar los parámetros')
    cy.get('iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body.ltr')
      cy
        .get($body).within(() => {
          cy.get('#dp218_ufecha_udaterange_u1_fromDate_fromDate_date').type('01/01/2023')
          cy.get('#dp218_ufecha_udaterange_u1_toDate_toDate_date').type('18/04/2023')
          cy.get('#218_uunidadDireccion_dipParameterDDList_d1')
            .select('UNIDAD DE ASESORÍA JURÍDICA INSTITUCIONAL')
            .should('have.value', 'UNIDAD DE ASESORÍA JURÍDICA INSTITUCIONAL')
        })
    })
    cy.get('[name="btnOk"]').click()
  })
})