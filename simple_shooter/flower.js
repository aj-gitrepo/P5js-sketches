function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 1;
  this.ydir = 0;
  
  this.show = function() {
    noStroke();
    fill(255, 0, 150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.move = function() {
    this.x += this.xdir;
    this.y += this.ydir;
  }
  
  this.grow = function() {
    this.r += 2;
  }
  
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }
}