const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;

var ball;

var rope;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box23, box24, box25, box26, box27, box28;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 500, 900, 20);

	ball = new Ball(600, 100, 30, 30);

	box1 = new Box(900, 200, 50, 50);
	box2 = new Box(900, 200, 50, 50);
	box3 = new Box(900, 200, 50, 50);
	box4 = new Box(900, 200, 50, 50);
	box5 = new Box(900, 200, 50, 50);
	box6 = new Box(900, 200, 50, 50);
	box7 = new Box(900, 200, 50, 50);
	box8 = new Box(900, 200, 50, 50);

	box11 = new Box(300, 200, 50, 50);
	box12 = new Box(300, 200, 50, 50);
	box13 = new Box(300, 200, 50, 50);
	box14 = new Box(300, 200, 50, 50);
	box15 = new Box(300, 200, 50, 50);
	box16 = new Box(300, 200, 50, 50);
	box17 = new Box(300, 200, 50, 50);
	box18 = new Box(300, 200, 50, 50);

	box19 = new Box(400, 200, 50, 50);
	box20 = new Box(400, 200, 50, 50);
	box21 = new Box(400, 200, 50, 50);
	box22 = new Box(400, 200, 50, 50);
	box23 = new Box(400, 200, 50, 50);

	box24 = new Box(800, 200, 50, 50);
	box25 = new Box(800, 200, 50, 50);
	box26 = new Box(800, 200, 50, 50);
	box27 = new Box(800, 200, 50, 50);
	box28 = new Box(800, 200, 50, 50);

	box29 = new Box(200, 200, 50, 50);
	box30 = new Box(200, 200, 50, 50);
	box31 = new Box(200, 200, 50, 50);
	box32 = new Box(200, 200, 50, 50);
	box33 = new Box(200, 200, 50, 50);
	box34 = new Box(200, 200, 50, 50);
	box35 = new Box(200, 200, 50, 50);
	box36 = new Box(200, 200, 50, 50);
	box37 = new Box(200, 200, 50, 50);
	box38 = new Box(200, 200, 50, 50);

	box39 = new Box(1000, 200, 50, 50);
	box40 = new Box(1000, 200, 50, 50);
	box41 = new Box(1000, 200, 50, 50);
	box42 = new Box(1000, 200, 50, 50);
	box43 = new Box(1000, 200, 50, 50);
	box44 = new Box(1000, 200, 50, 50);
	box45 = new Box(1000, 200, 50, 50);
	box46 = new Box(1000, 200, 50, 50);
	box47 = new Box(1000, 200, 50, 50);
	box48 = new Box(1000, 200, 50, 50);

	rope = new Rope(ball.body, {
		x: 600,
		y: 100
	})


}


function draw() {
	background(0);

	Engine.update(engine);

	ground.display();

	ball.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();

	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();

	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();

	box24.display();
	box25.display();
	box26.display();
	box27.display();
	box28.display();

	box29.display();
	box30.display();
	box31.display();
	box32.display();
	box33.display();
	box34.display();
	box35.display();
	box36.display();
	box37.display();
	box38.display();

	box39.display();
	box40.display();
	box41.display();
	box42.display();
	box43.display();
	box44.display();
	box45.display();
	box46.display();
	box47.display();
	box48.display();

	rope.display();

}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, {
		x: mouseX,
		y: mouseY
});
}