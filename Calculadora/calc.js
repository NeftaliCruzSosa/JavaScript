let operator = document.querySelector("#operator")
let firstNumber = document.querySelector("#firstNumber")
let secondNumber = document.querySelector("#secondNumber")
let lastOperation = document.querySelector(".last-operation")



let num0$$ = document.querySelector("#num0")
let num1$$ = document.querySelector("#num1")
let num2$$ = document.querySelector("#num2")
let num3$$ = document.querySelector("#num3")
let num4$$ = document.querySelector("#num4")
let num5$$ = document.querySelector("#num5")
let num6$$ = document.querySelector("#num6")
let num7$$ = document.querySelector("#num7")
let num8$$ = document.querySelector("#num8")
let num9$$ = document.querySelector("#num9")
let comma$$ = document.querySelector("#comma")
let division$$ = document.querySelector("#division")
let mul$$ = document.querySelector("#mul")
let sub$$ = document.querySelector("#sub")
let add$$ = document.querySelector("#add")
let backspace$$ = document.querySelector("#backspace")
let equal$$ = document.querySelector("#equal")

backspace$$.addEventListener("click", function() {
    if (secondNumber.innerText !== "") {
        let temp = secondNumber.innerText;
        secondNumber.innerText = temp.substring(0, temp.length-1);
    } else if (operator.innerText !== "") {
        operator.innerText = ""
    } else {
        let temp = firstNumber.innerText;
        firstNumber.innerText = temp.substring(0, temp.length-1);
    }
    })


num0$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 0 : secondNumber.innerText += 0;})
num1$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 1 : secondNumber.innerText += 1;})
num2$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 2 : secondNumber.innerText += 2;})
num3$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 3 : secondNumber.innerText += 3;})
num4$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 4 : secondNumber.innerText += 4;})
num5$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 5 : secondNumber.innerText += 5;})
num6$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 6 : secondNumber.innerText += 6;})
num7$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 7 : secondNumber.innerText += 7;})
num8$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 8 : secondNumber.innerText += 8;})
num9$$.addEventListener("click", function() { operator.innerText === "" ? firstNumber.innerText += 9 : secondNumber.innerText += 9;})

comma$$.addEventListener("click", function() {
    if (operator.innerText === "" && !firstNumber.innerText.includes(".")){
        firstNumber.innerText += ".";
    } else if (operator.innerText !== "" && !secondNumber.innerText.includes(".")){
        secondNumber.innerText += ".";
    }
})

division$$.addEventListener("click", function() { secondNumber.innerText === "" ? operator.innerText = "/" : result("/");})
mul$$.addEventListener("click", function() { secondNumber.innerText === "" ? operator.innerText = "*" : result("*");})
sub$$.addEventListener("click", function() { secondNumber.innerText === "" ? operator.innerText = "-" : result("-");})
add$$.addEventListener("click", function() { secondNumber.innerText === "" ? operator.innerText = "+" : result("+");})
equal$$.addEventListener("click", function() { if (firstNumber.innerText !== "" && secondNumber.innerText !== "" && operator.innerText !== ""){result()} })

function muestraAlerta(evento) {
    alert("Evento onclick ejecutado!");
  }

function result(sign = "") {
    let temp = firstNumber.innerText + operator.innerText + secondNumber.innerText
    lastOperation.innerText = temp;
    let a = parseFloat(firstNumber.innerText);
    let b = parseFloat(secondNumber.innerText);

    if (operator.innerText == "/"){
        firstNumber.innerText = ((a/b).toString());
    } else if (operator.innerText == "*"){
        firstNumber.innerText = ((a*b).toString());
    } else if (operator.innerText == "+"){
        firstNumber.innerText = ((a+b).toString());
    } else if (operator.innerText == "-"){
        firstNumber.innerText = ((a-b).toString());
    }

    secondNumber.innerText = ""
    operator.innerText = sign
}