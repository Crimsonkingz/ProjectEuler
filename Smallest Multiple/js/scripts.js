
var html = "";
var result;



var foundSmallest = false;
var smallestNum;

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Divide n by each number from min to max in turn to find if it has a remainder for any
// If not then it is the smallest number
function divisble(n, min, max) {
	
	for (var i = min; i <= max; i++) {
		if (n % i !== 0) {
			return false;
		}
	}

	smallestNum = n;
	return true;
}

// Start at the max then increase until you find a number divisible by all numbers from min to max
function findSmallest(min,max) {

	var j = max;
	while (!foundSmallest) {
		foundSmallest = divisble(j,min,max);
		j++;
	}

}

findSmallest(1,20);
result = smallestNum;

//Print statements

html += "<h2>" + result + "</h2>";
function print(message) {
	var output = document.getElementById("result");
	output.innerHTML += message;
}

print(result);