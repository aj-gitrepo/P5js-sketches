function setup() {
  createCanvas(400, 400);
  background(random(255));
  frameRate(3);
}

function draw() {
  
  noStroke();
  rectMode(CENTER);
  
//   face
  fill(255);
  ellipse(200, 200, 300, 300);
  fill(random(255), random(255), random(255));
//   eyes
  ellipse(150, 150, random(5, 30), random(5, 30));
  fill(random(255), random(255), random(255));
  rect(150, 150, random(5, 20) - 5, random(5, 20)- 5);
  ellipse(250, 150, random(5, 20)- 5, random(5, 20)- 5);
// mouth
  ellipse(200, 250, random(5, 80), random(5, 40));
}