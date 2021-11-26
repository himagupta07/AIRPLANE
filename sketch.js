var backgroundImg;
var airplane, planeImg;
var ob1, ob1Img;
var ob2, ob2Img;
var ob3, ob3Img;
var ob4, ob4Img;
var obGroup;
var PLAY= 1;
var END = 0;
var gameState= PLAY;

function preload() {
  backgroundImg=loadImage("sky.jpg");
  planeImg= loadImage("airplane 1.jpg");
  ob1Img= loadImage("building 1.png");
  ob2Img= loadImage("cloud1.png");
  ob3Img= loadImage("bird2.jpg");
  ob4Img= loadImage("rocket1.png");
}

function setup() {
  createCanvas(1200, 600);
  bg= createSprite(1200,600, 1,1);
  //getBackgroundImg()
  bg.addImage(backgroundImg);
  bg.scale= 2.5;
  bg.x= 800;
  bg.y= 200;
  airplane= createSprite(200,500,150,20);
  airplane.addImage(planeImg);
  airplane.scale= 0.5;
  //sky= createSprite(1200, 300, 1200, 600);
  //sky.addImage(backgroundImg);
  
  bg.velocityX= -6;
  obGroup= new Group()
}

function draw() {
  background(rgb(51,204,255));

  if(gameState== PLAY){
    if(keyDown("up_arrow")){
      airplane.velocityY= -3;
    }
  
    if(keyDown("down_arrow")){
      airplane.velocityY= 3;
    }
  
   if(bg.x<0){
     bg.x= bg.width/6;
   }

   if(obGroup.isTouching(airplane)){
    gameState= END;
  }
   spawnObstacles();

  }
 else if(gameState== END){
   bg.VelocityX= 0
 }
  


  
  drawSprites();
}

function spawnObstacles(){
  if( frameCount % 100 ==0){
    ob1= createSprite(1000,200, 80, 50);
    ob1.velocityX= -2;
    ob1.y= Math.round(random(100,200));
    var X= Math.round(random(1,3));
    switch(X){
      
      case 1: ob1.addImage(ob2Img);
      break;
      case 2: ob1.addImage(ob3Img);
      break;
      case 3: ob1.addImage(ob4Img);
      break;
default: break;
    }
    ob1.scale= 0.3;
    ob1.lifetime= 600;
    obGroup.add(ob1);
  }
}