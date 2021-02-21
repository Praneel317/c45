var PLAY;
var END;

var submarine, submarineImg;
var missile, missilesGroup, missileImg;
var backgroundImg;

function preload(){
  submarineImg = loadImage("submarine.png");
  missileImg = loadImage("missile.jpg");

  backgroundImg = loadImage("underwater background.jpg");
}



function setup() {
  createCanvas(800,400);
  submarine = createSprite(100, 200, 50, 50);
  submarine.addImage("submarine",submarineImg);
  submarine.scale = 0.2;


}

function draw() {
  background(backgroundImg);
  if(keyDown(UP_ARROW)){
    submarine.y = submarine.y - 5;
  }
  if(keyDown(DOWN_ARROW)){
    submarine.y = submarine.y + 5;
  }
  if(keyDown(LEFT_ARROW)){
    submarine.x = submarine.x - 5;
  }
  if(keyDown(RIGHT_ARROW)){
    submarine.x = submarine.x + 5;
  }
  
  drawSprites();
}