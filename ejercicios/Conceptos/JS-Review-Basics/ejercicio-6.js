// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.

// Retorna el array resultante.

// Sugerencia de array:

const words = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

// function swap (arr, index1, index2) {
// 	let tmpWord = words[index1]; // Guardamos la palabra del primer indice
//   arr[index1] = arr[index2]; // Modificamos el valor del primer indice por la del segundo
//   arr[index2] = tmpWord; // Modificamos el valor del segundo indice por la palabra guardada como tmpWord
  
// }

const swap = (arr, i1, i2) => arr[i1] = arr.splice(i2, 1, arr[i1])[0]

swap(words, 0, 3)

console.log(words)