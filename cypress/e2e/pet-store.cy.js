const utils = require("../utils/constants") 

describe('\u{1F4F7} Ejercicio 3 - Tratamiendo de datos en APIS', () => {
  before("Api Create",()=>{
  cy.create_user("user",'Vane').then(response => {
    expect(response.status).to.eq(200)
  })
  })

  it('\u{1F50D} Validacion de Usuario', () => {
    cy.validate_user("user",'Vane').then(response => {
      expect(response.status).to.eq(200)
    })
  });
  it('\u{1F50D} Validacion mascotas vendidas', () => {
    cy.find_by_status("pet/findByStatus",'sold').then(response => {
      expect(response.status).to.eq(200)
    })
  });

});

