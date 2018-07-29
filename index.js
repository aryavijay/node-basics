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