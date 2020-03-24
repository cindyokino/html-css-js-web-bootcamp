// add a listener to one element (the h1)
$("h1").click(function () {
    alert("h1 clicked");
})

// add a listener to a collection (all the buttons)
$("button").click(function () {
    var text = $(this).text();
    console.log("you clicked " + text);
    $(this).css("background", "pink");
});

// .keypress()
$("input").keypress(function (event) {
    if (event.which === 13) {
        alert("YOU HIT ENTER");
    }
});

// .on
//All the h1 will change if one of them was clicked:
$("h1").on("click", function () {
    $("h1").css("color", "purple");
});
//Only the h1 that was clicked will change:
$("h2").on("click", function () {
    $(this).css("color", "purple");
});