
 
const numbers = document.querySelector('.num');
const userInputDisplay = document.querySelector('#userinputdisplay');
const resultsDisplay = document.querySelector('#resultsdisplay');

const dotDotDot = '... ';


//function to update the user input display
const updateUserInputDisplay = function(input){
    userInputDisplay.textContent += `${input}`;    
}



//


//THIS DOES NOT WORK
//if user input gets too long start from 4 characters in and add ... to the beginning
/* 
const updateUserInputDisplay = function(input){
    
    currentInputDisplay = userInputDisplay.textContent;   

console.log(currentInputDisplay.length);
    if (currentInputDisplay.length < 30) {
        console.log('user display is short enough')
        userInputDisplay.textContent += `${input}`; 
    } else {
        console.log('user display is too long')
        //THIS PART DOES NOT WORK YET
        userInputDisplay.textContent = dotDotDot + currentInputDisplay.substring(3);
    }}
     */



//function to add parentheses around current user input display
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
let operatorValue = '';
let numValue = 0;
let equalsCheck = 0;
//let percentCheck = 0;
let percentValue = '';

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


//BUTTONS

//AC button clears all variables and displays
clear.onclick = function(){
  userInputDisplay.textContent = ''; 
  resultsDisplay.textContent = ''; 
  operandA = 0;
  operandB = '';
  operator = '';
  result = '';
}

//Number buttons
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
    if (userInputDisplay.textContent.includes('.') !== true){
  updateUserInputDisplay('.');
  console.log('.');
  numValue = '.';
    } else {
        return;
    }
}

//OPERATOR BUTTONS
//need to add something so if operatorValue already exists, don't do anything


//Plus button - using add instead of sum for now
plus.onclick = function(event) {

    if ((operandB)){
        surroundUserInputDisplay(); 
        updateUserInputDisplay(' + ');
        console.log('+');
        operatorValue = 'add';
    } else {
  updateUserInputDisplay(' + ');
  console.log('+');
  operatorValue = 'add';
}}

//Minus button
minus.onclick = function(event) {
    if ((operandB)) {
        surroundUserInputDisplay(); 
  updateUserInputDisplay(' - ');
  console.log('-');
  operatorValue = 'subtract';
} else {
    updateUserInputDisplay(' - ');
  console.log('-');
  operatorValue = 'subtract';
}}

//Multiplication button
times.onclick = function(event) {
    if ((operandB)) {
        surroundUserInputDisplay(); 
  updateUserInputDisplay(' * ');
  console.log('*');
  operatorValue = 'multiply';
} else {
    updateUserInputDisplay(' * ');
  console.log('*');
  operatorValue = 'multiply';
}}

//Divided button
divided.onclick = function(event) {
    if ((operandB)) {
        surroundUserInputDisplay(); 
  updateUserInputDisplay(' / ');
  console.log('/');
  operatorValue = 'divide';
} else {
    updateUserInputDisplay(' / ');
    console.log('/');
    operatorValue = 'divide';
}}

//WHEN YOU CLICK PERCENT BUTTON
percent.onclick = function(event) {
    //percentCheck = 1;
  updateUserInputDisplay('% ');
  console.log('%');
    //if there is no operandB just convert operandA to percent of 100, like 9 is .09
    if ((operandB) == false){
        console.log('there is no operandB!')
        operandA = operandA/100;
        updateResultsDisplay(Number(operandA.toFixed(16)));
          //if there is an operandB
  //calculate percentage value using two operands and store to percentValue
  //operandB is a percent of operandA? 
    } else if (operandB){
        console.log('there is an operandB!')
percentValue = (operandB/100) * operandA;
console.log(`The precent value is ${percentValue}`);
        updateResultsDisplay(Number(percentValue.toFixed(16)));
        //make operandB be the percentValue, then clear the percentValue
        operandB = percentValue;
        console.log(`operandB is now ${operandB}.`)
        percentValue = '';
    }
}

//Plus Minus button
plusminus.onclick = function(event) {
    //find better way to update user input display
    updateUserInputDisplay(' * -1');
    surroundUserInputDisplay();
    if ((operandB)){
        operandB = operandB*(-1);
    } else {
        operandA = operandA*(-1);
}
    console.log('plus minus was clicked');
}


//Operations

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

//no buttons for these at the moment
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


//Function to perform the operation on two operands
const operate = function(operation,a,b){
  let answer = '';

  if (operation == subtract || operation == add){
  answer = operation(Number(a),Number(b));

  //sum, divide, and multiply require an array of the two operands
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




//IF NUMBER BUTTON PUSHED

//if there is no operator
if (event.target.className === 'num button' && !operator == true){
    console.log('a number was pressed and there is no operator');
    
    //and equals was not just pressed, concat number value to operandA
    if (equalsCheck === 0){
        console.log('equals was not just pressed')
        updateOperandA(numValue);
        console.log(`The first number is now ${operandA}`);

//if equals was just pressed   
//should I say OR if snarkCheck = 1   
    } else if (equalsCheck === 1) {
        console.log('equals was just pressed');

//clear everything before saving and displaying number to operandA
    userInputDisplay.textContent = ''; 
    resultsDisplay.textContent = ''; 
    operandA = '';
    operandB = '';
    operator = '';
    result = '';
    equalsCheck = 0;
    //snarkCheck = 0;
    updateOperandA(numValue);
    updateUserInputDisplay(String(numValue)); //I forgt why this says string
    console.log(`The first number is now ${operandA}`);
    }



//IF OPERATOR BUTTON PUSHED
//clear equals check
} else if (event.target.className === 'operatorbtn button'){
    equalsCheck = 0;
    //do I want to clear percentCheck?
    //add a case where if there is already an operatorValue, just return, don't do anything.


 //If operandB has a value, calculate and display result before 
 //saving button pushed to operator value
   if ((operandB)){
       console.log('operandB has a value!')
       //surroundUserInputDisplay(); 
        if (operator === 'add') {
        result = Number(operate(sum,operandA,operandB));
        } else if (operator === 'subtract') {
      result = Number(operate(subtract,operandA,operandB));
        } else if (operator === 'multiply') {
            //surroundUserInputDisplay(); 
      result = Number(operate(multiply,operandA,operandB));
        } else if (operator === 'divide') {
        result = Number(operate(divide,operandA,operandB));
        }

        console.log(`The result is ${result}`);
        updateResultsDisplay(Number(result.toFixed(16)));
        operandA = '';
        operandA = Number(result);
        operandB = '';
        operator = operatorValue;
        
   
    } else if (operandB == false) {
    operator = operatorValue;
    console.log(`The operator is ${operatorValue}`);}

//if operator already saved, and button clicked is a number,
//concat number to operandB
} else if (event.target.className === 'num button' && (operator)){
    console.log('a number was pressed and there is an operator');
updateOperandB(numValue);
console.log(`The second number is now ${operandB}`);

//IF EQUALS IS CLICKED

//run operate function using operandA, operandB, and the operator
//send the result to the result display
} else if (event.target.id === 'equals'){
  let result = '';
  equalsCheck = 1;
  console.log('equals was just pressed');
  console.log(`operandB is ${operandB}`);

  
  //If there is no operandB
    if (operandB === '') {
    console.log(`equals pressed and there is no operandB and operatorValue is ${operatorValue}`)
        //If there is no operator just return operandA
        if (operatorValue == false){
            console.log(`equals pressed, there is no operator, and operandA is ${operandA}`);
            result = Number(operandA);
            console.log(`The result is ${result}`);
  console.log(typeof result);
  updateResultsDisplay(Number(result.toFixed(16)));
  operandA = result;
  operandB = '';
  operatorValue = '';
  operator = '';
  surroundUserInputDisplay();
            return;
        //If there is an operator, make operandB the same as operandA
        } else if (operatorValue !== false) {
            operandB = operandA;
            updateUserInputDisplay(operandB);
        }
   }

    
    if (operatorValue === 'add') {
        console.log(`operand A is ${operandA}. operandB is ${operandB}. operator is ${operator}.`)
      result = Number(operate(sum,operandA,operandB));

    } else if (operatorValue === 'subtract') {
      result = Number(operate(subtract,operandA,operandB));

    } else if (operatorValue === 'multiply') {
      result = Number(operate(multiply,operandA,operandB));

    } else if (operatorValue === 'divide') {
        if (operandB === 0 | operandB === '0'){
            //I have to get it to not do operation and just return infinity
            console.log('Do not divide by zero please');
            resultsDisplay.textContent = 'Undefined';
            //alert('It is not possible to divide by zero');
            operandA = '';
            operandB = '';
            operatorValue = '';
            operator = '';
            return;
            
        } else {
      result = Number(operate(divide,operandA,operandB));
   }
}
  console.log(`The result is ${result}`);
  console.log(typeof result);
  updateResultsDisplay(Number(result.toFixed(16)));
  operandA = result;
  operandB = '';
  operatorValue = '';
  operator = '';
  //percentCheck = 0;
  surroundUserInputDisplay();
  //note to self, remove this surroundUserInputDisplay
  //and make switch case for if equals was just pressed
  //and you press an operator, add parenthesis then.
  return;



}
});





//Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
//if operator is divide and operandB is 0 etc. then when you press =
//return the error message.


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