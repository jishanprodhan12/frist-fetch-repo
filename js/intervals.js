// console.log(1);
// console.log(2);
// setInterval(()=>console.log(3),3000)
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

// objective 
// 1. print all numbers using setInterval()
let num = 0;
console.log(num);
const clockId = setInterval(() => {
    ++num;
    if (num < 10) {
        console.log(num);
    } else {
        clearInterval(clockId);
    }
}, 1000);

let counter = 0;
console.log(counter);
const counterId = setInterval(() => {
    ++counter;
    if (counter % 2 === 0 && counter <= 20) {
        console.log("all even number's are between 0 to 20", counter);
    }
    clearInterval(counterId);
}, 2000);

console.log(counterId , clockId)


