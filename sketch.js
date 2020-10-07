
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, groundBody, ground, player, playerBody, playerimg, tree, treeimg, hello, stone, stonebody, sling1, sling2, mango1;
function preload()
{
	playerimg = loadImage("player.png");
	treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true
	}
 
	tree = createSprite(1200, 350, 60,500);
	tree.addImage(treeimg, 1200, 350, 60, 500);
	tree.scale = 2.5;
	
	groundBody = Bodies.rectangle(750, 650, 1500, 100, options);
	World.add(world, groundBody);
	ground = createSprite(750, 650, 1500, 100);
	ground.shapeColor = "lightgreen";

	player = createSprite(200, 400, 150, 300);
	imageMode(RADIUS);
	player.addImage(playerimg, 200, 450, 150, 300);

	stonebody  = Bodies.circle(400, 150, 20);
	World.add(world, stonebody);
	stone = createSprite(400, 150, 20, 20);

	Engine.run(engine);
   
	sling1 = new SlingShot(stonebody, {x:250, y:295});
	sling2 = new SlingShot(stonebody, {x:255, y:460});

	mango1 = new Mango(800, 100, 30);
}


function draw() {
  background("lightblue");

  Engine.update(engine);
  drawSprites();
  ground.x = groundBody.position.x;
  ground.y = groundBody.position.y;

  stone.x = stonebody.position.x;
  stone.y = stonebody.position.y;

  sling1.display();
  sling2.display();
  mango1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
	sling1.fly();
	sling2.fly();
}
function keyPressed(){
    if(keyCode === 32){            
		sling1.attach(stonebody.body);
		sling2.attach(stonebody.body);
    }
}

