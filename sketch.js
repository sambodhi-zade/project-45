// Creating variables
var canvas;

var boyImg, girlImg;

var player;

var bg1,bg2,bg3,bg4;

var bitterImg,coronaImg,dress1,dress2,fridgeImg,appleImg,bananaImg;

var basilImg, grapesImg, jeans1, jeans2 , lionImg, neemImg, orangeImg, rockImg;

var shirt1 , shirt2, shoes1, sofa, tv, watermelon;

var maskImg , moneyBagImg , restartImg, sanitizerImg ,heart;

var obstaclesGroup, money, moneyBag,restart;

var PLAY = 0;

var END = 0;

var gameState = PLAY;



function preload(){

  // Loading all the images
  bg1 = loadImage("house.jpg");

  boyImg = loadAnimation("boy1.png", "boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png", "boy7.png");
  
  girlImg = loadAnimation("girl1.png","girl2.png", "girl3.png", "girl4.png", "girl5.png", "girl6.png", "girl7.png")
  

  //adding obstacles images which are found in house and market
  coronaImg = loadImage("corona.png");
  bitterImg = loadImage("bitter.png");
  dress1 = loadImage("dress1.png");
  dress2 = loadImage("dress2.png");
  jeans1 = loadImage("jeans1.png");
  jeans2 = loadImage("jeans2.png");
  shirt1 = loadImage("shirt1.png");
  shirt2 = loadImage("shirt2.png");
  shoes1 = loadImage("shoes1.png");
  sofa = loadImage("sofa.png");
  tv = loadImage("tv.png");
  fridgeImg = loadImage("fridge.png");

  //images in jungle and market 
  appleImg = loadImage("apple.png");
  bananaImg = loadImage("banana.png");
  basilImg = loadImage("basil.png");
  grapesImg = loadImage("grapes.png");
  watermelon = loadImage("watermelon.png");
  neemImg = loadImage("neem.png");
  orangeImg = loadImage("orange.png");
  lionImg = loadImage("lion.png");
  rockImg = loadImage("rock.png");

  //loading important images for game
  moneyBagImg = loadImage("moneyBag.png");
  maskImg = loadImage("mask.png");
  restartImg = loadImage("restart.png");
  sanitizerImg = loadImage("sanitizer1.png");
  heart = loadImage("heart.png");


}
function setup() {
 canvas = createCanvas(800,600);

 obstaclesGroup = new Group();

 money = 0;

//creating background
 bg = createSprite(300,300);
 bg.addImage(bg1);

 //creating player sprite
 player = createSprite(50,400);
 player.addAnimation("player", girlImg);
 player.scale=0.6;

}

function draw() {
   background(0);
  drawSprites();
}


function spawnObstacles(){
  if(frameCount % 160 === 0){
    var obstacle = createSprite(850,400);
    obstacle.velocityX = 12;

    //generate random obstacles
    var rand = Math.round(random(1,20));
    switch(rand) {
      case 1: obstacle.addImage(tv);
              break;
      case 2: obstacle.addImage(shoes1);
              break;
      case 3: obstacle.addImage(dress1);
              break;
      case 4: obstacle.addImage(shirt1);
              break;
      case 5: obstacle.addImage(jeans2);
              break;   
      case 6: obstacle.addImage(fridgeImg);
              break;  
      case 7: obstacle.addImage(shirt2);
              break; 
      case 8: obstacle.addImage(jeans1);
              break; 
      case 9: obstacle.addImage(coronaImg);
              break; 
      case 10: obstacle.addImage(dress2);
              break;
      case 11: obstacle.addImage(bitterImg);
              break;
      case 12: obstacle.addImage(sofa);
              break;
      case 13: obstacle.addImage(appleImg);
              break;
      case 14: obstacle.addImage(basilImg);
              break;
      case 15: obstacle.addImage(bananaImg);
              break;
      case 16: obstacle.addImage(grapesImg);
              break;
      case 17: obstacle.addImage(watermelon);
              break;
      case 18: obstacle.addImage(neemImg);
              break;
      case 19: obstacle.addImage(orangeImg);
              break;
      case 20: obstacle.addImage(rockImg);
              break;
      default: break;
          
    }
    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.5;
    obstacle.lifetime = 850;

    //add each obstacle to the group
    
}
}

function reset(){
  gameState = PLAY;
  restart.visible = false;

 
}