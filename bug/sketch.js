function setup() {
  createCanvas(500, 500);
  background(150, 150, 150);
}

function draw() {
  
  rectMode(CENTER);
  
  //Body
  fill(0, 0, 255);
  rect(240, 145, 20, 100);
  
  //Head
  fill(255, 0, 0);
  ellipse(240, 115, 60, 60);
  
  //Eyes
  fill(0, 255, 0);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);
  
  //Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}

// function mouseDragged() {
//   background(150, 150, 150);
//   ellipse(mouseX, mouseY, width- (width-mouseX+mouseY), height - (height-mouseY+mouseX));
// }

