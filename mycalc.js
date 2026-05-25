let display = document.querySelector('.display-enter');
let expression = '';

function appendNumber(num) {
    expression += num;
    updateDisplay();
}
function appendOperator(op) {
    if (expression && !expression.endsWith('+') && !expression.endsWith('-') && !expression.endsWith('*') && !expression.endsWith('/')) {
        expression += op;
        updateDisplay();
    }
}

function calculate() {
    try {
        if (expression) {
            expression = String(eval(expression));
            updateDisplay();
        }
    }catch (error) {
        display.textContent = 'Error';
        expression = '';
    }
}
function clearDisplay() {
    expression = '';
    display.textContent = '0';
}
function updateDisplay(){
    display.textContent = expression ;
}