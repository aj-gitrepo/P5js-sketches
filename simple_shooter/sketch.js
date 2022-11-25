var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for(var i=0; i<6; i++) {
    flowers[i] = new Flower(i*80+80, 60);
  }  
}

function draw() {
  background(0);
  ship.show();
  ship.move();
  
  for(var i=0; i<drops.length; i++)   {
    drops[i].show();
    drops[i].move();
    for(var k=0; k<flowers.length; k++) {
      if(drops[i].hits(flowers[k]))
      {
        flowers[k].grow();
        drops[i].evaporate();
      }
    }
  }
  var edge = false;
  for(var j=0; j<flowers.length; j++) {
    flowers[j].show();
    flowers[j].move();
    if(flowers[j].x > width || flowers[j].x < 0) {
      edge = true;
    }
  }
  
  if(edge) {
    for(var m=0; m<flowers.length; m++) {
      flowers[m].shiftDown();
    }
  }
  
  for(var l=drops.length-1; l>=0; l--)   
  {
      if(drops[l].toDelete) {
      drops.splice(l, 1);
    }
  }

}

function keyPressed() {
  if(key === ' ') {
    var drop = new Drop(ship.x, height-60);
    drops.push(drop);
  }
  
  if(keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function keyReleased() {
  if(key !== ' ') {
    ship.setDir(0);
  }
  
}