
var html = "";
var result;

// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var max = 100,
	sumSquares = 0,
	squareOfSum = 0;

for (var i = 1; i <= max; i++) {
	sumSquares += i*i;
	squareOfSum += i;
}

squareOfSum *= squareOfSum;


var difference = squareOfSum - sumSquares;


result = difference;
//Print statements

html += "<h2>" + result + "</h2>";
function print(message) {
	var output = document.getElementById("result");
	output.innerHTML += message;
}

print(result);