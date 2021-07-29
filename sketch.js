var scene;
var pathImg;
var path;
var right_boundry;
var left_boundry;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200,20,20);
  path.addImage(pathImg);
  path.velocityY=5
  
  runner = createSprite(200,200,20,20);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.05
  
  //create sprites here
  //scene = createSprite(400,400,20,20);
  right_boundry=createSprite(400,0,10,800);
  right_boundry.shapeColor="red"
  
  left_boundry=createSprite(100,0,10,800);
  left_boundry.shapeColor="red"
  //right_boundry.visible=false
  //left_boundry.visible=false

}

function draw() {
  background(0);
  runner.x = World.mouseX;
  createEdgeSprites();
  runner.collide(left_boundry);
  runner.collide(right_boundry);
    if (path.y>500){
   path.y=height/2
  }

  drawSprites();
}
