var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++)   {
    bubbles[i].move();
    bubbles[i].display();
  }
  
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}

function mousePressed() {
  // bubbles.push(new Bubble(mouseX, mouseY));
  for (var i = 0; i < bubbles.length; i++)   {
    bubbles[i].clicked();
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
  //from index, how many
}