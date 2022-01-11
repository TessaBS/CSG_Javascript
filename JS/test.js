var visX = 0
var visY = 0

function setup() {
  canvas = createCanvas(600,400);
  canvas.parent('processing');
  frameRate(30);
  background('lightblue');
}

function draw() {
  noStroke();
  fill('lightblue');
  rect(0,0,600,400);
  fill('brown');
  rect(0,350,600,50);

  if(visX < 600){
    if(visY < 400){
      translate(visX,visY);
      visX+= 2;
      visY++;
    }
  }
  visX = constrain(visX,0,475);
  visY = constrain(visY,0,275)
  for(n=0; n<3; n++){
    scale(0.5);
    tekenVis();
  }
}

function tekenVis(){
  if(mouseX < 300){
    fill('red');
  }
  else{
    fill('orange');
  }
  ellipse(100,100,50);
  triangle(50,75,100,100,50,125);
}
