var word = "rainbow";
// var url = `http://api.giphy.com/v1/gifs/search?&q=${word}&api_key=ZPHbjFga1IrHC94v5rODIQGnozkUa12s`;
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=ZPHbjFga1IrHC94v5rODIQGnozkUa12s";
var query = `&q=${word}`
function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
  
}

function gotData(giphy) {
  for(var i=0; i<giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
  
}

// giphy
// https://developers.giphy.com/docs/api/endpoint#search
// https://api.giphy.com/v1/gifs/search?&api_key=ZPHbjFga1IrHC94v5rODIQGnozkUa12s&q=rainbow