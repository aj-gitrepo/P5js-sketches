var slider;
var angle = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 255, 50);
}

function draw() {
  var x = map(sin(angle), -1, 1, 0, 255);
  slider.value(x);
  
  background(slider.value());
  angle += 0.1
}