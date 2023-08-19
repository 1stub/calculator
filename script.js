const total = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const arithmetic = document.querySelector('.arithmetic');
const percentage = document.querySelector('#percentage');
let operator;
let previousButton;

function reply_click(clicked_id) {
    let decimalCount = 0;
    const currentButton = document.getElementById(clicked_id);
    if (currentButton === clear) {
        total.textContent = clear.value;
    }
    if (currentButton === dlte) {
        let result = total.textContent;
        if (result.length <= 1) return total.textContent = "0";
        result = result.substring(1);
        total.textContent = result;
    }
    if (currentButton.classList.contains("arithmetic")) {
        operator = currentButton.value;
        var operatorCheck = math.some(operand => total.textContent.includes(operand));
        if(operatorCheck) {calculate(operator)};
    }
    if(currentButton === decimal){
        if(total.textContent.includes('.')) return total.textContent.replace('.', '')
    }
    if (currentButton === enter) {
        calculate(operator);
    }
    if(currentButton === percentage){
        total.textContent = total.textContent / 100;
    }
    if(previousButton === enter){
        total.textContent = clicked_id.value;
    }
    if(currentButton.value !== '%' ){
        printDisplay(currentButton.value);
    }
    previousButton = document.getElementById(clicked_id);
}

function calculate(operator) {
    let newArr = Array.from(total.textContent);
    let firstOperator;
    let result;
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
    total.textContent = result;
    return result;
}

function printDisplay(value) {
    if (total.textContent === "0") {
        total.textContent = value;
    } 
    else{
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
