let catImage;
let color;

function preload() {
  catImage = 
    loadImage("https://placekitten.com/400/400");
  
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  background(220);
  // image(catImage, width/2, height/2, 400, 400);
}

function draw() {
  // image(catImage, width/2, height/2, 400, 400);
  // color = catImage.get(mouseX, mouseY);
  // fill(color);
  // noStroke();
  // ellipse(mouseX, mouseY, 10, 10);
  
}

function mousePressed() {
  color = catImage.get(mouseX, mouseY);
  print(color);
}

function mouseDragged() {
  color = catImage.get(mouseX, mouseY);
  fill(color);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}