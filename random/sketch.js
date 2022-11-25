var pointData = {
  x: 0,
  y: 100,
  size: 1
};

var col = {
  r: 255, 
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
  frameRate(3);
}

function draw() {
  pointData.x = random(600);
  pointData.y = random(600);
  pointData.size = random(1, 200);
  col.r = random(0, 255);
  col.b = random(0, 255)
  fill(col.r, col.g, col.b, 100);
  noStroke();
  ellipse(pointData.x, pointData.y, pointData.size, pointData.size);
}