// Add up all numbers less than 1000 that are divisible by 3 or 5


var html = "";

var result = 0;
var target = 1000;

for (var i = 0; i < target; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		result += i;
	}
}



html += "<h2>" + result + "</h2>";

function print(message) {
var output = document.getElementById("result");
output.innerHTML += message;
}

print(result);