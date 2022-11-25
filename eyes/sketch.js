let iris;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  ellipse(150, 200, 50, 50);
  ellipse(250, 200, 50, 50);
  fill(0);
  irisX = map(mouseX, 0, 400, 135, 162);
  irisY = map(mouseY, 0, 400, 188, 202);
  ellipse(irisX, irisY, 20, 20);
  ellipse(irisX + 100, irisY, 20, 20);
}