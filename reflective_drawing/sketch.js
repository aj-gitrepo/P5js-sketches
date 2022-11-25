let segment;
let i;
let lineColor;

function setup() {
  pixelDensity(10);
  createCanvas(300, 300);
  background(random(255), random(255), random(255), 200);
  angleMode(DEGREES);
  segment = 32;
  // lineColor = color(random(255), random(255), random(255));
}

function draw() {
}

function mouseDragged() {
  lineColor = color(random(255), random(255), random(255));
  push();
  translate(width/2, height/2);
  for(i=0; i<segment; i++) {
    rotate(360/segment);
    stroke(lineColor);
    strokeWeight(1);
    line(pmouseX-width/2, pmouseY-height/2, mouseX-width/2, mouseY-height/2);
  }
  pop();
}

function mousePressed() {
  // save("content.png");
  if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    segment = 4;
  } else if (mouseX > width-50 && mouseX < width && mouseY > 0 && mouseY < 50) {
    segment = 8;
  } else if (mouseX > 0 && mouseX <50 && mouseY > height-50 && mouseY < height) {
    segment = 16;
  } else if (mouseX > width-50 && mouseX < width && mouseY > height-50 && mouseY < height) {
    segment = 32;
  }
}

