var spaceship
function setup() {
  createCanvas(windowWidth,windowHeight);
   spaceship=createSprite(windowWidth/2, windowHeight-50, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(touches.length>0){


 if(touches[0].x>width/2){
spaceship.x+=10
touches=[]

 }else {
spaceship.x-=10
touches=[]
 }
}
}