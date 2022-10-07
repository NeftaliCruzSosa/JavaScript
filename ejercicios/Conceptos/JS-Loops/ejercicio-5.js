// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos
// que tengan el id 11 y 40.
// Imprime en un console log el array.
// Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

// Recorremos cada elemento del array
for (let i = 0; i < placesToTravel.length; i++) {
  // Para cada elemento (en este caso son objetos) comprobamos el valor de cada propiedad
  if (
    Object.values(placesToTravel[i]).includes(11) || // Si los valores del objeto incluyen 11 o 40
    Object.values(placesToTravel[i]).includes(40)
  ) {
    placesToTravel.splice(i, 1); // Eliminamos el elemento del array
  }
}

// Imprimimos en consola de nuevo el array
console.log(placesToTravel);
