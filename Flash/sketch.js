let segment;
let i;
let lineColor;
let x, y, x1, y1;

function setup() {
  createCanvas(1000, 1000);
  background(random(255), random(255), random(255), 200);
  angleMode(DEGREES);
  segment = 32;
  x = width/2;
  y = height/2;
  for(l=0; l<40; l++) {
    lineDraw();
  }
}

function draw() {
  for(l=0; l<40; l++) {
    lineDraw();
  }
}

function lineDraw() {
  // background(random(255), random(255), random(255), 200);
  // for(k=0; k< 20; k++) {
    push();
    translate(width/2, height/2);
    for(j=0; j<segment; j++) {
      lineColor = color(random(255), random(255), random(255));
        x1 = x + random(-50, 50);
        y1 = y + random(-50, 50);
      for(i=0; i<segment; i++) {
        rotate(360/segment);
        stroke(lineColor);
        strokeWeight(3);
        line(x, y, x1, y1);

      }
        x = x1;
        y = y1;

        if(x <0 || x > width || y < 0 || y > height) {
          x = random(0, width);
          y = random(0, height);
        }
    }
    pop();
  // }
}

function mousePressed() {
  lineDraw();
  // lineDraw();
}

