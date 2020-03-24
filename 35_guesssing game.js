// create a secret number
var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// Check if guess is right
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}

// otherwise, check if guess higher
else if(guess > secretNumber) {
    alert("Too high. Guess again!");
}

// otherwise, check if lower (2 ways)
// else if(guess < secretNumber {
//     alert("Too low. Guess again!");
// })

else {
    alert("Too low. Guess again!");
}