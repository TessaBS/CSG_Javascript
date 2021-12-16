
function setup() {
  canvas = createCanvas(900,450);
  canvas.parent('processing');
  noLoop();
  noStroke();
}

function draw() {
  background(230);
  translate(0,50);
  for(var kolom = 0; kolom<5; kolom +=1){
    fill('yellow');
    rect(25,-25,800,50);
    C=random(9,12)
    R = random(0,255)
    G = random(0,255)
    B = random(0,255)
    push();
    for(var x = 0; x<C; x +=1){
    translate(50,0);
    teamLid(R,G,B);
    }
    pop();
    translate(0,75);
  }

}

function teamLid(a,b,c) {
  push();
  fill(a,b,c);
  ellipse(0,0,40);
  stroke(4);
  fill(0);
  bezier(-10,15,5,0,10,0,15,10);
  ellipse(-10,-5,10);
  ellipse(10,-5,10);
  pop();
}