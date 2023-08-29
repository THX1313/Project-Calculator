

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
  a = a * 1;
  b = b * 1;
	return a + b;
}
function subtract(a, b) {
  a = a * 1;
  b = b * 1;
	return a - b;
}
function multiply(a, b) {
  a = a * 1;
  b = b * 1;
  return a * b;
}
function divide(a, b) {
  if (b === "0") {
    clearAll();
    alert("Cannot divide by zero!");
    return "0";
  } else {
    a = a * 1;
    b = b * 1;
    return a / b;
  }
}

function operate() {
  let result;
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
    case null:
      result = 'Variable, operator, is equal to null';
      console.log('Variable, operator, is equal to null')
      break;
    default:
      result = 'Error in operate()';
      console.log('Error in operate()');
  }
  num1 = result;
  return result;
}

function updateDisplayAndNumbers(newString) {
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
  updateDisplayAndNumbers(displayString);
}

numberButtons.forEach(button => {
  let numberToDisplay;
  button.addEventListener('click', () => {
    console.log(`Button "${button.innerText}" was clicked.`);
    if (isNum1) {
      if (num1 === "0") {
        console.log(`button.innerText is ${button.innerText}`);
        num1 = button.innerText;
              console.log(`num1 is now ${num1}`);
      } else {
        num1 = num1 + button.innerText;
      }
      console.log(`num1 is now ${num1}`);
      numberToDisplay = num1;
    } else {
        if (num2 === "0" || num2 === null) {
          console.log(`button.innerText is ${button.innerText}`);
          num2 = button.innerText;
                console.log(`num2 is now ${num2}`);
        } else {
          num2 = num2 + button.innerText;
        }
        console.log(`num2 is now ${num2}`);
        numberToDisplay = num2;
    }
    console.log(`The number to display is ${numberToDisplay}`);
    updateDisplayAndNumbers(numberToDisplay);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Button "${button.innerText}" was clicked.`);
    if (isFirstOperator) {
      operator = button.innerText;
      isNum1 = false;
      isFirstOperator = false;
    } else {
      if (num2) {
        numberToDisplay = operate();
        updateDisplayAndNumbers(numberToDisplay);
        num2 = null;
        operator = button.innerText;
      } else {
        operator = button.innerText;
        }
    }
    operator = button.innerText;
  });
});

//   Pressing = before entering all of the numbers or an operator could cause problems!
equalsButton.addEventListener('click', function () {
  if (!isNum1 && num2 !== null && operator !== null) {
    displayString = operate();
    updateDisplayAndNumbers(displayString);
    num2 = "0";
    operator = null;
    isNum1 = true;
    isFirstOperator = true;
  }
});

// You should round answers with long decimals so that they don’t overflow the screen.

// Extra credit
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though.


// Add a “backspace” button, so the user can undo if they click the wrong number.


// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
