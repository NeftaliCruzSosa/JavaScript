// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=michael")
  .then((person) => person.json())
  .then((person) => console.log(person));

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

// const consoleData = (name) =>{
//     fetch('https://api.nationalize.io?name=' + name)
//     .then((person) => person.json())
//     .then((person) => console.log(person))
// }

// button$$.addEventListener('click', () => consoleData(input$$.value))

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const pData = (name) => {
  const p$$ = document.createElement("p");
  p$$.textContent = `El nombre ${input$$.value} `;

  fetch("https://api.nationalize.io?name=" + name)
    .then((person) => person.json())
    .then((person) => {

      for (const country of person.country) {
        countryP$$ = document.createElement("p");       
        countryP$$.textContent += `tiene un ${(country.probability * 100).toFixed(2)} porciento de ser de ${
            country.country_id
          }`;

          p$$.appendChild(countryP$$)

      }
    });
    deleteButton$$ = document.createElement("button");
          deleteButton$$.textContent = ("X")
          deleteButton$$.addEventListener('click', () => p$$.remove())
          p$$.appendChild(deleteButton$$)
    
    document.body.appendChild(p$$);
};

button$$.addEventListener("click", () => pData(input$$.value));

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.
