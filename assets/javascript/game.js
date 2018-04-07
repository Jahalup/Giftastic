
// Initial array of Disney characters
var movies = ["Cinderella", "Ariel", "Ursula", "Rapunzel", "Moana", "Belle", "Mickey Mouse", "Goofy" ];

// displayMovieInfo function re-renders the HTML to display the appropriate content
// function displayDisneyCharacter() {
    var disneychoice = "ursula";
    // var movie = $(this).attr("data-name");
var getDis = "https://api.giphy.com/v1/gifs/search?api_key=xo2pGkkJnrWklqW1H9jNsX02IcWREuIV&q="+disneychoice+"&limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: getDis,
    method: "GET"
  }).then(function(response) {
        console.log(response);
        
        var disresults = response.data
        for (i=0; i<disresults.length; i++) {
            var gifDiv = $("<div class='item'>");
            var disimage = $("<img>");
            disimage.attr("src", disresults[i].images.original_still.url);
            gifDiv.append(disimage);
            $("#disgifdiv").prepend(gifDiv);
        }
// Div to hold gifs
      
       
       
        
        

        ;}
);

