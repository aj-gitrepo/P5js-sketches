function setup() {
  loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=02ff729d3a221b48e9dbed52ca68642c&units=metric", gotData); //in p5js folder in all
  // loadJSON("astros.json", gotData);
}

function draw() {

}

function gotData(data) {
  print(data);
}