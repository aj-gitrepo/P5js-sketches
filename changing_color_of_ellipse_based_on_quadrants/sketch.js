function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  if (mouseX < 200 && mouseY < 200) {
    fill(255, 0, 0); //red
  } else if(mouseX > 200 && mouseY < 200) {
    fill(0, 255, 0); //blue
  } else if(mouseX < 200 && mouseY > 200) {
    fill(0, 0, 255); //green
  } else if(mouseX > 200 && mouseY > 200) {
    fill(0, 0, 0); //black
  } else {
    fill(255, 255, 255); //white
  }
  
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}