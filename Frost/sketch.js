let size = 20;
let choice = 0;
let x, y;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(220);
  for (x = size/2; x < width; x += size) {
    for (y = size/2; y < height; y += size) {
      // rect(x-size/2, y-size/2, size, size);
      choice = random(0, 2);
      if(choice < 0.5) {
        line(x-size/2, y-size/2, x+size/2, y+size/2);
      } else if (choice > 0.5 && choice < 1){
        line(x+size/2, y-size/2, x-size/2, y+size/2);
      }
    }
  }
}