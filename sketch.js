//PLayer characters
//that is the basketball and its image
var basketball, basketball_img;

//baskets
var basket1, basket1_img, basket2, basket2_img;

function preload(){
basketball_img = loadImage("Basketball.png");
basket1_img = loadImage("basket1.jpg");
basket2_img = loadImage("basket2.jpg");
}

function setup() {
  createCanvas(400,650);
 

//basketball
  basketball = createSprite(185,610);
  basketball.addImage(basketball_img);
  basketball.scale = 0.09

 
}

function draw() {
  background("#0051C7");

  
  
  baskets(); 
   
  drawSprites();
}

function baskets(){
  basket1 = createSprite(44,500);
  basket1.addImage(basket1_img);
  basket1.scale = 0.2

  basket2 = createSprite(356,399);
  basket2.addImage(basket2_img);
  basket2.scale = 0.2



}
