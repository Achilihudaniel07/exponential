// Find the Power of a Number using for Loop

let basenum = prompt("Enter Base Number")
let exponum = prompt("Enter Exponential Number")

function numPower(exp, pow) {
var num=1;

for(var i=0;i<pow; i++){
num=num*exp;
}
return num;
}

alert(numPower(basenum,exponum));
console.log(numPower(basenum,exponum));
