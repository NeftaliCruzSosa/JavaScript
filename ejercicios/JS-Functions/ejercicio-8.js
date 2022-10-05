// Crea una función que nos devuelva el número de veces que se repite cada una
// de las palabras que lo conforma.

// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  let result = {};
  param.forEach((element) => {
    if (!result.hasOwnProperty(element)) {
      result[element] = 1;
    } else {
      result[element]++;
    }
  });
  return result;
}

repeatCounter(counterWords);
