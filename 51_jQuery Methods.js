// change the first image
$("img:first-of-type").attr("src", "https://cdn1-www.dogtime.com/assets/uploads/gallery/boxer-puppies/boxer-puppy-1.jpg");

// change the last image
$("img").last().attr("src", "https://cdn1-www.dogtime.com/assets/uploads/gallery/boxer-puppies/boxer-puppy-1.jpg");

// // change another attr 
// $("input").attr("type", "color");

// change a text (note the difference between .text() and .html() )
$("li:first-of-type").text("<a href='http://google.com'>CLICK ME TO GO TO GOOGLE</a>");

// change an inner html
$("li").last().html("<a href='http://google.com'>CLICK ME TO GO TO GOOGLE</a>");

// .val() - copy the code below to the console (f12) to test:
$("select").val();
// addind a name to the input
$("input").val("Charlie");

// adding and removing a class to h1 (nedd to comment 'removeClass' to see the h1 with the class)
$("h1").addClass("wrong");
$("h1").removeClass("wrong");
// **adding toggleClass (at the console, paste the code below. Each time we run this, il will add/remove the class)**
$("li").toggleClass("done");

