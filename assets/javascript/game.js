
// Initial array of Disney characters
var movies = ["Cinderella", "Ariel", "Ursula", "Rapunzel", "Moana", "Belle", "Mickey Mouse", "Goofy" ];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayDisneyCharacter() {
    var disneychoice = $(this).attr("data-name");
    // var movie = $(this).attr("data-name");
var getDis = "https://api.giphy.com/v1/gifs/search?api_key=xo2pGkkJnrWklqW1H9jNsX02IcWREuIV&q=" + disneychoice + "&limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: getDis,
    method: "GET"
  }).then(function(response) {
        console.log(response);
        
        var disresults = response.data
        for (i=0; i<6; i++) {
            if (i<3) {
            var gifDiv = $("<div class='item'>");
            var disimage = $("<img class=gif>");
            disimage.attr("src", disresults[i].images.original_still.url);           
            disimage.attr("data-still", disresults[i].images.original_still.url);
            disimage.attr("data-animate", disresults[i].images.original.url);
            disimage.attr("data-state", "still");
            gifDiv.append(disimage);
            $("#disgifdiv").prepend(gifDiv);}
        else
     {       
        var gifDiv2 = $("<div class='item'>");
        var disimage = $("<img class=gif>");
        disimage.attr("src", disresults[i].images.original_still.url);           
        disimage.attr("data-still", disresults[i].images.original_still.url);
        disimage.attr("data-animate", disresults[i].images.original.url);
        disimage.attr("data-state", "still");
        gifDiv2.append(disimage);
        $("#disgifdiv2").prepend(gifDiv2);
        }};


        $(".gif").on("click", function() {
            var state = $(this).attr("data-state");
      if (state == "still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "animate");
      }
     else
     {
       $(this).attr("src", $(this).attr("data-still"));
       $(this).attr("data-state", "still");
        }});
       
    });
};








    function renderbuttons() {
        $("#buttons-view").empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $("<button>");
            a.addClass("movie-btn");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons-view").append(a);}
    }

    $("#add-disney").on("click", function(event) {
        event.preventDefault();
        var disneychoice = $("#disney-input").val().trim();
        movies.push(disneychoice);
        renderbuttons();
      });

      $(document).on("click", ".movie-btn", displayDisneyCharacter);
      renderbuttons();











