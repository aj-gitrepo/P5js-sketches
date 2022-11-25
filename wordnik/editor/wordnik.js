var url1 = "https://api.wordnik.com/v4/word.json/";
var word = "rainbow"; 
var url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var link;

function setup() {
  link = createA('#', word);
  link.mousePressed(askWordnik);
  // loadJSON(url1 + word + url2, gotData);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  // print(data);
  // print(data[0].words[0]);
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
}

// wordnik
// https://developer.wordnik.com/docs#/words

// Array(5) [ {…}, {…}, {…}, {…}, {…} ]
// ​
// 0: Object { relationshipType: "cross-reference", words: (2) […] }
// ​
// 1: Object { relationshipType: "equivalent", words: (1) […] }
// ​
// 2: Object { relationshipType: "hypernym", words: (4) […] }
// ​
// 3: Object { relationshipType: "same-context", words: (10) […] }
// ​
// 4: Object { relationshipType: "synonym", words: (10) […] }
// ​
// length: 5