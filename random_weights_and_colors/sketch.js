let brushSize = 1;

function setup() {
  createCanvas(400, 400);
  background(random(255), random(255), random(255));
}

function draw() {}

function mouseDragged() {
  brushSize = random(1, 40);
  stroke(random(255), random(255), random(255));
  strokeWeight(brushSize);
  line(mouseX, mouseY, pmouseX, pmouseY);
}