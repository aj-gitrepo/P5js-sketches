function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  lollipop(300, 200, 100);
  lollipop(100, 50, 50);
}

function lollipop(x, y, dia) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);
  
  fill(255, 0, 200);
  ellipse(x, y, dia, dia);
}