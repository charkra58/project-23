var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1
var log2
var log3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   console.log(ground);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  log1 = new Log1(400,400,20,100)
	log1.shapeColor("red");

	log2 = new Log2(500,550,20,100)
	log2.shapeColor("red");

	log3 =new log3(650,580,20,100);
	log3.shapeColor("red");

	log1.display();
	log2.display();
	log3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW){
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x = packageBody.Position.x
	packageSprite.y = packageBody.Position.y

	Matter.Body.setStatic( body.isStatic);
	(body.package,false) 
		  setScale = 0.5


  }
}



