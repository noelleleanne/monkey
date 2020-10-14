
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  //loads animation for monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //loads image for banana
  bananaImage = loadImage("banana.png");
  //loads image for obstacle
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);
  
  //creates the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  //creates the ground
  ground = createSprite(100,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
}
function draw() {
  background("white");
  
  //creates survival time
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,115,50);
  
  //resets the ground
   if (ground.x < 0){
      ground.x = ground.width/2;
  }
  //makes the monkey jump
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -13;
  }
  //adds gravity
  monkey.velocityY = monkey.velocityY + 0.8
  //monkey collides with the ground
  monkey.collide(ground);
  
  
  createStone();
  createBanana();
  
  drawSprites();
}
function createBanana(){
  //creates bananas
  if(frameCount % 80 === 0){
    banana = createSprite(400,150,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -7;
    banana.lifetime = 70;
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
  }
}
function createStone(){
  //creates stones
  if(frameCount % 300 === 0){
    stone = createSprite(400,326,20,20);
    stone.addImage(obstacleImage);
    stone.velocityX = -7;
    stone.lifetime = 70;
    stone.scale = 0.1;
  }
}





