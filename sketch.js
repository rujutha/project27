
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bobDiameter=20 ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new Roof(400,50,400,40);
	bob3=new Bob(400,300,20,20);
	bob1=new Bob(320,300,20,20);
	bob2=new Bob(360,300,20,20);
	bob4=new Bob(440,300,20,20);
	bob5=new Bob(480,300,20,20);
	rope1=new Rope(bob1.body,roof.body,bobDiameter*-4,0);
	rope2=new Rope(bob2.body,roof.body,bobDiameter*-2,0);
	rope3=new Rope(bob3.body,roof.body,bobDiameter*0,0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*2,0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*4,0);
	//rope1=new Rope(bob1.body,roof.body,bob1.body.Diameter*2,0);
	////rope2=new Rope(bob2.body,roof.body,bob2.body.Diameter*2,0);
	//rope3=new Rope(bob3.body,roof.body,bob3.body.Diameter*2,0);
	
	Engine.run(engine);
  
}



function draw() {
	
  rectMode(CENTER);
  background(155);
  
  drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
drawSprites();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
    Body.applyForce(bob1.body,bob1.body.position,{x:-230,y:2000});

	}
}



