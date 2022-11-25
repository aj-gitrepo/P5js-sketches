var x = 0;

function setup() {
  createCanvas(400, 400);
  setTimeout(rainbow, 3000);
  // rainbow();
}

function draw() {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3
  
  if (x > width) {
    x = 0;
  }
}

function rainbow() {
  createP('rainbow');
  setTimeout(rainbow, 3000);
}

// function mousePressed() {
//   setTimeout(rainbow, 3000);
// }