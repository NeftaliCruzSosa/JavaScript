let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

const tablero$$ = document.querySelector(".grid");
const score$$ = document.querySelector(".score");
const attempts$$ = document.querySelector(".attempts");

let carta1 = "";
let carta2 = "";

function darVuelta(card, img$$) {
    if (img$$.src.includes("tick")) {
    
  } else {
    img$$.setAttribute("src", card.img);

    img$$.className = "cartaRoja";

    let score = parseInt(score$$.textContent);

    // algo ocurre mal -> no hemos hecho un punto
    let attempts = parseInt(attempts$$.textContent);
    
    
    // let score = parseInt(score$$.textContent);
    
    if (carta1 !== "") {
        carta2 = card;
    } else {
        carta1 = card;
    }
    
    if (carta1 !== "" && carta2 !== "") {
        attempts++;
        let temporizador;
        
        let tmpCarta1 = document.querySelector(`[id="${carta1.id}"]`);
        let tmpCarta2 = document.querySelector(`[id="${carta2.id}"]`);
        
        console.log(tmpCarta1);
        console.log(tmpCarta2);
        
        if (tmpCarta1.src === tmpCarta2.src) {
            
            score++;
            temporizador = setTimeout(() => {
            tmpCarta1.src = "public/exercise-1/tick.svg";
            tmpCarta2.src = "public/exercise-1/tick.svg";
        }, 1000);
        
    } else {
        
        temporizador = setTimeout(() => {
            tmpCarta1.src = "public/exercise-1/universe.svg";
            tmpCarta2.src = "public/exercise-1/universe.svg";
        }, 1000);
        
    }
    
    tmpCarta1.className = "carta";
    tmpCarta2.className = "carta";
    
    carta1 = "";
    carta2 = "";
    
    score$$.textContent = score;
    attempts$$.textContent = attempts;
}
}
}

function notEqual(tmpCarta1, tmpCarta2) {}

for (const card of cardArray) {
    let temporizador;
  const img$$ = document.createElement("img");

  img$$.setAttribute("src", "public/exercise-1/universe.svg");
  img$$.setAttribute("id", card.id);
  img$$.setAttribute("done", "false");

  // cambiamos la clase a la imagen
  img$$.className = "carta";

  img$$.addEventListener("click", () => darVuelta(card, img$$));

  tablero$$.appendChild(img$$);
}
