const comidas = ["pera", "manzana", "macarrones", "espaguettis"];

function getComida (posicion) {

    if (posicion < comidas.length) {

        console.log(comidas[posicion])
    
    } else {

        console.log("No tienes tantas comidas en la nevera")

    }
}

getComida(1);
getComida(0);
getComida(3);
getComida(5);
