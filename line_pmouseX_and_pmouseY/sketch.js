function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

function mouseDragged() {
  stroke(255, 0, 0);
  strokeWeight(7);
  line(mouseX, mouseY, pmouseX, pmouseY);
}