var tree = [];
var  count = 0;
var leaves = [];

function setup() {
  createCanvas(400, 400);

  var a = createVector(width/2, height);
  var b = createVector(width/2, height-100);
  var root = new Branch(a, b);
  
  tree[0] = root;
}

function mousePressed() {
  for(var i=tree.length-1; i>=0; i--) //to prevent redrawing
  {
    if(!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true
  }
  count++;
  if(count === 6) //after creating 5 branches 
  { 
    for(var j = 0; j<tree.length; j++) {
      if (!tree[j].finished) {
        var leaf = tree[j].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(51);
  
  for(var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }
  
  for(var j=0; j<leaves.length; j++){
    fill(255, 0, 100);
    noStroke();
    ellipse(leaves[j].x, leaves[j].y, 8, 8);
    leaves[j].y += random(0, 1);//fall
  }
}
