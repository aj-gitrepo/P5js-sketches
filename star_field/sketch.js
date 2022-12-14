var stars = [];
var speed;

function setup() {
  createCanvas(800, 800);
  for(var i = 0; i<800; i++) 
  {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 5, 50);
  background(0);
  translate(width/2, height/2);
  for(var i = 0; i<stars.length; i++) 
  {
    stars[i].update(speed);
    stars[i].show();
  }
}