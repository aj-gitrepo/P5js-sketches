function Bubble(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img
  this.col = color(255, 100);
  this.r = 24;
  this.changeColor = function() 
  { 
    this.col = color(random(255), random(255), random(255));
  }
  
  this.display = function() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, 50, 50);
  }
  
  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  
  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x,  other.y);
    if ( d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
  
}