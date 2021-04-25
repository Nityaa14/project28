const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//launcherObject and LauncherForce
var launcherObject;
var launcherForce =100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//create stone
    stoneObj = new Stone(100, 100);
    launcherObj = new Launcher(stoneObj.body, {x:200, y: 100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  stoneObj.display();
  launcherObj.display();
  
  drawSprites();
 
}
function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  stoneObj.Fly();
}

function keyPressed() {
    if (keyCode === 32){
      Matter.Body.setPosition(stoneObj.body, {x: 100, y: 100});
      launcherObj.attach(stoneObj.body);
    }
}



