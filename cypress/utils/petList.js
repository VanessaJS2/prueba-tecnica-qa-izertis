function listSoldPets(pets) {
    const resultado = pets.map((pet,index) => ({
      index,
      id: pet.id,
      name: pet.name
    }));
  
    console.log(" Mascotas vendidas (id, name):", resultado);
    return resultado;
  }
  
  module.exports = { listSoldPets };
  