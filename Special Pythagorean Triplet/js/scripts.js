// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


var a = 0, 
	b = 0,
	c = 0;
var pTriples = [];
var product;
for (var c = 3; c < 1000; c++) {
	for (var b = c-1; b > 1; b--) {
		for (var a = b-1; a > 0; a--) {
			if (checkPTriple(a,b,c)) {
				pTriples.push([a,b,c]);
			}
		}
	}
}

function checkPTriple(i,j,k) {

	if (Math.pow(i,2) + Math.pow(j,2) == Math.pow(k,2)){
		return true;
	}

	else {
		return false;
	}
}

for (var l=0; l < pTriples.length; l++) {
	var firstNum = pTriples[l][0];
	var secNum = pTriples[l][1];
	var thirdNum = pTriples[l][2];
	if (firstNum + secNum + thirdNum == 1000) {
		product = firstNum * secNum * thirdNum;
		console.log(firstNum + ", " + secNum + ", " + thirdNum);
		break;
	}
}



//Print statements
var result = product;
var html = "<h2>" + result + "</h2>";
function print(message) {
	var output = document.getElementById("result");
	output.innerHTML += message;
}

print(result);