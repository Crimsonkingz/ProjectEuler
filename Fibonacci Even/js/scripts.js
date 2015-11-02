// Add up all of the EVEN Fibonacci numbers less than 4 million
// Fibonacci numbers are the sum of the previous 2
// 1,2,3,5,8,13 etc
// Start with 1 & 2

var thisNum; 
var totalEvens = 2;
var target = 4 * Math.pow(10, 6);
var fibonacciArray = [1, 2];
var overTarget = false;
var lastEven;


var i = 2;
while (!overTarget) {
 	
 	thisNum = fibonacciArray[i-1] + fibonacciArray[i-2];
 	fibonacciArray.push(thisNum);

 	if (thisNum > target) {
 		overTarget = true;
 	}
 	

 	if (thisNum % 2 === 0) {
 		lastEven = thisNum;
 		totalEvens += thisNum;
 	}
 	i++;
 } 
if (lastEven > target) {
	totalEvens -= lastEven;
}

console.log(fibonacciArray);
console.log(totalEvens);