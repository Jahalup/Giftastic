
// Initial array of Disney characters
var movies = ["Maleficent", "The Evil Queen", "Ursula", "Yzma", "Jafar", "Hades", "Cruella De Vil"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayDisneyCharacter() {

// Clears out any old gifs
    $("#disgifdiv").empty();
    $("#disgifdiv2").empty();
    var disneychoice = $(this).attr("data-name");

// Giphy API
var getDis = "https://api.giphy.com/v1/gifs/search?api_key=xo2pGkkJnrWklqW1H9jNsX02IcWREuIV&q=" + disneychoice + "&limit=6&offset=0&rating=G&lang=en";

$.ajax({
    url: getDis,
    method: "GET"
  }).then(function(response) {
        console.log(response);
        
        var disresults = response.data

//  Code for displaying gifs left of image  
        for (i=0; i<6; i++) {
            if (i<3) {
            var gifDiv = $("<div class='item'>");
            var disimage = $("<img class=gif>");
            disimage.attr("src", disresults[i].images.original_still.url);           
            disimage.attr("data-still", disresults[i].images.original_still.url);
            disimage.attr("data-animate", disresults[i].images.original.url);
            disimage.attr("data-state", "still");
            var p = $("<p class=rating>").text("Rating: " + disresults[i].rating);
            gifDiv.append(disimage);
            $("#disgifdiv").prepend(gifDiv);
            gifDiv.append(p);}

// Code for displaying gifs right of image            
        else {       
            var gifDiv2 = $("<div class='item'>");
            var disimage = $("<img class=gif>");
            disimage.attr("src", disresults[i].images.original_still.url);           
            disimage.attr("data-still", disresults[i].images.original_still.url);
            disimage.attr("data-animate", disresults[i].images.original.url);
            disimage.attr("data-state", "still");
            var p = $("<p class=rating>").text("Rating: " + disresults[i].rating);
            gifDiv2.append(disimage);
            $("#disgifdiv2").prepend(gifDiv2);
            gifDiv2.append(p);
            }};

// Pausing and startign gifs when clicked
        $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
             }
         else
            {$(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }});
       
    });
};






// Function to create the buttons

    function renderbuttons() {
        $("#buttons-view").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie-btn");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons-view").append(a);
        }
    }


 // Adding a new button from user's input

    $("#add-disney").on("click", function(event) {
        event.preventDefault();
        var disneychoice = $("#disney-input").val().trim();
        movies.push(disneychoice);
        $("#input-form")[0].reset();
        renderbuttons();
      });

//Calling initial rendering of array buttons and movie button clicks
      $(document).on("click", ".movie-btn", displayDisneyCharacter);
      renderbuttons();











