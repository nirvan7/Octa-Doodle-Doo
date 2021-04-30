var ground;
var prince;
var score=0;
function preload(){

}
function setup(){
createCanvas(1000,800);
prince=createSprite(100,750,30,100);
ground=createSprite(0,800,1000,12.5);
ground.x=ground.width/2;
ground.velocityX=-7;
}
function draw(){
background("cyan");
text("Score:"+score,50,50);
if (ground.x<0){
    ground.x=ground.width/2
}

if (keyDown("UP")||keyDown("space"))
prince.velocityY=-8.5;
prince.velocityY=prince.velocityY+1;
prince.collide(ground);
drawSprites();
}