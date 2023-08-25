// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
let num1 = "0";
let num2 = 0;
let isNum1 = true;
let operator;
let lastKeyPressed = "0";
let displayString = "0";

const display = document.querySelector(".display");
const numberButtonList = document.querySelectorAll(".numberButton");
const operatorButtonList = document.querySelectorAll(".operatorButton");
const ACButton = document.querySelector(".ACButton");
const equalsButton = document.querySelector(".equalsButton");



//You’ll need to build your own functions to evaluate expressions as part of this calculator project, don't use   the tantalizing eval() function. On the same note, when researching how to calculate expressions for this project, you may encounter solutions that suggest that you return a new Function() that evaluates a string. Don't do it due to potential pitfalls of evaluating insecure data.
function add (a,b) {
	return a + b;
}
function subtract (a,b) {
	return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}
// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate() {
  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = 'Error in operate()';
      console.log('Error in operate()');
  }
  return result;
}
// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// You’ll need to store the first number and second number that are input into the calculator

function updateDisplay(newString) {
  if (newString === "AC") {
    displayString = "0";
    display.innerText = displayString;
    num1 = displayString;
    num2 = displayString;

    
  } else if (displayString === "0") {
      displayString = newString;
      display.innerText = displayString;
      num1 = displayString;
    
  } else {
      displayString = displayString + newString;
      display.innerText = displayString;
    
      if (isNum1) {
              num1 = displayString;
      } else {
              num2 = displayString;
      }
  }
}

#AC, .numberButton calls updateDisplay();

#add, subtract, multiply, divide call operator() and change isNum1 = !isNum1;

// Store the operator that the user selects, and then 

// operate() on the two numbers when the user presses the “=” key.
// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

#equals (or second operator button before clear) calls operate(); and updateDisplay(); also sets calculated value onto num1 but leaves operator and num2 vars intact.

second operator button, before equals or AC) calls operate(); and updateDisplay(); also sets calculated value onto num1 and updates operator and clears num2 vars so that new value can be input.



// This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

// Gotchas: watch out for and fix these bugs if they show up in your code:

// Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42.


// You should round answers with long decimals so that they don’t overflow the screen.

// Pressing = before entering all of the numbers or an operator could cause problems!

// Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”

// Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

// Extra credit
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though.


// Add a “backspace” button, so the user can undo if they click the wrong number.


// Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
