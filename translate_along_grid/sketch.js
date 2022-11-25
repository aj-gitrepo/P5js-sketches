let size = 50;
let x, y;
let r = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(10);
}

function draw() {
  background(220);
  
  for(x=size/2; x < width; x += size){
    for(y=size/2; y < height; y += size) {
      push();
      translate(x, y);
      // rotate(r);
      rotate(mouseX);
      scale(mouseY/200);
      rect(0, 0, size/2, size/2);
      rotate(0);
      ellipse(0, 0, size/3, size/3);
      rotate(mouseX);
      fill(0, 0, 0);
      ellipse(0, 0, size/8, size/10);
      pop();
    }
    // r += 1;
  }
}