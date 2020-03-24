var age = Number(prompt("what is your age?"));

if (age < 0) {
    console.log ("Error! Your age needs to be bigger than 0");
}

if (age === 21) {
    console.log ("Happy 21st birthday!!");
}

// If the age is an odd number (not divisible by 2)
if (age % 2 !==0) {
    console.log ("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log ("Your age is a perfect square!");
}
