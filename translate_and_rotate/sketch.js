let x;
let i;
let size = 20;

function setup() {
  createCanvas(400, 400);
  // background(220);
  frameRate(5);
  // rectMode(CENTER);
  angleMode(DEGREES) //to enter angle in degrees
}

function draw() {
  background(220);
  
  push()
  translate(200, 200) //x, y of origin
  
  for(i=0; i<8; i++) {
    line(0, 0, 200, 0);
    
    ellipse(50, 0, 20, 20);
    rotate(22.5);
    ellipse(75, 0, 20, 20);
    rotate(-22.5);
    ellipse(100, 0, 20, 20);
    rotate(45); //rotate canvas
  }

  pop();
  
  // rect(0, 0, 50, 50);
  // will not be rotated
}