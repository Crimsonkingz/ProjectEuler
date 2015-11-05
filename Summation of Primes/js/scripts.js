


var upperLimit = 2 * Math.pow(10,6);

 var i, 
    j, 
    k, 
    l = Math.floor((upperLimit-1)/2), 
    a = [];
    
    for (i = 0; i < l; i++) {
        a[i] = true;
    } 
    var m = Math.ceil(Math.sqrt(upperLimit));
    for (i = 0; i <= m; i++) {
        if (a[i]) {
            j = 2 * i + 3;
            k = i + j;
            while (k < l) {
                a[k] = false;
                k += j;
            }
        }
    } var s = 2;
    for (i = 0; i < l; i++) {
        if (a[i]) {
            s += 2 * i + 3;
        }
    }
    var result = s;

//Print statements

var html = "<h2>" + result + "</h2>";
function print(message) {
    var output = document.getElementById("result");
    output.innerHTML += message;
}

print(result);