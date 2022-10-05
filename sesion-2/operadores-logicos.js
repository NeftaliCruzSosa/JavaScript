const tengoPortatil = true;
const tengoOrdenadorDeMesa = false;
const soyProgramador = true;

const puedoSerFreelance = (tengoOrdenadorDeMesa || tengoPortatil) && soyProgramador;
console.log('Puedo ser freelance: ', puedoSerFreelance)

// if (tengoOrdenadorDeMesa && tengoPortatil) {
//     console.log('UEEEE!! 🙌 PUEDO SER FREELANCE');
// } else {
//     console.log('NO PUEDO SER PROGRAMADOR FREELANCE');
// }

if (!soyProgramador) {
    console.log('NO ERES PROGRAMADOR... ESPERO QUE TAMPOCO SEAS DE UX 😏');
} else {
    console.log('VAS POR EL BUEN CAMINO JÓVEN JEDI');
}
