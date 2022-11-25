let x;
let i;
let size = 20;

function setup() {
  createCanvas(400, 400);
  background(220);
  // frameRate(5);
  rectMode(CENTER);
}

function draw() {
  // background(220);
  for (x=25; x< width; x += 50) {
    for (y=25; y < height; y += 50) {
      size = random(10, 40);
      shape = random(0, 1);
      if (shape < 0.5) {
        ellipse(x, y, size, size);
      } else {
        rect(x, y, size, size);
      }
    }
  }
}