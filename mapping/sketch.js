var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  r = map(mouseX, 0, 600, 0, 100);
  b = map(mouseX, 0, 600, 100, 0);
  //what, its min, its max, to min, to max
  background(r, 0, b);
  
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}