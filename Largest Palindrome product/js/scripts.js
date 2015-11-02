
var html = "";
var result;


// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var products = [];
var palindromes = [];
for (var i=100; i < 1000; i++) {
	for (var j = 100; j < 1000; j++) {
		if (checkPalindrome(i*j)) {
			// palindromes.push([i*j, i, j]);
			palindromes.push(i*j);
		}
	}
}


function checkPalindrome(n) {
	var x = n;
	var y = 0;

	for (;x; x = Math.floor(x/10)) {
		y *= 10;
		y += x % 10;
	}

	if (y === n) {
		return true;
	}

	else {
		return false;
	}
}

// Math.max finds the largest number in a selection of numbers e.g. Math.max(2,-10, 5) will give 5
// apply(thisArg, [arrayArgs]) accepts arrays. Similar to .call() but call does not accept arrays
largestPalindrome = Math.max.apply(null, palindromes);
result = largestPalindrome;

//Print statements

html += "<h2>" + result + "</h2>";
function print(message) {
var output = document.getElementById("result");
output.innerHTML += message;
}

print(result);