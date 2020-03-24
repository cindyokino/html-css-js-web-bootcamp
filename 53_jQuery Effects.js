//fadeOut, fadeIn, fadeToggle
//slideDown, slideUp, slideToggle

// $("button").on("click", function(){
//     $("div").fadeOut(1000, function(){
//         $(this).remove();
//     });
// });

//to use fadeIn, set display: none; at css(style on html)

$("button").on("click", function(){
    $("div").fadeToggle(500);
});
