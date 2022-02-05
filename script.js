
 
const numbers = document.querySelector('.num');
const userInputDisplay = document.querySelector('#userinputdisplay');
const resultsDisplay = document.querySelector('#resultsdisplay');

//defaults for displays
//userInputDisplay.textContext = ' ';
//resultsDisplay.textContent = ' ';

//function to update the user input display
const updateUserInputDisplay = function(input){
    userInputDisplay.textContent += `${input}`;    
}

//function to add parentheses around current user input display
const surroundUserInputDisplay = function(){
    //generate random color for parentheses each time they are added
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //
    currentInputDisplay = userInputDisplay.textContent;
    userInputDisplay.textContent = `(${currentInputDisplay})`;
    //userInputDisplay.textContent = `<span style="color:randomColor">(</span>${currentInputDisplay}<span style="color:randomColor">)</span>`;
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

//C button clears all variables and displays
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

//operator buttons


//using add function rather than sum for now
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
  //what is operandB percent of operandA? 
  //operandB divided by 100 times operandA
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

plusminus.onclick = function(event) {
    if ((operandB)){

    }
    //update user display, how? search from end of userdisplay 
    //and replace operand with operand * -1?
    //if operandB exists, multiply by -1
    //otherwise multiply operandA by -1
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
    updateOperandA(numValue);
    updateUserInputDisplay(String(numValue));
    console.log(`The first number is now ${operandA}`);
    }


//I THINK I DON'T NEED THIS NOW
//if percentCheck = 1, so like 8+50% 
//results display is 4
//operandB is now 4
//if another operator is clicked, 
//perform the previous operation between operandA and operandB and save as result and display
//save that result as operandA
//store the new operatorValue
//what should go to the userInputDisplay?
//tis should work for pressing percent after only setting operandA or also with operandB. 
//
//if operator pushed and percentCheck = 1
//if equals pushed and percentCheck = 1
//percentCheck=0
//equalsCheck=1



//IF OPERATOR BUTTON PUSHED
//clear equals check
} else if (event.target.className === 'operatorbtn button'){
    equalsCheck = 0;
    //do I want to clear percentCheck?


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
            surroundUserInputDisplay(); 
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

//if operator already saved, and button clickd is a number,
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


  //IN PROGRESS
  //where does this go??
  //if you have "2 + ="  make operandB be the same as operandA
  //then run operation. Why did changing it from == true to !== false fix it?
 if ((operandB == false) && (operator !== false)){
    console.log('equals was pressed and there is no operandB!');
    operandB = operandA;
    updateUserInputDisplay(operandB);
 }

//if you typ "2 =" you should just get 2. Return operandA.
if ((operandB == false) && (operatorValue == false)){
    console.log('equals was pressed and there is no operator.');
    console.log(operandA);
        result = Number(operandA);
        console.log(result);

} else if (operatorValue === 'add') {
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
            //resultsDisplay.textContent = 'Infinity, wow!';
            //if I returned as a snarky string instead, i would have to then clear it with 
            //the next buttons
    result = Infinity; 
            
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