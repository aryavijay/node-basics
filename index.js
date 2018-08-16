const fs = require('fs');

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});

process.on('unhandledRejection', function (err) {
    console.error(err);
    console.log("Node NOT Exiting On Rejection...");
});

fs.readFile('textfile.txt');

console.log("How are you");
console.log("Factorial");

number = 5;
for (i = number; i > 1; i--) {
    number = number * (i - 1);
}
console.log(number);

/*console.log("Looop")
for(i =1; i<= 10; i++){
    setTimeout(()=>{console.log(i)}, 1000);
}*/

var interval = setInterval(() => {
    console.log("vijay")
}, 3000);

setTimeout(() => {
    clearInterval(interval);
}, 15000);

console.log("What the hell");
console.log("loaded");

console.log("Spread Operator");
var nameArray = ['vijay', 'Akal', 'Saransh', 'Suman'];
console.log(nameArray);
console.log(...nameArray);
var schoolArray = ['GVS', 'Ryan', ...nameArray];
console.log(schoolArray);
console.log(...schoolArray);

console.log("Check Elvis Operator");
var person = {name: "vijay", age: 35};
try{
    console.log(person.sex);
}catch(err ){
    console.log(err);
}
