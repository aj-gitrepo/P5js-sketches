function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.history = [];
  
  this.update = function() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    var v = createVector(this.x, this.y)
    this.history.push(v);
    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }
  
  this.show = function() {
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 20, 20);
    
    for(var i = 0; i < this.history.length; i++) 
    {
      var pos = this.history[i];
      fill(random(255));
      ellipse(pos.x, pos.y, i, i);
    }
  }
}