//SUNDAY YUSUF
//13TH MAY, 2025

var name = "Yusuf Sunday";
var age = 19;
var learnJavascript = true;

console.log(
  `Hi, my name is ${name}. I am ${age} years old. Am I learning JavaScript ${learnJavascript}`
);

/*
var holdingValue = "20";

var newholdingValue = Number(holdingValue);

var result = newholdingValue + 10;
console.log(result);
let num1 = prompt("Enter first number");
let num2 = prompt("Enter first number");
const operator = prompt("Enter Operator (+, -, *, /)");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") console.log(num1 - num2);
else if (operator === "*") console.log(num1 * num2);
else if (operator === "/") console.log(num1 / num2);
*/

//ASSIGNMENT TWO
/*var generateRandomNumber = Math.floor(Math.random() * 10) + 1;

while (true) {
  const userGuesses = parseInt(prompt("Choose a number from 1 to 10"));

  if (userGuesses === generateRandomNumber) {
    console.log("You have input the right number");
    console.log(`the number was ${generateRandomNumber}`);
    break;
  } else console.log("You got it wrong, try again");
}
*/

//ASSIGNMENT TWO

var generateRandomNumber = Math.floor(Math.random() * 10 + 1);
var attempt = 0;

for (attempt = 0; attempt < 10; attempt++) {
  const userGuess = parseInt(
    prompt("Please choose a number between 1 and 100")
  );
  if (userGuess === generateRandomNumber) {
    console.log(
      `You guess the right number:${generateRandomNumber} at ${attempt} attempts`
    );
  } else if (userGuess < generateRandomNumber) {
    console.log("Too Low! the guess number is higher than that");
  } else if (userGuess > generateRandomNumber) {
    console.log("Too High! the guess number is lower than that");
  } else if (userGuess === "q" || "Q") {
    console.log("You choose to end the game");
    break;
  }
  if (attempt === 9) {
    console.log(`Game Over the correct Number is ${generateRandomNumber}`);
  }
}

//ASSIGNMENT ONE
/*
let valueOne = prompt("Please Input the first value");
let valueTwo = prompt("Please Input the second value");
const operator = prompt("input an Operator (+,-,/,*)");

valueOne = parseFloat(valueOne);

valueTwo = parseFloat(valueTwo);

if (operator === "+") {
  console.log(valueOne + valueTwo);
} else if (operator === "-") {
  console.log(valueOne - valueTwo);
} else if (operator === "*") {
  console.log(valueOne * valueTwo);
} else if (operator === "/") {
  console.log(valueOne / valueTwo);
} else if (operator === "/" && valueTwo === 0) {
  console.log("The second  value is 0 and cannot be divisable");
} else if (operator !== "*" || "-" || "/" || "*") {
  console.log("Pleae input a valid operator");
}

*/

//ASSIGNMENT TWO

/*
while (true) {
  // Get first number or quit option
  let input1 = prompt("Enter the first number (or 'q' to quit):");
  if (input1 === "q" || input1 === "quit") {
    alert("Goodbye! Thanks for using the calculator.");
    break;
  }

  let num1 = parseFloat(input1);
  if (isNaN(num1)) {
    alert("Invalid number. Please try again.");
    continue;
  }

  // Get operator
  let operator = prompt("Enter an operator (+, -, *, /):");
  if (operator === "q" || operator === "quit") {
    alert("Goodbye! Thanks for using the calculator.");
    break;
  }

  if (!["+", "-", "*", "/"].includes(operator)) {
    alert("Invalid operator!");
    continue;
  }

  // Get second number or quit option
  let input2 = prompt("Enter the second number (or 'q' to quit):");
  if (input2 === "q" || input2 === "quit") {
    alert("Goodbye! Thanks for using the calculator.");
    break;
  }

  let num2 = parseFloat(input2);
  if (isNaN(num2)) {
    alert("Invalid number. Please try again.");
    continue;
  }

  // Prevent division by zero
  if (operator === "/" && num2 === 0) {
    alert("Cannot divide by zero.");
    continue;
  }

  // Perform calculation
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  // Show summary
  alert(`✅ Result of ${num1} ${operator} ${num2} is ${result}`);
}
*/

/*
function test() {
  let a = 10;
  if (true) {
    var b = 20;
    console.log(a);
    console.log(b);
  }

  console.log(b);
}
  */

//COUNTDOWN

/*
function countDown(number) {
  if (number < 0) {
    return;
  }

  console.log(number);

  countDown(number - 1);
}
countDown(10);
*/

var tasksToBeDone = prompt("Please input a day");

switch (tasksToBeDone.toLowerCase()) {
  case "monday":
    console.log("today is Monday ");
    break;

  case "tuesday":
    console.log("today is Tuesday ");
    break;

  case "wednesday":
    console.log("today is Wednesday ");
    break;
  case "thursday":
    console.log("today is Thursday ");
    break;
  case "friday":
    console.log("today is Friday ");
    break;

  case "saturday":
    console.log("today is Friday ");
    break;

  default:
    console.log("This is not a day of the week");
}
