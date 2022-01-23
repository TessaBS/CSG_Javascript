function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  tekenTegel(50 + 100 / 9,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill(242, 136, 136);
  triangle(0,0,25,25,50,0); 
  fill(255,255,255);
  triangle(25,25,50,50,25,50); 
  fill(158, 184, 166);
  triangle(50,50,25,25,0,50);
  fill('rosybrown');
  triangle(0,0,25,25,0,25);
  triangle(50,50,25,25,50,25);
  fill('palevioletred');
  triangle(0,50,25,25,0,25);
  pop();
}