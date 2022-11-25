let catImage;
let color;
let x, y, x1, y1;

function preload() {
  catImage = 
    loadImage("https://placekitten.com/400/400");
  
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  background(255);
  x = width/2;
  y = height/2;
}

function draw() {
  for(i = 0; i < 20; i++) {
    x1 = x + random(-10, 10);
    y1 = y + random(-10, 10);
    color = catImage.get(x, y);
    // stroke(random(255), random(255), random(255));
    stroke(color);
    strokeWeight(2);
    line(x, y, x1, y1);
    x = x1;
    y = y1;

    if(x <0 || x > width || y < 0 || y > height) {
      x = random(0, width);
      y = random(0, height);
    }
  }


}