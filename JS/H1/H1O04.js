function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  noStroke();
  fill(245, 222, 179);
  rect(0,350,450,450);

  strokeWeight(4);
  stroke(169, 169, 169);
  fill(211, 211, 211);
  rect(100,280,100,100);

  fill(128, 128, 128);
  triangle(100,280,200,280,150,200);

  noStroke();
  rect(120,330,30,50);
  
  fill('khaki');
  ellipse(350,100,150)

  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320, 230, 100, 150)
}
