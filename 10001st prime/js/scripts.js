// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var html = "";

var nthPrime = 10001;

var primes = [2];



for (var j = 3; j < 9999999; j+=2) {
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

	if (primes.length === nthPrime) {
		break;
	}
}


var result = primes[primes.length - 1];







//Print statements

html += "<h2>" + result + "</h2>";
function print(message) {
	var output = document.getElementById("result");
	output.innerHTML += message;
}

print(result);