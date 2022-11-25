function Particle(x, y, col) {
  this.x = x;
  this.y = y;
  this.history = [];
  this.col = col;
  
  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    var v = createVector(this.x, this.y)
    this.history.push(v);
    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
    
    for(var i=0; i<this.history.length; i++)
    {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }
  }
  
  this.show = function() {
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 1, 1);
    
    noFill();
    stroke(this.col);
    beginShape();
    for(var i = 0; i < this.history.length; i++) 
    {
      var pos = this.history[i];
      vertex(pos.x, pos.y);
    }
    endShape();
  }
}