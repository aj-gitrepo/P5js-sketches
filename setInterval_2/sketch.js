var x = 0;
var timer;
var counter = 0;
var interval;
var startButton;
var stopButton;

function setup() {
  createCanvas(400, 400);
  timer = createP("timer");
  startButton = createButton('start timer');
  startButton.mousePressed(startTimer);
  stopButton = createButton('stop timer');
  stopButton.mousePressed(stopTimer);
  
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

function startTimer() {
  interval = setInterval(timeIt, 500);
}

function stopTimer() {
  clearInterval(interval); 
}

// function mousePressed() {
//   clearInterval(interval);
// }