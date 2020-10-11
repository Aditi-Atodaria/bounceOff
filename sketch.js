var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  object1 = createSprite(400,300,50,50);
  object1.shapeColor = "yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityY = 3;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,object1);
  
  drawSprites();
}



