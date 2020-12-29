function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255); 
  
let h = hour();
let m = minute();
let s = second();

strokeWeight(8);
stroke(255,100,150);
noFill();

let se = map(h,0,60,0,360);
arc(200,200,300,300,0,se);

stroke(150,100,255);
let mi = map(m,0,60,0,360);
arc(200,200,280,280,0,mi);

stroke(150,255,100);
let hr = map(h,0,60,0,360);
arc(200,200,260,260,0,hr);


  drawSprites();
}