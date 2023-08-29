let num1 = "0";
let num2 = null;
let isNum1 = true;
let isFirstOperator = true;
let operator = null;
let displayString = "0";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const acButton = document.querySelector(".acButton");
const equalsButton = document.querySelector(".equalsButton");

function add(a, b) {
  return (a * 1) + (b * 1);
}
function subtract(a, b) {
  return (a * 1) - (b * 1);
}
function multiply(a, b) {
  return (a * 1) * (b * 1);
}
function divide(a, b) {
  if (b === "0") {
    clearAll();
    alert("Cannot divide by zero!");
    return "0";
  } else {
    return (a * 1) / (b * 1);
  }
}

function operate() {
  let result = "0";
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case 'x':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
  }
  num1 = result.toString();
  return result.toString();
}

function updateDisplay(newString) {
  if (newString.length > 8) {
    newString = Number.parseFloat(newString * 1).toExponential(3).toString();
  }
  display.innerText = newString;
}

acButton.addEventListener('click', clearAll);

function clearAll() {
  num1 = "0";
  num2 = null;
  isNum1 = true;
  isFirstOperator = true;
  operator = null;
  displayString = "0";
  updateDisplay(displayString);
}

numberButtons.forEach(button => {
  let numberToDisplay;
  button.addEventListener('click', () => {
    if (isNum1) {
      num1 = num1 === "0" ? button.innerText : num1 + button.innerText;
      numberToDisplay = num1;
    } else {
      num2 = num2 === "0" || num2 === null ? button.innerText : num2 + button.innerText;
      numberToDisplay = num2;
    }
    updateDisplay(numberToDisplay);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (isFirstOperator) {
      operator = button.innerText;
      isNum1 = false;
      isFirstOperator = false;
    } else {
      if (num2) {
        numberToDisplay = operate();
        updateDisplay(numberToDisplay);
        num2 = null;
      }
      operator = button.innerText;
    }
  });
});

equalsButton.addEventListener('click', function () {
  if (!isNum1 && num2 !== null && operator !== null) {
    displayString = operate();
    updateDisplay(displayString);
    num2 = "0";
    operator = null;
    isNum1 = true;
    isFirstOperator = true;
  }
});

// Extra credit
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though.


// Add a “backspace” button, so the user can undo if they click the wrong number.


// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
