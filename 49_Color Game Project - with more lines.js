var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //----------------------------------------------------------
        // NOW WE DONT NEED TO SET EACH BUTTON!
        // ---------------- These 2 are the same: / TERNARY OPERATOR / 5 lines in 1
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        // if(this.textContent === "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
        // }
        // -----------------

        reset();
    });
}

// easyBtn.addEventListener("click", function () {
//     messageDisplay.textContent = "";
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContnt = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     messageDisplay.textContent = "";
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContnt = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     });
//----------------------------------------------------------

function reset() {
    messageDisplay.textContent = "";
    //from "Play Again?" back to "New Colors"
    resetButton.textContent = "New Colors";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
}

resetButton.addEventListener("click", function () {
    reset();
    //NOW WE'LL USE THE reset(); FUNCTION INTEAD OF:
    // messageDisplay.textContent = "";
    // //from "Play Again?" back to "New Colors"
    // this.textContent = "New Colors";
    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change color display to match picked color
    // colorDisplay.textContent = pickedColor;
    // //change color of squares
    // for (var i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelBlue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" fron 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" fron 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" fron 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}