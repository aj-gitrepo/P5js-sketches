let x, y;
let size;
let choice;

function setup() {
  createCanvas(400, 400);
  size = 20;
  choice = 0;
  frameRate(2);
}

function draw() {
  background(220);
  let nxtAdd = size;
  for (x = size; x < width; x += size) {
    ellipse(x, 20, size, size);
    line(x, 400, size, nxtAdd); //parabola lf
    line(400, x, nxtAdd, size); //parabola rt
    line(x, 50, nxtAdd, size); //straight lns
    line(x, 200, nxtAdd, nxtAdd); //x
    nxtAdd += size;
  }
}