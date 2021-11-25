function setup() {
  canvas = createCanvas(450,450);
  background('Pink');
  canvas.parent('processing');
  //noLoop();
}

function kerk(dakhoogte, kleurcirkel, cirkelbreedte){
  noStroke();
  fill('steelblue');
  rect(175,100,100,300);
  triangle(225,50 - dakhoogte,275,100,175,100);
  fill(kleurcirkel);
  ellipse(225,150,cirkelbreedte)
  fill('black')
  ellipse(225,150,10)
}

function draw() {
  kerk(10,'pinkLightYellow', 75);
}