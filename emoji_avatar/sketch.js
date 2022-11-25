function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background('#79bec3');
  //face
  fill('#fde7b1');
  ellipse(mouseX/10 + 200, mouseY/10 + 200,  200, 200);
  //eyes
  fill('#000000');
  ellipse(mouseX/10 + 150, mouseY/10 + 210, 20, mouseY/30 + 5);
  ellipse(mouseX/10 + 250, mouseY/10 + 210, 20, mouseY/30 + 5);

  //cheeks
  fill('#ffd5b399');
  ellipse(mouseX/10 + 140, mouseY/10 + 240, 25, 20);
  ellipse(mouseX/10 + 260, mouseY/10 + 240, 25, 20);
  //mouth
  fill('#ffa791');
  ellipse(mouseX/10 + 200, mouseY/10 + 240, 20, mouseX/20 + 5);
}