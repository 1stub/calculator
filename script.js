const total = document.querySelector('.main-display');
const buttons = document.querySelector('.buttons');
const arithmetic = document.querySelector('.arithmetic');
const percentage = document.querySelector('#percentage');
const secondDisp = document.querySelector('#expression');
let operator;
let previousButton;
let previousValue;
let num1Count;
let num2Count;

window.onload = function () {
    total.textContent = 0;
}

function reply_click(clicked_id) {
    const currentButton = document.getElementById(clicked_id);
    if (currentButton === clear) {
        secondDisp.textContent = '';
        total.textContent = '0';
        return total.textContent;
    }
    if (currentButton === dlte) {
        let result = total.textContent;
        if (result.length <= 1) return total.textContent = "0";
        result = result.substring(0,result.length - 1);
        total.textContent = result;
    }
    if (currentButton.classList.contains("arithmetic")) {
        operator = currentButton.value;
        var operatorCheck = math.some(operand => total.textContent.includes(operand));
        if(operatorCheck) {calculate(operator)};
    }
    if (currentButton === enter) {
        previousValue = total.textContent;
        calculate(operator);
        secondDisp.textContent = previousValue;
    }
    if(currentButton === percentage){
        total.textContent = total.textContent / 100;
    }
    if (currentButton === decimal) {
        const currentDisplayValue = total.textContent;

        // Check if there's an operator in the display value
        if (currentDisplayValue.includes(operator)) {
            const currentValueArray = currentDisplayValue.split(operator);

            if (currentValueArray.length === 2) {
                const firstNumber = currentValueArray[0];
                const secondNumber = currentValueArray[1];

                if (secondNumber.includes(".")) {
                    return; // Prevent adding decimal point
                }
            }
        } else {
            // If there's no operator, check the whole value for decimal
            if (currentDisplayValue.includes(".")) {
                return; // Prevent adding decimal point
            }
        }

        total.textContent += ".";
        return;
    }
    if(previousButton === enter){
        if(currentButton.classList.contains("arithmetic")){
            total.textContent = total.textContent;
        }
        else if(currentButton === percentage){
            total.textContent = total.textContent / 100;

        }
        else{
            total.textContent = clicked_id.value;
        }
    }
    if(currentButton.value !== '%'){
        printDisplay(currentButton.value);
    }
    previousButton = document.getElementById(clicked_id);
}

function calculate(operator) {
    let newArr = Array.from(total.textContent);
    let firstOperator;
    for(let i=0;i<newArr.length;i++){
        for(let x=0;x<math.length;x++){
            let a = math[x];
            if(newArr.includes(a)){
                firstOperator = a;
            }
        }
    }
    let equation = total.textContent.split(firstOperator);
    let num1 = parseFloat(equation[0]);
    let num2 = parseFloat(equation[1]);
    result = mathObj[firstOperator](num1, num2);
    result = roundResult(result);
    total.textContent = result;
    return result;
}
function roundResult(num){
    return Math.round(num * 1000)/1000;
}

function splitAndCheck(inputString) {
    // Use regular expression to capture numbers and operator
    const regex = /(-?\d+\.\d+)\s*([\+\-\*\/])\s*(-?\d+\.\d+)/;
    const match = inputString.match(regex);
  
    if (match) {
      const firstNumber = match[1];
      const operator = match[2];
      const secondNumber = match[3];
  
      // Check for more than one decimal in the numbers
      const decimalCountFirst = (firstNumber.match(/\./g) || []).length;
      const decimalCountSecond = (secondNumber.match(/\./g) || []).length;
  
      if (decimalCountFirst > 1 && decimalCountSecond > 1) {
        return `${firstNumber} ${operator} ${secondNumber}`;
      } else {
        return "Numbers do not meet the criteria.";
      }
    } else {
      return "Invalid input format.";
    }
  }

function printDisplay(value) {
    if(total.textContent === '0'){
        total.textContent = value;
    }else{
        total.textContent += value;
    }
}

let mathObj = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '/': function (x, y) { return x / y },
    '*': function (x, y) { return x * y },
};

let math = ['+', '-', '*', '/'];
