function calculate() {

    // Get the values from the input fields
    let firstNumber = parseFloat(
        document.getElementById("firstNumber").value
    );

    let secondNumber = parseFloat(
        document.getElementById("secondNumber").value
    );


    // Check if the inputs are valid
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter both numbers.");
        return;
    }


    // Calculate the operations
    let sum = firstNumber + secondNumber;
    let difference = firstNumber - secondNumber;
    let product = firstNumber * secondNumber;

    let quotient;

    if (secondNumber === 0) {
        quotient = "Cannot divide by zero";
    } else {
        quotient = firstNumber / secondNumber;
    }


    // Display the results
    document.getElementById("sum").textContent = sum;
    document.getElementById("difference").textContent = difference;
    document.getElementById("product").textContent = product;
    document.getElementById("quotient").textContent = quotient;
}


function clearFields() {

    // Clear input fields
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";


    // Clear results
    document.getElementById("sum").textContent = "";
    document.getElementById("difference").textContent = "";
    document.getElementById("product").textContent = "";
    document.getElementById("quotient").textContent = "";
}
