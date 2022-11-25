var bubbles = [];
var flowers = [];

function preload() {
  for(var i = 0; i < 3; i++) {
    flowers[i] = loadImage(`images/flower${i}.png`);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
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

function mousePressed() {
  var r = floor(random(0, flowers.length));
  var b = new Bubble(mouseX, mouseY, flowers[r]);
  bubbles.push(b);
}