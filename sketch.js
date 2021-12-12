
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball_2;
var stand;
var ground_2
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var ball_2_options={
    restitution:1.0
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  ground_2 = Bodies.rectangle(250,200,50,10,ground_options);
  World.add(world,ground_2);
  
   
  stand = Bodies.rectangle(350,250,100,5,ground_options);
  World.add(world,stand);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball_2 = Bodies.circle(300,10,20,ball_2_options);
  World.add(world,ball_2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

var angle=20 
function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  Matter.Body.rotate(ground_2,angle)
  push ()
  translate (ground_2.position.x,ground_2.position.y)
  rotate(angle)
  rect(0,0,50,10);
  pop ()
angle+=0.1
 
  ellipse(ball_2.position.x,ball_2.position.y,20);
  rect(stand.position.x,stand.position.y,200,5)
}

