const perchas = [
    'La corbata de la boda de mi primo el pesado',
    'La camiseta que nunca me pongo',
    'El pantalón del 95 que ya no me entra porque he engordado',
    'La camiseta de ese grupo que ya no escucho',
    'Unos zapatos que no deberían estar colgados',
    'El calcetín soltero desde hace años con tinder',
    'La chaqueta que tenia que devolver y perdí el ticket',
    'La chaqueta de cuero de Sons of Anarchy',
];

const numeros = [
    '1',
    '2',
    '3',
    '4',
    '5',
]

// <------------------ METODOS QUE MODIFICAN EL ARRAY ------------------>


//! Pop elimina el último elemento
//* Devuelve el elemento eliminado
// let eliminado = perchas.pop();
// console.log(eliminado);
// console.log(perchas);

//! Push añade elementos al final
// perchas.push("elemento1", "elemento2", ...);
// console.log(perchas);

//! Reverse invierte el orden
// perchas.reverse();
// console.log(perchas);

//! Shift extrae el primer elemento
//* Devuelve elementos eliminados del array
// let a = perchas.shift();
// console.log(perchas);
// console.log(a);

//! UnShift añade elementos al principio
// perchas.unshift("elemento1", "elemento2", ...)
// console.log(perchas);

//! Sort ordena de menor a mayor basado en UNICODE
//* Para ordenar números hay que añadir una función de comparación
//* Menor a Mayor -- sort(function(a, b){return a - b;})
//* Mayor a Menor -- sort(function(a, b){return b - a;})
// perchas.sort()
// console.log(perchas)


//! Splice elimina elementos -- Permite añadir elementos desde el indice que le indiquemos
//* Splice (Indice, Cantidad de elementos a eliminar, items a añadir 1, items a añadir 2...)
//* Devuelve elementos eliminados del array
// let silla = perchas.splice(0, 3, 'test', 'test2', 'test3', 'test4');
// console.log(perchas);
// console.log(silla);


// <------------------ METODOS QUE MODIFICAN EL ARRAY ------------------>


//! Concat concatena "suma" arrays
//* Devuelve un nuevo array con los elementos de todos los arrays
// const concatenado = perchas.concat(numeros);
// console.log(concatenado);

//! Join devuelve un string con los elementos de un array
//* Admite un parametro como separador
// const a = perchas.join("");
// const b = perchas.join(", ");
// console.log(a);
// console.log(b);

//! IndexOf localiza parametros en un array
//* Devuelve el indice, la primera vez que aparece
// perchas.indexOf("La camiseta que nunca me pongo")

//! LastIndexOf localiza parametros en un array
//* Devuelve el indice, la ultima vez que aparece
// perchas.lastIndexOf("La camiseta que nunca me pongo")

//! Slice corta una parte del array
//* Devuelve desde el indice (primer parámetro) hasta el indice (segundo parámetro) no incluido
// let a = perchas.slice(2, 4);
// console.log(a);

//! ToString devuelve un string a partir de un array
//* Separa cada elemento con una coma
// let a = perchas.toString();
// console.log(a);

//! Includes comprueba si en un array existe un valor
//* Devuelve True o False
// let a = perchas.includes("zapatos");
// console.log(a);