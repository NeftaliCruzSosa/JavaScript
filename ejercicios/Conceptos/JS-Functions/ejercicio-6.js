// Crea una función que reciba por parámetro un array y compruebe si existen
// elementos duplicados, en caso que existan los elimina para retornar un array
// sin los elementos duplicados.

// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

function removeDuplicates(param) {
  // filter recibe una funcion y devuelve un nuevo array con todos los elementos que cumplan la condicion
	return param.filter(function(value, index){
    // value representa param[i] de un bucle for
    // index representa i de un bucle for
		return param.indexOf(value) === index
		});
}

console.log(removeDuplicates(duplicates))
