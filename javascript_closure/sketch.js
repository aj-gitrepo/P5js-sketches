var x = 0;
var timer1;
var timer2;
var interval;
var startButton;
var stopButton;

function setup() {
  createCanvas(400, 400);
  timer1 = createP("timer1");
  timer2 = createP("timer2");
  
  makeTimer(timer1, 500);
  makeTimer(timer2, 1000);
  
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

function makeTimer(elt, wait) {
  var counter = 0;
  setInterval(timeIt, wait);
  function timeIt() {
    elt.html(counter);
    counter += 1;
  }
}

// closure - function inside function with dependant variables