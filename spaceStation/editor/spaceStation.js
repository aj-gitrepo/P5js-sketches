var x = 0;
var url = "http://api.open-notify.org/iss-now.json";
var issX = 0;
var issY = 0;

function setup() {
  createCanvas(400, 200);
  setInterval(askISS, 1000)
  
}

function draw() {
  background(51);

  fill(255);
  ellipse(issX, issY, 24, 24);
  stroke(255);
  line(x, 0, x, height);
  x += 1;
  if (x > width) {
    x = 0
  }
}

function gotData(data) {
  // print(data);
  print(data.iss_position.latitude);
  print(data.iss_position.longitude);

  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;

  // issX = map(lat, -90, 90, 0, width);
  // issY = map(long, -180, 180, 0, height);
  issX = map(lat, 30, 40, 0, width);
  issY = map(long, 20, 30, 0, height);
}

function askISS() {
  loadJSON(url, gotData, 'jsonp');
}

// international space station current location