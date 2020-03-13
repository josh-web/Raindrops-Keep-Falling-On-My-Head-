var drops = [];

function setup() {
  createCanvas(650, 450);
  for (var i = 0; i < 300; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
     drops[i].fall();
     drops[i].show();
  }
}