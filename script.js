let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = currentExpression;
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        document.getElementById('display').value = currentExpression;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentExpression = '';
    }
}
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('display').value = currentExpression;
} 