//KEYWORD THIS
var comments = {};

comments.data = ["Good job!", "Bye", "Hello..."];

//at the console type: comments

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
}

//at the console type: print(comments.data);

//THIS reffers to the Object comments
comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}

//at the console type: comments
//at the console type: coments.print

