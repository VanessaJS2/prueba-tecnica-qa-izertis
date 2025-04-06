const utils = require("../utils/constants") 
const { listSoldPets  } = require('../utils/petList');
const { nameCounter } = require('../utils/nameCounter');
describe('\u{1F436} Ejercicio 3 - Tratamiendo de datos en APIS', () => {
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
  it('\u{1F50D} Validacion mascotas vendidas ', () => {
    cy.find_by_status("pet/findByStatus",'sold').then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0);
      const mascotas = listSoldPets(response.body);
      cy.log(mascotas)
      mascotas.forEach(mascota => {
        cy.log(`Mascota vendida -> #${mascota.index} | ID: ${mascota.id}, Nombre: ${mascota.name}`);
      });

      const contador = new nameCounter(mascotas);
      const resultado = contador.contarRepetidos();
  
      console.log("\u{1F4C4} Resultado final:", resultado);
      cy.log("\u{1F4C4} Resultado final:" + JSON.stringify(resultado));
      
    })
  });

});

