var gravity = 0.1;

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.history = [];
  
  this.yspeed = 0;
  
  this.update = function() {
    this.y += this.yspeed;
    this.yspeed += gravity;
    // print(this.y);
    // print(this.yspeed);
    
    if(this.y > height) {
      this.y = height;
      this.yspeed *= -0.9;
    }
    var v = createVector(this.x, this.y)
    this.history.push(v);
    // print(this.history);
  }
  
  this.show = function() {
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, 20, 20);
    
    for(var i = 0; i < this.history.length; i++) 
    {
      var pos = this.history[i];
      ellipse(pos.x, pos.y, 8, 8);
      // print(pos.x);
    }
  }
}