// Usa un bucle for...of para recorrer todos los juguetes y elimina
// los que incluyan la palabra gato.
// Recuerda que puedes usar la función .includes() para comprobarlo.
// Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 40, name: "El gato con Guantes" },
  { id: 11, name: "Action Woman" },
  { id: 40, name: "El gato con Guantes" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

function deleteIfIncludes(arr, word) {
  const numbers = [];

  for (const element of arr) {
    
    if (element.name.includes(word)) {
      numbers.push(arr.indexOf(element));
    }
  }

  for (const index of numbers) {
    const i = numbers.indexOf(index);
    toys.splice(index - i, 1);
  }

  console.log(arr);
}

deleteIfIncludes(toys, "gato");
