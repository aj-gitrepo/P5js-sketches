let segment;
let i;
let lineColor;
let numArray = [];

function setup() {
  createCanvas(1000, 1000);
  background(random(255), random(255), random(255), 200);
  angleMode(DEGREES);
  segment = 32;
  // lineColor = color(random(255), random(255), random(255));
  for(i = 0; i<=width; i+=5){
    numArray.push(i);
  }
  print(numArray);
}

function draw() {
  // lineColor = color(random(255), random(255), random(255));
  push();
  translate(width/2, height/2);
  for(i = 0; i < segment; i++) {
    rotate(360/segment);
    // strokeWeight(1);
    // line(0, 0, width, 0);
  }
  pop();
}

function mouseDragged() {
  lineColor = color(random(255), random(255), random(255));
  push();
  translate(width/2, height/2);
  for(i=0; i<segment; i++) {
    rotate(360/segment);
    stroke(lineColor);
    strokeWeight(3);
    // line(0, random(height/2), width/2, random(height/2));
    line(0, height-random(numArray), width-random(numArray), 0);
    
  }
  pop();
}

function mousePressed() {
  // lineColor = color(random(255), random(255), random(255));
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

