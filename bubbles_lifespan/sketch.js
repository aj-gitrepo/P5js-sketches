var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (var i = bubbles.length - 1; i >= 0; i--)   {
    bubbles[i].update();
    bubbles[i].display();
  if (bubbles[i].isFinished()){
    bubbles.splice(i, 1);
  }
  }

}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));

}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
  //from index, how many
}