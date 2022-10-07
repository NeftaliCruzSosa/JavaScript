// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade
// la propiedad ***isApproved*** a true o false en consecuencia.
// Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

function approved(param) {
    // Recorremos el array
      for (let i = 0; i < param.length; i++){
      // Pasamos cada objeto como parametro a la funcion repeatCounter y guardamos el resultado en la constante count
      const count = repeatCounter(Object.values(param[i]))
      // Si count es mayor o igual a 2 añadimos la propiedad isApproved con el valor true
      if (count >= 2) {
        param[i].isApproved = true;
      }
      // Si count no es mayor o igual a 2 añadimos la propiedad isApproved con el valor false
      else { param[i].isApproved = false;}
    }
  }
  
  approved(alumns)
  console.log(alumns)
  
  function repeatCounter(param) {
    // Declaramos una variable counter que contara las veces que se repite true en un array
    let counter = 0;
    // Recorremos cada valor del array
    param.forEach((element) => {
      // Comprobamos si el valor es igual a true y si lo es aumentamos el contador en uno
      if (element === true) {
        counter ++;
      }
    });
    // Devolvemos el valor de counter
    return counter;
  }