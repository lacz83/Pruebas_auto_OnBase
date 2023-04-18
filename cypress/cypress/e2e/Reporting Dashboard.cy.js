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

    //Ingresar a Reporting Dashboard
    cy.log('Se ingresa a Reporting Dashboard')
    cy.get('#NavPanelIFrame').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('div.formBlock.panel').within(() => {
            cy.get('.js-dashboardTreePanelContent.panelContent.isScrolling').within(() => {
              cy.get('#dashboardTreeViewn2').click()
            })
          })
        })
    })
  })

  it('Ingreso al reporte - Elaboración y aprobación documentos', () => {
    cy.log('Se ingresa al reporte - Elaboración y aprobación documentos')
    cy.get('#NavPanelIFrame').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('div.formBlock.panel').within(() => {
            cy.get('.js-dashboardTreePanelContent.panelContent.isScrolling').within(() => {
              cy.get('#dashboardTreeViewt5').click()
              cy.wait(4000)
            })
          })
        })
    })

    cy.log('Se ingresa a la ventana para ingresar los parámetros')
    cy.get('iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body.ltr')
      cy
        .get($body).within(() => {
          const fecha = new Date();
          const fechaActual = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
          cy.get('#dp216_ukeyword228_udaterange_u1_fromDate_fromDate_date').type('01/01/2023')
          cy.get('#dp216_ukeyword228_udaterange_u1_toDate_toDate_date').type(fechaActual)
        })
    })
    cy.get('[name="btnOk"]').click()

    cy.wait(8000)
    cy.get('.flexResizeGrip.noDrag').dblclick()
    cy.get('#frmViewer').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('#itemVieweriFrame').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy
              .get($body).within(() => {
                cy.get('.dx-datagrid-headers.dx-datagrid-nowrap').within(() => {
                  cy.get('tr.dx-row.dx-column-lines.dx-header-row').within(() => {
                    cy.get('div.dx-datagrid-text-content.dx-text-content-alignment-left').contains('Fecha de elaboración').click()
                  })
                })
                cy.get('.dx-datagrid-rowsview.dx-datagrid-nowrap.dx-scrollable.dx-scrollable-customizable-scrollbars.'
                  + 'dx-scrollable-both.dx-scrollable-simulated.dx-visibility-change-handler').within(() => {
                    //cy.get('tr').first().dblclick()
                  })
              })
          })
          cy.log('Se exporta archivo Excel con los metadatos del reporte')
          cy.get('#exportButton').click()
        })
    })
    cy.log('Se crea/edita archivo .txt en la ruta dada')
    cy.writeFile('cypress/Archivos creados/reporteElaboraciónComunicaciones.txt', '¡Espero hayas disfrutado el reporte Elaboración y aprobación documentos!')
    cy.wait(3000)
  })

  it('Ingreso al reporte - Solicitudes a la Dirección Jurídica', () => {
    //UNIDAD DE ASESORÍA EN CONTRATOS Y CONVENIOS - UNIDAD DE REPRESENTACIÓN Y DEFENSA JURÍDICA INSTITUCIONAL'

    cy.log('Se ingresa a la categoría y reporte - Solicitudes a la Dirección Jurídica')
    cy.get('#NavPanelIFrame').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('div.formBlock.panel').within(() => {
            cy.get('.js-dashboardTreePanelContent.panelContent.isScrolling').within(() => {
              cy.get('#dashboardTreeViewn20').click()
              cy.get('#dashboardTreeViewt24').click()
              cy.wait(4000)
            })
          })
        })
    })

    cy.log('Se ingresa a la ventana para ingresar los parámetros')
    cy.get('iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body.ltr')
      cy
        .get($body).within(() => {
          const fecha = new Date();
          const fechaActual = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
          cy.get('#dp218_ufecha_udaterange_u1_fromDate_fromDate_date').type('01/01/2023')
          cy.get('#dp218_ufecha_udaterange_u1_toDate_toDate_date').type(fechaActual)
          cy.get('#218_uunidadDireccion_dipParameterDDList_d1')
            .select('UNIDAD DE ASESORÍA JURÍDICA INSTITUCIONAL')
            .should('have.value', 'UNIDAD DE ASESORÍA JURÍDICA INSTITUCIONAL')
        })
    })
    cy.get('[name="btnOk"]').click()

    cy.wait(8000)
    cy.get('.flexResizeGrip.noDrag').dblclick()
    cy.get('#frmViewer').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy
        .get($body).within(() => {
          cy.get('#itemVieweriFrame').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy
              .get($body).within(() => {
                cy.contains('Todo').click()
                cy.wait(1000)
                cy.contains('Todo').click()
                cy.get('.dx-datagrid-headers.dx-datagrid-nowrap').within(() => {
                  cy.get('tr.dx-row.dx-column-lines.dx-header-row').within(() => {
                    cy.get('div.dx-datagrid-text-content.dx-text-content-alignment-left').contains('Número de radicado').click()
                  })
                })
                cy.get('.dx-datagrid-rowsview.dx-datagrid-nowrap.dx-scrollable.dx-scrollable-customizable-scrollbars.'
                  + 'dx-scrollable-both.dx-scrollable-simulated.dx-visibility-change-handler').within(() => {
                    cy.get('tr').first().dblclick()
                  })
              })
          })
          cy.log('Se exporta archivo Excel con los metadatos del reporte')
          cy.get('#exportButton').click()
        })
    })
    cy.log('Se crea/edita archivo .txt en la ruta dada')
    cy.writeFile('cypress/Archivos creados/reporteAsesoríaJurídica.txt', '¡Espero hayas disfrutado el reporte Solicitudes a la Dirección Jurídica!')
  })
})