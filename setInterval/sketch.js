var x = 0;
var timer;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  timer = createP("timer");
  setInterval(timeIt, 500);
}

function draw() {
  background(0);
  // timer.html(frameCount);
  stroke(255);
  line(x, 0, x, height);
  x = x + 3
  
  if (x > width) {
    x = 0;
  }
}

function timeIt() {
  timer.html(counter);
  counter += 1;
}