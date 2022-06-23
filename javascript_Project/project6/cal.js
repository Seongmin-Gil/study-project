const one = document.getElementById('num-1');
const two = document.getElementById('num-2');
const three = document.getElementById('num-3');
const four = document.getElementById('num-4');
const five = document.getElementById('num-5');
const six = document.getElementById('num-6');
const seven = document.getElementById('num-7');
const eight = document.getElementById('num-8');
const nine = document.getElementById('num-9');
const zero = document.getElementById('num-0');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const cal = document.getElementById('calculate');
const result = document.getElementById('result');
const operatorBox = document.getElementById('operator');
const clear = document.getElementById('clear');

let firstNum = '';
let secondNum = '';
let operator;
let display = '';

function onClickEvent(event) {
    display += event.target.textContent;
    result.value = display;
}

function operatorEvent(event) {
    if (!firstNum) {
        firstNum = parseInt(display);
        result.value = '';
    } else if (firstNum) {
        secondNum = parseInt(display);
        firstNum = calculator(operator);
        result.value = firstNum;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
    operator = event.target.textContent;
    operatorBox.value = operator;
    display = '';
}

function calculator(operator) {
    switch(operator) {
        case '+':
            calculateResult = firstNum + secondNum;
            result.value = calculateResult;
            return calculateResult;
        case '-':
            calculateResult = firstNum - secondNum;
            result.value = calculateResult;
            return calculateResult;
        case '*':
            calculateResult = firstNum * secondNum;
            result.value = calculateResult;
            return calculateResult;
        case '/':
            calculateResult = firstNum / secondNum;
            result.value = calculateResult;
            return calculateResult;
        default:
            break;
    }
}

function resultEvent() {
    secondNum = parseInt(display);
    calculateResult = calculator(operator);
    result.value = calculateResult;
}

function clearEvent() {
    firstNum = '';
    secondNum = '';
    operator;
    display = '';
    result.value = '';
}

one.addEventListener('click', onClickEvent);
two.addEventListener('click', onClickEvent);
three.addEventListener('click', onClickEvent);
four.addEventListener('click', onClickEvent);
five.addEventListener('click', onClickEvent);
six.addEventListener('click', onClickEvent);
seven.addEventListener('click', onClickEvent);
eight.addEventListener('click', onClickEvent);
nine.addEventListener('click', onClickEvent);
zero.addEventListener('click', onClickEvent);
plus.addEventListener('click', operatorEvent);
minus.addEventListener('click', operatorEvent);
divide.addEventListener('click', operatorEvent);
multiply.addEventListener('click', operatorEvent);
cal.addEventListener('click', resultEvent);
clear.addEventListener('click', clearEvent);