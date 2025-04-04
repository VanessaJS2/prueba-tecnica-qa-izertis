const utils = require("../utils/constants") 

describe('\u{1F4F7} Ejercicio 2 - Acceder directamente a Wikipedia', () => {
  beforeEach("wikipedia",()=>{
    cy.visit(utils.PATH);
  })
  
  it('\u{1F50D} Verifica información del primer proceso automático en Wikipedia', () => {
    
    // Verificar que aparece el dato histórico esperado
    cy.contains(utils.WORD).should('exist');
    // Tomar screenshot
    cy.screenshot('pagina-wikipedia-automatizacion');

    cy.contains(utils.WORD)
  .scrollIntoView()
  .screenshot('parrafo-dato-historico');
  });
});

