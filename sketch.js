var car,wall;
var speed,weight;


function setup() {
  createCanvas(1350,400);

 car= createSprite(50, 200, 50, 50);
 car.shapeColor="orange"

wall= createSprite(1000, 200, 60, height/2);
wall.shapeColor="blue"

  speed=random(55,90)

  weight=random(400,1500)

  car.velocityX=speed;
}

function draw() {
  background("black"); 
fill("white");
  text(mouseX+","+mouseY,10,15)
  if(wall.x-car.x<(car.width+wall.width)/2) 
  {
    car.velocityX=0
  }
  var defromation=0.5*weight*speed*speed/22500

  if(defromation>180)
  {
    car.shapeColor="red"
    fill("white")
    text("not safe",139,107)
    text("need a lot of improvements",125,90)
    
  
  }

  if(defromation<180 && defromation>100)
  {
    car.shapeColor="yellow"
    fill("white")
    text("not safe",139,107)
    text("need a lit  bit of improvements",125,90)
  
  }

  if(defromation<100)
  {
    car.shapeColor="green"
    fill("white")
    text("safe",139,107)
    text("perfect",125,90)
    }
  drawSprites();
}