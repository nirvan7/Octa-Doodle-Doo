var ground;
var prince,princeImg;
var score=0;
var bckground,backgroundImg;
var batAnimation,bat,batGroup;
var crystal,crystalImg,crystalGroup;
var flower,flowerImg,flowerGroup
var stone,stoneImg,stoneGroup
var lives=3;
var princess,princessImg;
var gameState="play"

function preload(){
princeImg=loadImage("images/Prince.jpg");
backgroundImg=loadImage("images/Forest.jpg");
crystalImg=loadImage("images/Crystal.jpg");
flowerImg=loadImage("images/Flower.jpg");
stoneImg=loadImage("images/Stone.png");
princessImg=loadImage("images/tiara.png");

batAnimation = loadAnimation("images/bat1.png","images/bat2.png","images/bat3.png",
                        "images/bat4.png","images/bat5.png","images/bat6.png",
                        "images/bat7.png","images/bat8.png","images/bat9.png",
                        "images/bat10.png","images/bat11.png","images/bat12.png");
}

function setup(){
createCanvas(1000,380);

crystalGroup=new Group();
flowerGroup=new Group();
stoneGroup=new Group();
batGroup=new Group();

ground=createSprite(500,380,1000,10);
ground.x=ground.width/2;
ground.velocityX=-7;

bckground=createSprite(0,100,1000,380);
bckground.addImage("backgroundImg",backgroundImg);
bckground.x=bckground.width/2;

prince=createSprite(80,330,30,100);
}
function draw(){
      
if(bckground.x<350)
  {
   bckground.x=bckground.width/2; 
  }
 bckground.velocityX=-7;

 if (gameState==="play"){    
if (crystalGroup.isTouching(prince)) {
    score=score+2; 
     crystalGroup.destroyEach();
  
}

     if (flowerGroup.isTouching(prince)) {
        score=score+1; 
         flowerGroup.destroyEach();
        
     }

     if (stoneGroup.isTouching(prince)){
         score=score-3;
         stoneGroup.destroyEach();
     }

      if (batGroup.isTouching(prince)){
         lives=lives-1;
         batGroup.destroyEach();
      }

      prince.debug=true

prince.addImage(princeImg);
	prince.scale = 0.3;
    ground.velocityX=-7;
if (ground.x<500){
    ground.x=ground.width/2
}

spawnCrystals();
spawnFlowers();
spawnBats();
spawnStones();

if (keyDown("UP")||keyDown("space")){
prince.velocityY=-8.5;

}

prince.velocityY=prince.velocityY+1;
prince.collide(ground);
if(keyDown("RIGHT")){;
    prince.x=prince.x+10;
   }
   else{
    if (keyDown("LEFT")){
      prince.x=prince.x-10;
    }
   }
   if (lives === 0)
   gameState="end";
   
   if (score>=2){  
      gameState="end";
      displayPrincess();}
}

   else if (gameState==="end") {
    prince.collide(ground);
    prince.velocityX=-0;
    prince.velocityY=0;
    ground.velocityX=0;
    bckground.velocityX=0;
    bat.visible = false;
    crystalGroup.destroyEach();
    flowerGroup.destroyEach();
    stoneGroup.destroyEach();
    prince.y=310;
   }
   
 
drawSprites();
textSize(24);
 fill("black");
 text("Score:"+score,100,40);

 textSize(24);
 fill("blue");
 text("Lives:"+lives,250,40);

 if (gameState==="end"){
    textSize(30);
    fill("blue");
 if (lives!=0)
 text("CONGRATULATUIONS! YOU ARE HOME",300,190);
 else 
 text("PRINCESS EATEN BY A MONSTER!",500,190);
 }
}

function spawnCrystals(){
if (frameCount %150 === 0){
    crystal=createSprite(200,200,20,20);
    crystal.y=Math.round(random(120,200));
    crystal.addImage(crystalImg);
    crystal.scale=0.04;  
    crystal.velocityX=-6;
    crystalGroup.add(crystal);
    }
}

function spawnFlowers(){
if (frameCount %100 === 0){
    flower=createSprite(250,250,20,20);
    flower.y=Math.round(random(120,200));
    flower.addImage(flowerImg);
    flower.scale=0.05;  
    flower.velocityX=-6;
    flowerGroup.add(flower);
    }
}

function spawnBats(){
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 200 === 0){
        bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        batGroup.add(bat);
    }
}

function spawnStones(){
    if (frameCount %250 === 0){
        stone=createSprite(500,350,10,40);
        stone.addImage(stoneImg);
        stone.scale=0.2;  
        stone.velocityX=-6;
        stoneGroup.add(stone);
        }
}

function displayPrincess(){
 princess=createSprite(700,330,30,100);
 princess.addImage(princessImg);
 princess.scale=0.3;
}