// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.

// Retorna el array resultante.

// Sugerencia de array:

const words = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap (arr, index1, index2) {
	let tmpWord = words[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmpWord;
  
}

swap(words, 2, 3)

console.log(words)