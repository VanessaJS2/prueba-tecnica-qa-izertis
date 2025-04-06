class nameCounter {
    constructor(mascotas) {
      this.mascotas = mascotas;
    }
  
    contarRepetidos() {
      const conteo = {};
  
      this.mascotas.forEach(({ name }) => {
        conteo[name] = (conteo[name] || 0) + 1;
      });
  
      console.log(" Recuento de nombres de mascotas:", conteo);
      return conteo;
    }
  }
  
  module.exports = { nameCounter };
  