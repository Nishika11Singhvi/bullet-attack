var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() 
{
  createCanvas(1600,400);
  
  speed = random(100,200);
  weight = random(10,52);
  thickness = random(20,50);
  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() 
{
  background("skyblue");  

  if(collide(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>100)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<100)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function collide(b,w)
{
  bulletRightEdge = b.x + b.width;
  wallLeftEdge = w.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}



