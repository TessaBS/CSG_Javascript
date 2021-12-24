var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  background(brug);
  tekenRaster();
  image(spriteJos,4*celGrootte,3*celGrootte);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for(var rij=0; rij<aantalRijenRaster*celGrootte; rij += celGrootte){
    for(var kolom=0; kolom<aantalKolommenRaster*celGrootte; kolom+= celGrootte){
      rect(kolom,rij,celGrootte,celGrootte);
    }
  }
  pop();
}