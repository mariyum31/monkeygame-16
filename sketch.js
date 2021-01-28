
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,200);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.10;

ground = createSprite(200,180,400,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

bananaGroup = new Group();
obstaclesGroup = new Group();
} 


function draw() {
  background(225);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  if (keyDown("space")   && monkey.y >= 300){
    monkey.velocityY = -4;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnObstacles();
  spawnBanana();
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("survivaltime :" + survivaltime,425,50);

}

function spawnObstacles(){
  if (frameCount % 300 ===0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    
    var rand = Math.round(random(1));
    switch(rand) {
      case 1 : obstacle.addImage(obstacleImage);
        break;
    }
  obstacle.scale = 0.08;
    obstacle.lifetime = 200;
 
  
  obstaclesGroup.add(obstacle);
}
}
function spawnBanana(){
  if (frameCount % 80 === 0){
    var banana =  createSprite(600,130,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth +1;
    
    bananaGroup.add(banana);
  }
}



