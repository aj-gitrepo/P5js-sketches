function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 50 && mouseX < 150) {
    ellipse(mouseX, mouseY, 100, 100);
  } else if(mouseX > 150 && mouseX < 200) {
    rect (mouseX, mouseY, 100, 100);
  } else if(mouseX > 200 ) {
    line (300, 200, width-mouseX, height-mouseY);
  } else {
    point(mouseX, mouseY);
  }
}