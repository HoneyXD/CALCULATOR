let result = document.getElementById('result');
let expression = '';

function clearResult() {
    expression = '';
    result.textContent = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    result.textContent = expression || '0';
}

function appendNumber(number) {
    expression += number;
    result.textContent = expression;
}

function appendOperator(operator) {
    expression += operator;
    result.textContent = expression;
}

function calculate() {
    try {
        const answer = eval(expression);
        result.textContent = answer;
        expression = answer.toString();
    } catch (error) {
        result.textContent = 'Error';
        expression = '';
    }
}
