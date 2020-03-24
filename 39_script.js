// FIRST SOLUTION
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// SECOND SOLUTION - SHORTCUT
function isEven(num) {
    return num % 2 === 0;
}

// ---------------------------------------------------------

function factorial(num) {
    if(num < 0 ){
        throw new Error("Number cannot be negative");
    }
    // define a result variable
    var total = 1;
    // calculate factorial and store value in result
    for (num; num>1; num--) {
        total = total * num;
    }
// return the result variable
    return total;
}

// ---------------------------------------------------------

function kebabToSnake (anyWord) {
   var modifiedWord = anyWord.replace (/-/g,"_");
   return modifiedWord;
}