
 
const numbers = document.querySelector('.num');
//const one = document.querySelector('#one');
const userInputDisplay = document.querySelector('#userinputdisplay');
const resultsDisplay = document.querySelector('#resultsdisplay');

userInputDisplay.textContext = ' ';
resultsDisplay.textContent = ' ';

//function to update the user input display
const updateUserInputDisplay = function(input){
  userInputDisplay.textContent += `${input}`;    
}

//add parentheses around current user input display
const surroundUserInputDisplay = function(){
    currentInputDisplay = userInputDisplay.textContent;
    userInputDisplay.textContent = `(${currentInputDisplay})`;
}

//function to update the results display
const updateResultsDisplay = function(input){
  resultsDisplay.textContent = input;    
}





//Setting defauls for variables
let operandA = '';
let operandB = '';
let operator = '';
let numValue = 0;
//var operandsArray = [];  

//Update the variables
const updateOperandA = function(value){
  operandA += String(value);
}

const updateOperandB = function(value){
  operandB += String(value);
}

//not sure this one is necessary
const updateOperator = function(value){
  operator = value;
}  


//random stuff
/* numbers.onclick = function(event) {
  let target = event.target;
  i = 1;
  if (event.target.className === 'num') {
  }} */






//making number buttons work

clear.onclick = function(){
  userInputDisplay.textContent = ''; 
  resultsDisplay.textContent = ''; 
  operandA = 0;
  operandB = '';
  operator = '';
  result = '';
}

zero.onclick = function(event) {
  updateUserInputDisplay(0);
  console.log(0);
  numValue = '0';
}

one.onclick = function(event) {
  updateUserInputDisplay(1);
  console.log(1);
  numValue = '1';
}

two.onclick = function(event) {
  updateUserInputDisplay(2);
  console.log(2);
  numValue = '2';
}

three.onclick = function(event) {
  updateUserInputDisplay(3);
  console.log(3);
  numValue = '3';
}

four.onclick = function(event) {
  updateUserInputDisplay(4);
  console.log(4);
  numValue = '4';
}

five.onclick = function(event) {
  updateUserInputDisplay(5);
  console.log(5);
  numValue = '5';
}

six.onclick = function(event) {
  updateUserInputDisplay(6);
  console.log(6);
  numValue = '6';
}

seven.onclick = function(event) {
  updateUserInputDisplay(7);
  console.log(7);
  numValue = '7';
}

eight.onclick = function(event) {
  updateUserInputDisplay(8);
  console.log(8);
  numValue = '8';
}

nine.onclick = function(event) {
  updateUserInputDisplay(9);
  console.log(9);
  numValue = '9';
}

decimal.onclick = function(event) {
  updateUserInputDisplay('.');
  console.log('.');
  numValue = '.';
}

//operator buttons

plus.onclick = function(event) {
  updateUserInputDisplay(' + ');
  console.log('+');
  operatorValue = 'add';
}

minus.onclick = function(event) {
  updateUserInputDisplay(' - ');
  console.log('-');
  operatorValue = 'subtract';
}

times.onclick = function(event) {
  updateUserInputDisplay(' * ');
  console.log('*');
  operatorValue = 'multiply';
}

divided.onclick = function(event) {
  updateUserInputDisplay(' / ');
  console.log('/');
  operatorValue = 'divide';
}

percent.onclick = function(event) {
  updateUserInputDisplay('%');
  console.log('%');
  operatorValue = '%';
}


//operations


const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((previous,current) => {
    return previous + current;
  }, 0);
  }

const multiply = function(arr) {
  return arr.reduce((previous,current) => {
    return previous * current;
  });
  }

  const divide = function(arr) {
    return arr.reduce((previous,current) => {
      return previous / current;
    });
    }

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {

  if (a < 0) {
    return "ERROR";
  } else if (a===0) {
    return 1;
  } else {

    for (let i =a-1;i>0;i--) {
    a *= i;
    }
    return a;

  }
};


//Performs the operations
const operate = function(operation,a,b){
  let answer = '';
  if (operation == subtract || operation == add){
  answer = operation(Number(a),Number(b));
  } else if (operation == sum || operation == divide || operation == multiply){
    answer = operation([Number(a),Number(b)]);
  }
return Number(answer);
  } 





//THE FUNCTION
calccontainer.addEventListener("click", function(event) {

//variable for which button was clicked
let target = event.target;
console.log(`${target.id} was clicked`);

//if button clicked is a number, and there is no operator yet
//concat number value to operandA
if (event.target.className === 'num button' && !operator == true){
updateOperandA(numValue);
console.log(`The first number is now ${operandA}`);

//if button clicked is an operator, save to operator variable
} else if (event.target.className === 'operatorbtn button'){
operator = operatorValue;
console.log(`The operator is ${operatorValue}`);

//if operator already saved, and button clickd is a number,
//concat number to operandB
} else if (event.target.className === 'num button' && (operator)){
updateOperandB(numValue);
console.log(`The second number is now ${operandB}`);

//if equals button is clicked, run operate function
//using operandA, operandB, and the operator
//send the result to the result display
} else if (event.target.id === 'equals'){
  let result = '';

    if (operatorValue === 'add') {
      result = Number(operate(sum,operandA,operandB));
    } else if (operatorValue === 'subtract') {
      result = Number(operate(subtract,operandA,operandB));
    } else if (operatorValue === 'multiply') {
      result = Number(operate(multiply,operandA,operandB));
    } else if (operatorValue === 'divide') {
      result = Number(operate(divide,operandA,operandB));
    }
  console.log(`The result is ${result}`);
  updateResultsDisplay(Number(result.toFixed(16)));
  operandA = result;
  operandB = '';
  operator = '';
  //experiment to add parentheses around current user input display
  surroundUserInputDisplay();
  return;


  //I think I need some kind of for loop for putting the result in operandA for the next operation
//resultsDisplay.textContext = `The result is ${result}`;
//} else if (event.target.className === 'num button' && (result)){ }
}
});






// Do not edit below this line
/* module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
 */