var mario ,mario_running
var dead
var pipe,pipeImg
var ground,groundImg
var killer,killer_running
var pipegrp,killgrp,yyy
var mushroom,mushroomImg
var PLAY = 1
var END = 0
var gameState = PLAY
function preload(){
mario_running = loadAnimation("mario1.png", "mario2.png" );
pipeImg= loadImage("pipes.png")
killer_running = loadAnimation("enemy1.png", "enemy2.png" );
dead= loadAnimation("mario_dead.png")
groundImg=loadImage("gro.png")
yyy =loadAnimation("enemy1.png")
mushroomImg=loadImage("mush.jpg")
}
function setup(){
createCanvas(windowWidth,windowHeight)
//create a trex sprite
mario = createSprite(50,600,20,50); 
mario.addAnimation("running", mario_running);
mario.scale=0.35
ground = createSprite(width/2,600,10000,10); 
ground.addImage("gro",groundImg)

pipegrp= new Group()
mushgrp=new Group()
killgrp= new Group()
}


function draw(){

background("white")
if (gameState==PLAY) {
  if (keyDown("space")&& mario.y>=521.75){
  mario.velocityY=-12
  }
  if (keyDown("space")&& mario.y>=  442.15){
    mario.velocityY=-12
    }
if (mushgrp.isTouching(mario)) {
  mario.scale =0.5
}
  if (ground.x<300){
    ground.x=ground.width/2
  }
  ground.velocityX=-3
  mario.velocityY=mario.velocityY+0.5
  draw_pipe()
  draw_ene()
draw_mush()
  if (killgrp.isTouching(mario)) {
    gameState=END
  }
}

 else if(gameState==END){
ground.velocityX=0
killgrp.setVelocityXEach(0)
pipegrp.setVelocityXEach(0)
mario.addAnimation("running",dead)

}

mario.collide(ground)
mario.collide(pipegrp)
console.log(mario.y)


drawSprites();



}
function draw_pipe(){
if (frameCount% 200==0) {
  pipe = createSprite(900,547,20,50); 
pipe.addImage("pipee", pipeImg);
pipe.scale=0.6
pipe.velocityX=-8
pipegrp.add(pipe)
}

}
function draw_ene(){
  if (frameCount% 150==0) {
    killer = createSprite(width,547,20,50); 
    killer.addAnimation("killer", killer_running);
    killer.scale=0.16
    killer.velocityX=-8
  killgrp.add(killer)
    
  }
  }
  function draw_mush(){
    if (frameCount% 700==0) {
     mushroom = createSprite(width,547,20,50); 
      mushroom.addImage("mushhh", mushroomImg);
      mushroom.scale=0.16
  
mushroom.velocityX=-3
      mushgrp.add(mushroom)
    }
    }