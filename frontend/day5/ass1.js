function checkPrime() {
    var numberStr = document.getElementById("numberInput").value;
 
    if (isNaN(number) || number <= 1) {
        document.getElementById("result").innerHTML = "Please enter a valid number greater than 1.";
        return;
    }
    var isPrime = true;
    for (var i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("result").innerHTML = number + " is a prime number.";
    } else {
        document.getElementById("result").innerHTML = number + " is not a prime number.";
    }
}
