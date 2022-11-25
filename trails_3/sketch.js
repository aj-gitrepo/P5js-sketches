var  particles = []

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(200);
  for(var i = 0; i<particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
  // line(frameCount, 0, frameCount, height);
}

function mousePressed() {
  var col = color(random(255),random(255),random(255));
  var particle = new Particle(mouseX, mouseY, col);
  particles.push(particle);
}