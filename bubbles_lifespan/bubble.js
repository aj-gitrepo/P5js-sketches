function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);
  this.lifeSpan = 255;
  
  this.display = function() {
    // stroke(150);
    noStroke();
    fill(this.lifeSpan);
    ellipse(this.x, this.y, 24, 24);
  }
  
  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifeSpan -= 1;
  }
  
  this.isFinished = function() {
    if (this.lifeSpan < 0){
      return true;
    }else {
      return false;
    }
  }
}