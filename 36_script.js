console.log("Print all numbers between -10 and 19");
var num = -10;
while (num > -11 && num <= 19) {
    console.log(num);
    num++;
}

console.log("Print all EVEN numbers between 10 and 40");
var evenNum = 1;
while (evenNum < 41) {
    if (evenNum > 8 && evenNum % 2 === 0) {
        console.log(evenNum);
    }
    evenNum++;
}

console.log("Print all ODD numbers between 300 and 333");
var oddNum = 300;
while (oddNum >= 300 && oddNum <= 333) {
    if (oddNum % 2 !== 0) {
        console.log(oddNum);
    }
    oddNum++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var num2 = 5;
while (num2 >= 5 && num2 <= 50) {
    if (num2 % 5 === 0 && num2 % 3 === 0) {
        console.log(num2);
    }
    num2++;
}