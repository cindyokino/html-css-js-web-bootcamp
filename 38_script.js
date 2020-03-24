console.log("Print all numbers between -10 and 19");

for (count = -10; count < 20; count++) {
    console.log(count);
}


console.log("Print all EVEN numbers between 10 and 40");

for (count = 10; count < 41; count++) {
    if (count % 2 === 0) {
        console.log(count);
    }
}


console.log("Print all ODD numbers between 300 and 333");

for (count = 300; count <= 333; count++) {
    if (count % 2 !== 0) {
        console.log(count);
    }
}


console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

for (count = 5; count <= 50; count++) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
}
