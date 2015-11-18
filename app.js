$(function(){
  loadGifs();
})

function loadGifs() {
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
  $.getJSON(url, function(giphy){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var rendered = template(giphy);
    $('body').append(rendered);
  })
}
