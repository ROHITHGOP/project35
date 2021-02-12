//Create variables here
var  dog, happyDog, database, foodS, foodStock;
function preload(){
  //load images here
  happyDog=loadImage("dogImg1.png")
  dogImg=loadImage("dogImg.png")
}

function setup() {
  database = firebase.database();
  console.log(database);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
	createCanvas(800, 700);
  dog=createSprite(400,350);
  dog.addAnimation("dog", dogImg)
  dog.scale=0.2
}
function draw() {  
  background(46, 139, 87) 
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  textSize(20);
  fill("white")
  text("Note: Press UP_ARROW key To Feed Drago Milk",160,40)
  text("Food Remaining: "+foodS,297,250)
}
function writeStock(x){
  if (x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x ,
  })
}

function readStock(data){
  foodS = data.val();
}


