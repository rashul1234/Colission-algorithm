var fixedrect , movingrect, whitehat;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "red";

  movingrect = createSprite(600,400, 30, 80);
  movingrect.shapeColor = "red";

  whitehat = createSprite(300,200,90,60);
  whitehat.shapeColor = "red";




}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (isTouching(movingrect, whitehat)){
    whitehat.shapeColor = "green";
    movingrect.shapeColor = "green";

  }
  else{
    whitehat.shapeColor = "pink";
    movingrect.shapeColor = "pink";

  }
  drawSprites();
}
