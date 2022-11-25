var Spacing = 125;
var Offset = 100;
var minSize = 20;
var maxSize = 100;
var colors = ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
var rectSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background('#264643');
  noStroke();
  frameRate(3);
}

function draw() {
  var circleCountx = (windowWidth - 100) / Spacing;
  var circleCounty = (windowHeight - 100) / Spacing;
  
  
  for (let c=0; c < 12; c++) {
    for (let i=0; i < circleCountx; i++) {
      for (let j=0; j < circleCounty; j++) {
        let colorPicker = int(random(colors.length));
        fill(colors[colorPicker]);
        let size = random(minSize, maxSize);
        ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
        rect(Offset + Spacing * i, Offset + Spacing * j, size-rectSize, size-rectSize);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    save("mySVG.svg");
    noLoop();
  }
}