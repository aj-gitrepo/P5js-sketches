function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

}

function mouseDragged() {
  fill(0, 0, 0);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}