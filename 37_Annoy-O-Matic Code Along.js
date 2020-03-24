// SIMPLE CONDITIONAL - ONLY RUN ONE TIME :

// var answer = prompt ("Are we there yet?");
// if (answer === "yes") {
//     alert("YAY, We made it!");
// } else {
//     var answer = prompt ("Are we there yet?");
// }



//ANNOY-O-MATIC - WHILE LOOP - KEEP RUNNING :

// var answer = prompt ("Are we there yet?");
// while (answer !== "yes" && answer !== "yeah" ) {
//     var answer = prompt ("Are we there yet?");
// }
// alert("YAY, WE MADE IT!!");



// ANNOY-O-MATIC VERSION 2 : 
// User can enter any string as long as it contains "yes" in it
// The  value -1 means that the string "yes" doesn't exist

var answer = prompt ("Are we there yet?");
while (answer.indexOf("yes") === -1) {
    var answer = prompt ("Are we there yet?");
}
alert("YAY, WE MADE IT!!");