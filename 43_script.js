// //OBJECTS EXERCISE
// var someObjects = {
//     friends: [
//         {name: "Malfoy"},
//         {name: "Crabbe"},
//         {name: "Goyle"}
//     ],
//     color: "baby blue",
//     isEvil: true
// };
// //selecting the friend called Malfoy
// someObject.friends[1];

var movies = [
    {
        title: "Alladin",
        rating: 5,
        hasWatched: true
    },
    {
        title: "The Lion King",
        rating: 4.8,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Joker",
        rating: 4.5,
        hasWatched: false
    }
];
// //FIRST OPTION 
// movies.forEach(function (movie) {
//     var result = "You have ";
//     if (movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen ";
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + " stars";
//     console.log(result);
// });

//SECOND OPTION
function buildString(movie){
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
return result;
} 

movies.forEach(function(movie){
    console.log(buildString(movie));
});


// //TENTATIVA ERRADA
// movies.forEach(function(element) {

//     if (hasWatched === true) {
//     var x = 0; 
//     for (element; x <= movies.length; x++){}
//     }
//     console.log(movies[x].title + " - " + movies[x].rating);
// });


function names(movies){
    movies.forEach(title => {
        console.log(title.title);
    });
}

names(movies);

names([{title: "Evandro"}, {title: "Cindy"}]);

