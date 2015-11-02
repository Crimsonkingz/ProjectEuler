// Find the largest of the prime factors of a number (600851475143)
// A test - the primes of 13195 are 5, 7, 13 and 29
// This method also doesn't work for the large number >_>
var html = "";
var result;

var target = 13195;

var numbers = [];
var primes = [];
var upperLimit = Math.ceil(Math.sqrt(target));
var primeFactors = [];

// Find all odd numbers up to the target
for (var i = 3; i < target; i+=2) {
	numbers.push(true);
}

 for (var i = 2; i <= upperLimit; i++) {
        if (numbers[i]) {
            for (var j = i * i; j < target; j += i) {
                numbers[j] = false;
            }
        }
}

for (var i = 2; i < upperLimit; i++) {
        if(numbers[i]) {
            primes.push(i);
        }
}
//Find largest prime factor
for (var l = 0; l < primes.length; l++){
	
	if (target % primes[l] === 0) {
		primeFactors.push(primes[l]);
		target /= primes[l];
		if (primes[l] > target) {
			break;
		}
	}
}




// var largestPrime = primeFactors[primeFactors.length-1];
result = primes;


html += "<h2>" + result + "</h2>";
function print(message) {
var output = document.getElementById("result");
output.innerHTML += message;
}

print(result);