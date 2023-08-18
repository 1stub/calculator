const total = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const arithmetic = document.querySelector('.arithmetic');
let operator;

function reply_click(clicked_id) {
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
    }
    if (currentButton === enter) {
        calculate(operator);
    }
    printDisplay(currentButton.value);
}

function calculate(operator) {
    let equation = total.textContent.split(operator);
    let num1 = parseFloat(equation[0]);
    let num2 = parseFloat(equation[1]);
    let result = mathObj[operator](num1, num2);
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
