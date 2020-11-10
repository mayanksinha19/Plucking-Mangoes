
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var gnd,boy,stone,bark,leaves,boy_image,mango1,mango2,mango3,mango4,mango5,tree_image,mango_image,rope;

function preload()
{
	boy_image=loadImage("boy.png");
	tree_image=loadImage("tree.png");
	mango_image=loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gnd=new ground(400,650,800,10);
	//boy=new Boy(150,550,80,180);
	//boy.addImage(boy_image);
	stone=new Stone(140,580,10);
	bark=new Tree(620,520,100,250);
	leaves=new Tree(620,310,230,230);
	rope=new Rope(stone.body,{x:155,y:562});
	//mango1=new Mangoes(620,310,8);
	//mango2=new Mangoes();
	//mango3=new Mangoes();
	//mango4=new Mangoes();
	//mango5=new Mangoes();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  //mango1.display(); 
  image( boy_image,145,510,80,180);
  image(tree_image,300,160,500,500);
  image(mango_image,380,300,40,40);
  image(mango_image,520,300,40,40);
  image(mango_image,680,300,40,40);
  image(mango_image,520,200,40,40);
  image(mango_image,490,350,40,40);
  image(mango_image,590,265,40,40);
  //mango2.display();
  //mango3.display();
  //mango4.display();
  //mango5.display();
  gnd.display();
  //boy.display();
  stone.display();
  rope.display();
  //fill("brown");
  //bark.display();
  //fill("green");
 //leaves.display();
  
  drawSprites();
 
}

function detectcollision(){

}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}
function keyPressed(){
    if(keyCode===32){
        rope.attach(stone.body);
    }
}