var dog, happyDog, database, foodS, foodStock, readStock
function preload()
{
  dogImg1 = loadImage("images/dogImg.png") 
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  normalDog = createSprite(width/2, height/2, 10, 10);
  happyDog = createSprite(width/2, 100, 10, 10);

  normalDog.addImage(dogImg1);
  //happyDog.addImage(dogImg2); 

  normalDog.scale = 0.2;
  //happyDog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  rectMode(CENTER);
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    foodStock(-1);
  }
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    happyDog.addImage(dogImg2);
    happyDog.scale = 0.2;
  }

  normalDog.display();
  happyDog.display();

  drawSprites();
  
  

}



