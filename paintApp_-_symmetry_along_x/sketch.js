let brush;
let redColor;
let yellowColor;

function setup() {
  createCanvas(400, 400);
  background(150,206,180);
  redColor = color(255,111,105);
  yellowColor = color(255,204,92);
  brush = redColor;
}

function draw() {
  //buttons to select color
  //red button
  fill(redColor);
  noStroke();
  rect(0, 0, 50, 50);
  //yellow button
  fill(yellowColor);
  noStroke();
  rect(0, 50, 50, 50);
}

function mouseDragged() {
  stroke(brush);
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width-mouseX, mouseY, width-pmouseX, pmouseY);
}

function mousePressed() {
  if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    brush = redColor;
  } else if(mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100) {
    brush = yellowColor;
  }
}

// https://www.color-hex.com/color-palette/895