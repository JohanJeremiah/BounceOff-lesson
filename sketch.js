var movingrect;
var fixedrect;

function setup()
{
  createCanvas(1000,400);
   //trial objects
   movingrect=createSprite(400, 100, 50, 50);
   movingrect.shapeColor="green";
   movingrect.velocityY= 5
   fixedrect=createSprite(400, 300, 50, 50);
   fixedrect.shapeColor="green";
   fixedrect.velocityY = -5
   
   //gameobject 1
   movingrect1=createSprite(300, 200, 50, 50);
   movingrect1.shapeColor="green";
   fixedrect1=createSprite (550, 200, 50, 50);
   fixedrect1.shapeColor="darkblue";

   movingrect2=createSprite(200, 200, 50, 50);
   movingrect2.shapeColor="green";
   fixedrect2=createSprite(700, 200, 50, 50);
   fixedrect2.shapeColor="green";

   
   movingrect3=createSprite(100, 200, 50, 50);
   movingrect3.shapeColor="green";
   fixedrect3=createSprite(800, 200, 50, 50);
   fixedrect3.shapeColor="green";
}

function draw()
{
  background("white");  

 bounceOff(movingrect,fixedrect)
  
 movingrect1.x=World.mouseX;
 movingrect1.y=World.mouseY;

if(isTouching(movingrect,fixedrect1))
{
  movingrect.shapeColor="blue";
  fixedrect1.shapeColor="blue";
}
else
{
  movingrect.shapeColor="green";
  fixedrect1.shapeColor="green";
}

drawSprites();
}

/*function isTouching(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y< object1.width/2 + object2.width/2 &&
    object2.y - object1.y < object1.width/2 + object2.width/2)
 {
  return true;
 }
 else
 {
  return false;
 }
}*/

function bounceOff(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 )
    {
     object1.velocityX = object1.velocityX * (-1);
     object2.velocityX = object2.velocityX * (-1);
    }
  if(object1.y - object2.y< object1.width/2 + object2.width/2 &&
    object2.y - object1.y < object1.width/2 + object2.width/2)
    {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
}
  



