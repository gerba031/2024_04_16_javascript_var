var x = "lorem ipsum",
y = 2345,
z = "2345",
q = false;

// 1. dupla negacija
var trueFalse = !!false;
console.log("1. " + trueFalse);

// 2. or - ispisuje prvu istinitu vrijednost
console.log(q || x || y || z);

// 3. - dekrement 
var num = 6;
num--;
console.log(num);

// 4. 
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice = totalPrice.toFixed(2);
// var xyz = (rezultat / 2).toFixed(2);

console.log("total:", totalPrice);
