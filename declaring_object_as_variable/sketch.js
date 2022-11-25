var data = {
  x: 0,
  y: 200,
  dia : 20
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(data.x, data.y, data.dia, data.dia);
  data.x += 1;
}