let operator = document.querySelector("#operator");
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let lastOperation = document.querySelector(".last-operation");

let num0$$ = document.querySelector("#num0");
let num1$$ = document.querySelector("#num1");
let num2$$ = document.querySelector("#num2");
let num3$$ = document.querySelector("#num3");
let num4$$ = document.querySelector("#num4");
let num5$$ = document.querySelector("#num5");
let num6$$ = document.querySelector("#num6");
let num7$$ = document.querySelector("#num7");
let num8$$ = document.querySelector("#num8");
let num9$$ = document.querySelector("#num9");
let comma$$ = document.querySelector("#comma");
let division$$ = document.querySelector("#division");
let mul$$ = document.querySelector("#mul");
let sub$$ = document.querySelector("#sub");
let add$$ = document.querySelector("#add");
let backspace$$ = document.querySelector("#backspace");
let equal$$ = document.querySelector("#equal");

backspace$$.addEventListener("click", function () {
  if (secondNumber.innerText !== "") {
    let temp = secondNumber.innerText;
    secondNumber.innerText = temp.substring(0, temp.length - 1);
  } else if (operator.innerText !== "") {
    operator.innerText = "";
  } else {
    let temp = firstNumber.innerText;
    firstNumber.innerText = temp.substring(0, temp.length - 1);
  }
});

function addNumber(num) {
  operator.innerText === "" ? (firstNumber.innerText += num) : (secondNumber.innerText += num);
}

num0$$.addEventListener("click", () => addNumber("0"));
num1$$.addEventListener("click", () => addNumber("1"));
num2$$.addEventListener("click", () => addNumber("2"));
num3$$.addEventListener("click", () => addNumber("3"));
num4$$.addEventListener("click", () => addNumber("4"));
num5$$.addEventListener("click", () => addNumber("5"));
num6$$.addEventListener("click", () => addNumber("6"));
num7$$.addEventListener("click", () => addNumber("7"));
num8$$.addEventListener("click", () => addNumber("8"));
num9$$.addEventListener("click", () => addNumber("9"));

comma$$.addEventListener("click", function () {
  if (operator.innerText === "" && !firstNumber.innerText.includes(".")) {
    firstNumber.innerText += ".";
  } else if (operator.innerText !== "" && !secondNumber.innerText.includes(".")) {
    secondNumber.innerText += ".";
  }
});

function operation(op) {
    secondNumber.innerText === "" ? (operator.innerText = op) : result(op);
}

division$$.addEventListener("click", () => operation("/"));
mul$$.addEventListener("click", () => operation("*"));
sub$$.addEventListener("click", () => operation("-"));
add$$.addEventListener("click", () => operation("+"));

equal$$.addEventListener("click", function () {
  if (firstNumber.innerText !== "" && secondNumber.innerText !== "" && operator.innerText !== "") {
    result();
  }
});

function result(sign = "") {
  let temp = firstNumber.innerText + operator.innerText + secondNumber.innerText;
  lastOperation.innerText = temp;

  firstNumber.innerText = eval(temp);

  secondNumber.innerText = "";
  operator.innerText = sign;
}