let catImage;
let color;
let x, y;

function preload() {
  catImage = 
    loadImage("https://placekitten.com/400/400");
  
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  background(255);
  // image(catImage, width/2, height/2, 400, 400);
  rectMode(CENTER);
}

function draw() {
  for (i = 0; i < 20; i++) {//increase speed
    x = random(0, width);
    y = random(0, height);
    color = catImage.get(x, y);
    // fill(color);
    noStroke();
    r = color[0];
    g = color[1];
    b = color[2];
    // fill(255-r, 255-g, 255-b);
    // fill(r, b, g);
    fill(255-r, b, g);
    // ellipse(x, y, 10, 10);
    rect(x, y, 10, 10);
  }

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