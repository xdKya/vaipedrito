const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola;
var piso, teto, paredeE, paredeD;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.7,
    frictionAir: 0.05,
  };

  bola = Bodies.circle(200, 100, 20, bola_options);
  World.add(world, bola);

  piso = new Parede(200, 390, 400, 20);
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(3);
  stroke("purple");
  noFill();

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);

  piso.show();
}
