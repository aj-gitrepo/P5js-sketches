let x;
let i;
let size = 20;

function setup() {
  createCanvas(400, 400);
  // background(random(255), random(255), random(255));
  frameRate(7);
  rectMode(CENTER);
  angleMode(DEGREES) //to enter angle in degrees
}

function draw() {
  background(random(255), random(255), random(255));
  
  push()
  translate(200, 200) //x, y of origin
  
  for(i=0; i<8; i++) {
    // line(0, 0, 200, 0);
    // noStroke();
    for(x=0; x<width/3; x+=25){
      size = random(0, 25)
      fill(random(255), random(255), random(255));
      ellipse(x+25, 0, size, size);
      fill(random(255), random(255), random(255));
      rect(x+25, 0, size-5, size-5);
      rotate(22.5);
      fill(random(255), random(255), random(255));
      ellipse(x+50, 0, size, size);
      fill(random(255), random(255), random(255));
      rect(x+50, 0, size-5, size-5);
      rotate(-22.5);
    }
    // ellipse(100, 0, 20, 20);
    rotate(45); //rotate canvas
  }

  pop();
  
  // rect(0, 0, 50, 50);
  // will not be rotated
}