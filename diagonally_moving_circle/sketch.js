var size = 50;
var x = 400;
var y = 400;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  ellipse(x, y, size, size);
  y -= 10;
  x -= 10;
}