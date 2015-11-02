// Find the largest of the prime factors of a number (600851475143)
// A test - the primes of 13195 are 5, 7, 13 and 29

var html = "";
var result;

var target = 13195;

var primes = [];
var primeFactors = [];



/// OPTIMISE THIS
// Find all primes up to the target
for (var j = 3; j < target; j+=2) {
	prime = true;
	
	// Test for prime
	for( var k = 3; k < j ; k+=2) {
		if (j % k === 0) {
			prime = false;
		}
	}
	//Add to prime array
	if (prime) {
	primes.push(j);
	}
}

// Find the primes that go into the target
for (var l = 0; l < primes.length; l++){
	
	if (target % primes[l] === 0) {
		primeFactors.push(primes[l]);
		target /= primes[l];
		if (primes[l] > target) {
			break;
		}
	}
}



//Find largest prime factor
// var largestPrime = primeFactors[primeFactors.length-1];
result = primeFactors;


html += "<h2>" + result + "</h2>";
function print(message) {
var output = document.getElementById("result");
output.innerHTML += message;
}

print(result);