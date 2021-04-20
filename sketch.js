
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var paperball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paperball(225, 100, 100)
	side1 = new Dustbin(910, 465, 20, 150)
	side2 = new Dustbin(1090, 465, 20, 150)
	side3 = new Dustbin(1000, 550, 200, 20)
    ground = new Ground(600, 570, 1200, 20)

	rope = new Launcher(paperball.body, {x:225, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  keyPressed()
  drawSprites()
  
  side1.display()
  side2.display()
  side3.display()
  ground.display()
  paperball.display()
  rope.display()

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:85, y: -85})
	}
}

function mouseDragged() {
	Matter.Body.setPosition(paperball.body, {x: mouseX, y:mouseY})
}

function mouseReleased(){
	rope.fly()
}
