let history = [];

function whenButtonClick() {
    var numberElem1 = document.getElementById("number1");
    var numberElem2 = document.getElementById("number2");
    var operation = document.getElementById("operation").value;

    number1 = parseFloat(numberElem1.value);
    number2 = parseFloat(numberElem2.value);

    if (isNaN(number1)) {
        alert("Ошибка. В первой ячейке введено не число.");
        numberElem1.classList.add("error-input");
        return;
    } else {
        numberElem1.classList.remove("error-input");
    }

    if (isNaN(number2)) {
        alert("Ошибка. Во второй ячейке введено не число.");
        numberElem2.classList.add("error-input");
        return;
    } else {
        numberElem2.classList.remove("error-input");
    }
    
    var result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (Math.abs(number2) < Number.EPSILON) {
                alert("Ошибка. Деление на ноль.");
                numberElem2.classList.add("error-input")
                return;
            }
            result = number1 / number2;
            break;
    }
    if (history.length > 3)
        history.shift();
    
    var previous = "";
    for (var calculation of history) {
        previous += `${calculation[0].toString()} ${calculation[1].toString()} ${calculation[2].toString()} = ${calculation[3].toString()}\n`
    }
    current = `${number1} ${operation} ${number2} = ${result}`
    document.getElementById("previous-calc").innerText = previous;
    document.getElementById("current-calc").innerText = current;
    history.push([number1, operation, number2, result]);
}