var word = "rainbow";
// var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=ZtiTs0QAmHFIFsSIs14CiMKOVnBePd3S`;
// var articles;
var getInfo;
var userInput;

function setup() {
  noCanvas();
  userInput = select('#userInput');
  getInfo = select('#getInfo');
  // loadJSON(url, gotData);
  getInfo.mousePressed(news);
  
}

function gotData(data) {
  // print(data);
  var articles = data.response.docs;
  for(var i = 0; i<articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].lead_paragraph);
  }
  print(data.response.docs[0].abstract);
  print(data.response.docs[0].headline.main);

}

function news() {
  word = userInput.value();
  url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${word}&api-key=ZtiTs0QAmHFIFsSIs14CiMKOVnBePd3S`;
  loadJSON(url, gotData);
}

// nyTimes
// https://developer.nytimes.com/docs/articlesearch-product/1/overview