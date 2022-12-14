var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for( var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}