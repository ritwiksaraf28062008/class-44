 var card1 , card2 , card3 , card4 , card5 , card6; 
 var img1 , img2 , img3;
 var gameState = "play"; 
 var count = 0;
function preload(){

img1 = loadImage("./Images/Dog.jpg");
img2 = loadImage("./Images/Tiger.jpg");
img3 = loadImage("./Images/Cheetah.jpeg");

}

function setup() {
  createCanvas(800,800);

  card1 = createSprite(100,100,40,60);
  card2 = createSprite(200,100,40,60);
  card3 = createSprite(300,100,40,60);
  card4 = createSprite(100,200,40,60);
  card5 = createSprite(200,200,40,60);
  card6 = createSprite(300,200,40,60);
  
}

function draw() {

  background(0,0,0);
  
if(gameState === "play"){
  if(mousePressedOver(card1)){
    card1.addImage("dog",img1);
    card1.scale = 0.25;
    count = count+1;
  }
  if(mousePressedOver(card2)){
    card2.addImage("dog",img1);
    card2.scale = 0.25;
    count = count+1;
    
  }

  if(mousePressedOver(card3)){
    card3.addImage("tiger",img2);
    card3.scale = 0.25;
    count = count+1;
  }
  if(mousePressedOver(card4)){
    card4.addImage("tiger",img2);
    card4.scale = 0.25;
    count = count+1;
  }
  
  if(mousePressedOver(card5)){
    card5.addImage("Cheetah",img3);
    card5.scale = 0.25;
    count = count+1;
  }
  if(mousePressedOver(card6)){
    card6.addImage("Cheetah",img3);
    card6.scale = 0.25;
    count = count+1;
  }}
  if(count === 2){
    gameState = "stop"
    
  }
 // if(gameState === "stop"){
   // count = 0;
 // }
  console.log(gameState);
  console.log(count);
  
  drawSprites();

}
