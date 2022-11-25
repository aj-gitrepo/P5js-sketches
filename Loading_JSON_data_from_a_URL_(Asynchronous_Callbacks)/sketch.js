function setup() {
  createCanvas(200, 200);
  // loadJSON("http://api.open-notify.org/astros.json", "json", gotData); //in p5js folder in all
  loadJSON("astros.json", gotData);
}

function draw() {

}

function gotData(data) {
  // print(data.people[1].name);
  print(data.number);
  background(0);
  for (var i=0; i<data.number; i++) {
    fill(255);
    ellipse(random(width), random(height), 16, 16);
  }
}