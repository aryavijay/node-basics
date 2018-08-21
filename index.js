console.log("How are you");
console.log("Factorial");

number = 5;
for (i = number; i > 1; i--) {
    number = number * (i - 1);
}
console.log(number);

// console.log("Looop")
// for(i =1; i<= 10; i++){
//     setTimeout(()=>{console.log(`${i}`)}, 11000);
// }
//
// //Fix the above Problem
//
// for(let i =0; i <10; i++){
//     (
//         (index)=>{
//             setTimeout(()=>{console.log(`index => ${index}`)}, index*10000);
//         }
//     )(i)
// }
//
// var interval = setInterval(() => {
//     console.log("vijay")
// }, 3000);
//
// setTimeout(() => {
//     clearInterval(interval);
// }, 15000);

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
console.log(person.sex);
process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1)
});


function combine() {
    let name = arguments.values();
    return name.join(' ');
}


combine('vijay', 'kumar');


process.on('uncaughtException', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
});