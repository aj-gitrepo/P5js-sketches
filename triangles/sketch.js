let size = 20;
let choice = 0;
let x, y;

function setup() {
  createCanvas(400, 400);
  // translate(300, 300);
  frameRate(1);
  background(random(255), random(255));
  noStroke();
  for (x = size / 2; x < width; x += size) {
    for (y = size / 2; y < height; y += size) {
      // rect(x-size/2, y-size/2, size, size);
      choice = random(0, 2);
      if (choice < 0.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x - size / 2,
          y + size / 2
        );
      } else if (choice > 0.5 && choice < 1) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x + size / 2,
          y - size / 2
        );
      } else if (choice > 1 && choice < 1.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x + size / 2,
          y - size / 2,
          x - size / 2,
          y + size / 2,
          x - size / 2,
          y - size / 2
        );
      } else {

          triangle(
            x + size / 2,
            y - size / 2,
            x - size / 2,
            y + size / 2,
            x + size / 2,
            y + size / 2
          );
        }
    }
  }
}

function mousePressed() {
  background(random(255), random(255));
  noStroke();
for (x = size / 2; x < width; x += size) {
    for (y = size / 2; y < height; y += size) {
      // rect(x-size/2, y-size/2, size, size);
      choice = random(0, 2);
      if (choice < 0.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x - size / 2,
          y + size / 2
        );
      } else if (choice > 0.5 && choice < 1) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x + size / 2,
          y - size / 2
        );
      } else if (choice > 1 && choice < 1.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x + size / 2,
          y - size / 2,
          x - size / 2,
          y + size / 2,
          x - size / 2,
          y - size / 2
        );
      } else {

          triangle(
            x + size / 2,
            y - size / 2,
            x - size / 2,
            y + size / 2,
            x + size / 2,
            y + size / 2
          );
        }
    }
  }
  for (x = size / 2; x < width; x += size) {
    for (y = size / 2; y < height; y += size) {
      // rect(x-size/2, y-size/2, size, size);
      choice = random(0, 2);
      if (choice < 0.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x - size / 2,
          y + size / 2
        );
      } else if (choice > 0.5 && choice < 1) {
        fill(random(255), random(255), random(255));
        triangle(
          x - size / 2,
          y - size / 2,
          x + size / 2,
          y + size / 2,
          x + size / 2,
          y - size / 2
        );
      } else if (choice > 1 && choice < 1.5) {
        fill(random(255), random(255), random(255));
        triangle(
          x + size / 2,
          y - size / 2,
          x - size / 2,
          y + size / 2,
          x - size / 2,
          y - size / 2
        );
      } else {

          triangle(
            x + size / 2,
            y - size / 2,
            x - size / 2,
            y + size / 2,
            x + size / 2,
            y + size / 2
          );
        }
    }
  }
}
