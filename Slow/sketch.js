let brush;
let redColor;
let yellowColor;
let symmetry;

function setup() {
  createCanvas(400, 400);
  background(150,206,180);
  redColor = color(255,111,105);
  yellowColor = color(255,204,92);
  brush = redColor;
  symmetry = 1;
}

function draw() {
  strokeWeight(1);
  //buttons to select color
  //red button
  fill(redColor);
  noStroke();
  rect(0, 0, 50, 50);
  //yellow button
  fill(yellowColor);
  noStroke();
  rect(0, 50, 50, 50);
  
  //button for symmetry
  stroke(0, 0, 0);
  fill(255,238,173);
  rect(width-50, 0, 50, 50);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  text("1", width-25, 25); //letter, x, y
  //button for 2 sided symmetry
  fill(255,238,173);
  rect(width-50, 50, 50, 50);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  text("2", width-25, 75);
  //button for 4 sided symmetry
  fill(255,238,173);
  rect(width-50, 100, 50, 50);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  text("4", width-25, 125);
}

function mouseDragged() {
  stroke(brush);
  strokeWeight(5);
  if (symmetry == 2) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width-mouseX, mouseY, width-pmouseX, pmouseY);
  } else if (symmetry == 1) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (symmetry == 4) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width-mouseX, mouseY, width-pmouseX, pmouseY);
    line(mouseX, height-mouseY, pmouseX, height-pmouseY);
    line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
  }
}

function mousePressed() {
  if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    brush = redColor;
  } else if(mouseX > 0 && mouseX < 50 && mouseY > 50 && mouseY < 100) {
    brush = yellowColor;
  } else if(mouseX > width-50 && mouseX < width && mouseY > 0 && mouseY < 50) {
    symmetry = 1;
  } else if(mouseX > width-50 && mouseX < width && mouseY > 50 && mouseY < 100) {
    symmetry = 2;
  } else if(mouseX > width-50 && mouseX < width && mouseY > 100 && mouseY < 150) {
    symmetry = 4;
  }
}

// https://www.color-hex.com/color-palette/895