// // Check off specific todos by clicking
// $("li").click(function(){
//     //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     //else
//     else {$(this).css({
//         //turn it gray
//         color: "gray",
//         textDecoration: "line-through"
//     });
// }
    
// });

// EASIER AND FASTER WAY:

//Check off specific todos by clicking
//we use 'ul' and 'li', so we're adding event listeners to the elements that exist when page loads (ul) so we can account for elements that aren't there yet)
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove;
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //if the pressed key is = the 'enter' key
    if(event.which === 13) {
        //grabbing new todo text from input
       var todoText = $(this).val();
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
